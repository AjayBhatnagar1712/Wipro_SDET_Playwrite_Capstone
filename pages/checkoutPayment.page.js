// @ts-check
import { BasePage } from './base.page.js';

export class CheckoutPaymentPage extends BasePage {
  async verifyPAY001EmptyCartKeepsUserOnShoppingCartPage() {
    await this.navigate("/cart");
    await this.verifyHeading("Shopping cart");
  }

  async verifyPAY002EmptyCartBlocksCheckoutWithEmptyCartMessage() {
    await this.navigate("/cart");
    await this.verifyBodyText("Your Shopping Cart is empty!");
  }

  async verifyPAY003CartPageIsAvailableBeforeCheckout() {
    await this.navigate("/cart");
    await this.verifyBodyText("Cart");
    await this.verifyBodyText("Address");
  }

  async verifyPAY004CartPageShowsPaymentStep() {
    await this.navigate("/cart");
    await this.verifyBodyText("Payment");
  }

  async verifyPAY005CartPageShowsConfirmStep() {
    await this.navigate("/cart");
    await this.verifyBodyText("Confirm");
  }

  async verifyPAY006CartPageShowsCompleteStep() {
    await this.navigate("/cart");
    await this.verifyBodyText("Complete");
  }

  async verifyPAY007GiftCardProductHasRecipientNameField() {
    await this.navigate("/25-virtual-gift-card");
    await this.verifyVisible("#giftcard_2_RecipientName");
  }

  async verifyPAY008GiftCardProductHasRecipientEmailField() {
    await this.navigate("/25-virtual-gift-card");
    await this.verifyVisible("#giftcard_2_RecipientEmail");
  }

  async verifyPAY009GiftCardProductHasSenderFields() {
    await this.navigate("/25-virtual-gift-card");
    await this.verifyVisible("#giftcard_2_SenderName");
    await this.verifyVisible("#giftcard_2_SenderEmail");
  }

  async verifyPAY010GiftCardProductHasMessageField() {
    await this.navigate("/25-virtual-gift-card");
    await this.verifyVisible("#giftcard_2_Message");
  }

  async verifyPAY011GiftCardProductHasAddToCartButton() {
    await this.navigate("/25-virtual-gift-card");
    await this.verifyVisible("#add-to-cart-button-2");
  }

  async verifyPAY012GiftCardProductShowsFixedPrice() {
    await this.navigate("/25-virtual-gift-card");
    await this.verifyBodyText("25.00");
  }

  async verifyPAY013BookProductShowsPriceInformation() {
    await this.navigate("/computing-and-internet");
    await this.verifyBodyText("Price: 10.00");
  }

  async verifyPAY014LaptopProductShowsPriceInformation() {
    await this.navigate("/141-inch-laptop");
    await this.verifyBodyText("1590.00");
  }

  async verifyPAY015SmartphoneProductShowsPriceInformation() {
    await this.navigate("/smartphone");
    await this.verifyBodyText("100.00");
  }
}
