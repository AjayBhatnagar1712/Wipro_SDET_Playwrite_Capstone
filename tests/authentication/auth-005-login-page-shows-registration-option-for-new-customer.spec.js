// @ts-check
import { test } from '@playwright/test';
import { AuthenticationPage } from '../../pages/authentication.page.js';

test.describe('Authentication Module', () => {
  let authenticationPage;

  test.beforeEach(async ({ page }) => {
    authenticationPage = new AuthenticationPage(page);
  });

  test('AUTH-005 Login page shows registration option for new customer', async () => {
    await authenticationPage.verifyAUTH005LoginPageShowsRegistrationOptionForNewCustomer();
  });
});
