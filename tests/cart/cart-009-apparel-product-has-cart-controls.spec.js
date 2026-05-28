// @ts-check
import { test } from '@playwright/test';
import { CartPage } from '../../pages/cart.page.js';

test.describe('Cart Module', () => {
  let cartPage;

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
  });

  test('CART-009 Apparel product has cart controls', async () => {
    await cartPage.verifyCART009ApparelProductHasCartControls();
  });
});
