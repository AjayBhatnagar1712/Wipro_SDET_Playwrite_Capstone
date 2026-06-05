// @ts-check
import { test } from '@playwright/test';
import { CheckoutPaymentPage } from '../../pages/checkoutPayment.page.js';

test.describe('Add on - Checkout and Payment Module', () => {
  let checkoutPaymentPage;

  test.beforeEach(async ({ page }) => {
    checkoutPaymentPage = new CheckoutPaymentPage(page);
  });

  test('Add on - PAY-003 Cart page is available before checkout', async () => {
    await checkoutPaymentPage.verifyPAY003CartPageIsAvailableBeforeCheckout();
  });
});
