import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';

/**
 * @author: ravikumar.rai
 */
export class OverviewPage {
    //locators for the OverviewPage
    private readonly page: Page;
    private readonly addWishButton: Locator;
    private readonly friendsButton: Locator;
    private readonly profileButton: Locator;
    private readonly createWishListButton: Locator;
    private readonly friendWishlistCard: Locator;
    private readonly wishListCardMoreButton: Locator;
    private readonly reserveRequest: Locator;
    private readonly reserveConfirmation: Locator;
    private readonly itemReservedText: Locator;
    private readonly removeReservationButton: Locator;
    private readonly removeReservationConfirmation: Locator;
    private readonly giftGeneratorTab: Locator;
    private readonly createWishlistPopupHeader: Locator;
    private readonly createWishlistPopupConfirmButton: Locator;
    private readonly createWishlistName: Locator;
    private readonly wishlistSuccessMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addWishButton = page.getByTestId(locators.overviewPage.newWishButton);
        this.friendsButton = page.getByTestId(locators.overviewPage.friendsButton);
        this.profileButton = page.locator(locators.overviewPage.profileButton);
        this.createWishListButton = page.locator(locators.overviewPage.createWishListButton);
        this.friendWishlistCard = page.getByTestId(locators.overviewPage.friendWishlistCard);
        this.wishListCardMoreButton = page.locator(locators.overviewPage.wishListCardMoreButton);
        this.reserveRequest = page.getByTestId(locators.overviewPage.reserveRequest);
        this.reserveConfirmation = page.getByTestId(locators.overviewPage.reserveConfirmation);
        this.itemReservedText = page.getByTestId(locators.overviewPage.itemReservedText);
        this.removeReservationButton = page.getByTestId(locators.overviewPage.removeReservationButton);
        this.removeReservationConfirmation = page.locator(locators.overviewPage.removeReservationConfirmation);
        this.giftGeneratorTab = page.getByTestId(locators.overviewPage.giftGeneratorTab);
        this.createWishlistPopupHeader = page.locator(locators.overviewPage.createWishlistPopupHeader);
        this.createWishlistPopupConfirmButton = page.getByTestId(locators.overviewPage.createWishlistPopupConfirmButton);
        this.createWishlistName = page.getByTestId(locators.overviewPage.createWishlistName);
        this.wishlistSuccessMessage = page.getByText(locators.overviewPage.wishlistSuccessMessage);
    }

    /**
     * Navigate to the overview page
     */
    async navigate() {
        await this.page.goto('/overview');
    }

    /**
     * Clicks the Add Wish button
     */
    async clickAddWishButton() {
        await this.addWishButton.click();
    }

    /**
     * Clicks the Friends button
     */
    async clickFriendsButton() {
        await this.friendsButton.click();
    }

    /**
     * Clicks the Profile button
     */
    async clickProfileButton() {
        await this.profileButton.click();
    }

    /**
     * Clicks the Create Wish List button
     */
    async clickCreateWishListButton() {
        await this.createWishListButton.click();
    }

    /**
     * Clicks the Friend Wishlist Card
     */
    async clickFriendWishlistCard() {
        await this.friendWishlistCard.click();
    }

    /**
     * Clicks the Wish List Card More Button
     */
    async clickWishListCardMoreButton() {
        await this.wishListCardMoreButton.click();
    }

    /**
     * Clicks the Reserve Request
     */
    async clickReserveRequest() {
        await this.reserveRequest.click();
    }

    /**
     * Clicks the Reserve Confirmation
     */
    async clickReserveConfirmation() {
        await this.reserveConfirmation.click();
    }

    /**
     * Clicks the Remove Reservation Confirmation
     */
    async clickRemoveReservationButton() {
        await this.removeReservationButton.click();
    }

    /**
     * Clicks the gift generator tab
     */
    async clickGiftGeneratorTab() {
        await this.giftGeneratorTab.click();
    }

    /**
     *  clicks the add wish button
     */
    async assertAddWishButtonVisible() {
        await expect(this.addWishButton).toBeVisible();
    }

    /**
     * asserts that the friends button is visible
     */
    async assertFriendsButtonVisible() {
        await expect(this.friendsButton).toBeVisible();
    }

    /**
     * asserts that the profile button is visible
     */
    async assertProfileButtonVisible() {
        await expect(this.profileButton).toBeVisible();
    }

    /**
     * asserts that the create wish list button is visible
     */
    async assertCreateWishListButtonVisible() {
        await expect(this.createWishListButton).toBeVisible();
    }

    /**
     * asserts that the friend wishlist card is visible
     */
    async assertFriendWishlistCardVisible() {
        await expect(this.friendWishlistCard).toBeVisible();
    }

    /**
     * asserts that the wish list card more button is visible
     */
    async assertWishListCardMoreButtonVisible() {
        await expect(this.wishListCardMoreButton).toBeVisible();
    }

    /**
     * asserts that the reserve request is visible
     */
    async assertReserveRequestVisible() {
        await expect(this.reserveRequest).toBeVisible();
    }

    /**
     * asserts that the reserve confirmation is visible
     */
    async assertReserveConfirmationVisible() {
        await expect(this.reserveConfirmation).toBeVisible();
    }

    /**
     * asserts that the item reserved text is visible
     */
    async assertItemReservedTextVisible() {
        await expect(this.itemReservedText).toBeVisible();
    }

    /**
     * asserts that the remove reservation button is visible
     */
    async assertRemoveReservationButtonVisible() {
        await expect(this.removeReservationButton).toBeVisible();
    }

    /**
     * asserts that the remove reservation confirmation is visible
     */
    async assertRemoveReservationConfirmationVisible() {
        await expect(this.removeReservationConfirmation).toBeVisible();
    }

    /**
     * asserts that the gift generator tab is visible
     */
    async assertGiftGeneratorTabVisible() {
        await expect(this.giftGeneratorTab).toBeVisible();
    }

    /**
     * asserts that the create wishlist popup header is visible
     */
    async assertCreateWishlistPopupHeaderVisible() {
        await expect(this.createWishlistPopupHeader).toBeVisible();
    }

    /**
     * asserts that the create wishlist popup confirm button is visible
     */
    async assertCreateWishlistPopupConfirmButtonVisible() {
        await expect(this.createWishlistPopupConfirmButton).toBeVisible();
    }

    /**
     *  This method fills the wishlist name input field with the provided name.
     * @param name 
     */
    async setWishlistName(name: string) {
        await this.createWishlistName.fill(name);
    }

    /**
     * Clicks the Create Wishlist Popup Confirm Button
     */
    async clickCreateWishlistPopupConfirmButton() {
        await this.createWishlistPopupConfirmButton.click();
    }

    /**
     * Asserts that the Create Wishlist Popup Confirm Button is disabled
     */
    async assertWishlistCardIsVisible(name: string) {
        await expect(this.page.getByText(name)).toBeVisible();
    }

    /**
     * This method clicks on the wishlist card with the specified name.
     * @param name 
     */
    async openWishlistCard(name: string) {
        await this.page.getByText(name).click();
    }

    /**
     * Asserts that the wishlist success message is visible
     */
    async assertCreateWishlistSuccessMessageIsVisible() {
        return expect(this.wishlistSuccessMessage).toBeVisible();
    }
}