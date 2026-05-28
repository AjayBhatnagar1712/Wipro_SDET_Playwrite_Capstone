// @ts-check
import { test } from '@playwright/test';
import { AuthenticationPage } from '../../pages/authentication.page.js';

test.describe('Authentication Module', () => {
  let authenticationPage;

  test.beforeEach(async ({ page }) => {
    authenticationPage = new AuthenticationPage(page);
  });

  test('AUTH-004 Login page shows remember me and forgot password options', async () => {
    await authenticationPage.verifyAUTH004LoginPageShowsRememberMeAndForgotPasswordOptions();
  });
});
