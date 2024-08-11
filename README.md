
## Getting Started

#### Clone the repository to your local machine:
```
git clone https://github.com/externships/ex7
```

#### Cd into the project directory:
```
cd ex7
```

#### Download project dependencies:
```
npm install
```

#### If this is your first time using Playwright, you will need to install the browsers:
```
npx playwright install
```

## Updating Your Local Repository

When there are updates to the `main` branch, follow these steps to ensure your local environment is up to date:

1. Fetch the latest changes from the remote repository:
```
git fetch origin
```

2. Checkout the `main` branch:
```
git checkout main
```

3. Pull the latest changes:
```
git pull origin main
```

4. Install any new dependencies:
```
npm install
```

## Running Tests

### Run All Tests
To run all tests across all browsers:
```
npm run test:all
```
or
```
npx playwright test
```

### Run All Tests in Chromium
To run all tests in the Chromium browser:
```
npm run test chrome
```

### Run All Tests in Firefox
To run all tests in the Firefox browser:
```
npm run test firefox
```

### Run All Tests in Safari (WebKit)
To run all tests in the WebKit browser (Safari):
```
npm run test safari
```

### Run Specific Test in a Specific Browser
To run a specific test file (e.g., `example.spec.ts`) in a specific browser (e.g., `chrome`):
```
npm run test example.spec.ts chrome
```

### View Test Report
To view the test report after running tests:
```
npm run report
```
or
```
npx playwright show-report
```

## Resources

[TypeScript](https://www.typescriptlang.org/)

[![npm version](https://img.shields.io/npm/v/playwright.svg)](https://www.npmjs.com/package/playwright) <!-- GEN:chromium-version-badge -->[![Chromium version](https://img.shields.io/badge/chromium-127.0.6533.57-blue.svg?logo=google-chrome)](https://www.chromium.org/Home)<!-- GEN:stop --> <!-- GEN:firefox-version-badge -->[![Firefox version](https://img.shields.io/badge/firefox-128.0-blue.svg?logo=firefoxbrowser)](https://www.mozilla.org/en-US/firefox/new/)<!-- GEN:stop --> <!-- GEN:webkit-version-badge -->[![WebKit version](https://img.shields.io/badge/webkit-17.4-blue.svg?logo=safari)](https://webkit.org/)<!-- GEN:stop -->

## [Documentation](https://playwright.dev) | [API reference](https://playwright.dev/docs/api/class-playwright)

Playwright is a framework for Web Testing and Automation. It allows testing [Chromium](https://www.chromium.org/Home), [Firefox](https://www.mozilla.org/en-US/firefox/new/) and [WebKit](https://webkit.org/) with a single API. Playwright is built to enable cross-browser web automation that is **ever-green**, **capable**, **reliable** and **fast**.

|          | Linux | macOS | Windows |
|   :---   | :---: | :---: | :---:   |
| Chromium <!-- GEN:chromium-version -->127.0.6533.57<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->17.4<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->128.0<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |

Headless execution is supported for all browsers on all platforms. Check out [system requirements](https://playwright.dev/docs/intro#system-requirements) for details.
