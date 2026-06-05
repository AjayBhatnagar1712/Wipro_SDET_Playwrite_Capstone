// @ts-check
import { test } from '@playwright/test';
import { CheckoutPaymentPage } from '../../pages/checkoutPayment.page.js';

test.describe('Add on - Checkout and Payment Module', () => {
  let checkoutPaymentPage;

  test.beforeEach(async ({ page }) => {
    checkoutPaymentPage = new CheckoutPaymentPage(page);
  });

  test('Add on - PAY-014 Laptop product shows price information', async () => {
    await checkoutPaymentPage.verifyPAY014LaptopProductShowsPriceInformation();
  });
});
