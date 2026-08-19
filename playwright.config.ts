import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  timeout: 30_000,
  expect: { timeout: 8_000 },
  reporter: [["list"], ["html", { open: "never", outputFolder: "test-results/html" }]],
  outputDir: "test-results/artifacts",
  use: {
    baseURL: "http://127.0.0.1:4173",
    colorScheme: "dark",
    reducedMotion: "reduce",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "phone-360",
      use: {
        viewport: { width: 360, height: 800 },
        deviceScaleFactor: 1,
        hasTouch: true,
        isMobile: true,
      },
    },
    {
      name: "phone-390",
      use: {
        viewport: { width: 390, height: 844 },
        deviceScaleFactor: 1,
        hasTouch: true,
        isMobile: true,
      },
    },
    {
      name: "phone-430",
      use: {
        viewport: { width: 430, height: 932 },
        deviceScaleFactor: 1,
        hasTouch: true,
        isMobile: true,
      },
    },
    {
      name: "tablet-768",
      use: {
        viewport: { width: 768, height: 1024 },
        deviceScaleFactor: 1,
        hasTouch: true,
        isMobile: true,
      },
    },
    {
      name: "desktop-1280",
      use: {
        viewport: { width: 1280, height: 900 },
        deviceScaleFactor: 1,
        hasTouch: false,
        isMobile: false,
      },
    },
  ],
  webServer: {
    command: "npm run build && npm run preview -- --host 127.0.0.1 --port 4173",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: false,
    timeout: 60_000,
  },
});
