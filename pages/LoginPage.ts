import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';
export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator(locators.loginPage.emailField);
    this.passwordInput = page.getByTestId(locators.loginPage.passwordField);
    this.loginButton = page.locator(locators.loginPage.loginButton);
    this.errorMessage = page.locator(locators.loginPage.errorMessage);
  }

  async assertEmailInputVisible() {
    await expect(this.emailInput).toBeVisible();
  }

  async assertPasswordInputVisible() {
    await expect(this.passwordInput).toBeVisible();
  }

  async assertLoginButtonVisible() {
    await expect(this.loginButton).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.assertEmailInputVisible();
    await this.assertPasswordInputVisible();
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertErrorMessage(expectedMessage: string) {
    await expect(this.errorMessage).toHaveText(expectedMessage);
  }
}