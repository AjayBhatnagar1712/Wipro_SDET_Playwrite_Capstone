// @ts-check
import { test } from '@playwright/test';
import { UserProfilePage } from '../../pages/userProfile.page.js';

test.describe('User Profile and Account Module', () => {
  let userProfilePage;

  test.beforeEach(async ({ page }) => {
    userProfilePage = new UserProfilePage(page);
  });

  test('USER-001 My account page requires login for guest', async () => {
    await userProfilePage.verifyUSER001MyAccountPageRequiresLoginForGuest();
  });
});
