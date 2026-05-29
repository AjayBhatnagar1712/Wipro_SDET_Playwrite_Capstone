// @ts-check
import { test as base, expect } from '@playwright/test';
import { AuthenticationPage } from '../pages/authentication.page.js';
import { ProductPage } from '../pages/product.page.js';
import { CartPage } from '../pages/cart.page.js';
import { WishlistComparePage } from '../pages/wishlistCompare.page.js';

export const test = base.extend({
  authenticationPage: async ({ page }, use) => {
    await use(new AuthenticationPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  wishlistComparePage: async ({ page }, use) => {
    await use(new WishlistComparePage(page));
  },
});

export { expect };
