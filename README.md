# Wipro SDET Playwright Capstone

This repository contains a Playwright JavaScript automation capstone for the **Demo Web Shop** e-commerce demo site.

Website under test: https://demowebshop.tricentis.com/

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

The same 120 test cases are executed across the configured Playwright browsers:

| Browser | Executions |
|---|---:|
| Chromium | 120 |
| Firefox | 120 |
| WebKit | 120 |

Total cross-browser executions: **360**

## Tech Stack

- Playwright Test
- JavaScript
- Node.js
- Allure Report
- GitHub Actions
- GitHub Pages

## Project Structure

The tests follow a Page Object Model style like the training project: each spec imports its page class, creates the page object in `test.beforeEach`, and keeps the testcase name visible in the `tests` folder.

```text
Capstone_Project
|-- .github
|   `-- workflows
|       `-- allure-report.yml
|-- api
|   `-- apiClient.js
|-- data
|   `-- demoWebShopData.js
|-- docs
|   |-- Capstone_Day_Wise_Schedule.docx
|   |-- Demo_Web_Shop_Capstone_Testing_Plan.docx
|   |-- Demo_Web_Shop_Capstone_Testing_Plan.pdf
|   `-- Playwright_Notes.pdf
|-- fixtures
|   `-- baseFixture.js
|-- pages
|   |-- addressShipping.page.js
|   |-- authentication.page.js
|   |-- base.page.js
|   |-- cart.page.js
|   |-- checkoutPayment.page.js
|   |-- customerSupport.page.js
|   |-- product.page.js
|   |-- userProfile.page.js
|   `-- wishlistCompare.page.js
|-- screenshots
|-- tests
|   |-- address-shipping
|   |-- authentication
|   |-- cart
|   |-- checkout-payment
|   |-- customer-support
|   |-- product
|   |-- user-profile
|   `-- wishlist-compare
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

Hosted report URL:

```text
https://ajaybhatnagar1712.github.io/Wipro_SDET_Playwrite_Capstone/
```

## Documentation

Project documentation is available inside the `docs` folder:

- `docs/Demo_Web_Shop_Capstone_Testing_Plan.docx`
- `docs/Demo_Web_Shop_Capstone_Testing_Plan.pdf`
- `docs/Capstone_Day_Wise_Schedule.docx`
- `docs/Playwright_Notes.pdf`

## CI/CD Pipeline

The repository includes a GitHub Actions workflow for automated execution and report hosting:

```text
.github/workflows/allure-report.yml
```

The pipeline runs when code is pushed to the `main` branch. It can also be started manually from the **Actions** tab using **Run workflow**.

Pipeline flow:

```text
Push to main / Manual run
        |
Install dependencies
        |
Install Playwright browsers
        |
Run all 120 Playwright test cases on Chromium, Firefox, and WebKit
        |
Generate Allure report
        |
Push Allure report to gh-pages branch
        |
GitHub Pages hosts gh-pages / root
```

After the workflow completes, the hosted Allure report is available from the deployment link shown in the GitHub Actions run and from the repository's GitHub Pages section.

GitHub Pages source should be set like this:

```text
Source: Deploy from a branch
Branch: gh-pages
Folder: / (root)
```

Expected report URL format:

```text
https://<github-username>.github.io/<repository-name>/
```

## Current Status

Latest verified local execution after moving the project to Demo Web Shop:

```text
360 passed
0 failed
0 skipped
```

## Note

The selected website is a public demo application. The tests focus on stable guest-user catalog, cart, account, support, and checkout-page validations without aggressive repeated form submissions.
