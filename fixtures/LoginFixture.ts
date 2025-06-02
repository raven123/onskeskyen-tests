
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import path from 'path';
import * as dotenv from 'dotenv';

// Load local.env
dotenv.config({ path: path.resolve('../env/local.env') });

// Declare the types of your fixtures.
type MyFixtures = {
  loginPage: LoginPage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    // Set up the fixture.
    const loginPage = new LoginPage(page);
    
    await loginPage.login(process.env.USER1_EMAIL!, process.env.USER1_PASSWORD!);

    // Use the fixture value in the test.
    await use(loginPage);
  },
});
export { expect } from '@playwright/test';