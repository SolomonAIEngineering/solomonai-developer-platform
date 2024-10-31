import { ApiAnalyticsEvent, SdkAnalyticsEvent } from "@/analytics";
import type { Metric } from "@/metric/metric-schema";
import { formatPlatformPrefix } from "@/utils/formatters";
import type { MiddlewareHandler } from "hono";
import type { HonoEnv } from "../hono/env";

type DiscriminateMetric<T, M = Metric> = M extends { metric: T } ? M : never;

export function metrics(): MiddlewareHandler<HonoEnv> {
  return async (c, next) => {
    const { metrics, analytics, logger } = c.get("ctx");
    const platformPrefix = formatPlatformPrefix(c.env.PLATFORM_PREFIX ?? "solomonai_platform");
    const requestId = c.get("requestId");

    const metric = createMetric(c, platformPrefix);
    const start = performance.now();

    try {
      await logSdkTelemetry(c, analytics, platformPrefix, requestId);
      await next();
    } catch (error) {
      handleError(c, metric, error, logger);
      throw error;
    } finally {
      finalizeMetric(c, metric, start);
      attachHeaders(c, platformPrefix, metric.serviceLatency);
      emitAnalyticsEvent(c, analytics, requestId, platformPrefix);
    }
  };
}

/**
 * Creates a metric object for the request, including various headers and request details.
 */
function createMetric(c: any, platformPrefix: string): DiscriminateMetric<"metric.http.request"> {
  const formattedRequestBody = redactSensitiveData(c.req.raw.clone().text());
  return {
    isolateId: c.get("isolateId"),
    isolateLifetime: Date.now() - c.get("isolateCreatedAt"),
    metric: "metric.http.request",
    path: c.req.path,
    host: new URL(c.req.url).host,
    method: c.req.method,
    continent: c.req.raw?.cf?.continent,
    country: c.req.raw?.cf?.country,
    colo: c.req.raw?.cf?.colo,
    city: c.req.raw?.cf?.city,
    userAgent: c.req.header("user-agent"),
    fromAgent: c.req.header(`${platformPrefix}-Redirect`),
    context: {},
  } as DiscriminateMetric<"metric.http.request">;
}

/**
 * Redacts sensitive data from the request body.
 */
async function redactSensitiveData(requestBody: Promise<string>): Promise<string> {
  return (await requestBody).replaceAll(/"key":\s*"[a-zA-Z0-9_]+"/g, '"key": "<REDACTED>"');
}

/**
 * Logs SDK telemetry information if present in the headers.
 */
async function logSdkTelemetry(c: any, analytics: any, platformPrefix: string, requestId: string) {
  const telemetry = {
    runtime: c.req.header(`${platformPrefix}-Telemetry-Runtime`),
    platform: c.req.header(`${platformPrefix}-Telemetry-Platform`),
    versions: c.req.header(`${platformPrefix}-Telemetry-SDK`)?.split(","),
  };

  if (telemetry.runtime && telemetry.platform && telemetry.versions?.length) {
    const sdkEvent: SdkAnalyticsEvent = {
      runtime: telemetry.runtime,
      platform: telemetry.platform,
      versions: telemetry.versions,
      requestId,
      time: Date.now(),
    };

    c.executionCtx.waitUntil(analytics.insertSdkTelemetry({ event: sdkEvent, requestID: requestId }));
  }
}

/**
 * Handles errors by logging the error message and setting it on the metric.
 */
function handleError(c: any, metric: DiscriminateMetric<"metric.http.request">, error: unknown, logger: any) {
  metric.error = (error as Error).message;
  logger.error("request", {
    method: c.req.method,
    path: c.req.path,
    error,
  });
}

/**
 * Finalizes the metric, calculating service latency and setting response status.
 */
function finalizeMetric(c: any, metric: DiscriminateMetric<"metric.http.request">, start: number) {
  metric.status = c.res.status;
  metric.context = c.get("metricsContext") ?? {};
  metric.serviceLatency = performance.now() - start;
  c.get("ctx").metrics.emit(metric);
  c.executionCtx.waitUntil(c.get("ctx").metrics.flush());
}

/**
 * Adds latency and version headers to the response.
 */
function attachHeaders(c: any, platformPrefix: string, serviceLatency: number) {
  c.res.headers.append(`${platformPrefix}-Latency`, `service=${serviceLatency}ms`);
  c.res.headers.append(`${platformPrefix}-Version`, c.env.VERSION);
}

/**
 * Emits an API analytics event with request and response details.
 */
async function emitAnalyticsEvent(c: any, analytics: any, requestId: string, platformPrefix: string) {
  const apiAnalyticsEvent: ApiAnalyticsEvent = {
    request_id: requestId,
    time: c.get("requestStartedAt"),
    host: new URL(c.req.url).host,
    method: c.req.method,
    path: c.req.path,
    request_headers: redactRequestHeaders(c.req.header()),
    request_body: await redactSensitiveData(c.req.raw.clone().text()),
    response_status: c.res.status,
    response_headers: c.res.headers.entries(),
    response_body: await c.res.clone().text(),
    error: c.get("ctx").metrics.error ?? "",
    service_latency: Date.now() - c.get("requestStartedAt"),
    ip_address: c.req.header("True-Client-IP") ?? c.req.header("CF-Connecting-IP") ?? "",
    user_agent: c.req.header("User-Agent") ?? "",
  };

  c.executionCtx.waitUntil(analytics.insertApiRequest(apiAnalyticsEvent));
}

/**
 * Redacts sensitive information from the request headers.
 */
function redactRequestHeaders(headers: Headers): Array<string> {
  return Object.entries(headers).map(([k, v]) =>
    k.toLowerCase() === "authorization" ? `${k}: <REDACTED>` : `${k}: ${v}`
  );
}
