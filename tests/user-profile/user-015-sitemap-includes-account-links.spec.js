// @ts-check
import { test } from '@playwright/test';
import { UserProfilePage } from '../../pages/userProfile.page.js';

test.describe('User Profile and Account Module', () => {
  let userProfilePage;

  test.beforeEach(async ({ page }) => {
    userProfilePage = new UserProfilePage(page);
  });

  test('USER-015 Sitemap includes account links', async () => {
    await userProfilePage.verifyUSER015SitemapIncludesAccountLinks();
  });
});
