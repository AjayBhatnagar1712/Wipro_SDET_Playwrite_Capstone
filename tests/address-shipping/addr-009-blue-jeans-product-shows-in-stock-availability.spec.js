// @ts-check
import { test } from '@playwright/test';
import { AddressShippingPage } from '../../pages/addressShipping.page.js';

test.describe('Address and Shipping Module', () => {
  let addressShippingPage;

  test.beforeEach(async ({ page }) => {
    addressShippingPage = new AddressShippingPage(page);
  });

  test('ADDR-009 Blue jeans product shows in stock availability', async () => {
    await addressShippingPage.verifyADDR009BlueJeansProductShowsInStockAvailability();
  });
});
