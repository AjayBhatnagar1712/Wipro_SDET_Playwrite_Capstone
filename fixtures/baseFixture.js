// @ts-check
import { test as base, expect } from '@playwright/test';
import { AuthenticationPage } from '../pages/authentication.page.js';
import { ProductPage } from '../pages/product.page.js';
import { CartPage } from '../pages/cart.page.js';
import { WishlistComparePage } from '../pages/wishlistCompare.page.js';
import { UserProfilePage } from '../pages/userProfile.page.js';
import { AddressShippingPage } from '../pages/addressShipping.page.js';
import { CheckoutPaymentPage } from '../pages/checkoutPayment.page.js';
import { CustomerSupportPage } from '../pages/customerSupport.page.js';

export const test = base.extend({
  authenticationPage: async ({ page }, use) => {
    await use(new AuthenticationPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  wishlistComparePage: async ({ page }, use) => {
    await use(new WishlistComparePage(page));
  },
  userProfilePage: async ({ page }, use) => {
    await use(new UserProfilePage(page));
  },
  addressShippingPage: async ({ page }, use) => {
    await use(new AddressShippingPage(page));
  },
  checkoutPaymentPage: async ({ page }, use) => {
    await use(new CheckoutPaymentPage(page));
  },
  customerSupportPage: async ({ page }, use) => {
    await use(new CustomerSupportPage(page));
  },
});

export { expect };
