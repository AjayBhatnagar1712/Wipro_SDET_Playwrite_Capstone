// @ts-check
import { test } from '@playwright/test';
import { CartPage } from '../../pages/cart.page.js';

test.describe('Cart Module', () => {
  let cartPage;

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
  });

  test('CART-013 Cart page shows information footer links', async () => {
    await cartPage.verifyCART013CartPageShowsInformationFooterLinks();
  });
});
