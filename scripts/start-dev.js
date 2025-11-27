const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Kill any existing Next.js dev servers
try {
  if (process.platform === 'win32') {
    execSync('taskkill /F /IM node.exe /FI "WINDOWTITLE eq next*" 2>nul', { stdio: 'ignore' });
  } else {
    execSync('pkill -f "next dev"', { stdio: 'ignore' });
  }
} catch (error) {
  // Ignore errors if no process found
}

// Remove lock file if it exists
const lockPath = path.join(__dirname, '..', '.next', 'dev', 'lock');
try {
  if (fs.existsSync(lockPath)) {
    fs.unlinkSync(lockPath);
  }
} catch (error) {
  // Ignore errors
}

// Start Next.js dev server
console.log('Starting Next.js dev server...');
const devServer = spawn('next', ['dev'], {
  stdio: 'inherit',
  shell: true
});

devServer.on('error', (error) => {
  console.error('Failed to start dev server:', error);
  process.exit(1);
});

devServer.on('exit', (code) => {
  process.exit(code);
});
