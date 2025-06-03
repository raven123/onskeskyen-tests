import { test as base } from '@playwright/test';
import { FriendPage } from '../pages/FriendPage';
import { OverviewPage } from '../pages/OverviewPage';
import { ProfilePage }  from '../pages/ProfilePage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { LanguageSelectorPage } from '../pages/LanguageSelectorPage';

type FriendFixture = {
  friendPage: FriendPage;
  overviewPage: OverviewPage;
  profilePage: ProfilePage;
  homePage: HomePage;
  loginPage: LoginPage;
  languageSelectorPage: LanguageSelectorPage;
};

// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<FriendFixture>({
  friendPage: async ({ page }, use) => {
    // Set up the fixture.
    var friendPage = new FriendPage(page);
    await use(friendPage);
  },

  overviewPage: async ({ page }, use) => {
    // Set up the fixture.
    var overviewPage = new OverviewPage(page);
    await use(overviewPage);

  },
  profilePage: async ({ page }, use) => {
    // Set up the fixture.
    var profilePage = new ProfilePage(page);
    await use(profilePage);
  },
  homePage: async ({ page }, use) => {
    // Set up the fixture.
    var homePage = new HomePage(page);
    await use(homePage);
  },
  loginPage: async ({ page }, use) => {
    // Set up the fixture.
    var loginPage = new LoginPage(page);
    await use(loginPage);
  },
  languageSelectorPage: async ({ page }, use) => {
    // Set up the fixture.
    var languageSelectorPage = new LanguageSelectorPage(page);
    await use(languageSelectorPage);
  }

});
export { expect } from '@playwright/test';