@echo off
chcp 65001 >nul
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
 echo Установите Node.js LTS для Windows x64: https://nodejs.org/
 pause
 exit /b 1
)
where npm >nul 2>nul
if errorlevel 1 (
 if exist ".tools\package\bin\npm-cli.js" (
  node .tools\package\bin\npm-cli.js ci
 ) else (
  echo npm не найден. Переустановите Node.js LTS с npm.
  pause
  exit /b 1
 )
) else (
 call npm ci
)
if errorlevel 1 (pause & exit /b 1)
node node_modules\electron\install.js
if errorlevel 1 (pause & exit /b 1)
node scripts\assets.js
echo Готово. Запустите run.bat.
pause
