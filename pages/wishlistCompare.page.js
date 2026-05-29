// @ts-check
import { BasePage } from './base.page.js';

export class WishlistComparePage extends BasePage {
  async verifyWISH001WishlistPageOpens() {
    await this.navigate("/wishlist");
    await this.verifyTitle(/Wishlist/);
    await this.verifyHeading("Wishlist");
  }

  async verifyWISH002EmptyWishlistMessageIsShown() {
    await this.navigate("/wishlist");
    await this.verifyBodyText("The wishlist is empty!");
  }

  async verifyWISH003HeaderWishlistLinkIsVisible() {
    await this.navigate("/");
    await this.verifyVisible("a.ico-wishlist");
    await this.verifyBodyText("Wishlist (0)");
  }

  async verifyWISH004GiftCardProductHasWishlistButton() {
    await this.navigate("/25-virtual-gift-card");
    await this.verifyVisible("#add-to-wishlist-button-2");
  }

  async verifyWISH005ComputerProductHasCompareButton() {
    await this.navigate("/build-your-own-computer");
    await this.verifyVisible(".add-to-compare-list-button");
  }

  async verifyWISH006LaptopProductHasCompareButton() {
    await this.navigate("/141-inch-laptop");
    await this.verifyVisible(".add-to-compare-list-button");
  }

  async verifyWISH007CompareProductsPageOpens() {
    await this.navigate("/compareproducts");
    await this.verifyTitle(/Compare Products/);
    await this.verifyBodyText("Compare products");
  }

  async verifyWISH008RecentlyViewedProductsPageOpens() {
    await this.navigate("/recentlyviewedproducts");
    await this.verifyTitle(/Recently Viewed Products/);
    await this.verifyBodyText("Recently viewed products");
  }

  async verifyWISH009NewProductsPageOpens() {
    await this.navigate("/newproducts");
    await this.verifyTitle(/Recently Added Products/);
    await this.verifyCountAtLeast(".product-grid .item-box", 5);
  }

  async verifyWISH010ProductPageExposesEmailAFriendAction() {
    await this.navigate("/141-inch-laptop");
    await this.verifyVisible(".email-a-friend-button");
  }

  async verifyWISH011EmailAFriendPageOpens() {
    await this.navigate("/productemailafriend/31");
    await this.verifyTitle(/Email A Friend/);
    await this.verifyBodyText("Email a friend");
  }

  async verifyWISH012EmailAFriendFormHasFriendEmailField() {
    await this.navigate("/productemailafriend/31");
    await this.verifyVisible("#FriendEmail");
    await this.verifyVisible("#YourEmailAddress");
  }

  async verifyWISH013EmailAFriendFormHasMessageAndSendButton() {
    await this.navigate("/productemailafriend/31");
    await this.verifyVisible("#PersonalMessage");
    await this.verifyVisible(".send-email-a-friend-button");
  }

  async verifyWISH014CompareProductsFooterLinkIsAvailable() {
    await this.navigate("/");
    await this.verifyVisible("a[href=\"/compareproducts\"]");
    await this.verifyBodyText("Compare products list");
  }

  async verifyWISH015WishlistFooterLinkIsAvailable() {
    await this.navigate("/");
    await this.verifyVisible("a[href=\"/wishlist\"]");
    await this.verifyBodyText("Wishlist");
  }
}
