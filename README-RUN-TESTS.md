## Executing Tests

### Run All Tests
To run all tests across all browsers:
```bash
npm run test:all
```
or
```bash
npx playwright test
```

### Run All Tests in Chromium
To run all tests in the Chromium browser:
```bash
npm run test chrome
```

### Run All Tests in Firefox
To run all tests in the Firefox browser:
```bash
npm run test firefox
```

### Run All Tests in Safari (WebKit)
To run all tests in the WebKit browser (Safari):
```bash
npm run test safari
```

### Run Specific Test in a Specific Browser
To run a specific test file (e.g., `example.spec.ts`) in a specific browser (e.g., `chrome`):
```bash
npm run test example.spec.ts chrome
```

### View Test Report
To view the test report after running tests:
```bash
npm run report
```
or
```bash
npx playwright show-report
```
Note: Shortcut commands for running the tests
requires the updated package.json script and run-test.js file in main project folder. 
Instructions included show the npm shortcut and the npx command, so you can use whichever you prefer.