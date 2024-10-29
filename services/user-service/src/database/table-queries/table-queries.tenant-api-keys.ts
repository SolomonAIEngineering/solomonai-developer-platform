import { newKey } from "@internal/keys/src/util";
import { PrismaClient, Prisma } from "../generated/postgresql";
import { QueryMiddleware, QueryMiddlewareFactory } from "../client";
import { QueryOptions, RequestContext } from "../types";
import * as crypto from "crypto";

type TenantAPIKeyWithRelations = Prisma.tenant_api_keysGetPayload<{
  include: {
    tenant: true;
  };
}>;

/**
 * Available scopes for tenant API keys
 */
type TenantAPIScope =
  | "read_files"
  | "write_files"
  | "delete_files"
  | "manage_workspaces"
  | "read_analytics"
  | "manage_users"
  | "manage_settings"
  | "view_usage"
  | "manage_integrations";

/**
 * Tenant API Key management and query implementation
 */
export class TenantAPIKeyQueries {
  private middleware: QueryMiddleware;
  private prisma: PrismaClient;

  // Default scope sets for different key types
  private static readonly SCOPE_PRESETS = {
    readonly: ["read_files", "read_analytics", "view_usage"],
    standard: ["read_files", "write_files", "manage_workspaces", "view_usage"],
    admin: [
      "read_files",
      "write_files",
      "delete_files",
      "manage_workspaces",
      "read_analytics",
      "manage_users",
      "manage_settings",
      "view_usage",
      "manage_integrations",
    ],
  };

  constructor(context: RequestContext, prisma: PrismaClient) {
    this.middleware = QueryMiddlewareFactory.create(context, prisma);
    this.prisma = prisma;
  }

  /**
   * Create a new tenant API key
   */
  async createTenantAPIKey(data: {
    tenant_id: string;
    key_name: string;
    scopes: TenantAPIScope[];
    expires_at?: Date;
    preset?: keyof typeof TenantAPIKeyQueries.SCOPE_PRESETS;
  }) {
    // Generate unique key prefix
    const apiKey = await newKey({
      prefix: "sk_live_solomon_ai",
      byteLength: 16,
    });

    // If preset is specified, merge with custom scopes
    let finalScopes: TenantAPIScope[] = data.scopes;
    if (data.preset) {
      finalScopes = [
        ...new Set([
          ...TenantAPIKeyQueries.SCOPE_PRESETS[data.preset],
          ...data.scopes,
        ]),
      ] as TenantAPIScope[];
    }

    const createdKey = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_api_keys,
      "create",
      {
        data: {
          tenant_id: data.tenant_id,
          key_name: data.key_name,
          key_prefix: "sk_live_solomon_ai",
          key_hash: apiKey.hash,
          key_id: apiKey.key,
          scopes: finalScopes,
          expires_at: data.expires_at,
          created_by: this.middleware.getContext().userId,
        },
      },
    );

    return {
      ...createdKey,
      api_key: apiKey, // Only returned during creation
    };
  }

  /**
   * Get tenant API keys with flexible filtering
   */
  async getTenantAPIKeys(
    options?: QueryOptions & {
      tenantId?: string;
      isActive?: boolean;
      searchTerm?: string;
      scopes?: TenantAPIScope[];
      includeExpired?: boolean;
      includeTenant?: boolean;
      createdBy?: string;
      createdAfter?: Date;
      createdBefore?: Date;
      lastUsedAfter?: Date;
      lastUsedBefore?: Date;
    },
  ): Promise<TenantAPIKeyWithRelations[]> {
    const {
      tenantId,
      isActive,
      searchTerm,
      scopes,
      includeExpired,
      includeTenant,
      createdBy,
      createdAfter,
      createdBefore,
      lastUsedAfter,
      lastUsedBefore,
      ...queryOptions
    } = options || {};

    let whereClause: any = {};

    if (tenantId) {
      whereClause.tenant_id = tenantId;
    }

    if (typeof isActive === "boolean") {
      whereClause.is_active = isActive;
    }

    if (searchTerm) {
      whereClause.key_name = {
        contains: searchTerm,
        mode: "insensitive",
      };
    }

    if (scopes?.length) {
      whereClause.scopes = {
        hasEvery: scopes,
      };
    }

    if (!includeExpired) {
      whereClause.OR = [
        { expires_at: { gt: new Date() } },
        { expires_at: null },
      ];
    }

    if (createdBy) {
      whereClause.created_by = createdBy;
    }

    if (createdAfter || createdBefore) {
      whereClause.created_at = {};
      if (createdAfter) whereClause.created_at.gte = createdAfter;
      if (createdBefore) whereClause.created_at.lte = createdBefore;
    }

    if (lastUsedAfter || lastUsedBefore) {
      whereClause.last_used = {};
      if (lastUsedAfter) whereClause.last_used.gte = lastUsedAfter;
      if (lastUsedBefore) whereClause.last_used.lte = lastUsedBefore;
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_api_keys,
      "findMany",
      {
        where: whereClause,
        include: {
          tenant: includeTenant,
        },
      },
      queryOptions,
    );
  }

  /**
   * Validate tenant API key
   */
  async validateTenantAPIKey(
    keyPrefix: string,
    hashedKey: string,
    requiredScopes?: TenantAPIScope[],
  ) {
    const key = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_api_keys,
      "findUnique",
      {
        where: { key_prefix: keyPrefix },
        include: {
          tenant: true,
        },
      },
    );

    if (!key || !key.is_active) {
      return { valid: false, reason: "Invalid or inactive key" };
    }

    if (key.key_hash !== hashedKey) {
      return { valid: false, reason: "Invalid key hash" };
    }

    if (key.expires_at && key.expires_at < new Date()) {
      return { valid: false, reason: "Key expired" };
    }

    if (requiredScopes?.length) {
      const hasRequiredScopes = requiredScopes.every((scope) =>
        key.scopes.includes(scope),
      );
      if (!hasRequiredScopes) {
        return { valid: false, reason: "Insufficient scopes" };
      }
    }

    return { valid: true, key };
  }

  /**
   * Update tenant API key usage
   */
  async updateKeyUsage(keyPrefix: string) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_api_keys,
      "update",
      {
        where: { key_prefix: keyPrefix },
        data: {
          last_used: new Date(),
        },
      },
    );
  }

  /**
   * Revoke tenant API key
   */
  async revokeTenantAPIKey(keyPrefix: string) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_api_keys,
      "update",
      {
        where: { key_prefix: keyPrefix },
        data: {
          is_active: false,
        },
      },
    );
  }

  /**
   * Update tenant API key scopes
   */
  async updateKeyScopes(keyPrefix: string, scopes: TenantAPIScope[]) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_api_keys,
      "update",
      {
        where: { key_prefix: keyPrefix },
        data: {
          scopes,
        },
      },
    );
  }

  /**
   * Rotate tenant API key
   */
  async rotateTenantAPIKey(keyPrefix: string) {
    const existingKey = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_api_keys,
      "findUnique",
      {
        where: { key_prefix: keyPrefix },
      },
    );

    if (!existingKey) throw new Error("API key not found");

    // Generate new API key
    const newApiKey = `tk_${crypto.randomBytes(32).toString("hex")}`;
    const newKeyHash = crypto
      .createHash("sha256")
      .update(newApiKey)
      .digest("hex");

    const updatedKey = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_api_keys,
      "update",
      {
        where: { key_prefix: keyPrefix },
        data: {
          key_hash: newKeyHash,
        },
      },
    );

    return {
      ...updatedKey,
      api_key: newApiKey, // Only returned during rotation
    };
  }

  /**
   * Get tenant API key audit trail
   */
  async getKeyAuditTrail(
    keyPrefix: string,
    options?: {
      startDate?: Date;
      endDate?: Date;
      limit?: number;
      eventTypes?: string[];
    },
  ) {
    const key = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_api_keys,
      "findUnique",
      {
        where: { key_prefix: keyPrefix },
      },
    );

    if (!key) throw new Error("API key not found");

    let whereClause: any = {
      entity_id: key.id,
      entity_type: "tenant_api_key",
    };

    if (options?.startDate || options?.endDate) {
      whereClause.created_at = {};
      if (options.startDate) whereClause.created_at.gte = options.startDate;
      if (options.endDate) whereClause.created_at.lte = options.endDate;
    }

    if (options?.eventTypes?.length) {
      whereClause.event_type = { in: options.eventTypes };
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: whereClause,
        orderBy: { created_at: "desc" },
        take: options?.limit,
      },
    );
  }

  /**
   * Get tenant API key expiration status
   */
  async checkKeyExpiration(keyPrefix: string) {
    const key = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_api_keys,
      "findUnique",
      {
        where: { key_prefix: keyPrefix },
      },
    );

    if (!key || !key.expires_at) {
      return { isExpired: false };
    }

    const now = new Date();
    const daysUntilExpiration = Math.ceil(
      (key.expires_at.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
    );

    return {
      isExpired: key.expires_at < now,
      daysUntilExpiration,
    };
  }

  /**
   * Get tenant API keys approaching expiration
   */
  async getKeysApproachingExpiration(
    tenantId: string,
    warningDays: number = 30,
  ) {
    const warningDate = new Date();
    warningDate.setDate(warningDate.getDate() + warningDays);

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_api_keys,
      "findMany",
      {
        where: {
          tenant_id: tenantId,
          is_active: true,
          expires_at: {
            lt: warningDate,
            gt: new Date(),
          },
        },
      },
    );
  }

  /**
   * Bulk update tenant API key statuses
   */
  async bulkUpdateKeyStatus(keyPrefixes: string[], isActive: boolean) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_api_keys,
      "updateMany",
      {
        where: {
          key_prefix: { in: keyPrefixes },
        },
        data: {
          is_active: isActive,
        },
      },
    );
  }

  /**
   * Get tenant API key usage analytics
   */
  async getKeyUsageAnalytics(
    keyPrefix: string,
    timeframe: "day" | "week" | "month",
  ) {
    const key = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_api_keys,
      "findUnique",
      {
        where: { key_prefix: keyPrefix },
      },
    );

    if (!key) throw new Error("API key not found");

    const timeRanges = {
      day: 24 * 60 * 60 * 1000,
      week: 7 * 24 * 60 * 60 * 1000,
      month: 30 * 24 * 60 * 60 * 1000,
    };

    const startDate = new Date(Date.now() - timeRanges[timeframe]);

    const logs = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: {
          entity_id: key.id,
          entity_type: "tenant_api_key",
          created_at: {
            gte: startDate,
          },
        },
      },
    );

    return this.analyzeKeyUsage(logs, timeframe);
  }

  /**
   * Analyze key usage patterns (continued)
   */
  private analyzeKeyUsage(logs: any[], timeframe: "day" | "week" | "month") {
    const intervals = {
      day: 24, // hours
      week: 7, // days
      month: 30, // days
    };

    const usageData = {
      totalRequests: logs.length,
      byScope: this.analyzeScopeUsage(logs),
      byTime: this.analyzeTimeDistribution(
        logs,
        timeframe,
        intervals[timeframe],
      ),
      successRate: this.calculateSuccessRate(logs),
      avgResponseTime: this.calculateAverageResponseTime(logs),
    };

    return usageData;
  }

  /**
   * Clone tenant API key
   */
  async cloneTenantAPIKey(
    sourceKeyPrefix: string,
    modifications?: {
      key_name?: string;
      scopes?: TenantAPIScope[];
      expires_at?: Date;
    },
  ) {
    const sourceKey = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_api_keys,
      "findUnique",
      {
        where: { key_prefix: sourceKeyPrefix },
      },
    );

    if (!sourceKey) throw new Error("Source API key not found");

    return await this.createTenantAPIKey({
      tenant_id: sourceKey.tenant_id,
      key_name: modifications?.key_name || `${sourceKey.key_name} (Clone)`,
      scopes: modifications?.scopes || (sourceKey.scopes as TenantAPIScope[]),
      expires_at: modifications?.expires_at,
    });
  }

  /**
   * Analyze scope usage patterns
   */
  private analyzeScopeUsage(logs: any[]) {
    const scopeCounts = new Map<string, number>();

    logs.forEach((log) => {
      if (log.metadata?.scopes) {
        log.metadata.scopes.forEach((scope: string) => {
          scopeCounts.set(scope, (scopeCounts.get(scope) || 0) + 1);
        });
      }
    });

    return Array.from(scopeCounts.entries())
      .map(([scope, count]) => ({
        scope,
        count,
        percentage: (count / logs.length) * 100,
      }))
      .sort((a, b) => b.count - a.count);
  }

  /**
   * Analyze time distribution
   */
  private analyzeTimeDistribution(
    logs: any[],
    timeframe: "day" | "week" | "month",
    intervals: number,
  ) {
    const distribution = new Array(intervals).fill(0);

    logs.forEach((log) => {
      const date = new Date(log.created_at);
      let index: number;

      switch (timeframe) {
        case "day":
          index = date.getHours();
          break;
        case "week":
          index = date.getDay();
          break;
        case "month":
          index = date.getDate() - 1;
          break;
      }

      distribution[index]++;
    });

    return distribution;
  }

  /**
   * Calculate success rate
   */
  private calculateSuccessRate(logs: any[]) {
    if (logs.length === 0) return 100;

    const successfulRequests = logs.filter(
      (log) => log.metadata?.status && log.metadata.status < 400,
    ).length;

    return (successfulRequests / logs.length) * 100;
  }

  /**
   * Calculate average response time
   */
  private calculateAverageResponseTime(logs: any[]) {
    const responseTimes = logs
      .map((log) => log.metadata?.response_time)
      .filter((time) => time !== undefined);

    if (responseTimes.length === 0) return 0;

    return responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
  }

  /**
   * Get tenant API key recommendations
   */
  async getKeyRecommendations(keyPrefix: string) {
    const key = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_api_keys,
      "findUnique",
      {
        where: { key_prefix: keyPrefix },
      },
    );

    if (!key) throw new Error("API key not found");

    // Get usage data for analysis
    const logs = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: {
          entity_id: key.id,
          entity_type: "tenant_api_key",
          created_at: {
            gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
          },
        },
      },
    );

    const recommendations = {
      security: this.analyzeSecurityRecommendations(key, logs),
      scopes: this.analyzeScopeRecommendations(key, logs),
      expiration: this.analyzeExpirationRecommendations(key),
      usage: this.analyzeUsageRecommendations(logs),
    };

    return recommendations;
  }

  /**
   * Analyze security recommendations
   */
  private analyzeSecurityRecommendations(key: any, logs: any[]) {
    const recommendations = [];

    // Check key age
    const keyAge = Date.now() - new Date(key.created_at).getTime();
    const keyAgeMonths = keyAge / (30 * 24 * 60 * 60 * 1000);

    if (keyAgeMonths > 6) {
      recommendations.push({
        type: "security",
        priority: "high",
        message: "Consider rotating this API key as it is over 6 months old",
        action: "rotate",
      });
    }

    // Check for suspicious patterns
    const uniqueIPs = new Set(logs.map((log) => log.metadata?.ip_address));
    if (uniqueIPs.size > 10) {
      recommendations.push({
        type: "security",
        priority: "medium",
        message: "Large number of unique IP addresses detected",
        action: "review",
      });
    }

    return recommendations;
  }

  /**
   * Analyze scope recommendations
   */
  private analyzeScopeRecommendations(key: any, logs: any[]) {
    const recommendations = [];
    const usedScopes = new Set<string>();

    // Collect used scopes from logs
    logs.forEach((log) => {
      if (log.metadata?.used_scopes) {
        log.metadata.used_scopes.forEach((scope: string) =>
          usedScopes.add(scope),
        );
      }
    });

    // Check for unused scopes
    const unusedScopes = key.scopes.filter(
      (scope: string) => !usedScopes.has(scope),
    );
    if (unusedScopes.length > 0) {
      recommendations.push({
        type: "scope",
        priority: "medium",
        message: "Some scopes have not been used in the last 30 days",
        details: unusedScopes,
        action: "review_scopes",
      });
    }

    return recommendations;
  }

  /**
   * Analyze expiration recommendations
   */
  private analyzeExpirationRecommendations(key: any) {
    const recommendations = [];

    if (!key.expires_at) {
      recommendations.push({
        type: "expiration",
        priority: "medium",
        message: "Consider setting an expiration date for this API key",
        action: "set_expiration",
      });
    }

    return recommendations;
  }

  /**
   * Analyze usage recommendations
   */
  private analyzeUsageRecommendations(logs: any[]) {
    const recommendations = [];

    // Check for low usage
    if (logs.length < 10) {
      recommendations.push({
        type: "usage",
        priority: "low",
        message:
          "This API key has very low usage. Consider reviewing if it's still needed",
        action: "review_usage",
      });
    }

    // Check for high error rates
    const errorRate =
      (logs.filter((log) => log.metadata?.status && log.metadata.status >= 400)
        .length /
        logs.length) *
      100;

    if (errorRate > 10) {
      recommendations.push({
        type: "usage",
        priority: "high",
        message: "High error rate detected with this API key",
        details: { errorRate: `${errorRate.toFixed(2)}%` },
        action: "investigate_errors",
      });
    }

    return recommendations;
  }

  /**
   * Generate tenant API key usage report
   */
  async generateUsageReport(
    tenantId: string,
    options?: {
      startDate?: Date;
      endDate?: Date;
      includeInactive?: boolean;
      format?: "summary" | "detailed";
    },
  ) {
    const {
      startDate,
      endDate,
      includeInactive = false,
      format = "summary",
    } = options || {};

    const keys = await this.getTenantAPIKeys({
      tenantId,
      isActive: includeInactive ? undefined : true,
    });

    const report = {
      tenant_id: tenantId,
      period: {
        start: startDate || new Date(0),
        end: endDate || new Date(),
      },
      total_keys: keys.length,
      active_keys: keys.filter((k) => k.is_active).length,
      keys_by_scope: this.aggregateKeysByScope(keys),
      usage_metrics: await this.aggregateUsageMetrics(keys, startDate, endDate),
      format_version: "1.0",
    };

    if (format === "detailed") {
      return {
        ...report,
        key_details: await Promise.all(
          keys.map((key) => this.getKeyDetails(key)),
        ),
      };
    }

    return report;
  }

  /**
   * Aggregate keys by scope
   */
  private aggregateKeysByScope(keys: any[]) {
    const scopeCounts = new Map<string, number>();

    keys.forEach((key) => {
      key.scopes.forEach((scope: string) => {
        scopeCounts.set(scope, (scopeCounts.get(scope) || 0) + 1);
      });
    });

    return Array.from(scopeCounts.entries())
      .map(([scope, count]) => ({
        scope,
        count,
        percentage: (count / keys.length) * 100,
      }))
      .sort((a, b) => b.count - a.count);
  }

  /**
   * Aggregate usage metrics
   */
  private async aggregateUsageMetrics(
    keys: any[],
    startDate?: Date,
    endDate?: Date,
  ) {
    const metrics = {
      total_requests: 0,
      error_count: 0,
      average_response_time: 0,
      usage_by_day: new Map<string, number>(),
    };

    for (const key of keys) {
      const logs = await this.middleware.enforceQueryRules(
        this.prisma,
        Prisma.ModelName.audit_logs,
        "findMany",
        {
          where: {
            entity_id: key.id,
            entity_type: "tenant_api_key",
            created_at: {
              gte: startDate,
              lte: endDate,
            },
          },
        },
      );

      metrics.total_requests += logs.length;
      metrics.error_count += logs.filter((log) => {
        const status =
          log.metadata &&
          typeof log.metadata === "object" &&
          "status" in log.metadata
            ? log.metadata.status
            : undefined;
        return typeof status === "number" && status >= 400;
      }).length;

      // Aggregate response times
      const responseTimes = logs
        .map((log) => {
          if (
            log.metadata &&
            typeof log.metadata === "object" &&
            "response_time" in log.metadata
          ) {
            return log.metadata.response_time;
          }
          return undefined;
        })
        .filter((time) => time !== undefined);

      if (responseTimes.length > 0) {
        // Calculate new average by combining current average with average of new response times
        const newResponseTimeAvg =
          responseTimes.reduce((prev: number, curr: any) => {
            return prev + (typeof curr === "number" ? curr : 0);
          }, 0) / responseTimes.length;
        metrics.average_response_time =
          metrics.average_response_time === 0
            ? newResponseTimeAvg
            : (metrics.average_response_time + newResponseTimeAvg) / 2;
      }

      // Aggregate daily usage
      logs.forEach((log) => {
        const date = new Date(log.created_at).toISOString().split("T")[0];
        metrics.usage_by_day.set(
          date,
          (metrics.usage_by_day.get(date) || 0) + 1,
        );
      });
    }

    return {
      ...metrics,
      usage_by_day: Array.from(metrics.usage_by_day.entries())
        .map(([date, count]) => ({ date, count }))
        .sort((a, b) => a.date.localeCompare(b.date)),
    };
  }

  /**
   * Get detailed key information
   */
  private async getKeyDetails(key: TenantAPIKeyWithRelations) {
    const logs = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: {
          entity_id: Number(key?.id),
          entity_type: "tenant_api_key",
        },
        orderBy: {
          created_at: "desc",
        },
        take: 1000,
      },
    );

    return {
      key_id: key.key_id,
      key_prefix: key.key_prefix,
      name: key.key_name,
      status: key.is_active ? "active" : "inactive",
      created_at: key.created_at,
      last_used: key.last_used,
      scopes: key.scopes,
      expires_at: key.expires_at,
      usage_stats: {
        total_requests: logs.length,
        success_rate: this.calculateSuccessRate(logs),
        avg_response_time: this.calculateAverageResponseTime(logs),
        usage_pattern: this.analyzeTimeDistribution(logs, "day", 24),
      },
    };
  }
}
