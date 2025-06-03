import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';

/**
 *  @author: ravikumar.rai
 */
export class ProfilePage {
  private readonly page: Page;
  private readonly profileName: Locator;
  private readonly profileEmail: Locator;
  private readonly logoutButton: Locator;
  private readonly reservationsCard: Locator;


  constructor(page: Page) {
    this.page = page;
    this.profileName = page.locator(locators.profilePage.profileName);
    this.profileEmail = page.locator(locators.profilePage.profileEmail);
    this.logoutButton = page.getByText(locators.profilePage.logoutButton);
    this.reservationsCard = page.getByText(locators.profilePage.reservationsCard);
  }

  /**
   * method to assert that the profile name is visible and matches the expected name
   * @param expectedName 
   */
  async assertProfileName(expectedName: string) {
    await expect(this.profileName).toBeVisible();
    await expect(this.profileName).toHaveText(expectedName);
  }

  /**
   * method to assert that the profile email is visible and matches the expected email
   * @param expectedEmail 
   */
  async assertProfileEmail(expectedEmail: string) {
    await expect(this.profileEmail).toBeVisible();
    await expect(this.profileEmail).toHaveText(expectedEmail);
  }

  /**
   * method to click the logout button
   */
  async clickLogoutButton() {
    await this.logoutButton.click();
  }

  /**
   * method to assert that the logout button is visible
   */
  async assertLogoutButtonIsVisible() {
    await expect(this.logoutButton).toBeVisible();
  }

  /**
   * method to assert that the reservations card is visible
   */
  async assertReservationsCardIsVisible() {
    await expect(this.reservationsCard).toBeVisible();
  }

  /**
   *  method to click the reservations card
   */
  async clickReservationsCard() {
    await this.reservationsCard.click();
  }
}