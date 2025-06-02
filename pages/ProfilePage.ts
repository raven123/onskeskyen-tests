import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';

export class ProfilePage {
  readonly page: Page;
  readonly profileName: Locator;
  readonly profileEmail: Locator;
  readonly logoutButton: Locator;
  readonly reservationsCard: Locator;


  constructor(page: Page) {
    this.page = page;
    this.profileName = page.locator(locators.profilePage.profileName);
    this.profileEmail = page.locator(locators.profilePage.profileEmail);
    this.logoutButton = page.getByText(locators.profilePage.logoutButton);
    this.reservationsCard = page.getByText(locators.profilePage.reservationsCard);
  }

  async assertProfileName(expectedName: string) {
    await expect(this.profileName).toBeVisible();
    await expect(this.profileName).toHaveText(expectedName);
  }

  async assertProfileEmail(expectedEmail: string) {
    await expect(this.profileEmail).toBeVisible();
    await expect(this.profileEmail).toHaveText(expectedEmail);
  }
  async clickLogoutButton() {
    await this.logoutButton.click();
  }
  async assertLogoutButtonIsVisible() {
    await expect(this.logoutButton).toBeVisible();
  }
  async assertReservationsCardIsVisible() {
    await expect(this.reservationsCard).toBeVisible();
  }
  async clickReservationsCard() {
    await this.reservationsCard.click();
  }
}