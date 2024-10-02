import { newId } from "../analytics/generate.js";
import { DatabaseManager } from "../database/client.js";
import { LoggerSingleton } from "../logger/index.js";
import { NoopMetrics } from "../metrics/index.js";
import { LogdrainMetrics } from "../metrics/logdrain.js";
import { TriggerClientWrapper } from "../jobs/client.js";
/**
 * These maps persist between worker executions and are used for caching
 */
const rlMap = new Map();
/**
 * workerId and coldStartAt are used to track the lifetime of the worker
 * and are set once when the worker is first initialized.
 *
 * subsequent requests will use the same workerId and coldStartAt
 */
let isolateId = undefined;
/**
 * Initialize all services.
 *
 * Call this once before any hono handlers run.
 */
export function init() {
  return async (c, next) => {
    if (!isolateId) {
      isolateId = crypto.randomUUID();
    }
    c.set("isolateId", isolateId);
    c.set("isolateCreatedAt", Date.now());
    const requestId = newId("request");
    c.set("requestId", requestId);
    c.res.headers.set("API-Request-Id", requestId);
    const logger = LoggerSingleton.getInstance(requestId, {
      environment: c.env.ENVIRONMENT,
      application: "api",
      defaultFields: { environment: c.env.ENVIRONMENT },
    });
    const db = await DatabaseManager.getInstance(c.env.DB);
    const metrics = c.env.EMIT_METRICS_LOGS
      ? new LogdrainMetrics({
          requestId,
          environment: c.env.ENVIRONMENT,
          isolateId,
        })
      : new NoopMetrics();
    // initialize trigger client
    const client = new TriggerClientWrapper(
      c.env.TRIGGER_CLIENT_ID,
      c.env.TRIGGER_API_KEY,
      c.env.TRIGGER_API_URL,
    ).getClient();
    c.set("services", {
      db,
      metrics,
      logger,
      triggerClient: client,
    });
    await next();
  };
}
