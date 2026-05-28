// @ts-check
import { test } from '@playwright/test';
import { CheckoutPaymentPage } from '../../pages/checkoutPayment.page.js';

test.describe('Checkout and Payment Module', () => {
  let checkoutPaymentPage;

  test.beforeEach(async ({ page }) => {
    checkoutPaymentPage = new CheckoutPaymentPage(page);
  });

  test('PAY-008 Gift card product has recipient email field', async () => {
    await checkoutPaymentPage.verifyPAY008GiftCardProductHasRecipientEmailField();
  });
});
