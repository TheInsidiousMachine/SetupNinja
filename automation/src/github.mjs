function neutralizeMentions(value) {
  return value.replaceAll("@", "@\u200b");
}

function section(title, value) {
  return value ? `## ${title}\n\n${neutralizeMentions(value)}\n` : "";
}

export function formatIssue(record) {
  const feedback = record.feedback;
  const diagnostics = feedback.diagnostics
    ? `\`\`\`json\n${neutralizeMentions(JSON.stringify(feedback.diagnostics, null, 2))}\n\`\`\``
    : "Not provided";
  return {
    title: `[${feedback.severity}] ${feedback.summary}`,
    body: [
      `Feedback ID: \`${record.id}\``,
      `App: \`${feedback.appVersion}\``,
      `Category: \`${feedback.category}\``,
      `Created: \`${feedback.createdAt}\``,
      `Sent: \`${feedback.sentAt}\``,
      "",
      section("Details", feedback.details),
      section("Diagnostics", diagnostics),
      "---",
      "Submitted through the Clayton demo feedback relay."
    ].filter(Boolean).join("\n")
  };
}

export class GitHubIssueClient {
  constructor({ token, repository, apiBase = "https://api.github.com", fetchImpl = fetch }) {
    if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository ?? "")) {
      throw new Error("GitHub repository must use owner/name format");
    }
    if (!token) throw new Error("GitHub token is required");
    this.token = token;
    this.repository = repository;
    this.apiBase = apiBase.replace(/\/$/, "");
    this.fetch = fetchImpl;
  }

  async request(pathname, options) {
    const response = await this.fetch(`${this.apiBase}${pathname}`, {
      ...options,
      headers: {
        accept: "application/vnd.github+json",
        authorization: `Bearer ${this.token}`,
        "content-type": "application/json",
        "user-agent": "claycam-feedback-worker",
        "x-github-api-version": "2022-11-28",
        ...options.headers
      }
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(`GitHub API returned ${response.status}: ${body.message ?? "unknown error"}`);
    return body;
  }

  async createIssue(record, labels = []) {
    const issue = formatIssue(record);
    const body = await this.request(`/repos/${this.repository}/issues`, {
      method: "POST",
      body: JSON.stringify({ ...issue, labels })
    });
    return { number: body.number, url: body.html_url };
  }

  async addComment(issueNumber, message) {
    await this.request(`/repos/${this.repository}/issues/${issueNumber}/comments`, {
      method: "POST",
      body: JSON.stringify({ body: message })
    });
  }

  async closeIssue(issueNumber) {
    await this.request(`/repos/${this.repository}/issues/${issueNumber}`, {
      method: "PATCH",
      body: JSON.stringify({ state: "closed", state_reason: "completed" })
    });
  }
}
