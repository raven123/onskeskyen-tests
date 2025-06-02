import { test, expect } from '../fixtures/WishListFixture';
import { StringUtil } from '../utils/StringUtil';

import path from 'path';
import * as dotenv from 'dotenv';

var stringUtil = new StringUtil();

dotenv.config({ path: path.resolve(__dirname, '../env/local.env') });

test('Add a wishlist, add a Wish inside that wishlist,  then archive it from the list',{tag:['@smoke','@regression']}, async ({ overviewPage, wishlistOverviewPage, page }) => {

  //Add a wishlist 
  await overviewPage.navigate();
  await overviewPage.clickCreateWishListButton();
  await overviewPage.assertCreateWishlistPopupHeaderVisible();
  var randomWishlistName = await stringUtil.generateRandomString(15);
  await overviewPage.setWishlistName(randomWishlistName);
  await overviewPage.clickCreateWishlistPopupConfirmButton();
  await overviewPage.assertCreateWishlistSuccessMessageIsVisible();
  await overviewPage.assertWishlistCardIsVisible(randomWishlistName);

  // open wishlist overview and add a Wish inside that wishlist
  await overviewPage.openWishlistCard(randomWishlistName);
  await wishlistOverviewPage.assertNewWishCardIsVisible();
  await wishlistOverviewPage.clickNewWishCard();
  await wishlistOverviewPage.assertAddWishPopupHeaderIsVisible();
  await wishlistOverviewPage.fillAddWishPopupUrlInput(process.env.PRODUCT_URL);
  await wishlistOverviewPage.assertAddWishModalHeaderIsVisible();
  var wishName = await wishlistOverviewPage.getAddWishModalNameText();
  await wishlistOverviewPage.clickAddWishModalSubmitButton();
  await wishlistOverviewPage.assertAddWishSuccessMessageIsVisible();
  await wishlistOverviewPage.assertNewWishCardIsVisible();
  await wishlistOverviewPage.assertWishCardTitleIsVisible(wishName);

  //remove the wish
  await wishlistOverviewPage.clickWishCardMoreButton();
  await wishlistOverviewPage.assertDeleteWishButtonIsVisible();
  await wishlistOverviewPage.clickDeleteWishButton();
  await wishlistOverviewPage.assertDeleteWishModalHeaderIsVisible();
  await wishlistOverviewPage.clickDeleteWishModalDeleteWishButton();
  await wishlistOverviewPage.assertDeleteWishModalDeleteButtonIsVisible();
  await wishlistOverviewPage.clickDeleteWishModalDeleteButton();
  await wishlistOverviewPage.assertDeleteWishSuccessMessageIsVisible();
  
  // archive the wishlist
  await wishlistOverviewPage.clickMoreButton();
  await wishlistOverviewPage.assertArchiveWishlistButtonIsVisible();
  await wishlistOverviewPage.clickArchiveWishlistButton();
  await wishlistOverviewPage.assertArchiveWishlistModalHeaderIsVisible();
  await wishlistOverviewPage.assertArchiveWishlistModalArchiveButtonIsVisible();
  await wishlistOverviewPage.clickArchiveWishlistModalArchiveButton();
  await wishlistOverviewPage.assertArchiveWishlistSuccessMessageIsVisible();
  // assert that the wishlist is archived

});
