@echo off
setlocal
cd /d "%~dp0"
if exist "%~dp0release\Live Loop Racers\Live Loop Racers.exe" goto portable
if exist "%~dp0node_modules\electron\dist\electron.exe" goto source
echo Game files were not found. Run setup.bat first.
pause
exit /b 1

:portable
start "" /D "%~dp0release\Live Loop Racers" "%~dp0release\Live Loop Racers\Live Loop Racers.exe"
if errorlevel 1 goto failed
exit /b 0

:source
start "" /D "%~dp0." "%~dp0node_modules\electron\dist\electron.exe" "%~dp0."
if errorlevel 1 goto failed
exit /b 0

:failed
echo Could not launch the game. Check the files in the release folder.
pause
exit /b 1
