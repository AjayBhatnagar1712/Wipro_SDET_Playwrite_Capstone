// @ts-check
import { test } from '@playwright/test';
import { AuthenticationPage } from '../../pages/authentication.page.js';

test.describe('Authentication Module', () => {
  let authenticationPage;

  test.beforeEach(async ({ page }) => {
    authenticationPage = new AuthenticationPage(page);
  });

  test('AUTH-013 Protected account page redirects guest user to login', async () => {
    await authenticationPage.verifyAUTH013ProtectedAccountPageRedirectsGuestUserToLogin();
  });
});
