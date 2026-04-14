@echo off
REM Buddy Skill Initialization Script
REM This script is called when the buddy skill is loaded
REM It generates and displays a random buddy

echo.
echo 🎨 Loading Buddy Skill...
echo.

REM Run the initialization script
node "%~dp0init.js"

echo.
echo ✅ Buddy skill initialized!
echo Your buddy is now visible and will stay with you throughout the session.
echo.
