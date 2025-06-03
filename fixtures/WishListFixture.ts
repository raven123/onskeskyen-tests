import { test as base } from '@playwright/test';
import { OverviewPage } from '../pages/OverviewPage';
import { WishlistOverviewPage }  from '../pages/WishlistOverviewPage';

type WishListFixture = {
  overviewPage: OverviewPage;
  wishlistOverviewPage: WishlistOverviewPage;
};

export const test = base.extend<WishListFixture>({
  
  overviewPage: async ({ page }, use) => {
    // Set up the fixture.
    var overviewPage = new OverviewPage(page);
    await use(overviewPage);

  },
  wishlistOverviewPage: async ({ page }, use) => {
    // Set up the fixture.
    var wishlistOverviewPage = new WishlistOverviewPage(page);
    await use(wishlistOverviewPage);
  }

});
export { expect } from '@playwright/test';