import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

function watchRuntimeErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  return errors;
}

test("demo follows check, safety review, and download gating", async ({ page }) => {
  const errors = watchRuntimeErrors(page);
  await page.goto("/");

  const checkButton = page.getByRole("button", { name: "Run checks" });
  const exportButton = page.getByRole("button", { name: "Export proof .nc" });
  await expect(checkButton).toBeEnabled();
  await expect(exportButton).toBeDisabled();
  await checkButton.click();
  await expect(page.getByRole("button", { name: "Check again" })).toBeVisible();
  await expect(exportButton).toBeDisabled();

  await page.getByRole("button", { name: "Program", exact: true }).click();
  for (const checkbox of await page.getByRole("checkbox").all()) {
    await checkbox.check();
  }
  await expect(exportButton).toBeEnabled();

  const downloadPromise = page.waitForEvent("download");
  await exportButton.click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("setup-demo-bracket.nc");
  const body = await (await download.createReadStream()).toArray();
  const code = Buffer.concat(body).toString("utf8");
  expect(code).toContain("SETUPNINJA PROOF PROGRAM");
  // SetupNinja posts inch (G20) by default; shops running these machines are SAE.
  expect(code).toContain("G20 G90 G17 G40 G80 G94");
  expect(code).toContain("M30");
  expect(errors).toEqual([]);
});

test("guided setup blocks invalid geometry and generates the current job", async ({ page }) => {
  const errors = watchRuntimeErrors(page);
  await page.goto("/");
  await page.getByRole("button", { name: "Guided setup" }).click();
  await expect(page.getByRole("button", { name: "Run checks" })).toBeDisabled();

  await page.getByRole("button", { name: "Pocket", exact: true }).click();
  await page.getByRole("spinbutton", { name: "X" }).fill("40");
  await page.getByRole("button", { name: "Generate proof program" }).click();
  await expect(page.getByRole("alert")).toContainText("fit completely within the stock");

  // Dimensions are entered in the machine profile's units, which default to inch.
  await page.getByRole("spinbutton", { name: "Width" }).nth(0).fill("2.5");
  await page.getByRole("spinbutton", { name: "Depth" }).nth(0).fill("1.5");
  await page.getByRole("spinbutton", { name: "Height" }).fill("0.5");
  await page.getByRole("spinbutton", { name: "X" }).fill("0.25");
  await page.getByRole("spinbutton", { name: "Y" }).fill("0.25");
  await page.getByRole("spinbutton", { name: "Width" }).nth(1).fill("0.8");
  await page.getByRole("spinbutton", { name: "Depth" }).nth(1).fill("0.6");
  await page.getByRole("spinbutton", { name: "Depth below top" }).fill("0.12");
  await page.getByRole("textbox", { name: "Part name" }).fill("Phone pocket");
  await page.getByRole("button", { name: "Generate proof program" }).click();

  await page.getByRole("button", { name: "Review", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Phone pocket" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Run checks" })).toBeEnabled();
  await expect(page.getByRole("button", { name: "Export proof .nc" })).toBeDisabled();
  expect(errors).toEqual([]);
});

test("changing a setup invalidates completed checks", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Run checks" }).click();
  await expect(page.getByRole("button", { name: "Check again" })).toBeVisible();
  await page.getByRole("button", { name: "Program", exact: true }).click();
  for (const checkbox of await page.getByRole("checkbox").all()) await checkbox.check();
  await expect(page.getByRole("button", { name: "Export proof .nc" })).toBeEnabled();

  await page.getByRole("button", { name: "Job", exact: true }).click();
  await page.getByRole("button", { name: "Small VMC" }).click();
  await expect(page.getByRole("button", { name: "Export proof .nc" })).toBeDisabled();
  await expect(page.getByRole("button", { name: "Run checks" })).toBeEnabled();
  await page.getByRole("button", { name: "Program", exact: true }).click();
  for (const checkbox of await page.getByRole("checkbox").all()) await expect(checkbox).not.toBeChecked();
});

test("@a11y main and guided states have no automated WCAG A/AA violations", async ({ page }) => {
  await page.goto("/");
  const initial = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(initial.violations).toEqual([]);

  await page.getByRole("button", { name: "Guided setup" }).click();
  const guided = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(guided.violations).toEqual([]);
});

test("visible controls fit the viewport and meet touch target height", async ({ page }) => {
  await page.goto("/");
  const layout = await page.evaluate(() => {
    const visibleControls = [...document.querySelectorAll<HTMLElement>("button, input, select, summary, .safety-item")]
      .filter((element) => {
        if (element.classList.contains("sr")) return false;
        if (element instanceof HTMLInputElement && element.type === "checkbox") return false;
        return element.getClientRects().length > 0 && getComputedStyle(element).visibility !== "hidden";
      })
      .map((element) => ({
        label: element.textContent?.trim() || element.getAttribute("name") || element.tagName,
        width: element.getBoundingClientRect().width,
        height: element.getBoundingClientRect().height,
      }));
    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      controls: visibleControls,
    };
  });

  expect(layout.scrollWidth).toBeLessThanOrEqual(layout.clientWidth);
  for (const control of layout.controls) {
    expect.soft(control.height, `${control.label} touch target height`).toBeGreaterThanOrEqual(44);
    expect.soft(control.width, `${control.label} has visible width`).toBeGreaterThan(0);
  }
});
