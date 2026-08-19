import { describe, expect, it, vi } from "vitest";
import {
  FeedbackQueue,
  createFeedbackPayload,
  type FeedbackQueueRecord,
  type StorageLike,
} from "./feedback";

class MemoryStorage implements StorageLike {
  private readonly values = new Map<string, string>();

  getItem(key: string) {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string) {
    this.values.set(key, value);
  }

  removeItem(key: string) {
    this.values.delete(key);
  }
}

const input = {
  category: "workflow" as const,
  severity: "normal" as const,
  summary: "The setup step takes too long",
  details: "Keep the selected machine when starting another part.",
};

describe("feedback payloads", () => {
  it("creates a versioned payload and strips secret-like diagnostics", () => {
    const payload = createFeedbackPayload(input, {
      appVersion: "0.1.0",
      id: "feedback-1",
      now: () => new Date("2026-08-18T12:00:00.000Z"),
      diagnostics: {
        screen: "review",
        token: "do-not-send",
        nested: { machine: "knee", authorization: "Bearer private" },
        list: [1, "ok", { password: "private", material: "6061" }],
      },
    });

    expect(payload).toEqual({
      schemaVersion: 1,
      appVersion: "0.1.0",
      id: "feedback-1",
      createdAt: "2026-08-18T12:00:00.000Z",
      category: "workflow",
      severity: "normal",
      summary: input.summary,
      details: input.details,
      diagnostics: {
        screen: "review",
        nested: { machine: "knee" },
        list: [1, "ok", { material: "6061" }],
      },
    });
    expect(JSON.stringify(payload)).not.toContain("private");
    expect(JSON.stringify(payload)).not.toContain("do-not-send");
  });
});

describe("FeedbackQueue", () => {
  it("persists failed feedback and sends it on an online event", async () => {
    const storage = new MemoryStorage();
    const events = new EventTarget();
    let online = false;
    const fetchImpl = vi
      .fn<typeof fetch>()
      .mockResolvedValue(new Response(null, { status: 202 }));
    const queue = new FeedbackQueue({
      endpoint: "https://feedback.example.test/intake",
      appVersion: "0.1.0",
      storage,
      eventTarget: events,
      isOnline: () => online,
      fetchImpl,
      createId: () => "feedback-1",
      now: () => new Date("2026-08-18T12:00:00.000Z"),
    });

    const queued = await queue.submit(input);
    expect(queued.status).toBe("pending");
    expect(fetchImpl).not.toHaveBeenCalled();
    queue.destroy();

    const restored = new FeedbackQueue({
      endpoint: "https://feedback.example.test/intake",
      appVersion: "0.1.0",
      storage,
      eventTarget: events,
      isOnline: () => online,
      fetchImpl,
      now: () => new Date("2026-08-18T12:01:00.000Z"),
    });
    expect(restored.list()).toHaveLength(1);

    online = true;
    events.dispatchEvent(new Event("online"));
    await vi.waitFor(() => expect(restored.list()[0]?.status).toBe("sent"));

    const request = fetchImpl.mock.calls[0];
    expect(request?.[0]).toBe("https://feedback.example.test/intake");
    const body = JSON.parse(String(request?.[1]?.body)) as FeedbackQueueRecord["payload"] & {
      sentAt: string;
    };
    expect(body.id).toBe("feedback-1");
    expect(body.sentAt).toBe("2026-08-18T12:01:00.000Z");

    restored.destroy();
  });

  it("keeps HTTP failures pending and supports a manual retry", async () => {
    const fetchImpl = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(new Response(null, { status: 503 }))
      .mockResolvedValueOnce(new Response(null, { status: 204 }));
    const queue = new FeedbackQueue({
      endpoint: "https://feedback.example.test/intake",
      appVersion: "0.1.0",
      storage: new MemoryStorage(),
      isOnline: () => true,
      fetchImpl,
      createId: () => "feedback-2",
    });

    const failed = await queue.submit(input);
    expect(failed.status).toBe("pending");
    expect(failed.attempts).toBe(1);
    expect(failed.lastError).toBe("Feedback service returned HTTP 503");

    const sent = await queue.retry("feedback-2");
    expect(sent.status).toBe("sent");
    expect(sent.attempts).toBe(2);
    expect(sent.lastError).toBeUndefined();

    queue.destroy();
  });

  it("recovers safely from malformed local storage", () => {
    const storage = new MemoryStorage();
    storage.setItem("setupninja.feedback.queue.v1", "not-json");

    const queue = new FeedbackQueue({ appVersion: "0.1.0", storage });

    expect(queue.list()).toEqual([]);
    queue.destroy();
  });
});
