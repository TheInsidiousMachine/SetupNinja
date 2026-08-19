import { timingSafeEqual } from "node:crypto";
import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { ValidationError, validateFeedback } from "./validation.mjs";

class HttpError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

function authorized(request, token) {
  const header = request.headers.authorization ?? "";
  const expected = `Bearer ${token}`;
  const actualBuffer = Buffer.from(header);
  const expectedBuffer = Buffer.from(expected);
  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer);
}

function send(response, statusCode, body) {
  const encoded = JSON.stringify(body);
  response.writeHead(statusCode, {
    "cache-control": "no-store",
    "content-length": Buffer.byteLength(encoded),
    "content-type": "application/json; charset=utf-8",
    "x-content-type-options": "nosniff"
  });
  response.end(encoded);
}

async function sendRelease(response, filePath, contentType) {
  const body = await readFile(filePath);
  response.writeHead(200, {
    "cache-control": "no-cache",
    "content-length": body.length,
    "content-type": contentType,
    "x-content-type-options": "nosniff"
  });
  response.end(body);
}

async function readJson(request, maxBodyBytes) {
  const contentType = request.headers["content-type"]?.split(";", 1)[0].trim().toLowerCase();
  if (contentType !== "application/json") throw new HttpError(415, "content-type must be application/json");
  const declaredLength = Number(request.headers["content-length"] ?? 0);
  if (Number.isFinite(declaredLength) && declaredLength > maxBodyBytes) {
    throw new HttpError(413, "request body is too large");
  }
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > maxBodyBytes) throw new HttpError(413, "request body is too large");
    chunks.push(chunk);
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    throw new HttpError(400, "request body is not valid JSON");
  }
}

function idFromPath(pathname, prefix) {
  if (!pathname.startsWith(prefix)) return null;
  const id = pathname.slice(prefix.length);
  return /^fb_[0-9a-f]{24}$/.test(id) ? id : null;
}

export function createRelayServer({
  store,
  token,
  maxBodyBytes = 64 * 1024,
  maxRequestsPerMinute = 5,
  allowedOrigins = [],
  releaseRoot
}) {
  if (typeof token !== "string" || token.length < 8) throw new Error("relay token must contain at least 8 characters");
  const requestTimes = new Map();

  return http.createServer(async (request, response) => {
    try {
      const url = new URL(request.url, "http://relay.local");
      const origin = request.headers.origin;
      const originAllowed = !origin || allowedOrigins.includes(origin);
      if (origin && originAllowed) {
        response.setHeader("access-control-allow-origin", origin);
        response.setHeader("vary", "Origin");
      }
      if (request.method === "OPTIONS") {
        if (!originAllowed) throw new HttpError(403, "origin is not allowed");
        response.writeHead(204, {
          "access-control-allow-headers": "content-type",
          "access-control-allow-methods": "POST",
          "access-control-max-age": "600"
        });
        return response.end();
      }
      if (request.method === "GET" && url.pathname === "/healthz") {
        return send(response, 200, { ok: true });
      }
      if (request.method === "GET" && url.pathname === "/v1/update/demo.json" && releaseRoot) {
        return await sendRelease(response, path.join(releaseRoot, "manifest.json"), "application/json; charset=utf-8");
      }
      const releaseName = url.pathname.startsWith("/releases/") ? url.pathname.slice("/releases/".length) : "";
      if (request.method === "GET" && /^[A-Za-z0-9._-]+\.apk$/.test(releaseName) && releaseRoot) {
        return await sendRelease(
          response,
          path.join(releaseRoot, releaseName),
          "application/vnd.android.package-archive"
        );
      }

      if (request.method === "POST" && url.pathname === "/v1/feedback") {
        if (!originAllowed) throw new HttpError(403, "origin is not allowed");
        const remoteAddress = request.socket.remoteAddress ?? "unknown";
        const now = Date.now();
        const recent = (requestTimes.get(remoteAddress) ?? []).filter((time) => now - time < 60_000);
        if (recent.length >= maxRequestsPerMinute) throw new HttpError(429, "rate limit exceeded");
        recent.push(now);
        requestTimes.set(remoteAddress, recent);
        const feedback = validateFeedback(await readJson(request, maxBodyBytes));
        const record = await store.enqueue(feedback, { remoteAddress });
        return send(response, 202, { id: record.id, state: record.state, acceptedAt: record.acceptedAt });
      }

      if (!authorized(request, token)) throw new HttpError(401, "unauthorized");

      if (request.method === "GET" && url.pathname === "/v1/status") {
        return send(response, 200, { submissions: await store.listStatuses() });
      }
      const statusId = idFromPath(url.pathname, "/v1/status/");
      if (request.method === "GET" && statusId) {
        const status = await store.getStatus(statusId);
        if (!status) throw new HttpError(404, "feedback not found");
        return send(response, 200, status);
      }
      const logsId = idFromPath(url.pathname, "/v1/logs/");
      if (request.method === "GET" && logsId) {
        if (!await store.getStatus(logsId)) throw new HttpError(404, "feedback not found");
        return send(response, 200, { id: logsId, logs: await store.getLogs(logsId) });
      }
      throw new HttpError(404, "not found");
    } catch (error) {
      const missingRelease = error?.code === "ENOENT";
      const statusCode = missingRelease ? 404 : error instanceof ValidationError ? error.statusCode : (error.statusCode ?? 500);
      const message = statusCode >= 500 ? "internal server error" : error.message;
      send(response, statusCode, { error: message });
    }
  });
}
