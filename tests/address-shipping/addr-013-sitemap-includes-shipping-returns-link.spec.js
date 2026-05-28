// @ts-check
import { test } from '@playwright/test';
import { AddressShippingPage } from '../../pages/addressShipping.page.js';

test.describe('Address and Shipping Module', () => {
  let addressShippingPage;

  test.beforeEach(async ({ page }) => {
    addressShippingPage = new AddressShippingPage(page);
  });

  test('ADDR-013 Sitemap includes shipping returns link', async () => {
    await addressShippingPage.verifyADDR013SitemapIncludesShippingReturnsLink();
  });
});
