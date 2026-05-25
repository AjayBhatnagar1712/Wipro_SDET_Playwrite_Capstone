// @ts-check
import { test, expect } from '@playwright/test';
import { waitForNopCommerce } from './utils.js';

test('Open search result page for product keyword', async ({ page }) => {
  await page.goto('/search?q=computer');
  await waitForNopCommerce(page);

  await expect(page).toHaveURL(/search/);
  await expect(page).toHaveTitle(/Search/);
  await expect(page.locator('body')).toContainText('Build your own computer');
});
