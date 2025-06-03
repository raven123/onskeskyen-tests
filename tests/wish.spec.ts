import { test, expect } from '../fixtures/WishFixture';

const WISHLIST_NAME = 'Favorite List';
const WISH_SUCCESS_MESSAGE = 'Wish created successfully in';

test('Go to Gift generator, select a product and then add that to your wishlist',{tag:['@smoke','@regression']}, async ({ overviewPage, giftGeneratorPage, productOverviewPage, page }) => {

    await overviewPage.assertGiftGeneratorTabVisible();

    // click on the Gift generator tab
    await overviewPage.clickGiftGeneratorTab();

    // assert that the gift generator page is visible
    await giftGeneratorPage.assertProductGridIsVisible();
    // select the first product from the grid
    await giftGeneratorPage.selectFirstProductFromGrid();
    // store the name of the selected product
    var selectedProductName = await giftGeneratorPage.getSelectedProductName();

    // assert that the product overview page is visible
    await productOverviewPage.assertAddToWishlistButtonIsVisible();
    // click on the add to wishlist button
    await productOverviewPage.addToWishlist();
    // select the wishlist from the list
    await productOverviewPage.selectWishlistByName(WISHLIST_NAME);
    // verify the success message
    await productOverviewPage.verifyWishSuccessMessage(WISH_SUCCESS_MESSAGE + ' ' + WISHLIST_NAME);
    
});