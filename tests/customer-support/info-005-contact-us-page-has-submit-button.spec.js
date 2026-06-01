// @ts-check
import { test } from '@playwright/test';
import { CustomerSupportPage } from '../../pages/customerSupport.page.js';

test.describe('Customer Support and Information Module', () => {
  let customerSupportPage;

  test.beforeEach(async ({ page }) => {
    customerSupportPage = new CustomerSupportPage(page);
  });

  test('INFO-005 Contact us page has submit button', async () => {
    await customerSupportPage.verifyINFO005ContactUsPageHasSubmitButton();
  });
});
