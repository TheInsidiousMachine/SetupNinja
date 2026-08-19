import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { feedbackFromIssue, importGithubFeedbackIssues } from "../src/issue-intake.mjs";
import { FeedbackStore } from "../src/store.mjs";

test("parses a prefilled GitHub issue into the feedback contract", () => {
  const feedback = feedbackFromIssue({
    number: 17,
    url: "https://github.com/owner/repo/issues/17",
    title: "[normal] Guided setup needs a smaller first screen",
    createdAt: "2026-08-19T12:00:00.000Z",
    body: [
      "Category: workflow",
      "Severity: normal",
      "App version: 0.2.0-demo.4",
      "Report ID: feedback-123",
      "",
      "Summary",
      "Guided setup needs a smaller first screen",
      "",
      "Details",
      "Show the photo and stock fields before advanced tool controls."
    ].join("\n")
  }, new Date("2026-08-19T12:01:00.000Z"));

  assert.equal(feedback.id, "github-issue-17");
  assert.equal(feedback.category, "workflow");
  assert.equal(feedback.severity, "normal");
  assert.equal(feedback.summary, "Guided setup needs a smaller first screen");
  assert.match(feedback.details, /photo and stock fields/);
  assert.equal(feedback.diagnostics.githubIssue, 17);
});

test("imports new GitHub feedback issues once", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "setupninja-issue-intake-"));
  try {
    const store = new FeedbackStore(root);
    const comments = [];
    const issueClient = {
      listFeedbackIssues: async () => [{
        number: 18,
        url: "https://github.com/owner/repo/issues/18",
        title: "[low] Make the update status easier to see",
        createdAt: "2026-08-19T12:00:00.000Z",
        body: "Category: viewer\nSeverity: low\nApp version: 0.2.0\n\nDetails\nPut update status near the top."
      }],
      addComment: async (number, body) => comments.push({ number, body })
    };

    assert.equal(await importGithubFeedbackIssues({
      issueClient,
      store,
      labels: ["clayton-feedback", "demo"],
      now: () => new Date("2026-08-19T12:02:00.000Z")
    }), 1);
    assert.equal(await importGithubFeedbackIssues({
      issueClient,
      store,
      labels: ["clayton-feedback", "demo"],
      now: () => new Date("2026-08-19T12:03:00.000Z")
    }), 0);
    assert.equal(comments.length, 1);
    const statuses = await store.listStatuses();
    assert.equal(statuses.length, 1);
    assert.equal(statuses[0].source.githubIssue.number, 18);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
