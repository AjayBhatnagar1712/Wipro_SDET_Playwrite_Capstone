# Wipro SDET Playwright Capstone

This repository contains an SDET capstone project for testing the **nopCommerce demo store** using **Playwright with JavaScript**.

The project is prepared as a QA automation capstone and follows the trainer's day-wise Playwright learning sequence.

## Website Under Test

**nopCommerce demo store**  
https://demo.nopcommerce.com/

## Project Objective

The objective of this capstone is to design and automate test scenarios for a public e-commerce demo application. The project focuses on customer-facing flows such as registration, login, product browsing, search, cart, wishlist, checkout, address handling, and account-related pages.

## Capstone Requirement

- Minimum 8 services/modules
- 15 test cases for each service
- Minimum 120 total test cases
- Automation using Playwright with JavaScript
- Day-wise implementation based on trainer topics

## Modules Covered

1. Registration and Authentication
2. Product Catalog
3. Search and Filters
4. Cart
5. Wishlist and Compare
6. Checkout and Payment
7. Address and Shipping
8. Customer Support and Account

## Project Structure

```text
Capstone_Project
|-- Capstone Day 1 - Playwright Basics
|-- Capstone Day 2 - Project Setup and First Tests
|-- Capstone Day 3 - Reports Annotations and Browser Config
|-- Capstone Day 4 - Hooks Validation and Grouped Tests
|-- Capstone Day 5 - Auth State and Advanced Assertions
|-- Capstone Day 6 - Review Test Cases and Cleanup
|-- Capstone Day 7 - POM Fixtures and Final Run
|-- Capstone_Day_Wise_Schedule.docx
|-- nopCommerce_Capstone_Testing_Plan.docx
`-- nopCommerce_Capstone_Testing_Plan.pdf
```

## Current Progress

### Capstone Day 1 - Playwright Basics

Day 1 implements the first Playwright topic taught by the trainer on the selected capstone website.

Covered work:

- Basic Playwright browser automation
- Browser launch using Chromium
- Page creation
- Website navigation
- Page title verification through terminal output
- Browser close flow

### Capstone Day 2 - Project Setup and First Tests

Day 2 implements the trainer's Playwright Test setup topics from Day 13 and Day 14.

Covered work:

- Playwright Test project setup
- `playwright.config.js` configuration
- First service-wise spec files
- Data-driven login validation
- Locators, form filling, click actions, and assertions
- Reusable helper functions
- Screenshot capture
- ES module import/export practice
- Basic search result validation

### Capstone Day 3 - Reports Annotations and Browser Config

Day 3 implements the trainer's annotations, timeout, reporting, and browser configuration topics.

Covered work:

- Playwright HTML report configuration
- Trace and screenshot configuration
- `test.skip`, `test.fail`, and `test.fixme`
- `test.slow` and custom timeout
- `test.step` for readable reporting
- Role-based locators
- Browser project configuration

## Planned Work

The remaining capstone days will continue according to the training sequence:

- Hooks and grouped tests
- Data-driven test scenarios
- Authentication state handling
- Advanced assertions
- Page Object Model
- Fixtures and final execution

## Deliverables

- Capstone testing plan
- Day-wise schedule document
- Service-wise Playwright automation files
- Test case documentation
- Execution reports and evidence
- Final project summary

## Note

This project is created for SDET training and capstone submission purposes. The website used is a public demo application, and only dummy test data will be used.
