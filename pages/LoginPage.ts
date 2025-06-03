import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';

/**
 *  @author: ravikumar.rai
 */
export class LoginPage {
  private readonly page: Page;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator(locators.loginPage.emailField);
    this.passwordInput = page.getByTestId(locators.loginPage.passwordField);
    this.loginButton = page.locator(locators.loginPage.loginButton);
    this.errorMessage = page.locator(locators.loginPage.errorMessage);
  }

  /**
   *  assert that the email input field is visible
   */
  async assertEmailInputVisible() {
    await expect(this.emailInput).toBeVisible();
  }

  /**
   *  assert that the password input field is visible
   */
  async assertPasswordInputVisible() {
    await expect(this.passwordInput).toBeVisible();
  }

  /**
   *  assert that the login button is visible
   */
  async assertLoginButtonVisible() {
    await expect(this.loginButton).toBeVisible();
  }

  /**
   *  method to login with provided username and password
   * @param username 
   * @param password 
   */
  async login(username: string, password: string) {
    await this.assertEmailInputVisible();
    await this.assertPasswordInputVisible();
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /**
   * method to assert that the error message is visible
   * @param expectedMessage 
   */
  async assertErrorMessage(expectedMessage: string) {
    await expect(this.errorMessage).toHaveText(expectedMessage);
  }
}