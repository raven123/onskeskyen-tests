import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';

export class WishlistOverviewPage {
    readonly page: Page;
    readonly moreButton: Locator;
    readonly newWishCard: Locator;
    readonly addWishPopupHeader: Locator;
    readonly addWishPopupUrlInput: Locator;
    readonly addWishModalHeader: Locator;
    readonly addWishModalSubmitButton: Locator;
    readonly addWishModalNameText: Locator;
    readonly wishCardTitle: Locator;
    readonly wishCardMoreButton: Locator;
    readonly deleteWishButton: Locator;
    readonly deleteWishModalHeader: Locator;
    readonly deleteWishModalDeleteButton: Locator;
    readonly deleteWishSuccessMessage: Locator;
    readonly archiveWishlistButton: Locator;
    readonly archiveWishlistModalHeader: Locator;
    readonly archiveWishlistModalArchiveButton: Locator;
    readonly archiveWishlistSuccessMessage: Locator;
    readonly addWishSuccessMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.moreButton = page.getByTestId(locators.wishlistOverviewPage.moreButton);
        this.newWishCard = page.locator(locators.wishlistOverviewPage.newWishCard);
        this.addWishPopupHeader = page.locator(locators.wishlistOverviewPage.addWishPopupHeader);
        this.addWishPopupUrlInput = page.locator(locators.wishlistOverviewPage.addWishPopupUrlInput);
        this.addWishModalHeader = page.locator(locators.wishlistOverviewPage.addWishModalHeader);
        this.addWishModalSubmitButton = page.getByTestId(locators.wishlistOverviewPage.addWishModalSubmitButton);
        this.addWishModalNameText = page.getByTestId(locators.wishlistOverviewPage.addWishModalNameText);
        this.wishCardTitle = page.locator(locators.wishlistOverviewPage.wishCardTitle);
        this.wishCardMoreButton = page.locator(locators.wishlistOverviewPage.wishCardMoreButton);
        this.deleteWishButton = page.getByText(locators.wishlistOverviewPage.deleteWishButton);
        this.deleteWishModalHeader = page.locator(locators.wishlistOverviewPage.deleteWishModalHeader);
        this.deleteWishModalDeleteButton = page.locator(locators.wishlistOverviewPage.deleteWishModalDeleteButton);
        this.deleteWishSuccessMessage = page.getByText(locators.wishlistOverviewPage.deleteWishSuccessMessage);
        this.archiveWishlistButton = page.getByText(locators.wishlistOverviewPage.archiveWishlistButton);
        this.archiveWishlistModalHeader = page.locator(locators.wishlistOverviewPage.archiveWishlistModalHeader);
        this.archiveWishlistModalArchiveButton = page.locator(locators.wishlistOverviewPage.archiveWishlistModalArchiveButton);
        this.archiveWishlistSuccessMessage = page.getByText(locators.wishlistOverviewPage.archiveWishlistSuccessMessage);
        this.addWishSuccessMessage = page.locator(locators.wishlistOverviewPage.addWishSuccessMessage);
    }

    async assertMoreButtonIsVisible() {
        await expect(this.moreButton).toBeVisible();
    }
    async clickMoreButton() {
        await this.moreButton.click();
    }
    async assertNewWishCardIsVisible() {
        await expect(this.newWishCard).toBeVisible();
    }
    async clickNewWishCard() {
        await this.newWishCard.isEnabled()
        await this.newWishCard.click();
    }
    async assertAddWishPopupHeaderIsVisible() {
        await expect(this.addWishPopupHeader).toBeVisible();
    }
    async assertAddWishPopupUrlInputIsVisible() {
        await expect(this.addWishPopupUrlInput).toBeVisible();
    }
    async assertAddWishModalHeaderIsVisible() {
        await expect(this.addWishModalHeader).toBeVisible();
    }
    async assertAddWishModalSubmitButtonIsVisible() {
        await expect(this.addWishModalSubmitButton).toBeVisible();
    }
    async assertAddWishModalNameTextIsVisible() {
        await expect(this.addWishModalNameText).toBeVisible();
    }
    async clickAddWishModalSubmitButton() {
        await this.addWishModalSubmitButton.click();
    }
    async assertWishCardTitleIsVisible(name: string) {
        await expect(this.wishCardTitle).toBeVisible();
        await expect(this.wishCardTitle).toHaveText(name);
    }
    async assertWishCardMoreButtonIsVisible() {
        await expect(this.wishCardMoreButton).toBeVisible();
    }
    async clickWishCardMoreButton() {
        await this.wishCardMoreButton.click();
    }
    async assertDeleteWishButtonIsVisible() {
        await expect(this.deleteWishButton).toBeVisible();
    }
    async clickDeleteWishButton() {
        await this.deleteWishButton.click();
    }
    async assertDeleteWishModalHeaderIsVisible() {
        await expect(this.deleteWishModalHeader).toBeVisible();
    }
    async assertDeleteWishModalDeleteButtonIsVisible() {
        await expect(this.deleteWishModalDeleteButton).toBeVisible();
    }
    async clickDeleteWishModalDeleteButton() {
        await this.deleteWishModalDeleteButton.click();
    }
    async assertDeleteWishSuccessMessageIsVisible() {
        await expect(this.deleteWishSuccessMessage).toBeVisible();
    }
    async assertArchiveWishlistButtonIsVisible() {
        await expect(this.archiveWishlistButton).toBeVisible();
    }
    async clickArchiveWishlistButton() {
        await this.archiveWishlistButton.click();
    }
    async assertArchiveWishlistModalHeaderIsVisible() {
        await expect(this.archiveWishlistModalHeader).toBeVisible();
    }
    async assertArchiveWishlistModalArchiveButtonIsVisible() {
        await expect(this.archiveWishlistModalArchiveButton).toBeVisible();
    }
    async clickArchiveWishlistModalArchiveButton() {
        await this.archiveWishlistModalArchiveButton.click();
    }
    async assertArchiveWishlistSuccessMessageIsVisible() {
        await expect(this.archiveWishlistSuccessMessage).toBeVisible();
    }
    async getAddWishModalNameText(): Promise<string> {
        return await this.addWishModalNameText.textContent();
    }
    async fillAddWishPopupUrlInput(url: string) {
        await this.addWishPopupUrlInput.fill(url);
    }
    async assertAddWishSuccessMessageIsVisible() {
        await expect(this.addWishSuccessMessage).toBeVisible();
        await this.addWishSuccessMessage.waitFor({ state: 'hidden' });
    }
}