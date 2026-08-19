import { expect, test } from "@playwright/test";

async function waitForReady(page: import("@playwright/test").Page) {
  await expect(page.getByRole("button", { name: "Run checks" })).toBeEnabled();
}

test("feedback is fast, persists offline, and can be shared", async ({ page }) => {
  await page.goto("/");
  await waitForReady(page);

  await page.getByRole("button", { name: "Send feedback" }).click();
  const dialog = page.getByRole("dialog", { name: "Send feedback" });
  await expect(dialog).toBeVisible();
  await dialog.getByLabel("Category").selectOption("viewer");
  await dialog.getByLabel("Severity").selectOption("high");
  await dialog.getByLabel("Summary").fill("Top view needs clearer origin labels");
  await dialog.getByLabel("Details").fill("Keep X, Y, and Z visible while orbiting the stock.");
  await dialog.getByLabel("Include app diagnostics").check();
  await dialog.getByRole("button", { name: "Save feedback" }).click();

  await expect(dialog.getByText("Feedback saved offline and will retry automatically.")).toBeVisible();
  await expect(dialog.getByText("Top view needs clearer origin labels")).toBeVisible();
  await expect(dialog.getByRole("button", { name: "Share" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();

  await page.getByRole("button", { name: "Send feedback" }).click();
  await expect(page.getByRole("dialog").getByText("Top view needs clearer origin labels")).toBeVisible();
});

test("a configured relay receives feedback and a newer gated build can start installation", async ({ page }) => {
  const feedbackBodies: unknown[] = [];
  await page.addInitScript(() => {
    const installCalls: unknown[][] = [];
    Object.assign(window, {
      __installCalls: installCalls,
      AndroidUsb: {
        appInfo: () => JSON.stringify({
          versionCode: 1,
          versionName: "0.1.0",
          feedbackEndpoint: "https://relay.example.test/v1/feedback",
          updateManifestUrl: "https://relay.example.test/v1/update/demo.json",
        }),
        installUpdate: (...args: unknown[]) => {
          installCalls.push(args);
          return JSON.stringify({ ok: true, state: "downloading" });
        },
      },
    });
  });
  await page.route("https://relay.example.test/v1/feedback", async (route) => {
    feedbackBodies.push(route.request().postDataJSON());
    await route.fulfill({ status: 202, contentType: "application/json", body: JSON.stringify({ ok: true }) });
  });
  await page.route("https://relay.example.test/v1/update/demo.json", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        schemaVersion: 1,
        channel: "demo",
        versionCode: 2,
        versionName: "0.2.0",
        apkUrl: "https://relay.example.test/releases/setupninja-0.2.0.apk",
        sha256: "a".repeat(64),
        signature: "c2lnbmF0dXJl",
        notes: "Viewport and feedback improvements.",
      }),
    });
  });

  await page.goto("/");
  await waitForReady(page);
  await expect(page.getByText("Version 0.2.0 passed the release gates.")).toBeVisible();
  await expect(page.getByText("Viewport and feedback improvements.")).toBeVisible();
  await page.getByRole("button", { name: "Install update" }).click();
  await expect(page.getByText(/Downloading and verifying/)).toBeVisible();
  expect(await page.evaluate(() => (window as Window & { __installCalls: unknown[][] }).__installCalls)).toEqual([
    ["https://relay.example.test/releases/setupninja-0.2.0.apk", "a".repeat(64), 2, "0.2.0", "c2lnbmF0dXJl"],
  ]);

  await page.getByRole("button", { name: "Send feedback" }).click();
  const dialog = page.getByRole("dialog");
  await dialog.getByLabel("Summary").fill("Relay path works");
  await dialog.getByRole("button", { name: "Send feedback", exact: true }).click();
  await expect(dialog.getByText("Feedback sent.")).toBeVisible();
  expect(feedbackBodies).toHaveLength(1);
  expect(feedbackBodies[0]).toMatchObject({ schemaVersion: 1, summary: "Relay path works" });
});
