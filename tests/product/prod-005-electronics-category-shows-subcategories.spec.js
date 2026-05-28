// @ts-check
import { test } from '@playwright/test';
import { ProductPage } from '../../pages/product.page.js';

test.describe('Product and Search Module', () => {
  let productPage;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
  });

  test('PROD-005 Electronics category shows subcategories', async () => {
    await productPage.verifyPROD005ElectronicsCategoryShowsSubcategories();
  });
});
