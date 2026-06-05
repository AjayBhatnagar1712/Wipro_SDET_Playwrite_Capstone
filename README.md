# Wipro SDET Playwright Capstone

This repository contains a Playwright JavaScript automation capstone for the **Demo Web Shop** e-commerce demo site.

Website under test: https://demowebshop.tricentis.com/

## Objective

The project validates customer-facing e-commerce flows using Playwright Test and publishes an Allure report through GitHub Pages.

## Current Progress

The project contains **6 core modules** and **2 add-on modules** with **15 test cases per module**.

| Module Type | Module | Test Cases |
|---|---|---:|
| Core Module | Authentication | 15 |
| Core Module | Product and Search | 15 |
| Core Module | Cart | 15 |
| Core Module | Wishlist and Compare | 15 |
| Core Module | User Profile and Account | 15 |
| Core Module | Address and Shipping | 15 |
| Add on Module | Add on - Checkout and Payment | 15 |
| Add on Module | Add on - Customer Support and Information | 15 |

Total current test cases: **120**

These tests run on all configured Playwright browsers.

| Browser | Executions |
|---|---:|
| Chromium | 120 |
| Firefox | 120 |
| WebKit | 120 |

Current Allure report total: **360 passed executions**

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
|   |-- Demo_Web_Shop_Capstone_Day_Wise_Testing_Plan.docx
|   |-- Demo_Web_Shop_Capstone_Day_Wise_Testing_Plan.pdf
|   |-- Demo_Web_Shop_Playwright_Capstone_Final_Report.docx
|   |-- Demo_Web_Shop_Playwright_Capstone_Final_Report.pdf
|   |-- Playwright_Notes.docx
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
|   |-- add-on-checkout-payment
|   |-- add-on-customer-support
|   |-- product
|   |-- user-profile
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
