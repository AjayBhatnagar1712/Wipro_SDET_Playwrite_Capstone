// @ts-check
import { test } from '@playwright/test';
import { CustomerSupportPage } from '../../pages/customerSupport.page.js';

test.describe('Customer Support and Information Module', () => {
  let customerSupportPage;

  test.beforeEach(async ({ page }) => {
    customerSupportPage = new CustomerSupportPage(page);
  });

  test('INFO-001 Contact us page opens', async () => {
    await customerSupportPage.verifyINFO001ContactUsPageOpens();
  });
});
