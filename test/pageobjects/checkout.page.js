import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputFirstName() {
    return $('//*[@id="first-name"]');
  }

  get inputLastName() {
    return $('//*[@id="last-name"]');
  }

  get inputPostalCode() {
    return $(`//*[@id="postal-code"]`);
  }
  get checkoutSubmitButton() {
    return $(`//*[@id="continue"]`);
  }
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async submit(firstName, lastName, postalCode) {
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    (await this.inputPostalCode).setValue(postalCode);
    await this.checkoutSubmitButton.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open();
  }
}

export default new CheckoutPage();
