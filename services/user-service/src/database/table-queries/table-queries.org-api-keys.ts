import {
  PrismaClient,
  Prisma,
  APIKeyEnvironment,
} from "../generated/postgresql";
import {
  QueryMiddleware,
  QueryMiddlewareFactory,
} from "../client";
import * as crypto from "crypto";
import { QueryOptions, RequestContext } from "../types";
type APIKeyWithRelations = Prisma.org_api_keysGetPayload<{
  include: {
    organization: true;
    user: true;
  };
}>;

/**
 * API Key management and query implementation
 */
export class APIKeyQueries {
  private middleware: QueryMiddleware;
  private prisma: PrismaClient;

  constructor(context: RequestContext, prisma: PrismaClient) {
    this.middleware = QueryMiddlewareFactory.create(context, prisma);
    this.prisma = prisma;
  }

  /**
   * Generate and create a new API key
   */
  async createAPIKey(data: {
    organization_id: string;
    user_id?: bigint;
    key_name: string;
    description?: string;
    scopes: string[];
    rate_limit?: number;
    allowed_ips?: string[];
    allowed_domains?: string[];
    environment?: APIKeyEnvironment;
    expires_at?: Date;
  }) {
    const keyId = `key_${crypto.randomBytes(16).toString("hex")}`;
    const apiKey = `sk_${crypto.randomBytes(32).toString("hex")}`;
    const keyHash = crypto.createHash("sha256").update(apiKey).digest("hex");

    const createdKey = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "create",
      {
        data: {
          ...data,
          key_id: keyId,
          key_hash: keyHash,
          created_by: this.middleware.getContext().userId,
        },
      },
    );

    // Return the API key only once during creation
    return {
      ...createdKey,
      api_key: apiKey, // This is the only time the raw API key will be available
    };
  }

  /**
   * Get API keys with flexible filtering
   */
  async getAPIKeys(
    options?: QueryOptions & {
      organizationId?: string;
      userId?: bigint;
      environment?: APIKeyEnvironment;
      isActive?: boolean;
      isRevoked?: boolean;
      searchTerm?: string;
      scopes?: string[];
      includeExpired?: boolean;
      includeUser?: boolean;
      minUsageCount?: number;
      maxUsageCount?: number;
      createdAfter?: Date;
      createdBefore?: Date;
    },
  ) {
    const {
      organizationId,
      userId,
      environment,
      isActive,
      isRevoked,
      searchTerm,
      scopes,
      includeExpired,
      includeUser,
      minUsageCount,
      maxUsageCount,
      createdAfter,
      createdBefore,
      ...queryOptions
    } = options || {};

    let whereClause: any = {};

    if (organizationId) {
      whereClause.organization_id = organizationId;
    }

    if (userId) {
      whereClause.user_id = userId;
    }

    if (environment) {
      whereClause.environment = environment;
    }

    if (typeof isActive === "boolean") {
      whereClause.is_active = isActive;
    }

    if (typeof isRevoked === "boolean") {
      whereClause.revoked = isRevoked;
    }

    if (searchTerm) {
      whereClause.OR = [
        { key_name: { contains: searchTerm, mode: "insensitive" } },
        { description: { contains: searchTerm, mode: "insensitive" } },
      ];
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

    if (minUsageCount !== undefined || maxUsageCount !== undefined) {
      whereClause.usage_count = {};
      if (minUsageCount !== undefined)
        whereClause.usage_count.gte = minUsageCount;
      if (maxUsageCount !== undefined)
        whereClause.usage_count.lte = maxUsageCount;
    }

    if (createdAfter || createdBefore) {
      whereClause.created_at = {};
      if (createdAfter) whereClause.created_at.gte = createdAfter;
      if (createdBefore) whereClause.created_at.lte = createdBefore;
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "findMany",
      {
        where: whereClause,
        include: {
          user: includeUser,
        },
      },
      queryOptions,
    );
  }

  /**
   * Validate API key
   */
  async validateAPIKey(
    keyId: string,
    hashedKey: string,
    ipAddress?: string,
    domain?: string,
  ) {
    const key = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "findUnique",
      {
        where: { key_id: keyId },
      },
    );

    if (!key || !key.is_active || key.revoked) {
      return { valid: false, reason: "Invalid or inactive key" };
    }

    if (key.key_hash !== hashedKey) {
      return { valid: false, reason: "Invalid key hash" };
    }

    if (key.expires_at && key.expires_at < new Date()) {
      return { valid: false, reason: "Key expired" };
    }

    if (
      ipAddress &&
      key.allowed_ips.length > 0 &&
      !key.allowed_ips.includes(ipAddress)
    ) {
      return { valid: false, reason: "IP not allowed" };
    }

    if (
      domain &&
      key.allowed_domains.length > 0 &&
      !key.allowed_domains.includes(domain)
    ) {
      return { valid: false, reason: "Domain not allowed" };
    }

    return { valid: true, key };
  }

  /**
   * Update API key usage
   */
  async updateKeyUsage(keyId: string, ipAddress?: string) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "update",
      {
        where: { key_id: keyId },
        data: {
          usage_count: { increment: 1 },
          last_used: new Date(),
          last_used_ip: ipAddress,
        },
      },
    );
  }

  /**
   * Revoke API key
   */
  async revokeAPIKey(keyId: string, reason?: string) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "update",
      {
        where: { key_id: keyId },
        data: {
          revoked: true,
          revoked_at: new Date(),
          revoked_reason: reason,
          is_active: false,
        },
      },
    );
  }

  /**
   * Bulk revoke API keys
   */
  async bulkRevokeAPIKeys(keyIds: string[], reason?: string) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "updateMany",
      {
        where: {
          key_id: { in: keyIds },
        },
        data: {
          revoked: true,
          revoked_at: new Date(),
          revoked_reason: reason,
          is_active: false,
        },
      },
    );
  }

  /**
   * Update API key scopes
   */
  async updateKeyScopes(keyId: string, scopes: string[]) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "update",
      {
        where: { key_id: keyId },
        data: {
          scopes,
          updated_at: new Date(),
        },
      },
    );
  }

  /**
   * Update API key restrictions
   */
  async updateKeyRestrictions(
    keyId: string,
    data: {
      allowed_ips?: string[];
      allowed_domains?: string[];
      rate_limit?: number;
    },
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "update",
      {
        where: { key_id: keyId },
        data: {
          ...data,
          updated_at: new Date(),
        },
      },
    );
  }

  /**
   * Get API key usage statistics
   */
  async getKeyUsageStats(keyId: string, startDate?: Date, endDate?: Date) {
    const key = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "findUnique",
      {
        where: { key_id: keyId },
      },
    );

    if (!key) throw new Error("API key not found");

    // Get usage logs from audit logs
    const logs = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: {
          event_type: "api_key_usage",
          entity_id: key.id,
          created_at: {
            gte: startDate,
            lte: endDate,
          },
        },
      },
    );

    return {
      totalUsage: key.usage_count,
      uniqueIPs: new Set(logs.map((log) => log.ip_address)).size,
      lastUsed: key.last_used,
      lastUsedIP: key.last_used_ip,
      usageByDay: this.aggregateUsageByDay(logs),
    };
  }

  /**
   * Rotate API key
   */
  async rotateAPIKey(keyId: string) {
    const existingKey = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "findUnique",
      {
        where: { key_id: keyId },
      },
    );

    if (!existingKey) throw new Error("API key not found");

    // Generate new key
    const newApiKey = `sk_${crypto.randomBytes(32).toString("hex")}`;
    const newKeyHash = crypto
      .createHash("sha256")
      .update(newApiKey)
      .digest("hex");

    const updatedKey = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "update",
      {
        where: { key_id: keyId },
        data: {
          key_hash: newKeyHash,
          updated_at: new Date(),
        },
      },
    );

    return {
      ...updatedKey,
      api_key: newApiKey, // Return new key only during rotation
    };
  }

  /**
   * Check key expiration
   */
  async checkKeyExpiration(keyId: string): Promise<{
    isExpired: boolean;
    daysUntilExpiration?: number;
  }> {
    const key = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "findUnique",
      {
        where: { key_id: keyId },
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
   * Get keys approaching expiration
   */
  async getKeysApproachingExpiration(
    organizationId: string,
    warningDays: number = 30,
  ) {
    const warningDate = new Date();
    warningDate.setDate(warningDate.getDate() + warningDays);

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "findMany",
      {
        where: {
          organization_id: organizationId,
          is_active: true,
          revoked: false,
          expires_at: {
            lt: warningDate,
            gt: new Date(),
          },
        },
      },
    );
  }

  /**
   * Check key rate limit
   */
  async checkRateLimit(
    keyId: string,
    timeWindowSeconds: number = 60,
  ): Promise<{
    withinLimit: boolean;
    currentUsage: number;
    limit: number;
    resetTime: Date;
  }> {
    const key = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "findUnique",
      {
        where: { key_id: keyId },
      },
    );

    if (!key) throw new Error("API key not found");

    const timeWindow = new Date();
    timeWindow.setSeconds(timeWindow.getSeconds() - timeWindowSeconds);

    const usageCount = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "count",
      {
        where: {
          event_type: "api_key_usage",
          entity_id: key.id,
          created_at: {
            gte: timeWindow,
          },
        },
      },
    );

    const resetTime = new Date(timeWindow.getTime() + timeWindowSeconds * 1000);

    return {
      withinLimit: usageCount < key.rate_limit,
      currentUsage: usageCount,
      limit: key.rate_limit,
      resetTime,
    };
  }

  /**
   * Get API key audit trail (continued)
   */
  async getKeyAuditTrail(
    keyId: string,
    options?: {
      startDate?: Date;
      endDate?: Date;
      limit?: number;
      eventTypes?: string[];
    },
  ) {
    const key = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "findUnique",
      {
        where: { key_id: keyId },
      },
    );

    if (!key) throw new Error("API key not found");

    let whereClause: any = {
      entity_id: key.id,
      entity_type: "api_key",
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
   * Get suspicious API key activity
   */
  async getSuspiciousActivity(
    keyId: string,
    options?: {
      timeWindowMinutes?: number;
      unusualIpThreshold?: number;
      highUsageThreshold?: number;
      failedRequestThreshold?: number;
    },
  ) {
    const {
      timeWindowMinutes = 60,
      unusualIpThreshold = 5,
      highUsageThreshold = 1000,
      failedRequestThreshold = 10,
    } = options || {};

    const key = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "findUnique",
      {
        where: { key_id: keyId },
      },
    );

    if (!key) throw new Error("API key not found");

    const timeWindow = new Date();
    timeWindow.setMinutes(timeWindow.getMinutes() - timeWindowMinutes);

    const logs = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: {
          entity_id: key.id,
          entity_type: "api_key",
          created_at: {
            gte: timeWindow,
          },
        },
      },
    );

    const uniqueIPs = new Set(logs.map((log) => log.ip_address));
    const totalRequests = logs.length;
    const failedRequests = logs.filter((log) => {
      const status =
        log.metadata &&
        typeof log.metadata === "object" &&
        "status" in log.metadata
          ? log.metadata.status
          : undefined;
      return typeof status === "number" && status >= 400;
    }).length;

    return {
      keyId,
      timeWindow: `${timeWindowMinutes} minutes`,
      suspicious: false,
      findings: {
        uniqueIPs: uniqueIPs.size,
        totalRequests,
        failedRequests,
        isSuspicious: {
          unusualIPs: uniqueIPs.size > unusualIpThreshold,
          highUsage: totalRequests > highUsageThreshold,
          highFailures: failedRequests > failedRequestThreshold,
        },
      },
      details: {
        ips: Array.from(uniqueIPs),
        failureRate: (failedRequests / totalRequests) * 100,
      },
    };
  }

  /**
   * Clone API key with new settings
   */
  async cloneAPIKey(
    sourceKeyId: string,
    modifications?: {
      key_name?: string;
      description?: string;
      scopes?: string[];
      rate_limit?: number;
      allowed_ips?: string[];
      allowed_domains?: string[];
      environment?: APIKeyEnvironment;
      expires_at?: Date;
    },
  ) {
    const sourceKey = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "findUnique",
      {
        where: { key_id: sourceKeyId },
      },
    );

    if (!sourceKey) throw new Error("Source API key not found");

    const newKeyData = {
      organization_id: sourceKey.organization_id,
      user_id: sourceKey.user_id,
      key_name: modifications?.key_name || `${sourceKey.key_name} (Clone)`,
      description: modifications?.description || sourceKey.description,
      scopes: modifications?.scopes || sourceKey.scopes,
      rate_limit: modifications?.rate_limit || sourceKey.rate_limit,
      allowed_ips: modifications?.allowed_ips || sourceKey.allowed_ips,
      allowed_domains:
        modifications?.allowed_domains || sourceKey.allowed_domains,
      environment: modifications?.environment || sourceKey.environment,
      expires_at: modifications?.expires_at,
    };

    // Convert null user_id to undefined to match expected type
    const keyDataWithCorrectTypes = {
      ...newKeyData,
      user_id: newKeyData.user_id ?? undefined,
      description: newKeyData.description ?? undefined,
    };

    return await this.createAPIKey(keyDataWithCorrectTypes);
  }

  /**
   * Sync key restrictions across environment
   */
  async syncKeyRestrictions(
    sourceKeyId: string,
    targetEnvironment: APIKeyEnvironment,
    options?: {
      syncIPs?: boolean;
      syncDomains?: boolean;
      syncRateLimit?: boolean;
      syncScopes?: boolean;
    },
  ) {
    const sourceKey = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "findUnique",
      {
        where: { key_id: sourceKeyId },
      },
    );

    if (!sourceKey) throw new Error("Source API key not found");

    const updateData: any = {};

    if (options?.syncIPs) updateData.allowed_ips = sourceKey.allowed_ips;
    if (options?.syncDomains)
      updateData.allowed_domains = sourceKey.allowed_domains;
    if (options?.syncRateLimit) updateData.rate_limit = sourceKey.rate_limit;
    if (options?.syncScopes) updateData.scopes = sourceKey.scopes;

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "updateMany",
      {
        where: {
          organization_id: sourceKey.organization_id,
          environment: targetEnvironment,
        },
        data: updateData,
      },
    );
  }

  /**
   * Get key usage patterns
   */
  async getKeyUsagePatterns(keyId: string, days: number = 30) {
    const key = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_api_keys,
      "findUnique",
      {
        where: { key_id: keyId },
      },
    );

    if (!key) throw new Error("API key not found");

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const logs = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: {
          entity_id: key.id,
          entity_type: "api_key",
          created_at: {
            gte: startDate,
          },
        },
      },
    );

    return {
      timeDistribution: this.analyzeTimeDistribution(logs),
      ipDistribution: this.analyzeIPDistribution(logs),
      scopeUsage: this.analyzeScopeUsage(logs),
      errorPatterns: this.analyzeErrorPatterns(logs),
    };
  }

  /**
   * Analyze time distribution of API key usage
   */
  private analyzeTimeDistribution(logs: any[]) {
    const hourlyDistribution = new Array(24).fill(0);
    const dailyDistribution = new Array(7).fill(0);

    logs.forEach((log) => {
      const date = new Date(log.created_at);
      hourlyDistribution[date.getHours()]++;
      dailyDistribution[date.getDay()]++;
    });

    return {
      hourly: hourlyDistribution,
      daily: dailyDistribution,
      peakHour: hourlyDistribution.indexOf(Math.max(...hourlyDistribution)),
      peakDay: dailyDistribution.indexOf(Math.max(...dailyDistribution)),
    };
  }

  /**
   * Analyze IP distribution of API key usage
   */
  private analyzeIPDistribution(logs: any[]) {
    const ipCounts = new Map<string, number>();

    logs.forEach((log) => {
      if (log.ip_address) {
        ipCounts.set(log.ip_address, (ipCounts.get(log.ip_address) || 0) + 1);
      }
    });

    const sortedIPs = Array.from(ipCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    return {
      topIPs: sortedIPs,
      uniqueIPCount: ipCounts.size,
      averageRequestsPerIP: logs.length / ipCounts.size,
    };
  }

  /**
   * Analyze scope usage of API key
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
   * Analyze error patterns in API key usage
   */
  private analyzeErrorPatterns(logs: any[]) {
    const errorCounts = new Map<number, number>();
    const errorDetails = new Map<number, Set<string>>();

    logs.forEach((log) => {
      const status = log.metadata?.status;
      if (status && status >= 400) {
        errorCounts.set(status, (errorCounts.get(status) || 0) + 1);

        if (log.metadata?.error) {
          if (!errorDetails.has(status)) {
            errorDetails.set(status, new Set());
          }
          errorDetails.get(status)?.add(log.metadata.error);
        }
      }
    });

    return {
      errorDistribution: Array.from(errorCounts.entries())
        .map(([status, count]) => ({
          status,
          count,
          details: Array.from(errorDetails.get(status) || []),
        }))
        .sort((a, b) => b.count - a.count),
      totalErrors: Array.from(errorCounts.values()).reduce((a, b) => a + b, 0),
      errorRate:
        (Array.from(errorCounts.values()).reduce((a, b) => a + b, 0) /
          logs.length) *
        100,
    };
  }

  /**
   * Aggregate usage by day
   */
  private aggregateUsageByDay(logs: any[]) {
    const dailyUsage = new Map<string, number>();

    logs.forEach((log) => {
      const date = new Date(log.created_at).toISOString().split("T")[0];
      dailyUsage.set(date, (dailyUsage.get(date) || 0) + 1);
    });

    return Array.from(dailyUsage.entries())
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date));
  }
}
