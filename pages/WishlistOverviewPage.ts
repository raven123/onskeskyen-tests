import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';

export class WishlistOverviewPage {
    private readonly page: Page;
    private readonly moreButton: Locator;
    private readonly newWishCard: Locator;
    private readonly addWishPopupHeader: Locator;
    private readonly addWishPopupUrlInput: Locator;
    private readonly addWishModalHeader: Locator;
    private readonly addWishModalSubmitButton: Locator;
    private readonly addWishModalNameText: Locator;
    private readonly wishCardMoreButton: Locator;
    private readonly deleteWishButton: Locator;
    private readonly deleteWishModalHeader: Locator;
    private readonly deleteWishModalDeleteWishButton: Locator;
    private readonly deleteWishModalDeleteButton: Locator;
    private readonly deleteWishSuccessMessage: Locator;
    private readonly archiveWishlistButton: Locator;
    private readonly archiveWishlistModalHeader: Locator;
    private readonly archiveWishlistModalArchiveButton: Locator;
    private readonly archiveWishlistSuccessMessage: Locator;
    private readonly addWishSuccessMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.moreButton = page.getByTestId(locators.wishlistOverviewPage.moreButton);
        this.newWishCard = page.locator(locators.wishlistOverviewPage.newWishCard);
        this.addWishPopupHeader = page.locator(locators.wishlistOverviewPage.addWishPopupHeader);
        this.addWishPopupUrlInput = page.locator(locators.wishlistOverviewPage.addWishPopupUrlInput);
        this.addWishModalHeader = page.locator(locators.wishlistOverviewPage.addWishModalHeader);
        this.addWishModalSubmitButton = page.getByTestId(locators.wishlistOverviewPage.addWishModalSubmitButton);
        this.addWishModalNameText = page.getByTestId(locators.wishlistOverviewPage.addWishModalNameText);
        this.wishCardMoreButton = page.locator(locators.wishlistOverviewPage.wishCardMoreButton);
        this.deleteWishButton = page.getByText(locators.wishlistOverviewPage.deleteWishButton);
        this.deleteWishModalHeader = page.locator(locators.wishlistOverviewPage.deleteWishModalHeader);
        this.deleteWishModalDeleteWishButton = page.locator(locators.wishlistOverviewPage.deleteWishModalDeleteWishButton);
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
        await expect(this.page.getByText(name)).toBeVisible();

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
        return await this.addWishModalNameText.inputValue();
    }
    async fillAddWishPopupUrlInput(url: string) {
        await this.addWishPopupUrlInput.fill(url);
    }
    async assertAddWishSuccessMessageIsVisible() {
        await expect(this.addWishSuccessMessage).toBeVisible();
        await this.addWishSuccessMessage.waitFor({ state: 'hidden' });
    }
    async clickDeleteWishModalDeleteWishButton() {
        await this.deleteWishModalDeleteWishButton.click();
    }
}