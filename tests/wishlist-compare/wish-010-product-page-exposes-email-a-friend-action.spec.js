// @ts-check
import { test } from '@playwright/test';
import { WishlistComparePage } from '../../pages/wishlistCompare.page.js';

test.describe('Wishlist and Compare Module', () => {
  let wishlistComparePage;

  test.beforeEach(async ({ page }) => {
    wishlistComparePage = new WishlistComparePage(page);
  });

  test('WISH-010 Product page exposes email a friend action', async () => {
    await wishlistComparePage.verifyWISH010ProductPageExposesEmailAFriendAction();
  });
});
