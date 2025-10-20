
# PowerShell script to install and start the Expo 54 project
$ErrorActionPreference = "Stop"
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Error "npm is not installed or not in PATH. Install Node.js (which includes npm) first."
    exit 1
}
npm install
npx expo start
