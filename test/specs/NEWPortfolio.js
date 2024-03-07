// import { expect } from "@wdio/globals";
// import LoginPage from "../pageobjects/loginPage.js/index.js";

// import { expect } from "@wdio/globals";
// import CheckoutPage from "../pageobjects/checkout.page.js";

// describe("Successful login", () => {
//   it("Should open the home page", async () => {
//     await LoginPage.open();
//     await expect(browser).toHaveTitle(expect.stringContaining("Swag Labs"));
//   });
//   it("Should accept approved user credentials for login.", async () => {
//     await LoginPage.login("standard_user", "secret_sauce");
//     await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
//   });
// });

// // - Verify Product Page Details: Confirm that Prices and descriptions match the intended values for buttons, Icons, Et cetera:
// describe("Portfoilio Test Suite: Verify Product page: Backpack .", () => {
//   it("Should verify that the header / link displays properly.", async () => {
//     const backpackLink = await $(`//*[@id="item_4_title_link"]/div`);
//     await expect(backpackLink).toExist();
//     expect.stringMatching("Sauce Labs Backpack");
//   });
//   it("Should verify that the backpack discription is properly displayed.", async () => {
//     const backpackDescription = await $(
//       `//*[@id="inventory_container"]/div/div[1]/div[2]/div[1]/div`
//     );
//     await expect(backpackDescription).toExist();
//     expect.stringMatching(
//       "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
//     );
//   });
//   it("Should verify that the backpack Price is properly displayed.", async () => {
//     const backpackPrice = await $(
//       `//*[@id="inventory_container"]/div/div[1]/div[2]/div[2]/div`
//     );
//     await expect(backpackPrice).toExist();
//     expect.stringMatching("$", "29.99");
//   });
// });
// describe("Portfoilio Test Suite: Verify Product page: Bike Light.", () => {
//   it("Should verify that the header/link displays properly.", async () => {
//     const bikeLightLink = await $(`//*[@id="item_0_title_link"]/div`);
//     await expect(bikeLightLink).toExist();
//     expect.stringMatching("Sauce Labs Bike Light");
//   });
//   it("Should verify that the product description is properly displayed.", async () => {
//     const bikeLightDescription = $(
//       `//*[@id="inventory_container"]/div/div[2]/div[2]/div[1]/div`
//     );
//     await expect(bikeLightDescription).toExist();
//     expect.stringMatching(
//       "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."
//     );
//   });
//   it("Should verify that the bike light price is properly displayed.", async () => {
//     const bikeLightPrice = $(
//       `//*[@id="inventory_container"]/div/div[2]/div[2]/div[2]/div`
//     );
//     await expect(bikeLightPrice).toExist();
//     expect.stringMatching("$", "9.99");
//   });
// });
// describe("Portfoilio Test Suite: Verify Product page: Bolt T-Shirt.", () => {
//   it("Should display the header / link for the Bolt t-shirt.", async () => {
//     const boltLink = $(`//*[@id="item_1_title_link"]/div`);
//     await expect(boltLink).toExist();
//     expect.stringMatching("Sauce Labs Bolt T-Shirt");
//   });
//   it("Should verify the product description for the bolt t-shirt.", async () => {
//     const boltDescription = $(
//       `//*[@id="inventory_container"]/div/div[3]/div[2]/div[1]/div`
//     );
//     await expect(boltDescription).toExist();
//     expect.stringMatching(
//       "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt."
//     );
//   });
//   it("Should display the price of the bolt t-shirt.", async () => {
//     const boltPrice = $(
//       `//*[@id="inventory_container"]/div/div[3]/div[2]/div[2]/div`
//     );
//     await expect(boltPrice).toExist();
//     expect.stringMatching("$", "15.99");
//   });
// });
// describe("Portfoilio Test Suite: Verify Product page: Fleece Jacket.", () => {
//   it("Should display the header / link for the Fleece Jacket.", async () => {
//     const jacketLink = $(`//*[@id="item_5_title_link"]/div`);
//     await expect(jacketLink).toExist();
//     expect.stringMatching("Sauce Labs Fleece Jacket");
//   });
//   it("Should verify the product description for the Fleece Jacket.", async () => {
//     const jacketDescription = $(
//       `//*[@id="//*[@id="inventory_container"]/div/div[4]/div[2]/div[1]/div"]/div/div[3]/div[2]/div[1]/div`
//     );
//     await expect(jacketDescription).toExist();
//     expect.stringMatching(
//       "Get your testIt's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.ing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt."
//     );
//   });
//   it("Should display the price of the Fleece Jacket.", async () => {
//     const jacketPrice = $(
//       `//*[@id="inventory_container"]/div/div[3]/div[2]/div[2]/div`
//     );
//     await expect(jacketPrice).toExist();
//     expect.stringMatching("$", "49.99");
//   });
// });
// describe("Portfoilio Test Suite: Verify Product page: Onesie.", () => {
//   it("Should display the header / link for the Onesie.", async () => {
//     const onesieLink = $(`//*[@id="item_2_title_link"]/div`);
//     await expect(onesieLink).toExist();
//     expect.stringMatching("Sauce Labs Onesie");
//   });
//   it("Should verify the product description for the Onesie.", async () => {
//     const onesieDescription = $(
//       `//*[@id="inventory_container"]/div/div[5]/div[2]/div[1]/div`
//     );
//     await expect(onesieDescription).toExist();
//     expect.stringMatching(
//       "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel."
//     );
//   });
//   it("Should display the price of the Onesie.", async () => {
//     const onesiePrice = $(
//       `//*[@id="inventory_container"]/div/div[5]/div[2]/div[2]/div`
//     );
//     await expect(onesiePrice).toExist();
//     expect.stringMatching("$", "7.99");
//   });
// });
// describe("Portfoilio Test Suite: Verify Product page: red T-Shirt.", () => {
//   it("Should display the header / link for the red t-shirt.", async () => {
//     const redLink = $(`//*[@id="item_3_title_link"]/div`);
//     await expect(redLink).toExist();
//     expect.stringMatching("Test.allTheThings() T-Shirt (Red)");
//   });
//   it("Should verify the product description for the red t-shirt.", async () => {
//     const redDescription = $(
//       `//*[@id="inventory_container"]/div/div[6]/div[2]/div[1]/div`
//     );
//     await expect(redDescription).toExist();
//     expect.stringMatching(
//       "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton."
//     );
//   });
//   it("Should display the price of the red t-shirt.", async () => {
//     const redPrice = $(
//       `//*[@id="inventory_container"]/div/div[3]/div[2]/div[2]/div`
//     );
//     await expect(redPrice).toExist();
//     expect.stringMatching("$", "15.99");
//   });
// });
// // - Sort products: Confirm all 4 sort methods can be clicked AND work as xdescribed
// describe("Portfolio Test Suite: Sort methods.", () => {
//   it("Should change the sort method to Z to A when clicked.", async () => {
//     await $(`//*[@id="header_container"]/div[2]/div/span/select`).selectByIndex(
//       1
//     );
//     await expect(
//       await (
//         await $(`//*[@id="header_container"]/div[2]/div/span/select`)
//       ).getValue()
//     ).toEqual("za");
//   });
//   it("Should change the sort method to Lowest to Highest when clicked", async () => {
//     await $(`//*[@id="header_container"]/div[2]/div/span/select`).selectByIndex(
//       2
//     );
//     await expect(
//       await (
//         await $(`//*[@id="header_container"]/div[2]/div/span/select`)
//       ).getValue()
//     ).toEqual("lohi");
//   });
//   it("Should change the sort method to Highest to Lowest when clicked.", async () => {
//     await $(`//*[@id="header_container"]/div[2]/div/span/select`).selectByIndex(
//       3
//     );
//     await expect(
//       await (
//         await $(`//*[@id="header_container"]/div[2]/div/span/select`)
//       ).getValue()
//     ).toEqual("hilo");
//   });
//   it("Should change the sort method to A to Z when clicked", async () => {
//     await $(`//*[@id="header_container"]/div[2]/div/span/select`).selectByIndex(
//       0
//     );
//     await expect(
//       await (
//         await $(`//*[@id="header_container"]/div[2]/div/span/select`)
//       ).getValue()
//     ).toEqual("az");
//   });
// });

// // - Add product to cart: verify all six (6) products can be added to a users cart
// describe("Portfolio Test Suite: add items to cart.", () => {
//   it("Should allow the backpack to be added to cart", async () => {
//     (await $(`//*[@id="add-to-cart-sauce-labs-backpack"]`)).click();
//     const backpackRemove = $(`//*[@id="remove-sauce-labs-backpack"]`);
//     await browser.pause(1000);
//     await expect(backpackRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("1");
//   });
//   it("Should allow the bike light to be added to the cart", async () => {
//     (await $(`//*[@id="add-to-cart-sauce-labs-bike-light"]`)).click();
//     const bikeLightRemove = $(`//*[@id="remove-sauce-labs-bike-light"]`);
//     await expect(bikeLightRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("2");
//   });
//   it("Should allow the Bolt T-shirt to be added to the cart", async () => {
//     (await $(`//*[@id="add-to-cart-sauce-labs-bolt-t-shirt"]`)).click();
//     const boltRemove = $(`//*[@id="remove-sauce-labs-bolt-t-shirt"]`);
//     await expect(boltRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("3");
//   });
//   it("Should allow the jacket to be added to the cart.", async () => {
//     (await $(`//*[@id="add-to-cart-sauce-labs-fleece-jacket"]`)).click();
//     const jacketRemove = $(`//*[@id="remove-sauce-labs-fleece-jacket"]`);
//     await expect(jacketRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("4");
//   });
//   it("Should allow the onesie to be added to the cart.", async () => {
//     (await $(`//*[@id="add-to-cart-sauce-labs-onesie"]`)).click();
//     const onesieRemove = $(`//*[@id="remove-sauce-labs-onesie"]`);
//     await expect(onesieRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("5");
//   });
//   it("Should allow the red t-shirt to be added to the cart.", async () => {
//     (
//       await $(`//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]`)
//     ).click();
//     const redRemove = $(`//*[@id="remove-test.allthethings()-t-shirt-(red)"]`);
//     await expect(redRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("6");
//   });
// });

// // - Remove product from cart: verify all six (6) products can be removed from a users cart
// xdescribe("Portfolio Test Suite: Remove items from cart.", () => {
//   it("Should allow the red t-shirt to be removed from the cart.", async () => {
//     (await $(`//*[@id="remove-test.allthethings()-t-shirt-(red)"]`)).click();
//     const redAdd = $(
//       `//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]`
//     );
//     await expect(redAdd).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("5");
//   });
//   it("Should allow the onesie to be removed from the cart.", async () => {
//     (await $(`//*[@id="remove-sauce-labs-onesie"]`)).click();
//     const onesieAdd = $(`//*[@id="add-to-cart-sauce-labs-onesie"]`);
//     await expect(onesieAdd).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("4");
//   });
//   it("Should allow the jacket to be removed from the cart.", async () => {
//     (await $(`//*[@id="remove-sauce-labs-fleece-jacket"]`)).click();
//     const jacketAdd = $(`//*[@id="add-to-cart-sauce-labs-fleece-jacket"]`);
//     await expect(jacketAdd).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("3");
//   });
//   it("Should allow the bolt t-shirt to be removed from the cart.", async () => {
//     (await $(`//*[@id="remove-sauce-labs-bolt-t-shirt"]`)).click();
//     const boltAdd = $(`//*[@id="add-to-cart-sauce-labs-bolt-t-shirt"]`);
//     await expect(boltAdd).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("2");
//   });
//   it("Should allow the bike light to be removed from cart.", async () => {
//     (await $(`//*[@id="remove-sauce-labs-bike-light"]`)).click();
//     const bikeLightAdd = $(`//*[@id="add-to-cart-sauce-labs-bike-light"]`);
//     await expect(bikeLightAdd).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("1");
//   });
//   it("Should allow the backpack to be removed from the cart.", async () => {
//     (await $(`//*[@id="remove-sauce-labs-backpack"]`)).click();
//     const backpackAdd = $(`//*[@id="add-to-cart-sauce-labs-backpack"]`);
//     await expect(backpackAdd).toExist();
//     await expect(
//       await await $(`//*[@id="shopping_cart_container"]/a/span`)
//     ).not.toExist();
//   });
// });

// // Cart page Functionality: verify the Users cart can be accessed in the following scenarios:
// //  No product has been added to the cart & Product has been added to the cart
// xdescribe("Portfolio Test Suite: Empty cart navigation.", () => {
//   it("Should allow users to view the cart if it is empty.", async () => {
//     (await $(`//*[@id="shopping_cart_container"]/a`)).click();
//     await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
//   });
//   it("Should allow the user to retun to the inventory page from the cart.", async () => {
//     (await $(`//*[@id="continue-shopping"]`)).click();
//     await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
//   });
// });
// describe("Portfolio Test Suite: Full cart navigation.", () => {
//   it("Should allow the backpack to be added to cart", async () => {
//     (await $(`//*[@id="add-to-cart-sauce-labs-backpack"]`)).click();
//     const backpackRemove = $(`//*[@id="remove-sauce-labs-backpack"]`);
//     await browser.pause(1000);
//     await expect(backpackRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("1");
//   });
//   it("Should allow the bike light to be added to the cart", async () => {
//     (await $(`//*[@id="add-to-cart-sauce-labs-bike-light"]`)).click();
//     const bikeLightRemove = $(`//*[@id="remove-sauce-labs-bike-light"]`);
//     await expect(bikeLightRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("2");
//   });
//   it("Should allow the Bolt T-shirt to be added to the cart", async () => {
//     (await $(`//*[@id="add-to-cart-sauce-labs-bolt-t-shirt"]`)).click();
//     const boltRemove = $(`//*[@id="remove-sauce-labs-bolt-t-shirt"]`);
//     await expect(boltRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("3");
//   });
//   it("Should allow the jacket to be added to the cart.", async () => {
//     (await $(`//*[@id="add-to-cart-sauce-labs-fleece-jacket"]`)).click();
//     const jacketRemove = $(`//*[@id="remove-sauce-labs-fleece-jacket"]`);
//     await expect(jacketRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("4");
//   });
//   it("Should allow the onesie to be added to the cart.", async () => {
//     (await $(`//*[@id="add-to-cart-sauce-labs-onesie"]`)).click();
//     const onesieRemove = $(`//*[@id="remove-sauce-labs-onesie"]`);
//     await expect(onesieRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("5");
//   });
//   it("Should allow the red t-shirt to be added to the cart.", async () => {
//     (
//       await $(`//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]`)
//     ).click();
//     const redRemove = $(`//*[@id="remove-test.allthethings()-t-shirt-(red)"]`);
//     await expect(redRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("6");
//   });
//   it("Shoud allow the user to navigate to their cart when full.", async () => {
//     (await $(`//*[@id="shopping_cart_container"]/a`)).click();
//     await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
//   });
//   it("Should allow the user to retun to the inventory page from the cart.", async () => {
//     (await $(`//*[@id="continue-shopping"]`)).click();
//     await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
//   });
// });

// // Cart Page data check: Verify Page Details:  Confirm that Prices and descriptions match the intended values of buttons, Icons, Et cetera:
// xdescribe("Portfolio Test Suite: Verify Cart Page.", () => {
//   it("Shoud allow the user to navigate to their cart when full.", async () => {
//     (await $(`//*[@id="shopping_cart_container"]/a`)).click();
//     await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
//   });
// });
// xdescribe("Portfoilio Test Suite: Verify Cart page: Backpack .", () => {
//   it("Should verify that the header / link displays properly.", async () => {
//     const backpackLinkCart = await $(`//*[@id="item_4_title_link"]/div`);
//     await expect(backpackLinkCart).toExist();
//     expect.stringMatching("Sauce Labs Backpack");
//   });
//   it("Should verify that the backpack description is properly displayed.", async () => {
//     const backpackDescriptionCart = await $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[3]/div[2]/div[1]`
//     );
//     await expect(backpackDescriptionCart).toExist();
//     expect.stringMatching(
//       "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
//     );
//   });
//   it("Should verify that the backpack Price is properly displayed.", async () => {
//     const backpackPriceCart = await $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[3]/div[2]/div[2]/div`
//     );
//     await expect(backpackPriceCart).toExist();
//     expect.stringMatching("$", "29.99");
//   });
// });
// xdescribe("Portfoilio Test Suite: Verify Cart page: Bike Light.", () => {
//   it("Should verify that the header/link displays properly.", async () => {
//     const bikeLightLinkCart = await $(`//*[@id="item_0_title_link"]/div`);
//     await expect(bikeLightLinkCart).toExist();
//     expect.stringMatching("Sauce Labs Bike Light");
//   });
//   it("Should verify that the product description is properly displayed.", async () => {
//     const bikeLightDescriptionCart = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[4]/div[2]/div[1]`
//     );
//     await expect(bikeLightDescriptionCart).toExist();
//     expect.stringMatching(
//       "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."
//     );
//   });
//   it("Should verify that the bike light price is properly displayed.", async () => {
//     const bikeLightPriceCart = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[4]/div[2]/div[2]/div`
//     );
//     await expect(bikeLightPriceCart).toExist();
//     expect.stringMatching("$", "9.99");
//   });
// });
// xdescribe("Portfoilio Test Suite: Verify Cart page: Bolt T-Shirt.", () => {
//   it("Should display the header / link for the Bolt t-shirt.", async () => {
//     const boltLinkCart = $(`//*[@id="item_1_title_link"]/div`);
//     await expect(boltLinkCart).toExist();
//     expect.stringMatching("Sauce Labs Bolt T-Shirt");
//   });
//   it("Should verify the product description for the bolt t-shirt.", async () => {
//     const boltDescriptionCart = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[5]/div[2]/div[1]`
//     );
//     await expect(boltDescriptionCart).toExist();
//     expect.stringMatching(
//       "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt."
//     );
//   });
//   it("Should display the price of the bolt t-shirt.", async () => {
//     const boltPriceCart = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[5]/div[2]/div[2]/div`
//     );
//     await expect(boltPriceCart).toExist();
//     expect.stringMatching("$", "15.99");
//   });
// });
// xdescribe("Portfoilio Test Suite: Verify Cart page: Fleece Jacket.", () => {
//   it("Should display the header / link for the Fleece Jacket.", async () => {
//     const jacketLinkCart = $(`//*[@id="item_5_title_link"]/div`);
//     await expect(jacketLinkCart).toExist();
//     expect.stringMatching("Sauce Labs Fleece Jacket");
//   });
//   it("Should verify the product description for the Fleece Jacket.", async () => {
//     const jacketDescription = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[6]/div[2]/div[1]`
//     );
//     await expect(jacketDescription).toExist();
//     expect.stringMatching(
//       "Get your testIt's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.ing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt."
//     );
//   });
//   it("Should display the price of the Fleece Jacket.", async () => {
//     const jacketPrice = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[6]/div[2]/div[2]/div`
//     );
//     await expect(jacketPrice).toExist();
//     expect.stringMatching("$", "49.99");
//   });
// });
// xdescribe("Portfoilio Test Suite: Verify Cart page: Onesie.", () => {
//   it("Should display the header / link for the Onesie.", async () => {
//     const onesieLinkCart = $(`//*[@id="item_2_title_link"]/div`);
//     await expect(onesieLinkCart).toExist();
//     expect.stringMatching("Sauce Labs Onesie");
//   });
//   it("Should verify the product description for the Onesie.", async () => {
//     const onesieDescriptionCart = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[7]/div[2]/div[1]`
//     );
//     await expect(onesieDescriptionCart).toExist();
//     expect.stringMatching(
//       "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel."
//     );
//   });
//   it("Should display the price of the Onesie.", async () => {
//     const onesiePriceCart = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[7]/div[2]/div[2]/div`
//     );
//     await expect(onesiePriceCart).toExist();
//     expect.stringMatching("$", "7.99");
//   });
// });
// xdescribe("Portfoilio Test Suite: Verify Cart page: red T-Shirt.", () => {
//   it("Should display the header / link for the red t-shirt.", async () => {
//     const redLinkCart = $(`//*[@id="item_3_title_link"]/div`);
//     await expect(redLinkCart).toExist();
//     expect.stringMatching("Test.allTheThings() T-Shirt (Red)");
//   });
//   it("Should verify the product description for the red t-shirt.", async () => {
//     const redDescriptionCart = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[8]/div[2]/div[1]`
//     );
//     await expect(redDescriptionCart).toExist();
//     expect.stringMatching(
//       "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton."
//     );
//   });
//   it("Should display the price of the red t-shirt.", async () => {
//     const redPriceCart = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[8]/div[2]/div[2]/div`
//     );
//     await expect(redPriceCart).toExist();
//     expect.stringMatching("$", "15.99");
//   });
// });

// // Cart page Remove product from cart: Clicking the Remove buttton and verify that all the product information is removed.
// xdescribe("Portfolio Test Suite: Cart Page Remove product: backpack.", () => {
//   it("Should click the remove backpack button.", async () => {
//     (await $(`//*[@id="remove-sauce-labs-backpack"]`)).click();
//   });
//   it("Should verify that the header / link is removed.", async () => {
//     const backpackLinkCart = await $(`//*[@id="item_4_title_link"]/div`);
//     await expect(backpackLinkCart).not.toExist();
//   });
//   it("Should verify that the backpack description is removed.", async () => {
//     const backpackDescriptionCart = await $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[3]/div[2]/div[1]`
//     );
//     await expect(backpackDescriptionCart).not.toExist();
//   });
//   it("Should verify that the backpack Price is removed.", async () => {
//     const backpackPriceCart = await $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[3]/div[2]/div[2]/div`
//     );
//     await expect(backpackPriceCart).not.toExist();
//   });
//   it("Should verify that the cart item number has counted down.", async () => {
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("5");
//   });
// });
// xdescribe("Portfolio Test Suite: Cart Page Remove product: bike light.", () => {
//   it("Should click the remove bike light button.", async () => {
//     (await $(`//*[@id="remove-sauce-labs-bike-light"]`)).click();
//   });
//   it("Should verify that the header/link is removed.", async () => {
//     const bikeLightLinkCart = await $(`//*[@id="item_0_title_link"]/div`);
//     await expect(bikeLightLinkCart).not.toExist();
//   });
//   it("Should verify that the product description is removed.", async () => {
//     const bikeLightDescriptionCart = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[4]/div[2]/div[1]`
//     );
//     await expect(bikeLightDescriptionCart).not.toExist();
//   });
//   it("Should verify that the bike light price is removed.", async () => {
//     const bikeLightPriceCart = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[4]/div[2]/div[2]/div`
//     );
//     await expect(bikeLightPriceCart).not.toExist();
//   });
//   it("Should verify that the cart item number has counted down.", async () => {
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("4");
//   });
// });
// xdescribe("Portfolio Test Suite: Cart Page Remove product: bolt t-shirt.", () => {
//   it("Shold click the remove bolt t-shirt button.", async () => {
//     (await $(`//*[@id="remove-sauce-labs-bolt-t-shirt"]`)).click();
//   });
//   it("Should verify the header / link is removed.", async () => {
//     const boltLinkCart = $(`//*[@id="item_1_title_link"]/div`);
//     await expect(boltLinkCart).not.toExist();
//   });
//   it("Should verify the product description is removed.", async () => {
//     const boltDescriptionCart = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[5]/div[2]/div[1]`
//     );
//     await expect(boltDescriptionCart).not.toExist();
//   });
//   it("Should verify the price is removed.", async () => {
//     const boltPriceCart = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[5]/div[2]/div[2]/div`
//     );
//     await expect(boltPriceCart).not.toExist();
//   });
//   it("Should verify that the cart item number has counted down.", async () => {
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("3");
//   });
// });
// xdescribe("Portfolio Test Suite: Cart Page Remove product: fleece jacket.", () => {
//   it("Should click the remove fleece jecket button.", async () => {
//     (await $(`//*[@id="remove-sauce-labs-fleece-jacket"]`)).click();
//   });
//   it("Should verify the header / link for the Fleece Jacket is removed.", async () => {
//     const jacketLinkCart = $(`//*[@id="item_5_title_link"]/div`);
//     await expect(jacketLinkCart).not.toExist();
//   });
//   it("Should verify the product description for the Fleece Jacket is removed.", async () => {
//     const jacketDescription = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[6]/div[2]/div[1]`
//     );
//     await expect(jacketDescription).not.toExist();
//   });
//   it("Should verify the price of the Fleece Jacket is removed.", async () => {
//     const jacketPrice = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[6]/div[2]/div[2]/div`
//     );
//     await expect(jacketPrice).not.toExist();
//   });
//   it("Should verify that the cart item number has counted down.", async () => {
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("2");
//   });
// });
// xdescribe("Portfolio Test Suite: Cart Page Remove product: Onesie.", () => {
//   it("Should click the remove button for the Onesie.", async () => {
//     (await $(`//*[@id="remove-sauce-labs-onesie"]`)).click();
//   });
//   it("Should NOT display the header / link for the Onesie.", async () => {
//     const onesieLinkCart = $(`//*[@id="item_2_title_link"]/div`);
//     await expect(onesieLinkCart).not.toExist();
//   });
//   it("Should NOT display the product description for the Onesie.", async () => {
//     const onesieDescriptionCart = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[7]/div[2]/div[1]`
//     );
//     await expect(onesieDescriptionCart).not.toExist();
//   });
//   it("Should NOT display the price of the Onesie.", async () => {
//     const onesiePriceCart = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[7]/div[2]/div[2]/div`
//     );
//     await expect(onesiePriceCart).not.toExist();
//   });
//   it("Should verify that the cart item number has counted down.", async () => {
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("1");
//   });
// });
// xdescribe("Portfolio Test Suite: Cart Page Remove product: Red Shirt.", () => {
//   it("Should click the remove button for the red shirt.", async () => {
//     (await $(`//*[@id="remove-test.allthethings()-t-shirt-(red)"]`)).click();
//   });
//   it("Should NOT display the header / link for the red t-shirt.", async () => {
//     const redLinkCart = $(`//*[@id="item_3_title_link"]/div`);
//     await expect(redLinkCart).not.toExist();
//   });
//   it("Should verify the product description for the red t-shirt.", async () => {
//     const redDescriptionCart = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[8]/div[2]/div[1]`
//     );
//     (await expect(redDescriptionCart)).not.toExist();
//   });
//   it("Should display the price of the red t-shirt.", async () => {
//     const redPriceCart = $(
//       `//*[@id="cart_contents_container"]/div/div[1]/div[8]/div[2]/div[2]/div`
//     );
//     await expect(redPriceCart).not.toExist();
//   });
//   it("Should verify that the cart item number has counted down.", async () => {
//     await expect();
//     await (await $(`//*[@id="shopping_cart_container"]/a/span`)).not.toExist();
//   });
// });

// // Checkout verification: should not be accessible with an empty cart, should function with products.
// xdescribe("Portfolio Test Suite: Checkout Page: Empty cart checkout.", () => {
//   it("Should verify that the checkout button doesn't show in an empty cart.", async () => {
//     await expect();
//     await (await $(`//*[@id="checkout"]`)).not.toExist();
//   });
// });

// xdescribe("Portfolio Test Suite: Checkout Page: Full cart checkout.", () => {
//   it("Should allow the backpack to be added to cart", async () => {
//     (await $(`//*[@id="add-to-cart-sauce-labs-backpack"]`)).click();
//     const backpackRemove = $(`//*[@id="remove-sauce-labs-backpack"]`);
//     await browser.pause(1000);
//     await expect(backpackRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("1");
//   });
//   it("Should allow the bike light to be added to the cart", async () => {
//     (await $(`//*[@id="add-to-cart-sauce-labs-bike-light"]`)).click();
//     const bikeLightRemove = $(`//*[@id="remove-sauce-labs-bike-light"]`);
//     await expect(bikeLightRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("2");
//   });
//   it("Should allow the Bolt T-shirt to be added to the cart", async () => {
//     (await $(`//*[@id="add-to-cart-sauce-labs-bolt-t-shirt"]`)).click();
//     const boltRemove = $(`//*[@id="remove-sauce-labs-bolt-t-shirt"]`);
//     await expect(boltRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("3");
//   });
//   it("Should allow the jacket to be added to the cart.", async () => {
//     (await $(`//*[@id="add-to-cart-sauce-labs-fleece-jacket"]`)).click();
//     const jacketRemove = $(`//*[@id="remove-sauce-labs-fleece-jacket"]`);
//     await expect(jacketRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("4");
//   });
//   it("Should allow the onesie to be added to the cart.", async () => {
//     (await $(`//*[@id="add-to-cart-sauce-labs-onesie"]`)).click();
//     const onesieRemove = $(`//*[@id="remove-sauce-labs-onesie"]`);
//     await expect(onesieRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("5");
//   });
//   it("Should allow the red t-shirt to be added to the cart.", async () => {
//     (
//       await $(`//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]`)
//     ).click();
//     const redRemove = $(`//*[@id="remove-test.allthethings()-t-shirt-(red)"]`);
//     await expect(redRemove).toExist();
//     await expect(
//       await (await $(`//*[@id="shopping_cart_container"]/a/span`)).getText()
//     ).toEqual("6");
//   });
//   it("Shoud allow the user to navigate to their cart when full.", async () => {
//     (await $(`//*[@id="shopping_cart_container"]/a`)).click();
//     await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
//   });
//   it("Should verify that the checkout button shows in a Full cart.", async () => {
//     await expect();
//     await (await $(`//*[@id="checkout"]`)).toExist();
//   });
//   it("Should navigate to the checkout page when the button is clicked.", async () => {
//     (await $(`//*[@id="checkout"]`)).click();
//     await expect(browser).toHaveUrl(
//       "https://www.saucedemo.com/checkout-step-one.html"
//     );
//   });
// });
// // Fill out Checkout data (only doing positive test cases due to time constraints)
// xdescribe("Succesful checkout.", () => {
//   it("Should open the checkout page.", async () => {
//     await CheckoutPage.open();
//     await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
//     (await $(`//*[@id="checkout"]`)).click();
//   });
//   it("Should accept valid shipping credentials.", async () => {
//     await CheckoutPage.submit("John", "Doe", "12345");
//     await expect(browser).toHaveUrl(
//       "https://www.saucedemo.com/checkout-step-one.html"
//     );
//   });
// });
