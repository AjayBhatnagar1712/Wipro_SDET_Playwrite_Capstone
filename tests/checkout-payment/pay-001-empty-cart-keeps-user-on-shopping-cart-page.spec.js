// @ts-check
import { test } from '@playwright/test';
import { CheckoutPaymentPage } from '../../pages/checkoutPayment.page.js';

test.describe('Checkout and Payment Module', () => {
  let checkoutPaymentPage;

  test.beforeEach(async ({ page }) => {
    checkoutPaymentPage = new CheckoutPaymentPage(page);
  });

  test('PAY-001 Empty cart keeps user on shopping cart page', async () => {
    await checkoutPaymentPage.verifyPAY001EmptyCartKeepsUserOnShoppingCartPage();
  });
});
