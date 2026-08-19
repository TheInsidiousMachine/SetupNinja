import assert from "node:assert/strict";
import test from "node:test";

import { GitHubIssueClient, formatIssue } from "../src/github.mjs";
import { validFeedback } from "./fixtures.mjs";

const record = { id: "fb_0123456789abcdef01234567", feedback: validFeedback };

test("formats bounded feedback without triggering GitHub mentions", () => {
  const issue = formatIssue({
    ...record,
    feedback: { ...validFeedback, details: "Please ask @owner about this." }
  });
  assert.match(issue.title, /^\[normal\] Toolpath/);
  assert.doesNotMatch(issue.body, /@owner/);
  assert.match(issue.body, /@\u200bowner/);
  assert.match(issue.body, /fb_0123456789abcdef01234567/);
});

test("creates an issue through the configured repository API", async () => {
  let request;
  const client = new GitHubIssueClient({
    token: "secret",
    repository: "owner/repo",
    fetchImpl: async (url, options) => {
      request = { url, options };
      return new Response(JSON.stringify({ number: 42, html_url: "https://github.test/owner/repo/issues/42" }), {
        status: 201,
        headers: { "content-type": "application/json" }
      });
    }
  });
  const result = await client.createIssue(record, ["clayton-feedback"]);
  assert.equal(result.number, 42);
  assert.equal(request.url, "https://api.github.com/repos/owner/repo/issues");
  assert.equal(request.options.headers.authorization, "Bearer secret");
  assert.deepEqual(JSON.parse(request.options.body).labels, ["clayton-feedback"]);
});

test("closes a completed tracking issue", async () => {
  let request;
  const client = new GitHubIssueClient({
    token: "secret",
    repository: "owner/repo",
    fetchImpl: async (url, options) => {
      request = { url, options };
      return new Response(JSON.stringify({ state: "closed" }), {
        status: 200,
        headers: { "content-type": "application/json" }
      });
    }
  });

  await client.closeIssue(42);
  assert.equal(request.url, "https://api.github.com/repos/owner/repo/issues/42");
  assert.equal(request.options.method, "PATCH");
  assert.deepEqual(JSON.parse(request.options.body), { state: "closed", state_reason: "completed" });
});
