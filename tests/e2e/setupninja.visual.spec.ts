import { expect, test } from "@playwright/test";

test("phone workflow visual baseline", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "phone-390", "One pinned phone baseline is sufficient.");
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Run checks" })).toBeEnabled();
  const canvas = page.locator("canvas");
  await expect(page).toHaveScreenshot("phone-viewport.png", {
    mask: [canvas],
    maskColor: "#181b1a",
    animations: "disabled",
    maxDiffPixelRatio: 0.001,
  });
  await expect(page).toHaveScreenshot("phone-workflow.png", {
    fullPage: true,
    mask: [canvas],
    maskColor: "#181b1a",
    animations: "disabled",
    maxDiffPixelRatio: 0.001,
  });
});
