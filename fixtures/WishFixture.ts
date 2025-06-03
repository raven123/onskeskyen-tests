import { test as base } from '@playwright/test';
import { OverviewPage } from '../pages/OverviewPage';
import { ProductOverviewPage } from '../pages/ProductOverviewPage';
import { GiftGeneratorPage } from '../pages/GiftGeneratorPage';

type WishFixture = {
    overviewPage: OverviewPage;
    productOverviewPage: ProductOverviewPage;
    giftGeneratorPage: GiftGeneratorPage;
};

export const test = base.extend<WishFixture>({

    overviewPage: async ({ page }, use) => {
        // Set up the fixture.
        var overviewPage = new OverviewPage(page);
        await overviewPage.navigate();
        await use(overviewPage);

    },
    productOverviewPage: async ({ page }, use) => {
        // Set up the fixture.
        var productOverviewPage = new ProductOverviewPage(page);
        await use(productOverviewPage);
    },
    giftGeneratorPage: async ({ page }, use) => {
        // Set up the fixture.
        var giftGeneratorPage = new GiftGeneratorPage(page);
        await use(giftGeneratorPage);
    }

});
export { expect } from '@playwright/test';