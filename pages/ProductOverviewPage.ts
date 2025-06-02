import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';
export class ProductOverviewPage {
    readonly page: Page;
    readonly addToWishlistButton: Locator;
    readonly selectWishList: Locator;
    readonly wishSuccessMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToWishlistButton = page.locator(locators.productOverviewPage.addToWishlistButton);
        this.selectWishList = page.getByTestId(locators.productOverviewPage.selectWishList);
        this.wishSuccessMessage = page.locator(locators.productOverviewPage.wishSuccessMessage);
    }

    async addToWishlist() {
        await this.addToWishlistButton.click();
    }
    async selectWishlist(wishlistName: string) {
        await this.selectWishList.selectOption({ label: wishlistName });
    }
    async verifyWishSuccessMessage(expectedMessage: string) {
        await expect(this.wishSuccessMessage).toBeVisible();
        await expect(this.wishSuccessMessage).toHaveText(expectedMessage);
    }
    async assertAddToWishlistButtonIsVisible() {
        await expect(this.addToWishlistButton).toBeVisible();
    }
    
}