import { createHash } from "node:crypto";

import { validateFeedback } from "./validation.mjs";

const CATEGORIES = new Set(["bug", "workflow", "toolpath", "viewer", "export", "other"]);
const SEVERITIES = new Set(["blocker", "high", "normal", "low"]);

function field(body, name) {
  const match = body.match(new RegExp(`^${name}:\\s*(.+)$`, "im"));
  return match?.[1]?.trim();
}

function section(body, name) {
  const match = body.match(new RegExp(`(?:^|\\n)${name}\\n([\\s\\S]*?)(?=\\n[A-Z][A-Za-z ]+\\n|$)`, "i"));
  return match?.[1]?.trim() ?? "";
}

function titleParts(title) {
  const match = title.match(/^\[([^\]]+)]\s*(.+)$/);
  return {
    severity: match?.[1]?.trim().toLowerCase(),
    summary: match?.[2]?.trim() || title.trim()
  };
}

export function feedbackFromIssue(issue, now = new Date()) {
  const title = titleParts(issue.title);
  const category = (field(issue.body, "Category") ?? "workflow").toLowerCase();
  const severity = (field(issue.body, "Severity") ?? title.severity ?? "normal").toLowerCase();
  const feedback = {
    schemaVersion: 1,
    id: `github-issue-${issue.number}`,
    createdAt: new Date(issue.createdAt).toISOString(),
    sentAt: now.toISOString(),
    appVersion: field(issue.body, "App version") ?? "github-issue",
    category: CATEGORIES.has(category) ? category : "other",
    severity: SEVERITIES.has(severity) ? severity : "normal",
    summary: section(issue.body, "Summary") || title.summary,
    details: section(issue.body, "Details"),
    diagnostics: {
      githubIssue: issue.number,
      githubUrl: issue.url
    }
  };
  return validateFeedback(feedback);
}

export async function importGithubFeedbackIssues({ issueClient, store, labels, now = () => new Date() }) {
  const issues = await issueClient.listFeedbackIssues(labels);
  let imported = 0;
  for (const issue of issues) {
    const feedback = feedbackFromIssue(issue, now());
    const existingId = `fb_${createHash("sha256").update(feedback.id).digest("hex").slice(0, 24)}`;
    if (await store.getStatus(existingId)) continue;
    await store.enqueue(feedback, {
      remoteAddress: `github:${issue.number}`,
      githubIssue: { number: issue.number, url: issue.url }
    });
    await issueClient.addComment(issue.number, "Queued for the SetupNinja feedback worker. Low-risk UI/docs feedback can auto-merge after gates; machining-affecting feedback is held for review.");
    imported += 1;
  }
  return imported;
}
