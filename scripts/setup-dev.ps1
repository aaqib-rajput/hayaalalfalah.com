Write-Host "Setting up MosqueConnect Development Environment..." -ForegroundColor Cyan

# Check for Node.js
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Error "Node.js is not installed. Please install Node.js >= 18."
    exit 1
}

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

# Build shared packages
Write-Host "Building shared packages..." -ForegroundColor Yellow
npm run build:packages

Write-Host "Setup complete! You can now run 'docker-compose up --build' or 'npm run dev' for specific services." -ForegroundColor Green
