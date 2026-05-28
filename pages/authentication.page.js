// @ts-check
import { BasePage } from './base.page.js';

export class AuthenticationPage extends BasePage {
  async verifyAUTH001LoginPageOpensWithCorrectTitleAndHeading() {
    await this.navigate("/login");
    await this.verifyTitle(/Login/);
    await this.verifyHeading("Welcome, Please Sign In!");
  }

  async verifyAUTH002LoginPageShowsEmailAndPasswordFields() {
    await this.navigate("/login");
    await this.verifyVisible("#Email");
    await this.verifyVisible("#Password");
  }

  async verifyAUTH003LoginPageShowsLoginButton() {
    await this.navigate("/login");
    await this.verifyVisible(".login-button");
    await this.verifyEnabled(".login-button");
  }

  async verifyAUTH004LoginPageShowsRememberMeAndForgotPasswordOptions() {
    await this.navigate("/login");
    await this.verifyVisible("#RememberMe");
    await this.verifyBodyText("Forgot password?");
  }

  async verifyAUTH005LoginPageShowsRegistrationOptionForNewCustomer() {
    await this.navigate("/login");
    await this.verifyBodyText("New Customer");
    await this.verifyVisible(".register-button");
  }

  async verifyAUTH006PasswordRecoveryPageOpensCorrectly() {
    await this.navigate("/passwordrecovery");
    await this.verifyTitle(/Password Recovery/);
    await this.verifyHeading("Password recovery");
  }

  async verifyAUTH007PasswordRecoveryPageHasEmailFieldAndRecoverButton() {
    await this.navigate("/passwordrecovery");
    await this.verifyVisible("#Email");
    await this.verifyVisible(".password-recovery-button");
  }

  async verifyAUTH008RegisterPageOpensCorrectly() {
    await this.navigate("/register");
    await this.verifyTitle(/Register/);
    await this.verifyHeading("Register");
  }

  async verifyAUTH009RegisterPageShowsGenderChoices() {
    await this.navigate("/register");
    await this.verifyVisible("#gender-male");
    await this.verifyVisible("#gender-female");
  }

  async verifyAUTH010RegisterPageShowsPersonalDetailFields() {
    await this.navigate("/register");
    await this.verifyVisible("#FirstName");
    await this.verifyVisible("#LastName");
    await this.verifyVisible("#Email");
  }

  async verifyAUTH011RegisterPageShowsPasswordFields() {
    await this.navigate("/register");
    await this.verifyVisible("#Password");
    await this.verifyVisible("#ConfirmPassword");
  }

  async verifyAUTH012RegisterButtonIsAvailable() {
    await this.navigate("/register");
    await this.verifyVisible("#register-button");
    await this.verifyEnabled("#register-button");
  }

  async verifyAUTH013ProtectedAccountPageRedirectsGuestUserToLogin() {
    await this.navigate("/customer/info");
    await this.verifyTitle(/Login/);
    await this.verifyHeading("Welcome, Please Sign In!");
  }

  async verifyAUTH014ProtectedOrdersPageRedirectsGuestUserToLogin() {
    await this.navigate("/customer/orders");
    await this.verifyTitle(/Login/);
    await this.verifyHeading("Welcome, Please Sign In!");
  }

  async verifyAUTH015HeaderExposesLoginAndRegisterLinks() {
    await this.navigate("/");
    await this.verifyVisible("a[href=\"/login\"]");
    await this.verifyVisible("a[href=\"/register\"]");
  }
}
