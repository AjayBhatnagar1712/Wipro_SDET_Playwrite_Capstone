// @ts-check
import { test } from '@playwright/test';
import { UserProfilePage } from '../../pages/userProfile.page.js';

test.describe('User Profile and Account Module', () => {
  let userProfilePage;

  test.beforeEach(async ({ page }) => {
    userProfilePage = new UserProfilePage(page);
  });

  test('USER-004 Login page supports returning customer section', async () => {
    await userProfilePage.verifyUSER004LoginPageSupportsReturningCustomerSection();
  });
});
