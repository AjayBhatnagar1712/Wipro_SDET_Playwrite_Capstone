// @ts-check
import { test } from '@playwright/test';
import { CartPage } from '../../pages/cart.page.js';

test.describe('Cart Module', () => {
  let cartPage;

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
  });

  test('CART-012 Cart page shows order progress steps', async () => {
    await cartPage.verifyCART012CartPageShowsOrderProgressSteps();
  });
});
