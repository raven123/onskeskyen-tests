import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';

/**
 *  @author: ravikumar.rai
 */
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

    /**
     * Constructor for FriendPage class
     * @param {Page} page - The Playwright Page object
     */
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
    }

    /**
     *  method to add a friend
     */
    async addFriend() {
        await this.addFriendButton.click();
    }

    /**
     * method to assert if the Add Friend button is visible
     */
    async assertAddFriendButtonIsVisible() {
        await expect(this.addFriendButton).toBeVisible();
        // Adding screenshot assertion for Add Friend button
        await expect(this.addFriendButton).toHaveScreenshot('add_friend_button.png');
    }

    /**
     * method to assert if the header is visible
     */
    async assertHeader() {
        await expect(this.header).toBeVisible();
    }

    /**
     * This method fills the search field with the friend's name
     * @param friendName - The name of the friend to search for
     * 
     */
    async searchForFriend(friendName: string) {
        await this.searchField.fill(friendName);
    }

    /**
     *  This method asserts that the friend's name is visible in the UI
     *  and takes a screenshot of the friend's name for verification.
     * @param name - The name of the friend to assert visibility
     */
    async assertFriendNameIsVisible(name: string) {
        await expect(this.friendName).toBeVisible();
        await expect(this.friendName).toHaveText(name);
        // Adding screenshot assertion for friend name
        await expect(this.friendName).toHaveScreenshot('friend_name.png');
    }

    /**
     * This method clicks the pending requests button to view friend requests
     */
    async clickPendingRequestsButton() {
        await this.pendingRequestsButton.click();
    }

    /**
     * This method asserts that the requests tab is visible
     */
    async assertRequestsTabIsVisible() {
        await expect(this.requestsTab).toBeVisible();
    }

    /**
     * This method clicks the requests tab to view pending friend requests
     */
    async clickRequestsTab() {
        await this.requestsTab.click();
    }

    /**
     * This method asserts the count of pending friend requests
     * @param count - The expected count of pending requests
     */
    async assertPendingRequestsCount(count: number) {
        await expect(this.pendingRequestsCount).toBeVisible();
        await expect(this.pendingRequestsCount).toHaveText(count.toString());
    }

    /**
     * This method confirms a friend request by clicking the confirm button
     */
    async confirmFriendRequest() {
        // add screenshot assertion for confirm request button
        await expect(this.confirmRequestButton).toBeVisible();
        await expect(this.confirmRequestButton).toHaveScreenshot('confirm_request_button.png');
        await this.confirmRequestButton.click();
    }

    /**
     * This method asserts that the friends tab is visible
     */
    async assertFriendsTabIsVisible() {
        await expect(this.friendsTab).toBeVisible();
    }

    /**
     * This method clicks the friends tab to view the list of friends
     */
    async assertFriendCardIsVisible() {
        await expect(this.friendCard).toBeVisible();
        // Adding screenshot assertion for friend card 
        await expect(this.friendCard).toHaveScreenshot('friend_card.png');
    }

    /**
     * method to click the more button on the friend card
     * This button typically reveals additional options for the friend, such as removing them.
     */
    async clickMoreButton() {
        await this.moreButton.click();
    }

    /**
     * This method asserts that the friends tab is visible
     */
    async clickFriendsTab() {
        await this.friendsTab.click();
    }

    /**
     * This method asserts that the remove friend button is visible
     */
    async assertRemoveFriendButtonIsVisible() {
        await expect(this.removeFriendButton).toBeVisible();
        // Adding screenshot assertion for remove friend button
        await expect(this.removeFriendButton).toHaveScreenshot('remove_friend_button.png');
    }

    /**
     * This method clicks the remove friend button to initiate the removal process
     */
    async clickRemoveFriendButton() {
        await this.removeFriendButton.click();
    }

    /**
     * This method asserts that the remove friend popup header is visible
     */
    async assertRemoveFriendPopupIsVisible() {
        await expect(this.removeFriendPopupHeader).toBeVisible();
    }

    /**
     * This method clicks the remove friend button on the popup to confirm the removal
     */
    async clickRemoveFriendButtonOnPopup() {
        // Adding screenshot assertion for remove friend button on popup
        await expect(this.removeFriendButtonOnPopup).toHaveScreenshot('remove_friend_button_on_popup.png');
        await this.removeFriendButtonOnPopup.click();
    }

    /**
     * This method asserts that the close button is visible
     */
    async assertCloseButtonIsVisible() {
        await expect(this.closeButton).toBeVisible();
    }

    /**
     * This method clicks the close button to close the friend card or popup
     */
    async clickCloseButton() {
        await this.closeButton.click();
    }

    /**
     * This method asserts that the friend card is not visible
     */
    async assertFriendCardIsNotVisible() {
        await expect(this.friendCard).toBeHidden();
    }

    /**
     * This method removes a friend if they exist in the friend list.
     * It checks if the friend's name is visible, clicks the more button,
     * asserts the visibility of the remove friend button, and then
     * confirms the removal through a popup.
     * @param name - The name of the friend to be removed
     */
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
