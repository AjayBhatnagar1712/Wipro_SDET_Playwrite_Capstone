// @ts-check
import { BasePage } from './base.page.js';

export class CartPage extends BasePage {
  async verifyCART001EmptyCartPageOpens() {
    await this.navigate("/cart");
    await this.verifyTitle(/Shopping Cart/);
    await this.verifyHeading("Shopping cart");
  }

  async verifyCART002EmptyCartMessageIsShown() {
    await this.navigate("/cart");
    await this.verifyBodyText("Your Shopping Cart is empty!");
  }

  async verifyCART003HeaderShoppingCartLinkIsVisible() {
    await this.navigate("/");
    await this.verifyVisible("a.ico-cart");
    await this.verifyBodyText("Shopping cart (0)");
  }

  async verifyCART004CartFooterLinkIsVisible() {
    await this.navigate("/");
    await this.verifyVisible("a[href=\"/cart\"]");
    await this.verifyBodyText("Shopping cart");
  }

  async verifyCART005BookProductHasAddToCartControls() {
    await this.navigate("/computing-and-internet");
    await this.verifyVisible(".add-to-cart-button");
    await this.verifyVisible(".qty-input");
  }

  async verifyCART006LaptopProductHasAddToCartControls() {
    await this.navigate("/141-inch-laptop");
    await this.verifyVisible("#add-to-cart-button-31");
    await this.verifyVisible(".qty-input");
  }

  async verifyCART007ComputerProductHasAddToCartControls() {
    await this.navigate("/build-your-own-computer");
    await this.verifyVisible("#add-to-cart-button-16");
    await this.verifyVisible(".qty-input");
  }

  async verifyCART008GiftCardProductHasAddToCartControls() {
    await this.navigate("/25-virtual-gift-card");
    await this.verifyVisible("#add-to-cart-button-2");
    await this.verifyVisible(".qty-input");
  }

  async verifyCART009ApparelProductHasCartControls() {
    await this.navigate("/blue-jeans");
    await this.verifyVisible(".add-to-cart-button");
    await this.verifyVisible(".qty-input");
  }

  async verifyCART010JewelryProductHasCartControls() {
    await this.navigate("/create-it-yourself-jewelry");
    await this.verifyVisible(".add-to-cart-button");
    await this.verifyVisible(".qty-input");
  }

  async verifyCART011CartPageStillShowsSearchControls() {
    await this.navigate("/cart");
    await this.verifyVisible("#small-searchterms");
    await this.verifyVisible(".search-box-button");
  }

  async verifyCART012CartPageShowsOrderProgressSteps() {
    await this.navigate("/cart");
    await this.verifyBodyText("Cart");
    await this.verifyBodyText("Address");
    await this.verifyBodyText("Payment");
  }

  async verifyCART013CartPageShowsInformationFooterLinks() {
    await this.navigate("/cart");
    await this.verifyBodyText("Sitemap");
    await this.verifyBodyText("Shipping & Returns");
  }

  async verifyCART014CartPageKeepsFooterFollowLinksAvailable() {
    await this.navigate("/cart");
    await this.verifyVisible(".footer");
    await this.verifyBodyText("Follow us");
  }

  async verifyCART015CartPageHasCheckoutJourneyLabels() {
    await this.navigate("/cart");
    await this.verifyBodyText("Shipping");
    await this.verifyBodyText("Confirm");
    await this.verifyBodyText("Complete");
  }
}
