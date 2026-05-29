// @ts-check
import { test } from '@playwright/test';
import { CartPage } from '../../pages/cart.page.js';

test.describe('Cart Module', () => {
  let cartPage;

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
  });

  test('CART-010 Jewelry product has cart controls', async () => {
    await cartPage.verifyCART010JewelryProductHasCartControls();
  });
});
