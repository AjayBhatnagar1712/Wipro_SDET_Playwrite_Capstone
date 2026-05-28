// @ts-check
import { test } from '@playwright/test';
import { WishlistComparePage } from '../../pages/wishlistCompare.page.js';

test.describe('Wishlist and Compare Module', () => {
  let wishlistComparePage;

  test.beforeEach(async ({ page }) => {
    wishlistComparePage = new WishlistComparePage(page);
  });

  test('WISH-013 Email a friend form has message and send button', async () => {
    await wishlistComparePage.verifyWISH013EmailAFriendFormHasMessageAndSendButton();
  });
});
