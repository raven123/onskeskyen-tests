import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';

/**
 *  @author: ravikumar.rai
 */
export class ProductOverviewPage {
    private readonly page: Page;
    private readonly addToWishlistButton: Locator;
    private readonly wishSuccessMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToWishlistButton = page.locator(locators.productOverviewPage.addToWishlistButton).first();
        this.wishSuccessMessage = page.locator(locators.productOverviewPage.wishSuccessMessage).nth(1);
    }

    /**
     *  method to click the "Add to Wishlist" button from the first suggestion site
     */
    async addToWishlist() {
        await this.addToWishlistButton.click();
    }

    /**
     *  method to select a wishlist from the dropdown
     * @param wishlistName - The name of the wishlist to select
     */
     async selectWishlistByName(wishlistName: string) {
        await expect(this.page.getByText(wishlistName)).toBeEnabled();
        await this.page.getByText(wishlistName).click();
    }

   /**
    * This method verifies that the success message appears after adding an item to the wishlist.
    * @param expectedMessage - The expected success message after adding to wishlist
    * 
    */
    async verifyWishSuccessMessage(expectedMessage: string) {
        await expect(this.wishSuccessMessage).toBeVisible();
        await expect(this.wishSuccessMessage).toHaveText(expectedMessage);
    }

    /**
     *  method to assert that the "Add to Wishlist" button is visible
     */
    async assertAddToWishlistButtonIsVisible() {
        await expect(this.addToWishlistButton).toBeVisible();
    }

}