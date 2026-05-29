// @ts-check
import { test } from '@playwright/test';
import { CartPage } from '../../pages/cart.page.js';

test.describe('Cart Module', () => {
  let cartPage;

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
  });

  test('CART-011 Cart page still shows search controls', async () => {
    await cartPage.verifyCART011CartPageStillShowsSearchControls();
  });
});
