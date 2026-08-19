import { loadRelayConfig } from "./config.mjs";
import { createRelayServer } from "./relay.mjs";
import { FeedbackStore } from "./store.mjs";

const config = loadRelayConfig();
const store = new FeedbackStore(config.dataRoot);
await store.initialize();
const server = createRelayServer({
  store,
  token: config.token,
  maxBodyBytes: config.maxBodyBytes,
  maxRequestsPerMinute: config.maxRequestsPerMinute,
  allowedOrigins: config.allowedOrigins,
  releaseRoot: config.releaseRoot
});

server.listen(config.port, config.host, () => {
  process.stdout.write(`Feedback relay listening on http://${config.host}:${config.port}\n`);
});

function stop() {
  server.close((error) => {
    if (error) {
      process.stderr.write(`${error.message}\n`);
      process.exitCode = 1;
    }
  });
}
process.once("SIGINT", stop);
process.once("SIGTERM", stop);
