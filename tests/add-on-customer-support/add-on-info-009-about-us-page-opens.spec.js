// @ts-check
import { test } from '@playwright/test';
import { CustomerSupportPage } from '../../pages/customerSupport.page.js';

test.describe('Add on - Customer Support and Information Module', () => {
  let customerSupportPage;

  test.beforeEach(async ({ page }) => {
    customerSupportPage = new CustomerSupportPage(page);
  });

  test('Add on - INFO-009 About us page opens', async () => {
    await customerSupportPage.verifyINFO009AboutUsPageOpens();
  });
});
