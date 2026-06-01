// @ts-check
import { test } from '@playwright/test';
import { AddressShippingPage } from '../../pages/addressShipping.page.js';

test.describe('Address and Shipping Module', () => {
  let addressShippingPage;

  test.beforeEach(async ({ page }) => {
    addressShippingPage = new AddressShippingPage(page);
  });

  test('ADDR-008 Smartphone product shows in stock availability', async () => {
    await addressShippingPage.verifyADDR008SmartphoneProductShowsInStockAvailability();
  });
});
