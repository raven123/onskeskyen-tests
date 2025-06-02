import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';

export class LanguageSelectorPage {
    readonly page: Page;
    readonly englishSelector: Locator;
    readonly backButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.englishSelector = page.getByText(locators.languageSelectorPage.englishSelector);
        this.backButton = page.locator(locators.languageSelectorPage.backButton);
    }

    async assertEnglishSelectorVisible() {
        await expect(this.englishSelector).toBeVisible();
    }

    async assertBackButtonVisible() {
        await expect(this.backButton).toBeVisible();
    }

    async selectEnglishLanguage() {
        await this.englishSelector.click();
    }
}