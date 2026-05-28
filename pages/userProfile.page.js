// @ts-check
import { BasePage } from './base.page.js';

export class UserProfilePage extends BasePage {
  async verifyUSER001MyAccountPageRequiresLoginForGuest() {
    await this.navigate("/customer/info");
    await this.verifyHeading("Welcome, Please Sign In!");
  }

  async verifyUSER002OrderHistoryPageRequiresLoginForGuest() {
    await this.navigate("/customer/orders");
    await this.verifyHeading("Welcome, Please Sign In!");
  }

  async verifyUSER003AddressesPageRequiresLoginForGuest() {
    await this.navigate("/customer/addresses");
    await this.verifyHeading("Welcome, Please Sign In!");
  }

  async verifyUSER004LoginPageSupportsReturningCustomerSection() {
    await this.navigate("/login");
    await this.verifyBodyText("Returning Customer");
    await this.verifyVisible("#Email");
  }

  async verifyUSER005FooterExposesMyAccountLink() {
    await this.navigate("/");
    await this.verifyVisible("a[href=\"/customer/info\"]");
    await this.verifyBodyText("My account");
  }

  async verifyUSER006FooterExposesOrdersLink() {
    await this.navigate("/");
    await this.verifyVisible("a[href=\"/customer/orders\"]");
    await this.verifyBodyText("Orders");
  }

  async verifyUSER007FooterExposesAddressesLink() {
    await this.navigate("/");
    await this.verifyVisible("a[href=\"/customer/addresses\"]");
    await this.verifyBodyText("Addresses");
  }

  async verifyUSER008RegisterPageShowsAccountCreationForm() {
    await this.navigate("/register");
    await this.verifyHeading("Register");
    await this.verifyVisible("#register-button");
  }

  async verifyUSER009RegisterPageShowsPersonalDetailsFields() {
    await this.navigate("/register");
    await this.verifyVisible("#FirstName");
    await this.verifyVisible("#LastName");
  }

  async verifyUSER010RegisterPageShowsEmailField() {
    await this.navigate("/register");
    await this.verifyVisible("#Email");
  }

  async verifyUSER011RegisterPageShowsPasswordSetupFields() {
    await this.navigate("/register");
    await this.verifyVisible("#Password");
    await this.verifyVisible("#ConfirmPassword");
  }

  async verifyUSER012LoginPageProvidesRegisterButtonForNewUser() {
    await this.navigate("/login");
    await this.verifyVisible(".register-button");
    await this.verifyBodyText("New Customer");
  }

  async verifyUSER013LoginPageProvidesForgotPasswordLink() {
    await this.navigate("/login");
    await this.verifyBodyText("Forgot password?");
  }

  async verifyUSER014PasswordRecoveryPageSupportsAccountRecovery() {
    await this.navigate("/passwordrecovery");
    await this.verifyVisible("#Email");
    await this.verifyVisible(".password-recovery-button");
  }

  async verifyUSER015SitemapIncludesAccountLinks() {
    await this.navigate("/sitemap");
    await this.verifyBodyText("My account");
    await this.verifyBodyText("Orders");
  }
}
