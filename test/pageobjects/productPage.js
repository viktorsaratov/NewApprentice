import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
  /**
   * define selectors using getter methods
   */
  describe("Product page", () => {
    it("Should open the home page", async () => {
      await LoginPage.open();
      await LoginPage.login("standard_user", "secret_sauce");
    });
    const products = [
      {
        title: "Sauce Labs Backpack",
        description:
          "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
        price: "$29.99",
      },
      {
        title: "Sauce Labs Bike Light",
        description:
          "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
        price: "$9.99",
      },
      {
        title: "Sauce Labs Bolt T-Shirt",
        description:
          "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.",
        price: "$15.99",
      },
      {
        title: "Sauce Labs Fleece Jacket",
        description:
          "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
        price: "$49.99",
      },
      {
        title: "Sauce Labs Onesie",
        description:
          "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
        price: "$7.99",
      },
      {
        title: "Test.allTheThings() T-Shirt (Red)",
        description:
          "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.",
        price: "$15.99",
      },
    ];
    products.forEach((product, index) =>
    it("Should verify that the header / link / price displays properly.", async () => {
      const i = index + 1; // Xpath index starts with an index of 1

      // Pass the index to the xpath for product title
      const productTitle = await $(
        `//*[@id="inventory_container"]//*[@class="inventory_list"]//*[@class="inventory_item"][${i}]//*[@class="inventory_item_label"]/a`
      );
      // Pass the index to the xpath for product description
      const productDescription = await $(
        `//*[@id="inventory_container"]//*[@class="inventory_list"]//*[@class="inventory_item"][${i}]//*[@class="inventory_item_label"]/*[@class="inventory_item_desc"]`
      );
      // Pass the index to the xpath for product price
      const productPrice = await $(
        `//*[@id="inventory_container"]//*[@class="inventory_list"]//*[@class="inventory_item"][${i}]//*[@class="inventory_item_price"]`
      );

      // Assertions
      await expect(productTitle).toHaveText(product.title);
      await expect(productDescription).toHaveText(product.description);
      await expect(productPrice).toHaveText(product.price);
    })
  );
});

  
  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open();
  }
}

export default new ProductPage();
