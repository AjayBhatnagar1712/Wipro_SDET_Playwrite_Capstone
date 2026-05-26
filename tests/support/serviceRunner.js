// @ts-check
import { expect } from '@playwright/test';
import { openStorePage } from './nopCommerce.js';

export async function runScenario(page, scenario) {
  await openStorePage(page, scenario.route);

  for (const check of scenario.checks) {
    await applyCheck(page, check);
  }
}

async function applyCheck(page, check) {
  if (check.type === 'title') {
    await expect(page).toHaveTitle(check.value);
    return;
  }

  if (check.type === 'url') {
    await expect(page).toHaveURL(check.value);
    return;
  }

  if (check.type === 'heading') {
    await expect(page.locator('h1').first()).toContainText(check.value);
    return;
  }

  if (check.type === 'text') {
    await expect(page.locator('body')).toContainText(check.value);
    return;
  }

  if (check.type === 'visible') {
    await expect(page.locator(check.selector).first()).toBeVisible();
    return;
  }

  if (check.type === 'enabled') {
    await expect(page.locator(check.selector).first()).toBeEnabled();
    return;
  }

  if (check.type === 'checked') {
    await expect(page.locator(check.selector).first()).toBeChecked();
    return;
  }

  if (check.type === 'value') {
    await expect(page.locator(check.selector).first()).toHaveValue(check.value);
    return;
  }

  if (check.type === 'containsText') {
    await expect(page.locator(check.selector).first()).toContainText(check.value);
    return;
  }

  if (check.type === 'countAtLeast') {
    const count = await page.locator(check.selector).count();
    expect(count).toBeGreaterThanOrEqual(check.value);
    return;
  }

  throw new Error(`Unsupported check type: ${check.type}`);
}
