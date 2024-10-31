import { Analytics, newId } from "@/analytics";
import { ServiceCache } from "@/cache";
import { QueryMiddlewareFactory } from "@/database/client";
import { RequestContext } from "@/database/types";
import { HeaderKey, RequestHeaders } from "@/header-utils";
import { LogdrainMetrics } from "@/metric/logdrain";
import { ConsoleLogger } from "@/metric/logger";
import { formatPlatformPrefix } from "@/utils/formatters";
import type { MiddlewareHandler } from "hono";
import { HTTPException } from "hono/http-exception";

let isolateId: string | undefined;
let isolateCreatedAt: number | undefined;

/**
 * Middleware to initialize and configure services for each request,
 * setting up the context with logging, caching, and analytics services.
 */
export function init(): MiddlewareHandler {
  return async (c, next) => {
    initIsolate();

    const platformPrefix = formatPlatformPrefix(
      c.env.PLATFORM_PREFIX ?? "solomonai_platform"
    );
    const requestId = setupRequestId(platformPrefix, c);

    const logger = initializeLogger(c, requestId);
    const services = initializeServices(c, requestId);

    const headers = c.req.header as unknown as RequestHeaders;
    const ctx = extractAndValidateContext(headers, logger);

    const skipValidation = true;
    const dbClient = QueryMiddlewareFactory.create(ctx, c.env.DATABASE_CLIENT, skipValidation);
    setContext(c, { ...services, queryClient: dbClient, logger });

    await next();
  };
}

/**
 * Initializes isolate-specific IDs and timestamps if not already set.
 */
function initIsolate() {
  if (!isolateId) isolateId = crypto.randomUUID();
  if (!isolateCreatedAt) isolateCreatedAt = Date.now();
}

/**
 * Sets up a request ID and adds it to the response headers.
 */
function setupRequestId(platformPrefix: string, c: any): string {
  const requestId = newId("request");
  c.set("isolateId", isolateId);
  c.set("isolateCreatedAt", isolateCreatedAt);
  c.set("requestId", requestId);
  c.set("requestStartedAt", Date.now());
  c.res.headers.set(`${platformPrefix}-Request-Id`, requestId);
  return requestId;
}

/**
 * Initializes a logger with the given environment and request context.
 */
function initializeLogger(c: any, requestId: string) {
  return new ConsoleLogger({
    requestId,
    application: "api",
    environment: c.env.ENVIRONMENT,
    defaultFields: { environment: c.env.ENVIRONMENT },
  });
}

/**
 * Initializes shared services: cache, analytics, and metrics clients.
 */
function initializeServices(c: any, requestId: string) {
  return {
    cache: new ServiceCache(c.env.KV as KVNamespace<any>, c.env.PLATFORM_PREFIX),
    analytics: new Analytics({ requestId, environment: c.env.ENVIRONMENT }),
    metrics: new LogdrainMetrics({ requestId, environment: c.env.ENVIRONMENT }),
  };
}

/**
 * Extracts and validates organization and user context from headers.
 */
function extractAndValidateContext(headers: RequestHeaders, logger: ConsoleLogger): RequestContext {
  const orgId = headers[HeaderKey.ORG_ID] ?? "";
  const userId = headers[HeaderKey.USER_ID] ?? "";

  // if (!orgId) throw new HTTPException(401, { message: "Organization ID required" });
  // if (!userId) throw new HTTPException(401, { message: "User ID required" });

  // we log an error if the orgId or userId is not present
  if (!orgId) logger.error("Organization ID required");
  if (!userId) logger.error("User ID required");

  return {
    organizationId: orgId,
    userId: userId,
    roles: (headers[HeaderKey.USER_ROLES] ?? "").split(",").map((role) => role.trim()),
    tenantId: headers[HeaderKey.TENANT_ID],
    apiKey: headers[HeaderKey.API_KEY],
  } as RequestContext;
}

/**
 * Sets the application context with initialized services.
 */
function setContext(c: any, context: any) {
  c.set("ctx", context);
}
