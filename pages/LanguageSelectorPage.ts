import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';

/**
 *  @author ravikumar.rai
 */
export class LanguageSelectorPage {
    private readonly page: Page;
    private readonly englishSelector: Locator;
    private readonly backButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.englishSelector = page.getByText(locators.languageSelectorPage.englishSelector);
        this.backButton = page.locator(locators.languageSelectorPage.backButton);
    }

    /**
     *  method to assert if the English language selector is visible
     */
    async assertEnglishSelectorVisible() {
        await expect(this.englishSelector).toBeVisible();
    }

    /**
     * method to assert if the back button is visible
     */
    async assertBackButtonVisible() {
        await expect(this.backButton).toBeVisible();
    }

    /**
     * Clicks the back button to return to the previous page
     */
    async selectEnglishLanguage() {
        await this.englishSelector.click();
    }
}