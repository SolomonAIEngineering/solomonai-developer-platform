import { PrismaClient, Prisma } from "../generated/postgresql";
import {
  QueryMiddleware,
  QueryMiddlewareFactory,
} from "../middleware/query.middleware";
import { RequestContext } from "../middleware/types";

/**
 * Event types for usage logging
 */
type UsageEventType =
  | "storage"
  | "api"
  | "bandwidth"
  | "compute"
  | "database"
  | "cache"
  | "search"
  | "email"
  | "export"
  | "import";

/**
 * Units for usage measurement
 */
type UsageUnit =
  | "bytes"
  | "requests"
  | "mb"
  | "gb"
  | "hours"
  | "minutes"
  | "operations"
  | "messages"
  | "records";

/**
 * Usage logging and analytics implementation
 */
export class UsageLoggingQueries {
  private middleware: QueryMiddleware;
  private prisma: PrismaClient;

  constructor(context: RequestContext, prisma: PrismaClient) {
    this.middleware = QueryMiddlewareFactory.create(context);
    this.prisma = prisma;
  }

  /**
   * Log organization resource usage
   */
  async logOrganizationUsage(data: {
    organization_id: string;
    event_type: UsageEventType;
    quantity: bigint;
    unit: UsageUnit;
    details?: Record<string, any>;
    timestamp?: Date;
  }) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_usage_logs,
      "create",
      {
        data: {
          ...data,
          timestamp: data.timestamp || new Date(),
        },
      },
    );
  }

  /**
   * Log tenant resource usage
   */
  async logTenantUsage(data: {
    tenant_id: string;
    event_type: UsageEventType;
    quantity: bigint;
    unit: UsageUnit;
    details?: Record<string, any>;
    timestamp?: Date;
  }) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_usage_logs,
      "create",
      {
        data: {
          ...data,
          timestamp: data.timestamp || new Date(),
        },
      },
    );
  }

  /**
   * Bulk log organization usage events
   */
  async bulkLogOrganizationUsage(
    events: Array<{
      organization_id: string;
      event_type: UsageEventType;
      quantity: bigint;
      unit: UsageUnit;
      details?: Record<string, any>;
      timestamp?: Date;
    }>,
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_usage_logs,
      "createMany",
      {
        data: events.map((event) => ({
          ...event,
          timestamp: event.timestamp || new Date(),
        })),
      },
    );
  }

  /**
   * Get organization usage metrics
   */
  async getOrganizationUsageMetrics(
    organizationId: string,
    options?: {
      startDate?: Date;
      endDate?: Date;
      eventTypes?: UsageEventType[];
      groupBy?: "hour" | "day" | "week" | "month";
      includeDetails?: boolean;
    },
  ) {
    const { startDate, endDate, eventTypes, groupBy, includeDetails } =
      options || {};

    let whereClause: any = {
      organization_id: organizationId,
    };

    if (startDate || endDate) {
      whereClause.timestamp = {};
      if (startDate) whereClause.timestamp.gte = startDate;
      if (endDate) whereClause.timestamp.lte = endDate;
    }

    if (eventTypes?.length) {
      whereClause.event_type = { in: eventTypes };
    }

    const logs = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_usage_logs,
      "findMany",
      {
        where: whereClause,
        orderBy: {
          timestamp: "asc",
        },
      },
    );

    return this.aggregateUsageMetrics(logs, groupBy, includeDetails);
  }

  /**
   * Get tenant usage metrics
   */
  async getTenantUsageMetrics(
    tenantId: string,
    options?: {
      startDate?: Date;
      endDate?: Date;
      eventTypes?: UsageEventType[];
      groupBy?: "hour" | "day" | "week" | "month";
      includeDetails?: boolean;
    },
  ) {
    const { startDate, endDate, eventTypes, groupBy, includeDetails } =
      options || {};

    let whereClause: any = {
      tenant_id: tenantId,
    };

    if (startDate || endDate) {
      whereClause.timestamp = {};
      if (startDate) whereClause.timestamp.gte = startDate;
      if (endDate) whereClause.timestamp.lte = endDate;
    }

    if (eventTypes?.length) {
      whereClause.event_type = { in: eventTypes };
    }

    const logs = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_usage_logs,
      "findMany",
      {
        where: whereClause,
        orderBy: {
          timestamp: "asc",
        },
      },
    );

    return this.aggregateUsageMetrics(logs, groupBy, includeDetails);
  }

  /**
   * Get usage trends
   */
  async getUsageTrends(
    entityType: "organization" | "tenant",
    entityId: string,
    options?: {
      timeframe: "day" | "week" | "month" | "year";
      eventTypes?: UsageEventType[];
      compareWithPrevious?: boolean;
    },
  ) {
    const {
      timeframe = "month",
      eventTypes,
      compareWithPrevious = false,
    } = options || {};

    const endDate = new Date();
    const startDate = this.getStartDateForTimeframe(timeframe);
    const previousStartDate = this.getStartDateForTimeframe(timeframe, true);

    const currentPeriodLogs = await this.getUsageLogs(
      entityType,
      entityId,
      startDate,
      endDate,
      eventTypes,
    );

    let previousPeriodLogs: any[] = [];
    if (compareWithPrevious) {
      previousPeriodLogs = await this.getUsageLogs(
        entityType,
        entityId,
        previousStartDate,
        startDate,
        eventTypes,
      );
    }

    return {
      currentPeriod: this.analyzeTrends(currentPeriodLogs, timeframe),
      previousPeriod: compareWithPrevious
        ? this.analyzeTrends(previousPeriodLogs, timeframe)
        : undefined,
      comparison: compareWithPrevious
        ? this.comparePeriods(currentPeriodLogs, previousPeriodLogs)
        : undefined,
    };
  }

  /**
   * Private helper methods
   */

  private async getUsageLogs(
    entityType: "organization" | "tenant",
    entityId: string,
    startDate?: Date,
    endDate?: Date,
    eventTypes?: UsageEventType[],
  ) {
    const model =
      entityType === "organization"
        ? Prisma.ModelName.org_usage_logs
        : Prisma.ModelName.tenant_usage_logs;

    const whereClause: any = {
      [`${entityType}_id`]: entityId,
    };

    if (startDate || endDate) {
      whereClause.timestamp = {};
      if (startDate) whereClause.timestamp.gte = startDate;
      if (endDate) whereClause.timestamp.lte = endDate;
    }

    if (eventTypes?.length) {
      whereClause.event_type = { in: eventTypes };
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      model,
      "findMany",
      {
        where: whereClause,
        orderBy: {
          timestamp: "asc",
        },
      },
    );
  }

  private async getEntity(
    entityType: "organization" | "tenant",
    entityId: string,
  ) {
    const model =
      entityType === "organization"
        ? Prisma.ModelName.organizations
        : Prisma.ModelName.tenants;

    return await this.middleware.enforceQueryRules(
      this.prisma,
      model,
      "findUnique",
      {
        where: { id: entityId },
      },
    );
  }

  private aggregateUsageMetrics(
    logs: any[],
    groupBy?: "hour" | "day" | "week" | "month",
    includeDetails?: boolean,
  ) {
    const metrics = {
      total: this.calculateTotalUsage(logs),
      byEventType: this.groupByEventType(logs),
      byUnit: this.groupByUnit(logs),
      timeline: groupBy ? this.groupByTime(logs, groupBy) : undefined,
      details: includeDetails ? this.extractUsageDetails(logs) : undefined,
    };

    return metrics;
  }

  private calculateTotalUsage(logs: any[]) {
    return logs.reduce((acc, log) => {
      if (!acc[log.unit]) acc[log.unit] = BigInt(0);
      acc[log.unit] += BigInt(log.quantity);
      return acc;
    }, {});
  }

  private groupByEventType(logs: any[]) {
    return logs.reduce((acc, log) => {
      if (!acc[log.event_type]) {
        acc[log.event_type] = {
          total: BigInt(0),
          byUnit: {},
        };
      }

      if (!acc[log.event_type].byUnit[log.unit]) {
        acc[log.event_type].byUnit[log.unit] = BigInt(0);
      }

      acc[log.event_type].total += BigInt(log.quantity);
      acc[log.event_type].byUnit[log.unit] += BigInt(log.quantity);

      return acc;
    }, {});
  }

  /**
   * Continue groupByUnit implementation
   */
  private groupByUnit(logs: any[]) {
    return logs.reduce((acc, log) => {
      if (!acc[log.unit]) {
        acc[log.unit] = {
          total: BigInt(0),
          byEventType: {},
        };
      }

      if (!acc[log.unit].byEventType[log.event_type]) {
        acc[log.unit].byEventType[log.event_type] = BigInt(0);
      }

      acc[log.unit].total += BigInt(log.quantity);
      acc[log.unit].byEventType[log.event_type] += BigInt(log.quantity);

      return acc;
    }, {});
  }

  /**
   * Group usage data by time intervals
   */
  private groupByTime(
    logs: any[],
    interval: "hour" | "day" | "week" | "month",
  ) {
    const timeGroups = new Map<string, any>();

    logs.forEach((log) => {
      const timeKey = this.getTimeKey(log.timestamp, interval);

      if (!timeGroups.has(timeKey)) {
        timeGroups.set(timeKey, {
          timestamp: timeKey,
          total: {},
          byEventType: {},
          byUnit: {},
        });
      }

      const group = timeGroups.get(timeKey);

      // Update totals by unit
      if (!group.total[log.unit]) {
        group.total[log.unit] = BigInt(0);
      }
      group.total[log.unit] += BigInt(log.quantity);

      // Update by event type
      if (!group.byEventType[log.event_type]) {
        group.byEventType[log.event_type] = {
          total: BigInt(0),
          byUnit: {},
        };
      }
      if (!group.byEventType[log.event_type].byUnit[log.unit]) {
        group.byEventType[log.event_type].byUnit[log.unit] = BigInt(0);
      }
      group.byEventType[log.event_type].total += BigInt(log.quantity);
      group.byEventType[log.event_type].byUnit[log.unit] += BigInt(
        log.quantity,
      );

      // Update by unit
      if (!group.byUnit[log.unit]) {
        group.byUnit[log.unit] = {
          total: BigInt(0),
          byEventType: {},
        };
      }
      if (!group.byUnit[log.unit].byEventType[log.event_type]) {
        group.byUnit[log.unit].byEventType[log.event_type] = BigInt(0);
      }
      group.byUnit[log.unit].total += BigInt(log.quantity);
      group.byUnit[log.unit].byEventType[log.event_type] += BigInt(
        log.quantity,
      );
    });

    return Array.from(timeGroups.values()).sort(
      (a, b) =>
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
    );
  }

  /**
   * Extract detailed usage information
   */
  private extractUsageDetails(logs: any[]) {
    return logs.map((log) => ({
      timestamp: log.timestamp,
      event_type: log.event_type,
      quantity: log.quantity,
      unit: log.unit,
      details: log.details,
    }));
  }

  /**
   * Get time key for grouping
   */
  private getTimeKey(
    date: Date,
    interval: "hour" | "day" | "week" | "month",
  ): string {
    const d = new Date(date);
    switch (interval) {
      case "hour":
        return d.toISOString().slice(0, 13) + ":00:00Z";
      case "day":
        return d.toISOString().slice(0, 10);
      case "week":
        const startOfWeek = new Date(d);
        startOfWeek.setDate(d.getDate() - d.getDay());
        return startOfWeek.toISOString().slice(0, 10);
      case "month":
        return d.toISOString().slice(0, 7);
      default:
        return d.toISOString();
    }
  }

  /**
   * Get start date for timeframe
   */
  private getStartDateForTimeframe(
    timeframe: "day" | "week" | "month" | "year",
    previous: boolean = false,
  ): Date {
    const now = new Date();
    const multiplier = previous ? 2 : 1;

    switch (timeframe) {
      case "day":
        now.setDate(now.getDate() - 1 * multiplier);
        break;
      case "week":
        now.setDate(now.getDate() - 7 * multiplier);
        break;
      case "month":
        now.setMonth(now.getMonth() - 1 * multiplier);
        break;
      case "year":
        now.setFullYear(now.getFullYear() - 1 * multiplier);
        break;
    }

    return now;
  }

  /**
   * Analyze usage trends
   */
  private analyzeTrends(
    logs: any[],
    timeframe: "day" | "week" | "month" | "year",
  ) {
    const groupedData = this.groupByTime(
      logs,
      timeframe === "year" ? "month" : "day",
    );

    return {
      summary: this.calculateTotalUsage(logs),
      trend: this.calculateTrendMetrics(groupedData),
      patterns: this.identifyUsagePatterns(groupedData),
      breakdown: {
        byEventType: this.groupByEventType(logs),
        byUnit: this.groupByUnit(logs),
      },
    };
  }

  /**
   * Calculate trend metrics
   */
  private calculateTrendMetrics(groupedData: any[]) {
    const metrics: any = {
      average: {},
      median: {},
      percentiles: {},
      growth: {},
    };

    // Calculate metrics for each unit type
    Object.keys(groupedData[0]?.total || {}).forEach((unit) => {
      const values = groupedData.map((g) => Number(g.total[unit]));

      metrics.average[unit] = values.reduce((a, b) => a + b, 0) / values.length;

      const sorted = [...values].sort((a, b) => a - b);
      metrics.median[unit] = sorted[Math.floor(sorted.length / 2)];

      metrics.percentiles[unit] = {
        p90: sorted[Math.floor(sorted.length * 0.9)],
        p95: sorted[Math.floor(sorted.length * 0.95)],
        p99: sorted[Math.floor(sorted.length * 0.99)],
      };

      // Calculate growth rate
      const firstValue = values[0];
      const lastValue = values[values.length - 1];
      metrics.growth[unit] = firstValue
        ? ((lastValue - firstValue) / firstValue) * 100
        : 0;
    });

    return metrics;
  }

  /**
   * Identify usage patterns
   */
  private identifyUsagePatterns(groupedData: any[]) {
    const patterns: any = {
      seasonal: {},
      peaks: {},
      anomalies: {},
    };

    Object.keys(groupedData[0]?.total || {}).forEach((unit) => {
      const values = groupedData.map((g) => Number(g.total[unit]));

      patterns.seasonal[unit] = this.detectSeasonality(values);
      patterns.peaks[unit] = this.detectPeaks(values);
      patterns.anomalies[unit] = this.detectOutliers(values);
    });

    return patterns;
  }

  /**
   * Detect seasonality in usage data
   */
  private detectSeasonality(values: number[]) {
    // Simple autocorrelation for daily and weekly patterns
    const dailyCorrelation = this.calculateAutocorrelation(values, 24);
    const weeklyCorrelation = this.calculateAutocorrelation(values, 24 * 7);

    return {
      hasDaily: dailyCorrelation > 0.7,
      hasWeekly: weeklyCorrelation > 0.7,
      dailyStrength: dailyCorrelation,
      weeklyStrength: weeklyCorrelation,
    };
  }

  /**
   * Calculate autocorrelation
   */
  private calculateAutocorrelation(values: number[], lag: number): number {
    if (values.length <= lag) return 0;

    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const variance =
      values.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / values.length;

    let correlation = 0;
    for (let i = 0; i < values.length - lag; i++) {
      correlation += (values[i] - mean) * (values[i + lag] - mean);
    }

    return correlation / ((values.length - lag) * variance);
  }

  /**
   * Detect peaks in usage
   */
  private detectPeaks(values: number[]) {
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const stdDev = Math.sqrt(
      values.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / values.length,
    );

    const threshold = mean + 2 * stdDev;

    return {
      count: values.filter((v) => v > threshold).length,
      threshold,
      peaks: values
        .map((v, i) => (v > threshold ? i : -1))
        .filter((i) => i !== -1),
    };
  }

  /**
   * Detect outliers using Z-score
   */
  private detectOutliers(values: number[]) {
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const stdDev = Math.sqrt(
      values.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / values.length,
    );

    return values
      .map((value, index) => {
        const zScore = Math.abs((value - mean) / stdDev);
        return zScore > 3 ? { index, value, zScore } : null;
      })
      .filter((x) => x !== null);
  }

  /**
   * Compare usage periods
   */
  private comparePeriods(currentLogs: any[], previousLogs: any[]) {
    const current = this.calculateTotalUsage(currentLogs);
    const previous = this.calculateTotalUsage(previousLogs);

    const comparison: any = {
      changes: {},
      percentageChanges: {},
      trends: {},
    };

    // Calculate changes for each unit
    Object.keys({ ...current, ...previous }).forEach((unit) => {
      const currentValue = Number(current[unit] || 0);
      const previousValue = Number(previous[unit] || 0);

      comparison.changes[unit] = currentValue - previousValue;
      comparison.percentageChanges[unit] = previousValue
        ? ((currentValue - previousValue) / previousValue) * 100
        : 100;

      comparison.trends[unit] = {
        direction: currentValue > previousValue ? "up" : "down",
        magnitude: Math.abs(comparison.percentageChanges[unit]),
      };
    });

    return comparison;
  }

  /**
   * Generate cost estimates based on usage
   */
  private calculateCosts(usage: any[]) {
    // Implement your cost calculation logic here
    // This would typically involve your pricing tiers and rates
    const costs: any = {
      total: 0,
      byService: {},
      byUnit: {},
    };

    // Example calculation
    usage.forEach((log) => {
      const rate = this.getRateForUsage(log.event_type, log.unit);
      const cost = Number(log.quantity) * rate;

      costs.total += cost;

      if (!costs.byService[log.event_type]) {
        costs.byService[log.event_type] = 0;
      }
      costs.byService[log.event_type] += cost;

      if (!costs.byUnit[log.unit]) {
        costs.byUnit[log.unit] = 0;
      }
      costs.byUnit[log.unit] += cost;
    });

    return costs;
  }

  /**
   * Get rate for usage type
   */
  private getRateForUsage(eventType: string, unit: string): number {
    // Implement your pricing logic here
    // This would typically come from your pricing configuration
    const baseRates: Record<string, number> = {
      storage: 0.00002, // per byte
      bandwidth: 0.00001, // per byte
      api: 0.0001, // per request
      compute: 0.0002, // per operation
    };

    return baseRates[eventType] || 0;
  }

  /**
   * Get current billing period
   */
  private getCurrentBillingPeriodStart(entity: any): Date {
    // Implement your billing period logic here
    // This would typically come from your billing configuration
    const now = new Date();
    const billingDay = entity.billing_day || 1;
    const start = new Date(now.getFullYear(), now.getMonth(), billingDay);

    if (start > now) {
      start.setMonth(start.getMonth() - 1);
    }

    return start;
  }

  /**
   * Get current billing period end
   */
  private getCurrentBillingPeriodEnd(entity: any): Date {
    const start = this.getCurrentBillingPeriodStart(entity);
    const end = new Date(start);
    end.setMonth(end.getMonth() + 1);
    return end;
  }
}
