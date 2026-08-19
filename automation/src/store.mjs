import { createHash, randomBytes } from "node:crypto";
import { appendFile, mkdir, readFile, readdir, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

const STATES = ["pending", "processing", "held", "complete", "failed"];

async function readJson(file) {
  return JSON.parse(await readFile(file, "utf8"));
}

async function atomicWrite(file, value) {
  await mkdir(path.dirname(file), { recursive: true, mode: 0o700 });
  const temporary = `${file}.${process.pid}.${randomBytes(4).toString("hex")}.tmp`;
  await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, { mode: 0o600 });
  await rename(temporary, file);
}

export class FeedbackStore {
  constructor(root) {
    this.root = path.resolve(root);
  }

  queuePath(state, id) {
    return path.join(this.root, "queue", state, `${id}.json`);
  }

  logPath(id) {
    return path.join(this.root, "logs", `${id}.ndjson`);
  }

  async initialize() {
    await Promise.all([
      ...STATES.map((state) => mkdir(path.join(this.root, "queue", state), { recursive: true, mode: 0o700 })),
      mkdir(path.join(this.root, "logs"), { recursive: true, mode: 0o700 })
    ]);
  }

  async enqueue(feedback, source) {
    await this.initialize();
    const id = `fb_${createHash("sha256").update(feedback.id).digest("hex").slice(0, 24)}`;
    const existing = await this.getStatus(id);
    if (existing) return existing;
    const record = {
      id,
      state: "queued",
      acceptedAt: new Date().toISOString(),
      source: {
        remoteAddress: source.remoteAddress ?? null,
        ...(source.githubIssue ? { githubIssue: source.githubIssue } : {})
      },
      feedback
    };
    await atomicWrite(this.queuePath("pending", id), record);
    await this.appendLog(id, "info", "Feedback accepted", { state: "queued" });
    return record;
  }

  async locate(id) {
    for (const state of STATES) {
      const file = this.queuePath(state, id);
      try {
        return { state, file, record: await readJson(file) };
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
    }
    return null;
  }

  async getStatus(id) {
    const located = await this.locate(id);
    return located?.record ?? null;
  }

  async listStatuses(limit = 50) {
    await this.initialize();
    const records = [];
    for (const state of STATES) {
      const files = (await readdir(path.join(this.root, "queue", state)))
        .filter((file) => file.endsWith(".json"));
      for (const file of files) records.push(await readJson(path.join(this.root, "queue", state, file)));
    }
    return records
      .sort((left, right) => right.acceptedAt.localeCompare(left.acceptedAt))
      .slice(0, limit);
  }

  async claimNext() {
    await this.initialize();
    const pendingRoot = path.join(this.root, "queue", "pending");
    const files = (await readdir(pendingRoot)).filter((file) => file.endsWith(".json")).sort();
    for (const file of files) {
      const source = path.join(pendingRoot, file);
      const destination = path.join(this.root, "queue", "processing", file);
      try {
        await rename(source, destination);
      } catch (error) {
        if (error.code === "ENOENT") continue;
        throw error;
      }
      const record = await readJson(destination);
      const processing = { ...record, state: "processing", startedAt: new Date().toISOString() };
      await atomicWrite(destination, processing);
      await this.appendLog(processing.id, "info", "Worker claimed feedback", { state: "processing" });
      return processing;
    }
    return null;
  }

  async finish(id, state, result) {
    const source = this.queuePath("processing", id);
    const record = await readJson(source);
    const finished = {
      ...record,
      state,
      completedAt: new Date().toISOString(),
      result
    };
    const destinationState = state === "complete" ? "complete" : state === "held" ? "held" : "failed";
    const destination = this.queuePath(destinationState, id);
    await atomicWrite(destination, finished);
    await unlink(source);
    await this.appendLog(id, state === "complete" ? "info" : "error", `Feedback ${state}`, { state });
    return finished;
  }

  complete(id, result) {
    return this.finish(id, "complete", result);
  }

  hold(id, result) {
    return this.finish(id, "held", result);
  }

  fail(id, result) {
    return this.finish(id, "failed", result);
  }

  async appendLog(id, level, message, data = {}) {
    await mkdir(path.dirname(this.logPath(id)), { recursive: true, mode: 0o700 });
    const entry = { timestamp: new Date().toISOString(), level, message, ...data };
    await appendFile(this.logPath(id), `${JSON.stringify(entry)}\n`, { mode: 0o600 });
    return entry;
  }

  async getLogs(id) {
    try {
      const content = await readFile(this.logPath(id), "utf8");
      return content.split("\n").filter(Boolean).map((line) => JSON.parse(line));
    } catch (error) {
      if (error.code === "ENOENT") return [];
      throw error;
    }
  }
}
