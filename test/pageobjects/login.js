import { browser, expect } from "@wdio/globals";
import LoginPage from "./loginPage.js";

describe("Successful login", () => {
  it("Should open the home page", async () => {
    await LoginPage.open();
    await expect(browser).toHaveTitle(expect.stringContaining("Swag Labs"));
  });

  it("Should accept approved user credentials for login.", async () => {
    await LoginPage.login("standard_user", "secret_sauce");
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
  });
});
