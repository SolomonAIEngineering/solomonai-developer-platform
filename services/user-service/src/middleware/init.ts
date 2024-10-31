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
 * Initializes and configures all necessary services for each request.
 * Sets up context with logging, database, and analytics services for downstream use.
 *
 * @returns A Hono middleware handler function.
 */
export function init(): MiddlewareHandler {
  return async (c, next) => {
    // Initialize isolate-specific IDs and timestamps
    if (!isolateId) isolateId = crypto.randomUUID();
    if (!isolateCreatedAt) isolateCreatedAt = Date.now();

    const requestId = newId("request");
    const platformPrefix = formatPlatformPrefix(
      c.env.PLATFORM_PREFIX ?? "solomonai_platform",
    );
    const requestIdKey = `${platformPrefix}-Request-Id`;

    // Set request-specific context
    c.set("isolateId", isolateId);
    c.set("isolateCreatedAt", isolateCreatedAt);
    c.set("requestId", requestId);
    c.set("requestStartedAt", Date.now());
    c.res.headers.set(requestIdKey, requestId);

    // Initialize shared services
    const logger = new ConsoleLogger({
      requestId,
      application: "api",
      environment: c.env.ENVIRONMENT,
      defaultFields: { environment: c.env.ENVIRONMENT },
    });

    const cache = new ServiceCache(
      c.env.KV as KVNamespace<any>,
      c.env.PLATFORM_PREFIX,
    );
    const analyticsClient = new Analytics({
      requestId,
      environment: c.env.ENVIRONMENT,
    });
    const metricsClient = new LogdrainMetrics({
      requestId,
      environment: c.env.ENVIRONMENT,
    });

    // Validate and extract required headers
    const headers = c.req.header as unknown as RequestHeaders;
    const orgId = headers[HeaderKey.ORG_ID];
    if (!orgId)
      throw new HTTPException(401, { message: "Organization ID required" });

    const userId = headers[HeaderKey.USER_ID];
    if (!userId) throw new HTTPException(401, { message: "User ID required" });

    // Extract optional and role-based headers
    const roles = (headers[HeaderKey.USER_ROLES] ?? "")
      .split(",")
      .map((role) => role.trim());
    const tenantId = headers[HeaderKey.TENANT_ID];
    const apiKey = headers[HeaderKey.API_KEY];

    // Define request context for downstream services
    const ctx: RequestContext = {
      organizationId: orgId,
      userId: userId,
      roles,
      tenantId,
      apiKey,
    };

    const dbClient = QueryMiddlewareFactory.create(ctx, c.env.DATABASE_CLIENT);

    // Set context and repositories for further use
    c.set("ctx", {
      logger,
      cache,
      metrics: metricsClient,
      analytics: analyticsClient,
      queryClient: dbClient,
    });

    await next();
  };
}
