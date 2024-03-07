import { expect } from "@wdio/globals";
import CheckoutPage from "./checkout.page.js";

// Test Cases
describe("Succesful checkout.", () => {
  it("Should open the checkout page.", async () => {
    await CheckoutPage.open();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
    (await $(`//*[@id="checkout"]`)).click();
  });
  it("Should accept valid shipping credentials.", async () => {
    await CheckoutPage.submit("John", "Doe", "12345");
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
  });
});
