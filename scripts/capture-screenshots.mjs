import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "docs/github");

async function waitForServer(url, tries = 40) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Server did not start: ${url}`);
}

const preview = spawn("npx", ["vite", "preview", "--host", "127.0.0.1", "--port", "4173"], {
  cwd: root,
  stdio: "pipe",
});

try {
  await waitForServer("http://127.0.0.1:4173/");
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    hasTouch: true,
    isMobile: true,
    colorScheme: "dark",
  });
  await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
  await page.waitForFunction(() => {
    const buttons = [...document.querySelectorAll("button")];
    const run = buttons.find((b) => (b.textContent ?? "").includes("Verify G-code"));
    return Boolean(run && !run.disabled);
  });
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: path.join(outDir, "phone-ready.png"),
    type: "png",
    fullPage: true,
  });
  await page.getByRole("button", { name: "Verify G-code" }).click();
  await page.waitForTimeout(5200);
  await page.screenshot({
    path: path.join(outDir, "phone-cut.png"),
    type: "png",
    fullPage: true,
  });
  await browser.close();
  console.log("wrote docs/github/phone-ready.png and phone-cut.png");
} finally {
  preview.kill("SIGTERM");
}
