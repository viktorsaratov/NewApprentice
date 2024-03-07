// import { expect } from "@wdio/globals";
// import LoginPage from "../pageobjects/loginPage.js/index.js";

// describe("Successful login", () => {
//   it("Should open the home page", async () => {
//     await LoginPage.open();
//     await browser.pause(5000);
//     await expect(browser).toHaveTitle(expect.stringContaining("Swag Labs"));
//   });

//   it("Should accept approved user credentials for login.", async () => {
//     await LoginPage.inputUsername.setValue("standard_user");
//     await LoginPage.inputPassword.setValue("secret_sauce");
//     await browser.pause(1000);
//     await LoginPage.btnSubmit.click();
//     await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
//   });
// });
