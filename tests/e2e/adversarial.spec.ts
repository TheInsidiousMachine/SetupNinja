import { expect, test, type Page } from "@playwright/test";

function watchRuntimeErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  return errors;
}

async function waitForReady(page: Page) {
  await expect(page.getByRole("button", { name: "Run checks" })).toBeEnabled();
}

async function completeVerification(page: Page) {
  const runButton = page.getByRole("button", { name: /^(Run checks|Check again)$/ });
  await expect(runButton).toBeEnabled();
  await runButton.click();
  await expect(page.getByRole("button", { name: "Check again" })).toBeEnabled();
  await page.getByRole("button", { name: "Program", exact: true }).click();
  for (const checkbox of await page.getByRole("checkbox").all()) {
    await checkbox.check();
  }
  await expect(page.getByRole("button", { name: "Export proof .nc" })).toBeEnabled();
}

async function tabTo(page: Page, accessibleName: string) {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    await page.keyboard.press("Tab");
    const found = await page.evaluate((name) => {
      const active = document.activeElement as HTMLElement | null;
      if (!active) return false;
      const label = active.getAttribute("aria-label") || active.textContent || "";
      return label.trim() === name;
    }, accessibleName);
    if (found) return;
  }
  throw new Error(`Could not reach ${accessibleName} using Tab`);
}

test("rapid source, machine, and material churn converges on the last selection", async ({ page }) => {
  const errors = watchRuntimeErrors(page);
  await page.goto("/");
  await waitForReady(page);

  await page.evaluate(() => {
    const click = (label: string) => {
      const button = [...document.querySelectorAll("button")].find((item) => item.textContent?.trim() === label);
      if (!(button instanceof HTMLButtonElement)) throw new Error(`Missing ${label}`);
      button.click();
    };
    [
      "Guided setup",
      "Quick demo",
      "Hobby router",
      "4140 steel",
      "Guided setup",
      "Quick demo",
      "Small VMC",
      "Delrin",
    ].forEach(click);
  });

  await expect(page.getByRole("button", { name: "Quick demo" })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("button", { name: "Small VMC" })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("button", { name: "Delrin" })).toHaveAttribute("aria-pressed", "true");
  await waitForReady(page);

  await page.getByRole("button", { name: "Program", exact: true }).click();
  await page.getByText("Inspect proof program", { exact: true }).click();
  const program = page.locator(".program-preview pre");
  await expect(program).toContainText("(MACHINE: Small VMC)");
  await expect(program).toContainText("(MATERIAL: Delrin)");
  expect(errors).toEqual([]);
});

test("late stale worker replies cannot replace the newest plan", async ({ page }) => {
  await page.addInitScript(() => {
    const NativeWorker = window.Worker;
    const pending: MessageEvent[] = [];
    let posted = 0;

    class HeldWorker {
      private readonly native: Worker;
      onmessage: ((event: MessageEvent) => void) | null = null;

      constructor(url: string | URL, options?: WorkerOptions) {
        this.native = new NativeWorker(url, options);
        this.native.addEventListener("message", (event) => pending.push(event));
      }

      postMessage(message: unknown, transfer?: Transferable[]) {
        posted += 1;
        if (transfer) this.native.postMessage(message, transfer);
        else this.native.postMessage(message);
      }

      terminate() {
        this.native.terminate();
      }
    }

    Object.defineProperty(window, "Worker", { configurable: true, value: HeldWorker });
    Object.defineProperty(window, "__adversarialWorkerPosted", { get: () => posted });
    Object.defineProperty(window, "__adversarialWorkerReplies", { get: () => pending.length });
    Object.defineProperty(window, "__flushAdversarialWorkers", {
      value: () => {
        pending
          .sort((a, b) => Number(b.data.requestId) - Number(a.data.requestId))
          .splice(0)
          .forEach((event) => {
            const handler = [...HeldWorkerInstances][0]?.onmessage;
            handler?.(event);
          });
      },
    });

    const HeldWorkerInstances = new Set<HeldWorker>();
    const OriginalHeldWorker = HeldWorker;
    Object.defineProperty(window, "Worker", {
      configurable: true,
      value: class extends OriginalHeldWorker {
        constructor(url: string | URL, options?: WorkerOptions) {
          super(url, options);
          HeldWorkerInstances.add(this);
        }
        terminate() {
          HeldWorkerInstances.delete(this);
          super.terminate();
        }
      },
    });
  });

  await page.goto("/");
  await page.waitForFunction(() => Number((window as any).__adversarialWorkerPosted) >= 1);

  await page.getByRole("button", { name: "Small VMC" }).click();
  await page.waitForFunction(() => Number((window as any).__adversarialWorkerPosted) >= 2);
  await page.getByRole("button", { name: "Delrin" }).click();
  await page.waitForFunction(() => Number((window as any).__adversarialWorkerPosted) >= 3);
  await page.getByRole("button", { name: "Tooling", exact: true }).click();
  await page.getByText("Advanced setup & tool library", { exact: true }).click();
  await page.getByRole("button", { name: "Cloud", exact: true }).click();
  await page.waitForFunction(() => Number((window as any).__adversarialWorkerPosted) >= 4);
  await page.waitForFunction(() => Number((window as any).__adversarialWorkerReplies) >= 4);
  await page.evaluate(() => (window as any).__flushAdversarialWorkers());

  await waitForReady(page);
  await page.getByRole("button", { name: "Program", exact: true }).click();
  await page.getByText("Inspect proof program", { exact: true }).click();
  const program = page.locator(".program-preview pre");
  await expect(program).toContainText("(MACHINE: Small VMC)");
  await expect(program).toContainText("(MATERIAL: Delrin)");
  await page.getByRole("button", { name: "Tooling", exact: true }).click();
  await page.getByText("Advanced setup & tool library", { exact: true }).click();
  await expect(page.getByRole("button", { name: "Cloud", exact: true })).toHaveAttribute("aria-pressed", "true");
});

test("repeated and double Run checks remain idempotent and keep export gated", async ({ page }) => {
  const errors = watchRuntimeErrors(page);
  await page.goto("/");
  await waitForReady(page);

  await page.getByRole("button", { name: "Run checks" }).evaluate((button: HTMLButtonElement) => {
    for (let index = 0; index < 8; index += 1) button.click();
  });
  await expect(page.getByRole("button", { name: "Check again" })).toBeEnabled();
  await expect(page.getByRole("button", { name: "Export proof .nc" })).toBeDisabled();

  await page.getByRole("button", { name: "Program", exact: true }).click();
  for (const checkbox of await page.getByRole("checkbox").all()) await checkbox.check();
  await expect(page.getByRole("button", { name: "Export proof .nc" })).toBeEnabled();

  await page.getByRole("button", { name: "Check again" }).evaluate((button: HTMLButtonElement) => {
    button.dispatchEvent(new MouseEvent("dblclick", { bubbles: true }));
    for (let index = 0; index < 4; index += 1) button.click();
  });
  await expect(page.getByRole("button", { name: "Export proof .nc" })).toBeDisabled();
  for (const checkbox of await page.getByRole("checkbox").all()) await expect(checkbox).not.toBeChecked();
  await expect(page.getByRole("button", { name: "Check again" })).toBeEnabled();
  expect(errors).toEqual([]);
});

test("an ungenerated guided setup stays empty through mode and setup churn", async ({ page }) => {
  await page.addInitScript(() => {
    const NativeWorker = window.Worker;
    let posted = 0;

    class CountingWorker {
      private readonly native: Worker;

      constructor(url: string | URL, options?: WorkerOptions) {
        this.native = new NativeWorker(url, options);
      }

      get onmessage() {
        return this.native.onmessage;
      }

      set onmessage(handler) {
        this.native.onmessage = handler;
      }

      postMessage(message: unknown, transfer?: Transferable[]) {
        posted += 1;
        if (transfer) this.native.postMessage(message, transfer);
        else this.native.postMessage(message);
      }

      terminate() {
        this.native.terminate();
      }
    }

    Object.defineProperty(window, "Worker", { configurable: true, value: CountingWorker });
    Object.defineProperty(window, "__adversarialWorkerPosted", { get: () => posted });
  });

  await page.goto("/");
  await waitForReady(page);

  await page.getByRole("button", { name: "Guided setup" }).click();
  await page.getByRole("button", { name: "Quick demo" }).click();
  await waitForReady(page);
  await page.getByRole("button", { name: "Guided setup" }).click();
  await page.getByRole("button", { name: "Review", exact: true }).click();
  await expect(page.getByRole("heading", { name: "New guided job" })).toBeVisible();
  await page.getByRole("button", { name: "Job", exact: true }).click();
  await expect(page.getByRole("button", { name: "Run checks" })).toBeDisabled();
  const requestsBeforeMutation = await page.evaluate(() => Number((window as any).__adversarialWorkerPosted));

  await page.getByRole("button", { name: "Hobby router" }).click();
  await page.getByRole("button", { name: "4140 steel" }).click();
  await page.evaluate(() => new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
  expect(await page.evaluate(() => Number((window as any).__adversarialWorkerPosted))).toBe(requestsBeforeMutation);
  await page.getByRole("button", { name: "Review", exact: true }).click();
  await expect(page.getByRole("heading", { name: "New guided job" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Run checks" })).toBeDisabled();
  await page.getByRole("button", { name: "Program", exact: true }).click();
  await expect(page.locator(".program-preview pre")).toHaveText("Generate a job to inspect its proof program.");
});

test("refresh clears transient verification and selection state", async ({ page }) => {
  await page.goto("/");
  await waitForReady(page);
  await page.getByRole("button", { name: "Small VMC" }).click();
  await page.getByRole("button", { name: "Delrin" }).click();
  await waitForReady(page);
  await completeVerification(page);

  await page.reload();
  await expect(page.getByRole("button", { name: "Quick demo" })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("button", { name: "Knee mill" })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("button", { name: "6061-T6" })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("button", { name: "Export proof .nc" })).toBeDisabled();
  await page.getByRole("button", { name: "Program", exact: true }).click();
  for (const checkbox of await page.getByRole("checkbox").all()) await expect(checkbox).not.toBeChecked();
  await waitForReady(page);
});

test("the primary workflow is operable with the keyboard alone", async ({ page }) => {
  await page.goto("/");
  await waitForReady(page);

  await tabTo(page, "Guided setup");
  await expect(page.getByRole("button", { name: "Guided setup", exact: true })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: "Guided setup", exact: true })).toHaveAttribute("aria-pressed", "true");

  await tabTo(page, "Hobby router");
  const outline = await page.getByRole("button", { name: "Hobby router" }).evaluate((element) =>
    getComputedStyle(element).outlineStyle,
  );
  expect(outline).not.toBe("none");
  await page.keyboard.press("Space");
  await expect(page.getByRole("button", { name: "Hobby router" })).toHaveAttribute("aria-pressed", "true");

  await tabTo(page, "Pocket");
  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: "Pocket", exact: true })).toHaveAttribute("aria-pressed", "true");

  await tabTo(page, "Generate proof program");
  await page.keyboard.press("Enter");
  await tabTo(page, "Review");
  await page.keyboard.press("Enter");
  await expect(page.getByRole("heading", { name: "Guided part" })).toBeVisible();
  await waitForReady(page);

  await tabTo(page, "Run checks");
  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: "Check again" })).toBeEnabled();
});

for (const textScale of [1.5, 2]) {
  test(`critical controls reflow without clipping at ${textScale * 100}% text`, async ({ page }) => {
    await page.goto("/");
    await waitForReady(page);
    await page.evaluate((scale) => {
      const elements = [...document.querySelectorAll<HTMLElement>("body, body *")];
      const originalSizes = elements.map((element) => ({
        element,
        size: Number.parseFloat(getComputedStyle(element).fontSize),
      }));
      for (const { element, size } of originalSizes) {
        if (element instanceof SVGElement || element.tagName === "CANVAS") continue;
        if (Number.isFinite(size) && size > 0) element.style.fontSize = `${size * scale}px`;
      }
    }, textScale);

    const layout = await page.evaluate(() => {
      const controls = [...document.querySelectorAll<HTMLElement>(".mode-tabs button, .actions button")].map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          label: element.textContent?.trim(),
          left: rect.left,
          right: rect.right,
          width: rect.width,
          scrollWidth: element.scrollWidth,
          clientWidth: element.clientWidth,
          scrollHeight: element.scrollHeight,
          clientHeight: element.clientHeight,
        };
      });
      return {
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        overflowing: [...document.querySelectorAll<HTMLElement>("body *")]
          .filter((element) => element.getBoundingClientRect().right > document.documentElement.clientWidth + 1)
          .slice(0, 8)
          .map((element) => `${element.tagName}.${element.className}`),
        controls,
      };
    });

    expect(layout.scrollWidth, `overflowing elements: ${layout.overflowing.join(", ")}`).toBeLessThanOrEqual(
      layout.clientWidth,
    );
    for (const control of layout.controls) {
      expect.soft(control.left, `${control.label} starts inside viewport`).toBeGreaterThanOrEqual(0);
      expect.soft(control.right, `${control.label} ends inside viewport`).toBeLessThanOrEqual(layout.clientWidth);
      expect.soft(control.scrollWidth, `${control.label} text is not horizontally clipped`).toBeLessThanOrEqual(
        control.clientWidth + 1,
      );
      expect.soft(control.scrollHeight, `${control.label} text is not vertically clipped`).toBeLessThanOrEqual(
        control.clientHeight + 1,
      );
    }
  });
}

test("every setup mutation revokes export until checks and review are repeated", async ({ page }) => {
  await page.goto("/");
  await waitForReady(page);
  await completeVerification(page);

  const mutateAndAssertRevoked = async (name: string, tab: "Job" | "Tooling" = "Job") => {
    await page.getByRole("button", { name: tab, exact: true }).click();
    await page.getByRole("button", { name, exact: true }).click();
    await expect(page.getByRole("button", { name: "Export proof .nc" })).toBeDisabled();
    await page.getByRole("button", { name: "Program", exact: true }).click();
    for (const checkbox of await page.getByRole("checkbox").all()) await expect(checkbox).not.toBeChecked();
    await waitForReady(page);
  };

  await mutateAndAssertRevoked("Small VMC");
  await completeVerification(page);
  await mutateAndAssertRevoked("4140 steel");
  await completeVerification(page);

  await page.getByRole("button", { name: "Tooling", exact: true }).click();
  await page.getByText("Advanced setup & tool library", { exact: true }).click();
  await mutateAndAssertRevoked("Cloud", "Tooling");
  await completeVerification(page);

  await page.getByRole("button", { name: "Job", exact: true }).click();
  await page.getByRole("button", { name: "Guided setup" }).click();
  await expect(page.getByRole("button", { name: "Export proof .nc" })).toBeDisabled();
  await expect(page.getByRole("button", { name: "Run checks" })).toBeDisabled();
  await page.getByRole("button", { name: "Program", exact: true }).click();
  for (const checkbox of await page.getByRole("checkbox").all()) await expect(checkbox).not.toBeChecked();
});

test("editing a generated guided draft immediately invalidates its old proof program", async ({ page }) => {
  await page.goto("/");
  await waitForReady(page);
  await page.getByRole("button", { name: "Guided setup" }).click();
  await page.getByRole("button", { name: "Generate proof program" }).click();
  await waitForReady(page);
  await completeVerification(page);

  await page.getByRole("button", { name: "Job", exact: true }).click();
  await page.getByRole("textbox", { name: "Part name" }).fill("Edited after checks");

  await expect(page.getByRole("button", { name: "Export proof .nc" })).toBeDisabled();
  await expect(page.getByRole("button", { name: "Run checks" })).toBeDisabled();
  await page.getByRole("button", { name: "Review", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Edited guided job" })).toBeVisible();
  await page.getByRole("button", { name: "Program", exact: true }).click();
  await expect(page.locator(".program-preview pre")).toHaveText(
    "Generate a job to inspect its proof program.",
  );
});
