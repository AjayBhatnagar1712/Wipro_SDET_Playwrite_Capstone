// @ts-check
import { test } from '@playwright/test';
import { CartPage } from '../../pages/cart.page.js';

test.describe('Cart Module', () => {
  let cartPage;

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
  });

  test('CART-014 Cart page keeps footer follow links available', async () => {
    await cartPage.verifyCART014CartPageKeepsFooterFollowLinksAvailable();
  });
});
