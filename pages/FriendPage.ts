import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';

export class FriendPage {
    readonly page: Page;
    readonly addFriendButton: Locator;
    readonly header: Locator;
    readonly searchField: Locator;
    readonly friendName: Locator;
    readonly pendingRequestsButton: Locator;
    readonly requestsTab: Locator;
    readonly pendingRequestsCount: Locator;
    readonly confirmRequestButton: Locator;
    readonly friendsTab: Locator;
    readonly friendCard: Locator;
    readonly moreButton: Locator;
    readonly removeFriendButton: Locator;
    readonly removeFriendPopupHeader: Locator;
    readonly removeFriendButtonOnPopup: Locator;
    readonly closeButton: Locator;
    readonly pendingStateText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addFriendButton = page.locator(locators.friendsPage.addFriendButton);
        this.header = page.locator(locators.friendsPage.header);
        this.searchField = page.getByTestId(locators.friendsPage.searchField);
        this.friendName = page.locator(locators.friendsPage.friendName);
        this.pendingRequestsButton = page.locator(locators.friendsPage.pendingRequestsButton);
        this.requestsTab = page.locator(locators.friendsPage.requestsTab);
        this.pendingRequestsCount = page.locator(locators.friendsPage.pendingRequestsCount);
        this.confirmRequestButton = page.locator(locators.friendsPage.confirmRequestButton);
        this.friendsTab = page.locator(locators.friendsPage.friendsTab);
        this.friendCard = page.locator(locators.friendsPage.friendCard);
        this.moreButton = page.locator(locators.friendsPage.moreButton);
        this.removeFriendButton = page.locator(locators.friendsPage.removeFriendButton);
        this.removeFriendPopupHeader = page.locator(locators.friendsPage.removeFriendPopupHeader);
        this.removeFriendButtonOnPopup = page.locator(locators.friendsPage.removeFriendButtonOnPopup);
        this.closeButton = page.locator(locators.friendsPage.closeButton);
        this.pendingStateText = page.getByText(locators.friendsPage.pendingStateText);
    }


    async addFriend() {
        await this.addFriendButton.click();
    }

    async assertAddFriendButtonIsVisible() {
        await expect(this.addFriendButton).toBeVisible();
    }

    async assertHeader() {
        await expect(this.header).toBeVisible();
    }

    async searchForFriend(friendName: string) {
        await this.searchField.fill(friendName);
        await this.searchField.press('Enter');
    }

    async assertFriendNameIsVisible(name:string) {
        await expect(this.friendName).toBeVisible();
        await expect(this.friendName).toBeVisible();
        await expect(this.friendName).toHaveText(name);
    }

    async clickPendingRequestsButton() {
        await this.pendingRequestsButton.click();
    }

    async assertRequestsTabIsVisible() {
        await expect(this.requestsTab).toBeVisible();
    }

    async clickRequestsTab() {
        await this.requestsTab.click();
    }

    async assertPendingRequestsCount(count: number) {
        await expect(this.pendingRequestsCount).toBeVisible();
        await expect(this.pendingRequestsCount).toHaveText(count.toString());
    }

    async confirmFriendRequest() {
        await this.confirmRequestButton.click();
    }

    async assertFriendsTabIsVisible() {
        await expect(this.friendsTab).toBeVisible();
    }

    async assertFriendCardIsVisible() {
        await expect(this.friendCard).toBeVisible();
    }

    async clickMoreButton() {
        await this.moreButton.click();
    }

    async clickFriendsTab() {
        await this.friendsTab.click();
    }

    async assertRemoveFriendButtonIsVisible() {
        await expect(this.removeFriendButton).toBeVisible();
    }

    async clickRemoveFriendButton() {
        await this.removeFriendButton.click();
    }

    async assertRemoveFriendPopupIsVisible() {
        await expect(this.removeFriendPopupHeader).toBeVisible();
    }

    async clickRemoveFriendButtonOnPopup() {
        await this.removeFriendButtonOnPopup.click();
    }

    async assertCloseButtonIsVisible() {
        await expect(this.closeButton).toBeVisible();
    }

    async clickCloseButton() {
        await this.closeButton.click();
    }

    async assertFriendCardIsNotVisible() {
        await expect(this.friendCard).toBeHidden();
    }
}
