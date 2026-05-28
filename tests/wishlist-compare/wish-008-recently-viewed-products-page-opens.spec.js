// @ts-check
import { test } from '@playwright/test';
import { WishlistComparePage } from '../../pages/wishlistCompare.page.js';

test.describe('Wishlist and Compare Module', () => {
  let wishlistComparePage;

  test.beforeEach(async ({ page }) => {
    wishlistComparePage = new WishlistComparePage(page);
  });

  test('WISH-008 Recently viewed products page opens', async () => {
    await wishlistComparePage.verifyWISH008RecentlyViewedProductsPageOpens();
  });
});
