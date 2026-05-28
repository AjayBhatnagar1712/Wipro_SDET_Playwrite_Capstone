// @ts-check
import { test } from '@playwright/test';
import { AuthenticationPage } from '../../pages/authentication.page.js';

test.describe('Authentication Module', () => {
  let authenticationPage;

  test.beforeEach(async ({ page }) => {
    authenticationPage = new AuthenticationPage(page);
  });

  test('AUTH-007 Password recovery page has email field and recover button', async () => {
    await authenticationPage.verifyAUTH007PasswordRecoveryPageHasEmailFieldAndRecoverButton();
  });
});
