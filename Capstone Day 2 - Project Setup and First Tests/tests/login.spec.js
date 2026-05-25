// @ts-check
import { test, expect } from '@playwright/test';
import { testLoginForm, waitForNopCommerce } from './utils.js';

const loginData = [
  {
    email: '',
    password: '',
    expected: 'Please enter your email',
  }
];

loginData.forEach((data) => {
  test(`Checking login form with email: ${data.email || 'blank email'}`, async ({ page }) => {
    await page.goto('/login');
    await waitForNopCommerce(page);

    const response = await testLoginForm(page, data.email, data.password);

    await expect(response).toContainText(data.expected);
  });
});

test('Checking login form with invalid email format', async ({ page }) => {
  await page.goto('/login');
  await waitForNopCommerce(page);

  const emailInput = page.locator('#Email');
  const passwordInput = page.locator('#Password');
  const loginButton = page.locator('button.login-button');

  await emailInput.fill('wrong-email');
  await passwordInput.fill('wrongpassword');
  await loginButton.click();

  const validationMessage = await emailInput.evaluate((input) => input.validationMessage);

  expect(validationMessage.length).toBeGreaterThan(0);
});

test('Capture login button and full page screenshots', async ({ page }) => {
  await page.goto('/login');
  await waitForNopCommerce(page);

  const loginButton = page.locator('button.login-button');

  await loginButton.screenshot({ path: 'screenshots/login-button.png' });
  await page.screenshot({ fullPage: true, path: 'screenshots/login-page-full.png' });

  await expect(loginButton).toBeVisible();
});
