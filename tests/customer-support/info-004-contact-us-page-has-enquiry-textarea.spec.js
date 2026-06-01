// @ts-check
import { test } from '@playwright/test';
import { CustomerSupportPage } from '../../pages/customerSupport.page.js';

test.describe('Customer Support and Information Module', () => {
  let customerSupportPage;

  test.beforeEach(async ({ page }) => {
    customerSupportPage = new CustomerSupportPage(page);
  });

  test('INFO-004 Contact us page has enquiry textarea', async () => {
    await customerSupportPage.verifyINFO004ContactUsPageHasEnquiryTextarea();
  });
});
