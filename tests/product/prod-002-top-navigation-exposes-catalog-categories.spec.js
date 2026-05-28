// @ts-check
import { test } from '@playwright/test';
import { ProductPage } from '../../pages/product.page.js';

test.describe('Product and Search Module', () => {
  let productPage;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
  });

  test('PROD-002 Top navigation exposes catalog categories', async () => {
    await productPage.verifyPROD002TopNavigationExposesCatalogCategories();
  });
});
