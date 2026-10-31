param([switch]$NoBrowser)
$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$dataPath = Join-Path $env:APPDATA 'live-loop-racers\data'
New-Item -ItemType Directory -Path $dataPath -Force | Out-Null
$url = 'http://127.0.0.1:3210'
$health = $null
try { $health = Invoke-RestMethod "$url/api/health" -TimeoutSec 2 } catch {}
if ($health -and $health.app -ne 'live-loop-racers-browser-v1') { throw 'Port 3210 is occupied by another server.' }
if (-not $health) {
    $runtime = Get-Command node.exe -ErrorAction SilentlyContinue
    $runtimePath = if ($runtime) { $runtime.Source } else { $null }
    if (-not $runtimePath) {
        $runtimePath = Join-Path $projectRoot 'node_modules\electron\dist\electron.exe'
        if (-not (Test-Path -LiteralPath $runtimePath)) {
            $runtimePath = Join-Path $projectRoot 'release\Live Loop Racers\Live Loop Racers.exe'
        }
        if (-not (Test-Path -LiteralPath $runtimePath)) {
            $runtimePath = Join-Path $projectRoot '..\..\Live Loop Racers.exe'
        }
        if (-not (Test-Path -LiteralPath $runtimePath)) { throw 'Node/Electron runtime is missing. Run setup.bat.' }
        $env:ELECTRON_RUN_AS_NODE = '1'
    }
    $env:LIVE_RACERS_DATA = $dataPath
    $env:PORT = '3210'
    $serverPath = Join-Path $projectRoot 'server\index.js'
    $process = Start-Process -FilePath $runtimePath -ArgumentList @('"' + $serverPath + '"') -WorkingDirectory $projectRoot -WindowStyle Hidden -RedirectStandardOutput (Join-Path $dataPath 'browser-server.log') -RedirectStandardError (Join-Path $dataPath 'browser-server-error.log') -PassThru
    for ($attempt = 0; $attempt -lt 40; $attempt++) {
        try { $health = Invoke-RestMethod "$url/api/health" -TimeoutSec 1; break } catch {}
        if ($process.HasExited) { throw "Server failed. See $dataPath\browser-server-error.log" }
        Start-Sleep -Milliseconds 250
    }
    if (-not $health) { throw 'The local server did not start.' }
}
if (-not $NoBrowser) {
    $browserPaths = @(
        (Join-Path $env:LOCALAPPDATA 'Yandex\YandexBrowser\Application\browser.exe'),
        (Join-Path ${env:ProgramFiles(x86)} 'Yandex\YandexBrowser\Application\browser.exe'),
        (Join-Path $env:ProgramFiles 'Yandex\YandexBrowser\Application\browser.exe')
    )
    foreach ($key in @('HKCU:\Software\Microsoft\Windows\CurrentVersion\App Paths\browser.exe', 'HKLM:\Software\Microsoft\Windows\CurrentVersion\App Paths\browser.exe')) {
        if (Test-Path $key) { $browserPaths += (Get-Item $key).GetValue('') }
    }
    $browserPath = $browserPaths | Where-Object { $_ -and (Test-Path -LiteralPath $_) -and $_ -match 'Yandex' } | Select-Object -First 1
    if ($browserPath) { Start-Process -FilePath $browserPath -ArgumentList @($url) -WindowStyle Hidden }
    else { Write-Host 'Yandex Browser was not found. Opening the default browser.'; Start-Process $url }
}
Write-Host "Game: $url"
Write-Host 'Click Admin on the game page to connect TikTok and control the race.'
