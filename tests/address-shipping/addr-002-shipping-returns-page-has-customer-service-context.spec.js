// @ts-check
import { test } from '@playwright/test';
import { AddressShippingPage } from '../../pages/addressShipping.page.js';

test.describe('Address and Shipping Module', () => {
  let addressShippingPage;

  test.beforeEach(async ({ page }) => {
    addressShippingPage = new AddressShippingPage(page);
  });

  test('ADDR-002 Shipping returns page has customer service context', async () => {
    await addressShippingPage.verifyADDR002ShippingReturnsPageHasCustomerServiceContext();
  });
});
