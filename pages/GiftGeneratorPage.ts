import { expect, type Locator, type Page } from '@playwright/test';
import locators from './locators.json';

export class GiftGeneratorPage {
    private readonly page: Page;
    private readonly productGrid: Locator;
    private readonly productTitle: Locator;
    private productName: string;


    constructor(page: Page) {
        this.page = page;
        this.productGrid = page.locator(locators.giftGeneratorPage.productGrid);
        this.productTitle = page.locator(locators.giftGeneratorPage.productTitle);
    }

    async verifyProductGridIsVisible() {
        await expect(this.productGrid).toBeVisible();
    }

    async selectFirstProductFromGrid() {
        const firstProduct = this.productGrid.first();
        await expect(firstProduct).toBeVisible();
        this.productName = await this.productTitle.first().textContent();
        await firstProduct.click();
    }

    async getSelectedProductName(): Promise<string> {
        return this.productName;
    }

} 