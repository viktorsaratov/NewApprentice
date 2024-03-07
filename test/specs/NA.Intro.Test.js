xdescribe("Login Feature", () => {
  it("Should go to the login page", async () => {
    await browser.url("https://the-internet.herokuapp.com/login");

    await expect(browser).toHaveTitle(expect.stringContaining("The Internet"));
  });

  it("should display an error message if the login credentials are incorrect", async () => {
    await $('//*[@id="username"]').setValue("Jim");
    await $(`//*[@id="password"]`).setValue("BadPassword");
    await $(`//*[@id="login"]/button/i`).click();
    await browser.pause(2000);
    const errorMessage = await $(`//*[@id="flash"]`);
    await expect(errorMessage).toExist();
    await expect(errorMessage).toHaveText(
      expect.stringContaining("Your username is invalid!")
    );
  });

  it("Should allow access to secure area when login credentials are correct", async () => {
    await $('//*[@id="username"]').setValue("tomsmith");
    await $(`//*[@id="password"]`).setValue("SuperSecretPassword!");
    await $(`//*[@id="login"]/button/i`).click();
    await browser.url("https://the-internet.herokuapp.com/secure");
    await expect(browser).toHaveUrl(
      "https://the-internet.herokuapp.com/secure"
    );
  });
  it("Should return to the login page when the logout button is clicked", async () => {
    await $(`//*[@id="content"]/div/a/i`).click();
    await expect(browser).toHaveTitle(expect.stringContaining("The Internet"));
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login");
  });
});
