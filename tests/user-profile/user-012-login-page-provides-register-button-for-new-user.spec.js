// @ts-check
import { test } from '@playwright/test';
import { UserProfilePage } from '../../pages/userProfile.page.js';

test.describe('User Profile and Account Module', () => {
  let userProfilePage;

  test.beforeEach(async ({ page }) => {
    userProfilePage = new UserProfilePage(page);
  });

  test('USER-012 Login page provides register button for new user', async () => {
    await userProfilePage.verifyUSER012LoginPageProvidesRegisterButtonForNewUser();
  });
});
