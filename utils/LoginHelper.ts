import { BrowserContext, FullConfig } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { LanguageSelectorPage } from '../pages/LanguageSelectorPage';
import { OverviewPage } from '../pages/OverviewPage';

/**
 * Logs in a user with the provided email and password, and sets the language.
 * @param {BrowserContext} context - The Playwright browser context.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @param {string} [language='English'] - The language to set (default is 'English').
 */
export async function loginWithUser(context: BrowserContext, email: string, password: string, language: string = 'English') {
  const page = await context.newPage();
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const languageSelectorPage = new LanguageSelectorPage(page);
  const overviewPage = new OverviewPage(page);
  const baseURL= 'https://onskeskyen.dk';

  await page.goto(baseURL); // Replace with your actual base URL

  await homePage.assertDeclineCookiesButtonVisible();
  await homePage.clickDeclineCookiesButton();

  await homePage.assertChangeLangaugeButtonVisible();
  await homePage.clickChangeLanguageButton();
  
  await languageSelectorPage.assertEnglishSelectorVisible();
  await languageSelectorPage.selectEnglishLanguage();


  await homePage.assertSelectedLanguage(language);
  await homePage.assertLoginButtonVisible();
  await homePage.clickLoginButton();
  await homePage.assertLoginWithEmailButtonVisible();
  await homePage.clickLoginWithEmailButton();

  await loginPage.login(email, password);

  await overviewPage.assertProfileButtonVisible();

  await page.close();
}
