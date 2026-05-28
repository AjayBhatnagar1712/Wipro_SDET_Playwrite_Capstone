// @ts-check
import { test } from '@playwright/test';
import { AuthenticationPage } from '../../pages/authentication.page.js';

test.describe('Authentication Module', () => {
  let authenticationPage;

  test.beforeEach(async ({ page }) => {
    authenticationPage = new AuthenticationPage(page);
  });

  test('AUTH-015 Header exposes login and register links', async () => {
    await authenticationPage.verifyAUTH015HeaderExposesLoginAndRegisterLinks();
  });
});
