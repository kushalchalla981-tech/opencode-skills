@echo off
REM Buddy Skill - Live ASCII Art Companion
REM Usage: buddy.bat [action]

setlocal enabledelayedexpansion

set BUDDY_DIR=%~dp0
set NODE_CMD=node

set ACTION=%1
if "%ACTION%"=="" set ACTION=show

set USER_ID=%USERNAME%

%NODE_CMD% "%BUDDY_DIR%buddy-generator.js" %ACTION%

if errorlevel 1 (
    echo Unknown action: %ACTION%
    echo Available actions: show, generate, animate, stats
    exit /b 1
)
