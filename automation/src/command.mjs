import path from "node:path";
import { spawn } from "node:child_process";

const FORBIDDEN_EXECUTABLES = new Set(["sh", "bash", "zsh", "fish", "cmd", "cmd.exe", "powershell", "powershell.exe", "pwsh"]);
const PLACEHOLDER = /\{([A-Za-z][A-Za-z0-9]*)\}/g;

export function parseArgvJson(raw, name, allowedExecutables) {
  let value;
  try {
    value = JSON.parse(raw);
  } catch {
    throw new Error(`${name} must be valid JSON`);
  }
  if (!Array.isArray(value) || value.length === 0 || value.some((item) => typeof item !== "string" || item.length === 0)) {
    throw new Error(`${name} must be a non-empty JSON array of strings`);
  }
  if (value.length > 64 || value.reduce((length, item) => length + item.length, 0) > 32_768) {
    throw new Error(`${name} command is too large`);
  }
  const executable = path.basename(value[0]).toLowerCase();
  const allowed = new Set(allowedExecutables.map((item) => item.toLowerCase()));
  if (FORBIDDEN_EXECUTABLES.has(executable) || !allowed.has(executable)) {
    throw new Error(`${name} executable is not allowed: ${executable}`);
  }
  if (value.some((item) => /[\u0000-\u001f\u007f]/u.test(item))) {
    throw new Error(`${name} command contains control characters`);
  }
  return value;
}

export function expandArgv(argv, values) {
  return argv.map((argument) => argument.replace(PLACEHOLDER, (_match, name) => {
    if (!Object.hasOwn(values, name)) throw new Error(`unknown placeholder: ${name}`);
    return String(values[name]);
  }));
}

export function runArgv(argv, { cwd, timeoutMs, maxOutputBytes, env = process.env }) {
  if (!Array.isArray(argv) || argv.length === 0) throw new Error("argv must not be empty");
  return new Promise((resolve, reject) => {
    const child = spawn(argv[0], argv.slice(1), {
      cwd,
      env,
      shell: false,
      stdio: ["ignore", "pipe", "pipe"]
    });
    let stdout = Buffer.alloc(0);
    let stderr = Buffer.alloc(0);
    let settled = false;
    let timedOut = false;

    const stop = (reason) => {
      if (settled) return;
      settled = true;
      child.kill("SIGKILL");
      reject(new Error(reason));
    };
    const append = (current, chunk) => {
      const next = Buffer.concat([current, chunk]);
      if (next.length > maxOutputBytes) {
        stop(`command output exceeded ${maxOutputBytes} bytes`);
        return current;
      }
      return next;
    };
    child.stdout.on("data", (chunk) => { stdout = append(stdout, chunk); });
    child.stderr.on("data", (chunk) => { stderr = append(stderr, chunk); });
    child.on("error", (error) => {
      if (!settled) {
        settled = true;
        clearTimeout(timer);
        reject(error);
      }
    });
    child.on("close", (exitCode, signal) => {
      clearTimeout(timer);
      if (settled) return;
      settled = true;
      if (timedOut) return reject(new Error(`command timed out after ${timeoutMs} ms`));
      const result = {
        exitCode: exitCode ?? -1,
        signal,
        stdout: stdout.toString("utf8"),
        stderr: stderr.toString("utf8")
      };
      if (exitCode !== 0) {
        const error = new Error(`command exited with code ${result.exitCode}`);
        error.result = result;
        return reject(error);
      }
      resolve(result);
    });
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill("SIGKILL");
    }, timeoutMs);
    timer.unref();
  });
}

export function childEnvironment(environment = process.env) {
  const child = { ...environment };
  for (const key of Object.keys(child)) {
    if (key === "GITHUB_TOKEN" || key === "GH_TOKEN" || key.startsWith("FEEDBACK_") || key === "RELAY_TOKEN") delete child[key];
  }
  return child;
}
