// https://the-internet.herokuapp.com/checkboxes
// - Test that both checkbox 1 and checkbox 2 can be checked

xdescribe("Checkbox Verification", async () => {
  it("Should determine if box 2 is clicked on page startup", async () => {
    await browser.url("https://the-internet.herokuapp.com/checkboxes");
    const element = await $$(`//*[@id="checkboxes"]/input`);
    await expect(element[0]).not.toBeChecked();
    await expect(element[1]).toBeChecked();
  });
  it("Should deselect box 2, and check box 1", async () => {
    const element = await $$(`//*[@id="checkboxes"]`);
    await element[1].click;
    await element[2].click;
    await expect(element[1]).toBeChecked();
    await expect(element[2]).not.toBeChecked();
  });
  it("Should have both boxes selected", async () => {
    const element = await $$(`//*[@id="checkboxes"]`);
    await element[2].click;
    await expect(element[1]).toBeChecked();
    await expect(element[2]).toBeChecked();
  });
  it("Shoud have no box selected", async () => {
    const element = await $$(`//*[@id="checkboxes"]`);
    await element[1].click;
    await element[2].click;
    await expect(element[1]).not.toBeChecked();
    await expect(element[2]).not.toBeChecked();
  });
});
