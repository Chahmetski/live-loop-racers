@echo off
chcp 65001 >nul
cd /d "%~dp0"
node scripts\build.cjs
if errorlevel 1 (pause & exit /b 1)
echo Сборка находится в release\Live Loop Racers
pause
