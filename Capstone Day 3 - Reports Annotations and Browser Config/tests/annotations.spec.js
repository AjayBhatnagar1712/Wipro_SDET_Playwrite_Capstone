// @ts-check
import { test, expect } from '@playwright/test';

async function waitForNopCommerce(page) {
  await page.waitForFunction(
    () => !/Just a moment|security verification/i.test(document.title + document.body.innerText),
    null,
    { timeout: 60000 }
  ).catch(() => {});
}

test.describe('Annotations and Timeouts on nopCommerce', () => {
  test.skip('Skip this test because future product filter scenario is not ready', async ({ page }) => {
    await page.goto('/');
    await waitForNopCommerce(page);
  });

  test('Mark expected failure for wrong title validation', async ({ page }) => {
    test.fail();

    await page.goto('/');
    await waitForNopCommerce(page);

    await expect(page).toHaveTitle('Wrong Title For Expected Failure');
  });

  test.fixme('Search filter scenario will be updated later', async ({ page }) => {
    await page.goto('/');
    await waitForNopCommerce(page);
    await page.getByRole('link', { name: 'Computers' }).click();
  });

  test('Slow test with custom timeout for home page', async ({ page }) => {
    test.slow();
    test.setTimeout(10000);

    await page.goto('/');
    await waitForNopCommerce(page);

    await expect(page).toHaveTitle(/nopCommerce demo store/);
  });

  test('Using test.step for reporting on home page', async ({ page }) => {
    await test.step('Navigate to nopCommerce home page', async () => {
      await page.goto('/');
      await waitForNopCommerce(page);
    });

    await test.step('Verify home page title', async () => {
      await expect(page).toHaveTitle(/nopCommerce demo store/);
    });

    await test.step('Verify search box is visible', async () => {
      await expect(page.locator('#small-searchterms')).toBeVisible();
    });
  });
});
