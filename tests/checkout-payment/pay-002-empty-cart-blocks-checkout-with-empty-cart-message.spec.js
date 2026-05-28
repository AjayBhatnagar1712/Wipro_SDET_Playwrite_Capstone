// @ts-check
import { test } from '@playwright/test';
import { CheckoutPaymentPage } from '../../pages/checkoutPayment.page.js';

test.describe('Checkout and Payment Module', () => {
  let checkoutPaymentPage;

  test.beforeEach(async ({ page }) => {
    checkoutPaymentPage = new CheckoutPaymentPage(page);
  });

  test('PAY-002 Empty cart blocks checkout with empty cart message', async () => {
    await checkoutPaymentPage.verifyPAY002EmptyCartBlocksCheckoutWithEmptyCartMessage();
  });
});
