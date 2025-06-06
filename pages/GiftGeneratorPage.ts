import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';

/**
 * @author: ravikumar.rai
 */
export class GiftGeneratorPage {
    private readonly page: Page;
    private readonly productGrid: Locator;
    private readonly productTitle: Locator;
    private productName: string;


    constructor(page: Page) {
        this.page = page;
        this.productGrid = page.locator(locators.giftGeneratorPage.productGrid).first();
        this.productTitle = page.locator(locators.giftGeneratorPage.productTitle).first();
    }

    /**
     *  method to assert if the product grid is visible
     */
    async assertProductGridIsVisible() {
        await expect(this.productGrid).toBeVisible();
    }

    /**
     *  Method to select first product from the Grid
     */
    async selectFirstProductFromGrid() {
        const firstProduct = this.productGrid;
        await expect(firstProduct).toBeVisible();
        this.productName = await this.productTitle.textContent();
        await firstProduct.click();
    }

    /**
     * method to return the name of the selected product
     * @returns {Promise<string>} - Returns the name of the selected product
     */
    async getSelectedProductName(): Promise<string> {
        return this.productName;
    }

} 