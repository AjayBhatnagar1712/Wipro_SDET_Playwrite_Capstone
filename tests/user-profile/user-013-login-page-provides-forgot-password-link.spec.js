// @ts-check
import { test } from '@playwright/test';
import { UserProfilePage } from '../../pages/userProfile.page.js';

test.describe('User Profile and Account Module', () => {
  let userProfilePage;

  test.beforeEach(async ({ page }) => {
    userProfilePage = new UserProfilePage(page);
  });

  test('USER-013 Login page provides forgot password link', async () => {
    await userProfilePage.verifyUSER013LoginPageProvidesForgotPasswordLink();
  });
});
