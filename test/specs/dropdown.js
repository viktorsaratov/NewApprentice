// https://the-internet.herokuapp.com/dropdown
xdescribe("Dropdown Options", () => {
  it("Should Select Option 1", async () => {
    await browser.url("https://the-internet.herokuapp.com/dropdown");
    await $(`//*[@id="dropdown"]`).selectByIndex(1);
    await expect(await (await $(`//*[@id="dropdown"]`)).getValue()).toEqual(
      "1"
    );
  });
  it("Should Select Option 2", async () => {
    await browser.url("https://the-internet.herokuapp.com/dropdown");
    await $(`//*[@id="dropdown"]`).selectByIndex(2);
    (await $(`//*[@id="dropdown"]`)).getValue();
    await expect(await (await $(`//*[@id="dropdown"]`)).getValue()).toEqual(
      "2"
    );
  });
});
