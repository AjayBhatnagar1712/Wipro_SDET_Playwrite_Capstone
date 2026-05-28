// @ts-check
import { test } from '@playwright/test';
import { CustomerSupportPage } from '../../pages/customerSupport.page.js';

test.describe('Customer Support and Information Module', () => {
  let customerSupportPage;

  test.beforeEach(async ({ page }) => {
    customerSupportPage = new CustomerSupportPage(page);
  });

  test('INFO-003 Contact us page has email field', async () => {
    await customerSupportPage.verifyINFO003ContactUsPageHasEmailField();
  });
});
