// @ts-check
import { test, expect } from '@playwright/test';

async function waitForNopCommerce(page) {
  await page.waitForFunction(
    () => !/Just a moment|security verification/i.test(document.title + document.body.innerText),
    null,
    { timeout: 60000 }
  ).catch(() => {});
}

test('Use role locators on nopCommerce home page', async ({ page }) => {
  await page.goto('/');
  await waitForNopCommerce(page);

  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: /search/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /search/i })).toBeVisible();
});
