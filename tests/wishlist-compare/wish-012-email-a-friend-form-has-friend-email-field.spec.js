// @ts-check
import { test } from '@playwright/test';
import { WishlistComparePage } from '../../pages/wishlistCompare.page.js';

test.describe('Wishlist and Compare Module', () => {
  let wishlistComparePage;

  test.beforeEach(async ({ page }) => {
    wishlistComparePage = new WishlistComparePage(page);
  });

  test('WISH-012 Email a friend form has friend email field', async () => {
    await wishlistComparePage.verifyWISH012EmailAFriendFormHasFriendEmailField();
  });
});
