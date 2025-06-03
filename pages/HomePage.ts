import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';

/**
 * @author: ravikumar.rai
 */
export class HomePage {
    private readonly page: Page;
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

    /**
     * Navigate to the home page
     */
    async navigate() {
        await this.page.goto('/');
    }

    /**
     * Asserts that the change language button is visible
     */
    async assertChangeLangaugeButtonVisible() {
        await expect(this.changeLanguageButton).toBeVisible();
    }

    /**
     *  Clicks the login button on the home page
     */
    async clickLoginButton() {
        await this.loginButton.click();
    }

    /**
     * Clicks the change language button on the home page
     */
    async clickChangeLanguageButton() {
        await this.changeLanguageButton.click();
    }

    /**
     *  Asserts that the selected language matches the expected language
     * @param expectedLanguage 
     */
    async assertSelectedLanguage(expectedLanguage: string) {
        await expect(this.selectedLanguage).toHaveText(expectedLanguage);
    }

    /**
     * Asserts that the login button is visible
     */
    async assertLoginButtonVisible() {
        await expect(this.loginButton).toBeVisible();
    }

    /**
     * Asserts that the login with email button is visible
     */
    async assertLoginWithEmailButtonVisible() {
        await expect(this.loginWithEmailButton).toBeVisible();
    }

    /**
     * Clicks the login with email button
     */
    async clickLoginWithEmailButton() {
        await this.loginWithEmailButton.click();
    }

    /**
     * Asserts that the decline cookies button is visible
     */
    async assertDeclineCookiesButtonVisible() {
        await expect(this.declineCookiesButton).toBeVisible();
    }

    /**
     * Clicks the decline cookies button
     */
    async clickDeclineCookiesButton() {
        await this.declineCookiesButton.click();
    }
}