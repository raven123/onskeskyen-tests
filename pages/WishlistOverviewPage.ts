import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';

/**
 *  @author: ravikumar.rai
 */
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

    /**
     * Asserts that the more button is visible
     */
    async assertMoreButtonIsVisible() {
        await expect(this.moreButton).toBeVisible();
    }

    /**
     * Clicks the more button
     */
    async clickMoreButton() {
        await this.moreButton.click();
    }

    /**
     * Asserts that the new wish card is visible
     */
    async assertNewWishCardIsVisible() {
        await expect(this.newWishCard).toBeVisible();
    }

    /**
     * Clicks the new wish card
     */
    async clickNewWishCard() {
        await this.newWishCard.isEnabled()
        await this.newWishCard.click();
    }

    /**
     * Asserts that the add wish popup header is visible
     */
    async assertAddWishPopupHeaderIsVisible() {
        await expect(this.addWishPopupHeader).toBeVisible();
    }

    /**
     * Asserts that the add wish popup URL input is visible
     */
    async assertAddWishPopupUrlInputIsVisible() {
        await expect(this.addWishPopupUrlInput).toBeVisible();
    }

    /**
     *  method to assert that the add wish modal header is visible
     */
    async assertAddWishModalHeaderIsVisible() {
        await expect(this.addWishModalHeader).toBeVisible();
    }

    /**
     *  method to click the "Add Wish" modal submit button
     */
    async clickAddWishModalSubmitButton() {
        await this.addWishModalSubmitButton.click();
    }

    /**
     * method to assert that Wish card with spoecified name is visible
     * @param name - The name of the wish card added to WishList
     */
    async assertWishCardTitleIsVisible(name: string) {
        await expect(this.page.getByText(name)).toBeVisible();

    }

    /**
     *  assert that more button is visible on the wish card
     */
    async assertWishCardMoreButtonIsVisible() {
        await expect(this.wishCardMoreButton).toBeVisible();
    }

    /**
     * Clicks the more button on the wish card
     */
    async clickWishCardMoreButton() {
        await this.wishCardMoreButton.click();
    }

    /**
     * Asserts that the delete wish button is visible
     */
    async assertDeleteWishButtonIsVisible() {
        await expect(this.deleteWishButton).toBeVisible();
    }

    /**
     * Clicks the delete wish button
     */
    async clickDeleteWishButton() {
        await this.deleteWishButton.click();
    }

    /**
     * Asserts that the delete wish modal header is visible
     */
    async assertDeleteWishModalHeaderIsVisible() {
        await expect(this.deleteWishModalHeader).toBeVisible();
    }

    /**
     * Asserts that the delete wish modal delete button is visible
     */
    async assertDeleteWishModalDeleteButtonIsVisible() {
        await expect(this.deleteWishModalDeleteButton).toBeVisible();
    }

    /**
     * Clicks the delete wish modal delete button
     */
    async clickDeleteWishModalDeleteButton() {
        await this.deleteWishModalDeleteButton.click();
    }

    /**
     * Asserts that the delete wish success message is visible
     */
    async assertDeleteWishSuccessMessageIsVisible() {
        await expect(this.deleteWishSuccessMessage).toBeVisible();
    }

    /**
     * Asserts that the archive wishlist button is visible
     */
    async assertArchiveWishlistButtonIsVisible() {
        await expect(this.archiveWishlistButton).toBeVisible();
    }

    /**
     * Clicks the archive wishlist button
     */
    async clickArchiveWishlistButton() {
        await this.archiveWishlistButton.click();
    }

    /**
     * Asserts that the archive wishlist modal header is visible
     */
    async assertArchiveWishlistModalHeaderIsVisible() {
        await expect(this.archiveWishlistModalHeader).toBeVisible();
    }

    /**
     * Asserts that the archive wishlist modal archive button is visible
     */
    async assertArchiveWishlistModalArchiveButtonIsVisible() {
        await expect(this.archiveWishlistModalArchiveButton).toBeVisible();
    }

    /**
     * Clicks the archive wishlist modal archive button
     */
    async clickArchiveWishlistModalArchiveButton() {
        await this.archiveWishlistModalArchiveButton.click();
    }

    /**
     * Asserts that the archive wishlist success message is visible
     */
    async assertArchiveWishlistSuccessMessageIsVisible() {
        await expect(this.archiveWishlistSuccessMessage).toBeVisible();
    }

    /**
     * method to return the text of the wish from the wish modal window
     * @returns {Promise<string>} - The name of the wish from the modal window
     */
    async getAddWishModalNameText(): Promise<string> {
        return await this.addWishModalNameText.inputValue();
    }

    /**
     * Fills the add wish popup URL input with the specified URL
     * @param url - The URL to fill in the input
     */
    async fillAddWishPopupUrlInput(url: string) {
        await this.addWishPopupUrlInput.fill(url);
    }

    /**
     *  asserts that the add wish success message is visible
     * and waits for it to be hidden after a short period
     */
    async assertAddWishSuccessMessageIsVisible() {
        await expect(this.addWishSuccessMessage).toBeVisible();
        await this.addWishSuccessMessage.waitFor({ state: 'hidden' });
    }

    /**
     * This method is used to confirm the deletion of a wish in the modal dialog
     */
    async clickDeleteWishModalDeleteWishButton() {
        await this.deleteWishModalDeleteWishButton.click();
    }
}