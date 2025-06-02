import { test, expect } from '../fixtures/FriendFixture';

import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../env/local.env') });

const FRIEND_HEADER_TEXT = 'Friends';
const FIRST_NAME = 'Ravi';
const LAST_NAME = 'Test 2';
const SEARCH_TEXT = FIRST_NAME + ' ' + LAST_NAME;
const language = 'English';

test('Add a friend, confirm the request and then remove friend from the list',{tag: ['@smoke', '@regression']}, async ({ friendPage,overviewPage,profilePage,loginPage,languageSelectorPage,homePage,page }) => {
 
  await overviewPage.navigate();
  await overviewPage.clickFriendsButton();  

  await friendPage.assertHeader();
  await friendPage.removeFriendIfExists(SEARCH_TEXT);
  // screenshot assertion to store initial state before adding a friend
  await expect(page).toHaveScreenshot('friends-list-initial.png');

  await friendPage.searchForFriend(SEARCH_TEXT);
  await friendPage.assertFriendNameIsVisible(SEARCH_TEXT);
  await friendPage.assertAddFriendButtonIsVisible();

  // Asssert that the friend card is visible before adding
  await expect(page).toHaveScreenshot('friend-card-overview.png');

  await friendPage.addFriend();
  await friendPage.clickCloseButton();

  await overviewPage.assertProfileButtonVisible();
  await overviewPage.clickProfileButton();
  await profilePage.assertLogoutButtonIsVisible();
  await profilePage.clickLogoutButton();

  await homePage.assertChangeLangaugeButtonVisible();
  await homePage.clickChangeLanguageButton();
  
  await languageSelectorPage.assertEnglishSelectorVisible();
  await languageSelectorPage.selectEnglishLanguage();


  await homePage.assertSelectedLanguage(language);
  await homePage.assertLoginButtonVisible();
  await homePage.clickLoginButton();
  await homePage.assertLoginWithEmailButtonVisible();
  await homePage.clickLoginWithEmailButton();

  await loginPage.login(process.env.USER2_EMAIL!, process.env.USER2_PASSWORD!);

  // Accept friend request
  await overviewPage.assertFriendsButtonVisible();
  await overviewPage.clickFriendsButton();
  await friendPage.assertHeader();
  await friendPage.clickRequestsTab();
  await friendPage.assertPendingRequestsCount(1);
  await friendPage.confirmFriendRequest();
  await friendPage.clickFriendsTab();
  await friendPage.assertFriendCardIsVisible();

  // Remove friend
  await friendPage.clickMoreButton();
  await friendPage.assertRemoveFriendButtonIsVisible();
  await friendPage.clickRemoveFriendButton();
  await friendPage.assertRemoveFriendPopupIsVisible();
  await friendPage.clickRemoveFriendButtonOnPopup();
  await friendPage.assertFriendCardIsNotVisible();
  await friendPage.clickCloseButton();

});
