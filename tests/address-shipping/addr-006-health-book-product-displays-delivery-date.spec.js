// @ts-check
import { test } from '@playwright/test';
import { AddressShippingPage } from '../../pages/addressShipping.page.js';

test.describe('Address and Shipping Module', () => {
  let addressShippingPage;

  test.beforeEach(async ({ page }) => {
    addressShippingPage = new AddressShippingPage(page);
  });

  test('ADDR-006 Health book product displays delivery date', async () => {
    await addressShippingPage.verifyADDR006HealthBookProductDisplaysDeliveryDate();
  });
});
