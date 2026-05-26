// @ts-check
import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';
import path from 'node:path';

const baseURL = 'https://demo.nopcommerce.com';
const authFile = path.resolve('playwright/.auth/nopcommerce-public.json');
const securityChallenge = /Just a moment|security verification|Enable JavaScript and cookies/i;

async function waitForStoreReady(page) {
  await page.waitForFunction(
    (pattern) => !new RegExp(pattern, 'i').test(document.title + document.body.innerText),
    securityChallenge.source,
    { timeout: 45000 }
  ).catch(() => {});
}

export default async function globalSetup() {
  await fs.mkdir(path.dirname(authFile), { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(baseURL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await waitForStoreReady(page);
  await context.storageState({ path: authFile });

  await browser.close();
}
