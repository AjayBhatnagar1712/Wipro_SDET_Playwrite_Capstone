// @ts-check
import { test } from '@playwright/test';
import { AuthenticationPage } from '../../pages/authentication.page.js';

test.describe('Authentication Module', () => {
  let authenticationPage;

  test.beforeEach(async ({ page }) => {
    authenticationPage = new AuthenticationPage(page);
  });

  test('AUTH-001 Login page opens with correct title and heading', async () => {
    await authenticationPage.verifyAUTH001LoginPageOpensWithCorrectTitleAndHeading();
  });
});
