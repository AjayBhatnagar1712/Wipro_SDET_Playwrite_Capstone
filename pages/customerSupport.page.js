// @ts-check
import { BasePage } from './base.page.js';

export class CustomerSupportPage extends BasePage {
  async verifyINFO001ContactUsPageOpens() {
    await this.navigate("/contactus");
    await this.verifyTitle(/Contact Us/);
    await this.verifyHeading("Contact Us");
  }

  async verifyINFO002ContactUsPageHasFullNameField() {
    await this.navigate("/contactus");
    await this.verifyVisible("#FullName");
  }

  async verifyINFO003ContactUsPageHasEmailField() {
    await this.navigate("/contactus");
    await this.verifyVisible("#Email");
  }

  async verifyINFO004ContactUsPageHasEnquiryTextarea() {
    await this.navigate("/contactus");
    await this.verifyVisible("#Enquiry");
  }

  async verifyINFO005ContactUsPageHasSubmitButton() {
    await this.navigate("/contactus");
    await this.verifyVisible(".contact-us-button");
  }

  async verifyINFO006SitemapPageOpens() {
    await this.navigate("/sitemap");
    await this.verifyTitle(/Sitemap/);
    await this.verifyHeading("Sitemap");
  }

  async verifyINFO007PrivacyNoticePageOpens() {
    await this.navigate("/privacy-policy");
    await this.verifyTitle(/Privacy/);
    await this.verifyHeading("Privacy policy");
  }

  async verifyINFO008ConditionsOfUsePageOpens() {
    await this.navigate("/conditions-of-use");
    await this.verifyTitle(/Conditions/);
    await this.verifyHeading("Conditions of use");
  }

  async verifyINFO009AboutUsPageOpens() {
    await this.navigate("/about-us");
    await this.verifyTitle(/About Us/);
    await this.verifyHeading("About Us");
  }

  async verifyINFO010NewsPageOpens() {
    await this.navigate("/news");
    await this.verifyTitle(/News Archive/);
    await this.verifyHeading("News");
  }

  async verifyINFO011BlogPageOpens() {
    await this.navigate("/blog");
    await this.verifyTitle(/Blog/);
    await this.verifyHeading("Blog");
  }

  async verifyINFO012FooterInformationLinksAreVisible() {
    await this.navigate("/");
    await this.verifyVisible("a[href=\"/sitemap\"]");
    await this.verifyVisible("a[href=\"/privacy-policy\"]");
  }

  async verifyINFO013FooterCustomerServiceLinksAreVisible() {
    await this.navigate("/");
    await this.verifyVisible("a[href=\"/contactus\"]");
    await this.verifyVisible("a[href=\"/shipping-returns\"]");
  }

  async verifyINFO014NewsletterSubscriptionControlsAreVisible() {
    await this.navigate("/");
    await this.verifyVisible("#newsletter-email");
    await this.verifyVisible("#newsletter-subscribe-button");
  }

  async verifyINFO015FooterSocialLinksAreVisible() {
    await this.navigate("/");
    await this.verifyVisible(".facebook a");
    await this.verifyVisible(".twitter a");
    await this.verifyVisible(".youtube a");
  }
}
