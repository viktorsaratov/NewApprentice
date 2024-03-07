// https://the-internet.herokuapp.com/entry_ad

// - Test that the ad appears when you initially go to the page
// - Test that the ad can be closed by clicking on the close button
// - Test that the ad doesn't appear anymore after subsequent page reload
//   (Make sure to reenable the ad using the click here link)

xdescribe("Ad Page", () => {
  it("Should display an add on inital page load.", async () => {
    await browser.url("https://the-internet.herokuapp.com/entry_ad");
    const adScreen = await $(`//*[@id="modal"]/div[2]`);
    await expect(adScreen).toExist;
    expect.stringContaining("Modal");
  });
  it("Should close the ad when the close button is clicked", async () => {
    (await $(`//*[@id="modal"]/div[2]/div[3]/p`)).click;
    const adScreen = await $(`//*[@id="modal"]/div[2]`);
    await expect(adScreen).toExist(false);
  });
  it("Should NOT display the add on subsequent loads of the webpage.", async () => {
    await browser.url("https://the-internet.herokuapp.com/entry_ad");
    const adScreen = await $(`//*[@id="modal"]/div[2]`);
    await expect(adScreen).toExist(false);
  });
  it("Should renable the ad when the re-enable link is clicked, and the web page reloaded.", async () => {
    (await $(`//*[@id="restart-ad"]`)).click;
    await browser.url("https://the-internet.herokuapp.com/entry_ad");
    const adScreen = await $(`//*[@id="modal"]/div[2]`);
    await expect(adScreen).toExist;
    expect.stringContaining("Modal");
  });
});
