import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';

export class FriendPage {
    private readonly page: Page;
    private readonly addFriendButton: Locator;
    private readonly header: Locator;
    private readonly searchField: Locator;
    private readonly friendName: Locator;
    private readonly pendingRequestsButton: Locator;
    private readonly requestsTab: Locator;
    private readonly pendingRequestsCount: Locator;
    private readonly confirmRequestButton: Locator;
    private readonly friendsTab: Locator;
    private readonly friendCard: Locator;
    private readonly moreButton: Locator;
    private readonly removeFriendButton: Locator;
    private readonly removeFriendPopupHeader: Locator;
    private readonly removeFriendButtonOnPopup: Locator;
    private readonly closeButton: Locator;
    private readonly pendingStateText: Locator;

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
        // Adding screenshot assertion for Add Friend button
        await expect(this.addFriendButton).toHaveScreenshot('add_friend_button.png');
    }

    async assertHeader() {
        await expect(this.header).toBeVisible();
    }

    async searchForFriend(friendName: string) {
        await this.searchField.fill(friendName);
        await this.searchField.press('Enter');
    }

    async assertFriendNameIsVisible(name: string) {
        await expect(this.friendName).toBeVisible();
        await expect(this.friendName).toHaveText(name);
        // Adding screenshot assertion for friend name
        await expect(this.friendName).toHaveScreenshot('friend_name.png');
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
        // add screenshot assertion for confirm request button
        await expect(this.confirmRequestButton).toBeVisible();
        await expect(this.confirmRequestButton).toHaveScreenshot('confirm_request_button.png');
        await this.confirmRequestButton.click();
    }

    async assertFriendsTabIsVisible() {
        await expect(this.friendsTab).toBeVisible();
    }

    async assertFriendCardIsVisible() {
        await expect(this.friendCard).toBeVisible();
        // Adding screenshot assertion for friend card 
        await expect(this.friendCard).toHaveScreenshot('friend_card.png');
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
        // Adding screenshot assertion for remove friend button on popup
        await expect(this.removeFriendButtonOnPopup).toHaveScreenshot('remove_friend_button_on_popup.png');
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

    async removeFriendIfExists(name: string) {
        if (await this.friendName.isVisible() && (await this.friendName.textContent()) === name) {
            await this.assertFriendCardIsVisible();
            await this.clickMoreButton();
            await this.assertRemoveFriendButtonIsVisible();
            await this.clickRemoveFriendButton();
            await this.assertRemoveFriendPopupIsVisible();
            await this.clickRemoveFriendButtonOnPopup();
            await this.page.getByText(name).waitFor({ state: 'hidden' });
        }
    }
}
