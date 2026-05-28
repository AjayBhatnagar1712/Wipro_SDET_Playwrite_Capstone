// @ts-check
import { expect } from '@playwright/test';

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(route) {
    await this.page.goto(route, { waitUntil: 'domcontentloaded' });
  }

  async verifyTitle(value) {
    await expect(this.page).toHaveTitle(value);
  }

  async verifyUrl(value) {
    await expect(this.page).toHaveURL(value);
  }

  async verifyHeading(value) {
    await expect(this.page.locator('h1').first()).toContainText(value);
  }

  async verifyBodyText(value) {
    await expect(this.page.locator('body')).toContainText(value);
  }

  async verifyVisible(selector) {
    await expect(this.page.locator(selector).first()).toBeVisible();
  }

  async verifyEnabled(selector) {
    await expect(this.page.locator(selector).first()).toBeEnabled();
  }

  async verifyChecked(selector) {
    await expect(this.page.locator(selector).first()).toBeChecked();
  }

  async verifyValue(selector, value) {
    await expect(this.page.locator(selector).first()).toHaveValue(value);
  }

  async verifyContainsText(selector, value) {
    await expect(this.page.locator(selector).first()).toContainText(value);
  }

  async verifyCountAtLeast(selector, value) {
    const count = await this.page.locator(selector).count();
    expect(count).toBeGreaterThanOrEqual(value);
  }
}
