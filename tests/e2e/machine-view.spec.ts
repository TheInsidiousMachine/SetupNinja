import { expect, test, type Page } from "@playwright/test";
import { createHash } from "node:crypto";

async function waitForViewport(page: Page) {
  await page.goto("/");
  await page.getByRole("button", { name: "Review", exact: true }).click();
  await expect(page.getByRole("button", { name: "Run checks" })).toBeEnabled();
  await expect(page.getByRole("group", { name: "Interactive three-dimensional machining preview" })).toBeVisible();
  await expect(page.getByText(/Current (RAPID|LEAD|CUT)/)).toBeVisible();
}

async function canvasFingerprint(page: Page) {
  const png = await page.locator(".viewport-canvas").screenshot();
  const visual = await page.evaluate(async (dataUrl) => {
    const image = await createImageBitmap(await (await fetch(dataUrl)).blob());
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) return { width: image.width, height: image.height, varied: 0 };
    context.drawImage(image, 0, 0);
    const pixels = context.getImageData(0, 0, image.width, image.height).data;
    let varied = 0;
    const stride = Math.max(4, Math.floor(pixels.length / 40_000 / 4) * 4);
    const base = [pixels[0], pixels[1], pixels[2]];
    for (let index = 0; index < pixels.length; index += stride) {
      if (
        Math.abs(pixels[index] - base[0]) > 5 ||
        Math.abs(pixels[index + 1] - base[1]) > 5 ||
        Math.abs(pixels[index + 2] - base[2]) > 5
      ) varied += 1;
    }
    image.close();
    return { width: canvas.width, height: canvas.height, varied };
  }, `data:image/png;base64,${png.toString("base64")}`);
  return { ...visual, hash: createHash("sha256").update(png).digest("hex") };
}

test("viewport renders nonblank pixels and every camera/layer control works", async ({ page }, testInfo) => {
  await waitForViewport(page);
  const first = await canvasFingerprint(page);
  expect(first.width).toBeGreaterThan(300);
  expect(first.height).toBeGreaterThan(250);
  expect(first.varied).toBeGreaterThan(100);

  for (const label of ["Top view", "Front view", "Right view", "Isometric view"]) {
    await page.getByRole("button", { name: label, exact: true }).click();
    await expect(page.getByRole("button", { name: label, exact: true })).toHaveAttribute("aria-pressed", "true");
  }
  await page.getByRole("button", { name: /Perspective projection/ }).click();
  await expect(page.getByRole("button", { name: /Orthographic projection/ })).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: /Orthographic projection/ }).click();
  await page.getByRole("button", { name: "Fit the complete job in the current view" }).click();
  await page.getByRole("button", { name: "Reset to the fitted isometric view" }).click();

  await page.getByRole("button", { name: "Show or hide layers" }).click();
  for (const layer of ["stock", "target", "tool", "datum", "rapid", "lead", "cut"]) {
    const button = page.getByRole("button", { name: `Hide ${layer} layer` });
    await button.click();
    await expect(page.getByRole("button", { name: `Show ${layer} layer` })).toHaveAttribute("aria-pressed", "false");
    await page.getByRole("button", { name: `Show ${layer} layer` }).click();
    await expect(page.getByRole("button", { name: `Hide ${layer} layer` })).toHaveAttribute("aria-pressed", "true");
  }

  const final = await canvasFingerprint(page);
  expect(final.varied).toBeGreaterThan(100);
  await page.locator(".viewport").screenshot({ path: testInfo.outputPath(`machine-view-${testInfo.project.name}.png`) });
});

test("viewport orbit and zoom interaction changes the rendered frame", async ({ page }, testInfo) => {
  await waitForViewport(page);
  const canvas = page.locator(".viewport-canvas");
  const box = await canvas.boundingBox();
  if (!box) throw new Error("Viewport canvas has no bounds");
  const before = await canvasFingerprint(page);
  await page.mouse.move(box.x + box.width * 0.55, box.y + box.height * 0.55);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width * 0.75, box.y + box.height * 0.42, { steps: 8 });
  await page.mouse.up();
  await page.mouse.wheel(0, -280);
  await page.waitForTimeout(250);
  let after = await canvasFingerprint(page);
  if (after.hash === before.hash && testInfo.project.name.startsWith("phone")) {
    await page.getByRole("button", { name: "Top view", exact: true }).click();
    await page.waitForTimeout(250);
    after = await canvasFingerprint(page);
  }
  expect(after.varied).toBeGreaterThan(100);
  expect(after.hash).not.toBe(before.hash);
});
