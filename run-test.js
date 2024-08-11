const { spawn } = require('child_process');

const args = process.argv.slice(2);
const testFile = args[0] && args[0] !== 'chrome' && args[0] !== 'firefox' && args[0] !== 'safari' ? `tests/${args[0]}` : '';
const browser = args[1] || args[0]; // Handle both "test file browser" and "browser" inputs

const browserMap = {
  chrome: 'chromium',
  firefox: 'firefox',
  safari: 'webkit'
};

const project = browserMap[browser.toLowerCase()] || '';

const commandArgs = ['playwright', 'test'];
if (testFile) {
  commandArgs.push(testFile);
}
if (project) {
  commandArgs.push(`--project=${project}`);
}

const child = spawn('npx', commandArgs, { stdio: 'inherit' });

child.on('close', (code) => {
  if (code !== 0) {
    console.error(`Test process exited with code ${code}`);
    process.exit(code);
  }
});