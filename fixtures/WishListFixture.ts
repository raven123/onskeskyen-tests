import { test as base } from '@playwright/test';
import { OverviewPage } from '../pages/OverviewPage';
import { WishlistOverviewPage }  from '../pages/WishlistOverviewPage';

type MyFixtures = {
  overviewPage: OverviewPage;
  wishlistOverviewPage: WishlistOverviewPage;
};

export const test = base.extend<MyFixtures>({
  
  overviewPage: async ({ page }, use) => {
    // Set up the fixture.
    const overviewPage = new OverviewPage(page);
    await use(overviewPage);

  },
  wishlistOverviewPage: async ({ page }, use) => {
    // Set up the fixture.
    const wishlistOverviewPage = new WishlistOverviewPage(page);
    await use(wishlistOverviewPage);
  }

});
export { expect } from '@playwright/test';