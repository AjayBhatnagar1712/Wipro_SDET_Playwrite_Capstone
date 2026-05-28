// @ts-check
import { BasePage } from './base.page.js';

export class AddressShippingPage extends BasePage {
  async verifyADDR001ShippingReturnsPageOpens() {
    await this.navigate("/shipping-returns");
    await this.verifyTitle(/Shipping/);
    await this.verifyHeading("Shipping & Returns");
  }

  async verifyADDR002ShippingReturnsPageHasCustomerServiceContext() {
    await this.navigate("/shipping-returns");
    await this.verifyBodyText("Shipping & Returns");
    await this.verifyBodyText("Customer service");
  }

  async verifyADDR003GuestAddressesPageRedirectsToLogin() {
    await this.navigate("/customer/addresses");
    await this.verifyHeading("Welcome, Please Sign In!");
  }

  async verifyADDR004BookProductDisplaysFreeShipping() {
    await this.navigate("/computing-and-internet");
    await this.verifyBodyText("Free shipping");
  }

  async verifyADDR005ScienceProductDisplaysFreeShipping() {
    await this.navigate("/science");
    await this.verifyBodyText("Free shipping");
  }

  async verifyADDR006HealthBookProductDisplaysDeliveryDate() {
    await this.navigate("/health");
    await this.verifyBodyText("Delivery date: 1-2 days");
  }

  async verifyADDR007LaptopProductShowsInStockAvailability() {
    await this.navigate("/141-inch-laptop");
    await this.verifyBodyText("Availability: In stock");
  }

  async verifyADDR008SmartphoneProductShowsInStockAvailability() {
    await this.navigate("/smartphone");
    await this.verifyBodyText("Availability: In stock");
  }

  async verifyADDR009BlueJeansProductShowsInStockAvailability() {
    await this.navigate("/blue-jeans");
    await this.verifyBodyText("Availability: In stock");
  }

  async verifyADDR010ShoppingCartShowsAddressStep() {
    await this.navigate("/cart");
    await this.verifyBodyText("Address");
  }

  async verifyADDR011ShoppingCartShowsShippingStep() {
    await this.navigate("/cart");
    await this.verifyBodyText("Shipping");
  }

  async verifyADDR012FooterHasShippingReturnsLink() {
    await this.navigate("/");
    await this.verifyVisible("a[href=\"/shipping-returns\"]");
    await this.verifyBodyText("Shipping & Returns");
  }

  async verifyADDR013SitemapIncludesShippingReturnsLink() {
    await this.navigate("/sitemap");
    await this.verifyVisible("a[href=\"/shipping-returns\"]");
    await this.verifyBodyText("Shipping & Returns");
  }

  async verifyADDR014CartPageHasCheckoutProgressSection() {
    await this.navigate("/cart");
    await this.verifyVisible(".order-progress");
    await this.verifyBodyText("Cart");
  }

  async verifyADDR015ShippingPageKeepsInformationLinksAvailable() {
    await this.navigate("/shipping-returns");
    await this.verifyBodyText("Privacy Notice");
    await this.verifyBodyText("Conditions of Use");
  }
}
