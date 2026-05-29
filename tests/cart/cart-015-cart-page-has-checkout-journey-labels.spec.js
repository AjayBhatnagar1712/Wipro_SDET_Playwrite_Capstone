// @ts-check
import { test } from '@playwright/test';
import { CartPage } from '../../pages/cart.page.js';

test.describe('Cart Module', () => {
  let cartPage;

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
  });

  test('CART-015 Cart page has checkout journey labels', async () => {
    await cartPage.verifyCART015CartPageHasCheckoutJourneyLabels();
  });
});
