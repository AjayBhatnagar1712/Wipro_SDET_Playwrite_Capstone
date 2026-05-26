# Wipro SDET Playwright Capstone

This repository contains a Playwright JavaScript automation capstone for the **nopCommerce demo store**.

Website under test: https://demo.nopcommerce.com/

## Objective

The project validates important customer-facing e-commerce flows using Playwright Test and generates a combined Allure report for submission and GitHub Pages hosting.

## Capstone Coverage

The capstone requirement is covered with **8 services** and **15 test cases per service**.

| Service | Test Cases |
|---|---:|
| Authentication | 15 |
| Product and Search | 15 |
| Cart | 15 |
| Wishlist and Compare | 15 |
| User Profile and Account | 15 |
| Address and Shipping | 15 |
| Checkout and Payment | 15 |
| Customer Support and Information | 15 |

Total: **120 automated test cases**

## Tech Stack

- Playwright Test
- JavaScript
- Node.js
- Allure Report
- GitHub Actions
- GitHub Pages

## Project Structure

```text
Capstone_Project
|-- .github
|   `-- workflows
|       `-- playwright-allure-pages.yml
|-- tests
|   |-- data
|   |   `-- serviceScenarios.js
|   |-- services
|   |   |-- address-shipping.spec.js
|   |   |-- authentication.spec.js
|   |   |-- cart.spec.js
|   |   |-- checkout-payment.spec.js
|   |   |-- customer-support.spec.js
|   |   |-- product-search.spec.js
|   |   |-- user-profile.spec.js
|   |   `-- wishlist-compare.spec.js
|   `-- support
|       |-- nopCommerce.js
|       `-- serviceRunner.js
|-- global-setup.js
|-- playwright.config.js
|-- package.json
|-- package-lock.json
`-- README.md
```

## Execution

```powershell
npm install
npx playwright test
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Report

The project is configured to generate:

- Playwright HTML report
- Allure results
- Allure HTML report

## CI/CD Pipeline

The repository includes a GitHub Actions workflow for automated execution and report hosting:

```text
.github/workflows/playwright-allure-pages.yml
```

The pipeline runs when code is pushed to the `main` branch. It can also be started manually from the **Actions** tab using **Run workflow**.

Pipeline flow:

```text
Push to main / Manual run
        |
Install dependencies
        |
Install Chromium browser
        |
Run all 120 Playwright test cases
        |
Generate Allure report
        |
Deploy Allure report to GitHub Pages
```

After the workflow completes, the hosted Allure report is available from the deployment link shown in the GitHub Actions run and from the repository's GitHub Pages section.

GitHub Pages source should be set to **GitHub Actions** in repository settings.

Expected report URL format:

```text
https://<github-username>.github.io/<repository-name>/
```

## Current Status

Latest local execution:

```text
120 passed
0 failed
0 skipped
```

## Note

The selected website is a public demo application. The tests avoid aggressive repeated form submissions so the suite remains stable and does not try to bypass CAPTCHA or security verification.
