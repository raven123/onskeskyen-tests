import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';
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

    async navigate() {
        await this.page.goto('/overview');
    }

    async clickAddWishButton() {
        await this.addWishButton.click();
    }
    async clickFriendsButton() {
        await this.friendsButton.click();
    }
    async clickProfileButton() {
        await this.profileButton.click();
    }
    async clickCreateWishListButton() {
        await this.createWishListButton.click();
    }
    async clickFriendWishlistCard() {
        await this.friendWishlistCard.click();
    }
    async clickWishListCardMoreButton() {
        await this.wishListCardMoreButton.click();
    }
    async clickReserveRequest() {
        await this.reserveRequest.click();
    }
    async clickReserveConfirmation() {
        await this.reserveConfirmation.click();
    }
    async clickRemoveReservationButton() {
        await this.removeReservationButton.click();
    }
    async clickGiftGeneratorTab() {
        await this.giftGeneratorTab.click();
    }
    async assertAddWishButtonVisible() {
        await expect(this.addWishButton).toBeVisible();
    }
    async assertFriendsButtonVisible() {
        await expect(this.friendsButton).toBeVisible();
    }
    async assertProfileButtonVisible() {
        await expect(this.profileButton).toBeVisible();
    }
    async assertCreateWishListButtonVisible() {
        await expect(this.createWishListButton).toBeVisible();
    }
    async assertFriendWishlistCardVisible() {
        await expect(this.friendWishlistCard).toBeVisible();
    }
    async assertWishListCardMoreButtonVisible() {
        await expect(this.wishListCardMoreButton).toBeVisible();
    }
    async assertReserveRequestVisible() {
        await expect(this.reserveRequest).toBeVisible();
    }
    async assertReserveConfirmationVisible() {
        await expect(this.reserveConfirmation).toBeVisible();
    }
    async assertItemReservedTextVisible() {
        await expect(this.itemReservedText).toBeVisible();
    }
    async assertRemoveReservationButtonVisible() {
        await expect(this.removeReservationButton).toBeVisible();
    }
    async assertRemoveReservationConfirmationVisible() {
        await expect(this.removeReservationConfirmation).toBeVisible();
    }
    async assertGiftGeneratorTabVisible() {
        await expect(this.giftGeneratorTab).toBeVisible();
    }
    async assertCreateWishlistPopupHeaderVisible() {
        await expect(this.createWishlistPopupHeader).toBeVisible();
    }
    async assertCreateWishlistPopupConfirmButtonVisible() {
        await expect(this.createWishlistPopupConfirmButton).toBeVisible();
    }
    async setWishlistName(name: string) {
        await this.createWishlistName.fill(name);
    }
    async clickCreateWishlistPopupConfirmButton() {
        await this.createWishlistPopupConfirmButton.click();
    }
    async assertWishlistCardIsVisible(name: string) {
        await expect(this.page.getByText(name)).toBeVisible();
    }
    async openWishlistCard(name: string) {
        await this.page.getByText(name).click();
    }
    assertCreateWishlistSuccessMessageIsVisible() {
        return expect(this.wishlistSuccessMessage).toBeVisible();
    }
}