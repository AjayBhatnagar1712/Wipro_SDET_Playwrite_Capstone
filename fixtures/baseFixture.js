// @ts-check
import { test as base, expect } from '@playwright/test';
import { AuthenticationPage } from '../pages/authentication.page.js';
import { ProductPage } from '../pages/product.page.js';

export const test = base.extend({
  authenticationPage: async ({ page }, use) => {
    await use(new AuthenticationPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
});

export { expect };
