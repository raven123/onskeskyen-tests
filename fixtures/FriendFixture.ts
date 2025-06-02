import { test as base } from '@playwright/test';
import { FriendPage } from '../pages/FriendPage';
import { OverviewPage } from '../pages/OverviewPage';
import { ProfilePage }  from '../pages/ProfilePage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { LanguageSelectorPage } from '../pages/LanguageSelectorPage';

type MyFixtures = {
  friendPage: FriendPage;
  overviewPage: OverviewPage;
  profilePage: ProfilePage;
  homePage: HomePage;
  loginPage: LoginPage;
  languageSelectorPage: LanguageSelectorPage;
};

// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  friendPage: async ({ page }, use) => {
    // Set up the fixture.
    const friendPage = new FriendPage(page);
    await use(friendPage);
  },

  overviewPage: async ({ page }, use) => {
    // Set up the fixture.
    const overviewPage = new OverviewPage(page);
    await use(overviewPage);

  },
  profilePage: async ({ page }, use) => {
    // Set up the fixture.
    const profilePage = new ProfilePage(page);
    await use(profilePage);
  },
  homePage: async ({ page }, use) => {
    // Set up the fixture.
    const homePage = new HomePage(page);
    await use(homePage);
  },
  loginPage: async ({ page }, use) => {
    // Set up the fixture.
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  languageSelectorPage: async ({ page }, use) => {
    // Set up the fixture.
    const languageSelectorPage = new LanguageSelectorPage(page);
    await use(languageSelectorPage);
  }

});
export { expect } from '@playwright/test';