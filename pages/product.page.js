// @ts-check
import { BasePage } from './base.page.js';

export class ProductPage extends BasePage {
  async verifyPROD001HomePageShowsWelcomeContentAndFeaturedProducts() {
    await this.navigate("/");
    await this.verifyBodyText("Welcome to our store");
    await this.verifyBodyText("Featured products");
  }

  async verifyPROD002TopNavigationExposesCatalogCategories() {
    await this.navigate("/");
    await this.verifyVisible("a[href=\"/books\"]");
    await this.verifyVisible("a[href=\"/computers\"]");
    await this.verifyVisible("a[href=\"/electronics\"]");
  }

  async verifyPROD003BooksCategoryShowsProductCards() {
    await this.navigate("/books");
    await this.verifyHeading("Books");
    await this.verifyCountAtLeast(".product-grid .item-box", 3);
  }

  async verifyPROD004ComputersCategoryShowsSubcategories() {
    await this.navigate("/computers");
    await this.verifyHeading("Computers");
    await this.verifyBodyText("Desktops");
    await this.verifyBodyText("Notebooks");
  }

  async verifyPROD005ElectronicsCategoryShowsSubcategories() {
    await this.navigate("/electronics");
    await this.verifyHeading("Electronics");
    await this.verifyBodyText("Camera, photo");
    await this.verifyBodyText("Cell phones");
  }

  async verifyPROD006ApparelAndShoesCategoryShowsProducts() {
    await this.navigate("/apparel-shoes");
    await this.verifyHeading("Apparel & Shoes");
    await this.verifyCountAtLeast(".product-grid .item-box", 5);
  }

  async verifyPROD007DigitalDownloadsCategoryOpens() {
    await this.navigate("/digital-downloads");
    await this.verifyHeading("Digital downloads");
    await this.verifyCountAtLeast(".product-grid .item-box", 3);
  }

  async verifyPROD008JewelryCategoryOpensWithProductCards() {
    await this.navigate("/jewelry");
    await this.verifyHeading("Jewelry");
    await this.verifyCountAtLeast(".product-grid .item-box", 3);
  }

  async verifyPROD009GiftCardsCategoryOpensWithProducts() {
    await this.navigate("/gift-cards");
    await this.verifyHeading("Gift Cards");
    await this.verifyCountAtLeast(".product-grid .item-box", 4);
  }

  async verifyPROD010BuildYourOwnComputerProductDetailsAreVisible() {
    await this.navigate("/build-your-own-computer");
    await this.verifyHeading("Build your own computer");
    await this.verifyVisible("#product_attribute_16_5_4");
    await this.verifyVisible("#product_attribute_16_6_5");
  }

  async verifyPROD011LaptopProductDetailsAreVisible() {
    await this.navigate("/141-inch-laptop");
    await this.verifyHeading("14.1-inch Laptop");
    await this.verifyBodyText("Availability: In stock");
    await this.verifyBodyText("1590.00");
  }

  async verifyPROD012SmartphoneProductDetailsAreVisible() {
    await this.navigate("/smartphone");
    await this.verifyHeading("Smartphone");
    await this.verifyBodyText("Newest Tricentis smartphone");
    await this.verifyBodyText("100.00");
  }

  async verifyPROD013BookProductPageShowsPriceAndShippingText() {
    await this.navigate("/computing-and-internet");
    await this.verifyHeading("Computing and Internet");
    await this.verifyBodyText("Free shipping");
    await this.verifyBodyText("10.00");
  }

  async verifyPROD014CategoryPageHasSortAndPageSizeControls() {
    await this.navigate("/books");
    await this.verifyVisible("#products-orderby");
    await this.verifyVisible("#products-pagesize");
  }

  async verifyPROD015SearchPageReturnsComputerProducts() {
    await this.navigate("/search?q=computer");
    await this.verifyHeading("Search");
    await this.verifyVisible("#Q");
    await this.verifyBodyText("Build your own computer");
  }
}
