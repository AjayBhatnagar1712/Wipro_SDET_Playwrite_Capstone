// @ts-check
import { test } from '@playwright/test';
import { AuthenticationPage } from '../../pages/authentication.page.js';

test.describe('Authentication Module', () => {
  let authenticationPage;

  test.beforeEach(async ({ page }) => {
    authenticationPage = new AuthenticationPage(page);
  });

  test('AUTH-002 Login page shows email and password fields', async () => {
    await authenticationPage.verifyAUTH002LoginPageShowsEmailAndPasswordFields();
  });
});
