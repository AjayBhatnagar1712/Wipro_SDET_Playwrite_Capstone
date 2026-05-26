// @ts-check
import { expect } from '@playwright/test';

export const securityChallenge = /Just a moment|security verification|Enable JavaScript and cookies/i;

export async function waitForStoreReady(page) {
  await page.waitForFunction(
    (pattern) => !new RegExp(pattern, 'i').test(document.title + document.body.innerText),
    securityChallenge.source,
    { timeout: 45000 }
  ).catch(() => {});

  await expect(page.locator('body')).not.toContainText(securityChallenge);
}

export async function openStorePage(page, route) {
  await page.goto(route, { waitUntil: 'domcontentloaded' });
  await waitForStoreReady(page);
}
