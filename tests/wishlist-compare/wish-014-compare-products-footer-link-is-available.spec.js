// @ts-check
import { test } from '@playwright/test';
import { WishlistComparePage } from '../../pages/wishlistCompare.page.js';

test.describe('Wishlist and Compare Module', () => {
  let wishlistComparePage;

  test.beforeEach(async ({ page }) => {
    wishlistComparePage = new WishlistComparePage(page);
  });

  test('WISH-014 Compare products footer link is available', async () => {
    await wishlistComparePage.verifyWISH014CompareProductsFooterLinkIsAvailable();
  });
});
