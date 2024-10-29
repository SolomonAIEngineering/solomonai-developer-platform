import { Analytics, newId } from "@/analytics";
import { ServiceCache } from "@/cache";
import { APIKeyRepository } from "@/db-repository/api-key-repository";
import { UserRepository } from "@/db-repository/user-repository";
import { DatabaseClient } from "@/db/client";
import { LogdrainMetrics } from "@/metric/logdrain";
import { ConsoleLogger } from "@/metric/logger";
import { formatPlatformPrefix } from "@/utils/formatters";
import type { MiddlewareHandler } from "hono";
import { QueryMiddlewareFactory } from "@/database/client";
import { HTTPException } from "hono/http-exception";
import { RequestContext } from "@/database/types";

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
    const platformPrefix = formatPlatformPrefix(c.env.PLATFORM_PREFIX ?? "solomonai_platform");
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

    const db = new DatabaseClient(c.env.DB).getDb();
    const cache = new ServiceCache(c.env.KV as KVNamespace<any>, c.env.PLATFORM_PREFIX);
    const analyticsClient = new Analytics({ requestId, environment: c.env.ENVIRONMENT });
    const metricsClient = new LogdrainMetrics({ requestId, environment: c.env.ENVIRONMENT });

    const dataRepository = {
      apiKey: new APIKeyRepository(db),
      user: new UserRepository(db),
    };

    // Validate required headers
    const orgId = c.req.header("x-org-id");
    if (!orgId) throw new HTTPException(401, { message: "Organization ID required" });

    const userId = c.req.header("x-user-id");
    if (!userId) throw new HTTPException(401, { message: "User ID required" });

    // Extract optional and role-based headers
    const roles = (c.req.header("x-user-roles") ?? "").split(",").map(role => role.trim());
    const tenantId = c.req.header("x-tenant-id"); // Optional as not all routes are tenant-specific
    const apiKey = c.req.header("x-api-key"); // API key is optional for context

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
    c.set("ctx", { db, logger, cache, metrics: metricsClient, analytics: analyticsClient, queryClient: dbClient });
    c.set("repo", dataRepository);

    await next();
  };
}