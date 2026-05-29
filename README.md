# Wipro SDET Playwright Capstone

This repository contains a Playwright JavaScript automation capstone for the **Demo Web Shop** e-commerce demo site.

Website under test: https://demowebshop.tricentis.com/

## Objective

The project validates customer-facing e-commerce flows using Playwright Test and publishes an Allure report through GitHub Pages.

## Current Progress

The current pushed version contains **4 services** with **15 test cases per service**.

| Service | Test Cases |
|---|---:|
| Authentication | 15 |
| Product and Search | 15 |
| Cart | 15 |
| Wishlist and Compare | 15 |

Total current test cases: **60**

These tests run on all configured Playwright browsers.

| Browser | Executions |
|---|---:|
| Chromium | 60 |
| Firefox | 60 |
| WebKit | 60 |

Current Allure report total: **180 passed executions**

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
|   |-- authentication.page.js
|   |-- base.page.js
|   |-- cart.page.js
|   |-- product.page.js
|   `-- wishlistCompare.page.js
|-- screenshots
|-- tests
|   |-- authentication
|   |-- cart
|   |-- product
|   `-- wishlist-compare
|-- playwright.config.js
|-- package.json
|-- package-lock.json
`-- README.md
```

## Report

Hosted Allure report:

```text
https://ajaybhatnagar1712.github.io/Wipro_SDET_Playwrite_Capstone/
```

The GitHub Actions workflow runs the current pushed services on Chromium, Firefox, and WebKit, generates the Allure report, and deploys it to the `gh-pages` branch.

GitHub Pages source:

```text
Source: Deploy from a branch
Branch: gh-pages
Folder: / (root)
```

## Documentation

Project documentation is available inside the `docs` folder.

## Note

The selected website is a public demo application. The tests focus on stable guest-user validations so the CI report remains reliable during review.
