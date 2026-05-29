// @ts-check
import { test } from '@playwright/test';
import { CartPage } from '../../pages/cart.page.js';

test.describe('Cart Module', () => {
  let cartPage;

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
  });

  test('CART-001 Empty cart page opens', async () => {
    await cartPage.verifyCART001EmptyCartPageOpens();
  });
});
