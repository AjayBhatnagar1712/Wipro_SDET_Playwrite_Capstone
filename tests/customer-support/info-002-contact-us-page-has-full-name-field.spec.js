// @ts-check
import { test } from '@playwright/test';
import { CustomerSupportPage } from '../../pages/customerSupport.page.js';

test.describe('Customer Support and Information Module', () => {
  let customerSupportPage;

  test.beforeEach(async ({ page }) => {
    customerSupportPage = new CustomerSupportPage(page);
  });

  test('INFO-002 Contact us page has full name field', async () => {
    await customerSupportPage.verifyINFO002ContactUsPageHasFullNameField();
  });
});
