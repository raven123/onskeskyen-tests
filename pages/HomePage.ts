import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';
export class HomePage {
    private readonly page: Page;
    private readonly title: Locator;
    private readonly changeLanguageButton: Locator;
    private readonly loginButton: Locator;
    private readonly selectedLanguage: Locator;
    private readonly loginWithEmailButton: Locator;
    private readonly declineCookiesButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.changeLanguageButton = page.getByTestId(locators.homePage.changeLanguageButton);
        this.loginButton = page.getByText(locators.homePage.loginButton);
        this.selectedLanguage = page.locator(locators.homePage.selectedLanguage);
        this.loginWithEmailButton = page.locator(locators.homePage.loginWithEmailButton);
        this.declineCookiesButton = page.locator(locators.homePage.dismissCookieBannerButton);
    }

    async navigate() {
        await this.page.goto('/');
    }

    async assertTitle() {
        await expect(this.title).toBeVisible();
    }

    async assertChangeLangaugeButtonVisible() {
        await expect(this.changeLanguageButton).toBeVisible();
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async clickChangeLanguageButton() {
        await this.changeLanguageButton.click();
    }

    async assertSelectedLanguage(expectedLanguage: string) {
        await expect(this.selectedLanguage).toHaveText(expectedLanguage);
    }

    async assertLoginButtonVisible() {
        await expect(this.loginButton).toBeVisible();
    }

    async assertLoginWithEmailButtonVisible() {
        await expect(this.loginWithEmailButton).toBeVisible();
    }

    async clickLoginWithEmailButton() {
        await this.loginWithEmailButton.click();
    }

    async assertDeclineCookiesButtonVisible() {
        await expect(this.declineCookiesButton).toBeVisible();
    }

    async clickDeclineCookiesButton() {
        await this.declineCookiesButton.click();
    }
}