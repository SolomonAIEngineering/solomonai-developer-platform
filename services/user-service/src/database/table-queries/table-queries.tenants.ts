import { PrismaClient, Prisma } from "../generated/postgresql";
import {
  QueryMiddleware,
  QueryMiddlewareFactory,
} from "../middleware/query.middleware";
import { QueryOptions, RequestContext } from "../middleware/types";

type TenantWithRelations = Prisma.tenantsGetPayload<{
  include: {
    organization: true;
    business_accounts: true;
    user_accounts: true;
    settings: true;
    teams: true;
    audit_logs: true;
    tenant_api_keys: true;
    tenant_usage_logs: true;
  };
}>;

/**
 * Tenant-specific query implementation providing CRUD operations
 * and additional business logic for tenant management.
 */
export class TenantQueries {
  private middleware: QueryMiddleware;
  private prisma: PrismaClient;

  constructor(context: RequestContext, prisma: PrismaClient) {
    this.middleware = QueryMiddlewareFactory.create(context);
    this.prisma = prisma;
  }

  /**
   * Create a new tenant with proper validation and initialization
   */
  async createTenant(data: {
    organization_id: string;
    name: string;
    external_id?: string;
    custom_domain?: string;
    email?: string;
    storage_quota?: bigint;
    metadata?: Record<string, any>;
  }) {
    const tenantId = `tenant_${Date.now()}`;

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenants,
      "create",
      {
        data: {
          id: tenantId,
          ...data,
          status: "active",
          used_storage: BigInt(0),
        },
        include: {
          organization: true,
        },
      },
    );
  }

  /**
   * Retrieve tenants with flexible filtering and search
   */
  async getTenants(
    options?: QueryOptions & {
      organizationId?: string;
      searchTerm?: string;
      status?: ("active" | "suspended" | "deleted")[];
      externalId?: string;
      customDomain?: string;
      email?: string;
      name?: string;
      minCreatedDate?: Date;
      maxCreatedDate?: Date;
      includeBusinessAccounts?: boolean;
      includeUserAccounts?: boolean;
      includeSettings?: boolean;
      includeTeams?: boolean;
      includeApiKeys?: boolean;
      includeUsageLogs?: boolean;
      storageQuotaMin?: bigint;
      storageQuotaMax?: bigint;
      usedStorageMin?: bigint;
      usedStorageMax?: bigint;
    },
  ) {
    const {
      organizationId,
      searchTerm,
      status,
      externalId,
      customDomain,
      email,
      name,
      minCreatedDate,
      maxCreatedDate,
      includeBusinessAccounts,
      includeUserAccounts,
      includeSettings,
      includeTeams,
      includeApiKeys,
      includeUsageLogs,
      storageQuotaMin,
      storageQuotaMax,
      usedStorageMin,
      usedStorageMax,
      ...queryOptions
    } = options || {};

    let whereClause: any = {};

    if (organizationId) {
      whereClause.organization_id = organizationId;
    }

    if (searchTerm) {
      whereClause.OR = [
        { name: { contains: searchTerm, mode: "insensitive" } },
        { email: { contains: searchTerm, mode: "insensitive" } },
        { custom_domain: { contains: searchTerm, mode: "insensitive" } },
      ];
    }

    if (status?.length) {
      whereClause.status = { in: status };
    }

    if (externalId) {
      whereClause.external_id = externalId;
    }

    if (customDomain) {
      whereClause.custom_domain = customDomain;
    }

    if (email) {
      whereClause.email = email;
    }

    if (name) {
      whereClause.name = name;
    }

    if (minCreatedDate || maxCreatedDate) {
      whereClause.created_at = {};
      if (minCreatedDate) whereClause.created_at.gte = minCreatedDate;
      if (maxCreatedDate) whereClause.created_at.lte = maxCreatedDate;
    }

    if (storageQuotaMin || storageQuotaMax) {
      whereClause.storage_quota = {};
      if (storageQuotaMin) whereClause.storage_quota.gte = storageQuotaMin;
      if (storageQuotaMax) whereClause.storage_quota.lte = storageQuotaMax;
    }

    if (usedStorageMin || usedStorageMax) {
      whereClause.used_storage = {};
      if (usedStorageMin) whereClause.used_storage.gte = usedStorageMin;
      if (usedStorageMax) whereClause.used_storage.lte = usedStorageMax;
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenants,
      "findMany",
      {
        where: whereClause,
        include: {
          organization: true,
          business_accounts: includeBusinessAccounts,
          user_accounts: includeUserAccounts,
          settings: includeSettings,
          teams: includeTeams,
          tenant_api_keys: includeApiKeys,
          tenant_usage_logs: includeUsageLogs,
        },
      },
      queryOptions,
    );
  }

  /**
   * Get a single tenant by ID with optional relation loading
   */
  async getTenantById(
    id: string,
    options?: QueryOptions & {
      includeBusinessAccounts?: boolean;
      includeUserAccounts?: boolean;
      includeSettings?: boolean;
      includeTeams?: boolean;
      includeApiKeys?: boolean;
      includeUsageLogs?: boolean;
    },
  ): Promise<TenantWithRelations | null> {
    const {
      includeBusinessAccounts,
      includeUserAccounts,
      includeSettings,
      includeTeams,
      includeApiKeys,
      includeUsageLogs,
      ...queryOptions
    } = options || {};

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenants,
      "findUnique",
      {
        where: { id },
        include: {
          organization: true,
          business_accounts: includeBusinessAccounts,
          user_accounts: includeUserAccounts,
          settings: includeSettings,
          teams: includeTeams,
          tenant_api_keys: includeApiKeys,
          tenant_usage_logs: includeUsageLogs,
        },
      },
      queryOptions,
    );
  }

  /**
   * Check if tenant exists by various identifiers
   */
  async checkTenantExists(identifier: {
    id?: string;
    external_id?: string;
    custom_domain?: string;
    email?: string;
    name?: string;
    organization_id?: string;
  }) {
    let whereClause: any = {};

    if (identifier.id) whereClause.id = identifier.id;
    if (identifier.external_id)
      whereClause.external_id = identifier.external_id;
    if (identifier.custom_domain)
      whereClause.custom_domain = identifier.custom_domain;
    if (identifier.email) whereClause.email = identifier.email;
    if (identifier.name && identifier.organization_id) {
      whereClause.AND = [
        { name: identifier.name },
        { organization_id: identifier.organization_id },
      ];
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenants,
      "findFirst",
      {
        where: whereClause,
      },
    );
  }

  /**
   * Update tenant details
   */
  async updateTenant(
    id: string,
    data: {
      name?: string;
      custom_domain?: string;
      email?: string;
      metadata?: Record<string, any>;
      storage_quota?: bigint;
    },
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenants,
      "update",
      {
        where: { id },
        data,
      },
    );
  }

  /**
   * Update tenant status
   */
  async updateTenantStatus(
    id: string,
    status: "active" | "suspended" | "deleted",
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenants,
      "update",
      {
        where: { id },
        data: {
          status,
          updated_at: new Date(),
        },
      },
    );
  }

  /**
   * Bulk update tenant statuses
   */
  async bulkUpdateTenantStatus(
    ids: string[],
    status: "active" | "suspended" | "deleted",
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenants,
      "updateMany",
      {
        where: {
          id: { in: ids },
        },
        data: {
          status,
          updated_at: new Date(),
        },
      },
    );
  }

  /**
   * Update tenant storage usage
   */
  async updateStorageUsage(id: string, bytesChanged: number) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenants,
      "update",
      {
        where: { id },
        data: {
          used_storage: {
            increment: bytesChanged,
          },
        },
      },
    );
  }

  /**
   * Get tenant storage usage metrics
   */
  async getStorageMetrics(id: string, startDate: Date, endDate: Date) {
    const usageLogs = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_usage_logs,
      "findMany",
      {
        where: {
          tenant_id: id,
          event_type: "storage",
          timestamp: {
            gte: startDate,
            lte: endDate,
          },
        },
        orderBy: {
          timestamp: "asc",
        },
      },
    );

    return this.aggregateDailyUsage(usageLogs);
  }

  /**
   * Get tenants approaching storage limit
   */
  async getTenantsNearStorageLimit(
    organizationId: string,
    thresholdPercentage: number = 90,
  ) {
    const tenants = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenants,
      "findMany",
      {
        where: {
          organization_id: organizationId,
          status: "active",
          storage_quota: {
            not: null,
          },
        },
      },
    );

    return tenants.filter((tenant) => {
      if (!tenant.storage_quota) return false;
      const usagePercentage =
        (Number(tenant.used_storage) / Number(tenant.storage_quota)) * 100;
      return usagePercentage >= thresholdPercentage;
    });
  }

  /**
   * Transfer tenant to another organization
   */
  async transferTenant(
    id: string,
    newOrganizationId: string,
    options?: {
      keepSettings?: boolean;
      keepApiKeys?: boolean;
    },
  ) {
    const { keepSettings = false, keepApiKeys = false } = options || {};

    // If not keeping settings or API keys, delete them first
    if (!keepSettings) {
      await this.middleware.enforceQueryRules(
        this.prisma,
        Prisma.ModelName.settings,
        "deleteMany",
        {
          where: { tenant_id: id },
        },
      );
    }

    if (!keepApiKeys) {
      await this.middleware.enforceQueryRules(
        this.prisma,
        Prisma.ModelName.tenant_api_keys,
        "deleteMany",
        {
          where: { tenant_id: id },
        },
      );
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenants,
      "update",
      {
        where: { id },
        data: {
          organization_id: newOrganizationId,
          updated_at: new Date(),
        },
      },
    );
  }

  /**
   * Clone tenant settings
   */
  async cloneTenantSettings(sourceTenantId: string, targetTenantId: string) {
    const sourceSettings = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "findMany",
      {
        where: { tenant_id: sourceTenantId },
      },
    );

    // Create new settings for target tenant
    const settingsPromises = sourceSettings.map((setting) =>
      this.middleware.enforceQueryRules(
        this.prisma,
        Prisma.ModelName.settings,
        "create",
        {
          data: {
            tenant_id: targetTenantId,
            settings_data: setting.settings_data as Prisma.InputJsonValue,
          },
        },
      ),
    );

    return await Promise.all(settingsPromises);
  }

  /**
   * Get tenant health status
   */
  async getTenantHealth(id: string) {
    const tenant = await this.getTenantById(id, {
      includeUsageLogs: true,
      includeUserAccounts: true,
      includeBusinessAccounts: true,
    });

    if (!tenant) throw new Error("Tenant not found");

    const storageUtilization = tenant.storage_quota
      ? (Number(tenant.used_storage) / Number(tenant.storage_quota)) * 100
      : 0;

    const activeUserCount = tenant.user_accounts.filter(
      (u) => u.is_active,
    ).length;
    const activeBusinessCount = tenant.business_accounts.filter(
      (b) => b.is_active,
    ).length;

    return {
      id: tenant.id,
      status: tenant.status,
      storageUtilization,
      activeUserCount,
      activeBusinessCount,
      isHealthy: tenant.status === "active" && storageUtilization < 90,
    };
  }

  /**
   * Get inactive tenants
   */
  async getInactiveTenants(organizationId: string, inactiveDays: number) {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - inactiveDays);

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenants,
      "findMany",
      {
        where: {
          organization_id: organizationId,
          status: "active",
          updated_at: {
            lt: cutoffDate,
          },
        },
      },
    );
  }

  /**
   * Hard delete a tenant and all related data
   * WARNING: This operation is irreversible
   */
  async permanentlyDeleteTenant(id: string) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenants,
      "delete",
      {
        where: { id },
      },
    );
  }

  /**
   * Get tenant audit history
   */
  async getTenantAuditHistory(
    id: string,
    options?: QueryOptions & {
      startDate?: Date;
      endDate?: Date;
      eventTypes?: string[];
      limit?: number;
    },
  ) {
    const { startDate, endDate, eventTypes, limit, ...queryOptions } =
      options || {};

    let whereClause: any = {
      tenant_id: id,
    };

    if (startDate || endDate) {
      whereClause.created_at = {};
      if (startDate) whereClause.created_at.gte = startDate;
      if (endDate) whereClause.created_at.lte = endDate;
    }

    if (eventTypes?.length) {
      whereClause.event_type = { in: eventTypes };
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: whereClause,
        orderBy: {
          created_at: "desc",
        },
        take: limit,
      },
      queryOptions,
    );
  }

  /**
   * Get tenant activity metrics
   */
  async getTenantActivityMetrics(
    id: string,
    timeframe: "daily" | "weekly" | "monthly",
    startDate: Date,
    endDate: Date,
  ) {
    const logs = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenant_usage_logs,
      "findMany",
      {
        where: {
          tenant_id: id,
          timestamp: {
            gte: startDate,
            lte: endDate,
          },
        },
      },
    );

    return this.aggregateActivityMetrics(logs, timeframe);
  }

  /**
   * Update tenant custom domain with validation
   */
  async updateTenantCustomDomain(
    id: string,
    customDomain: string | null,
    validate: boolean = true,
  ) {
    if (customDomain && validate) {
      const existing = await this.checkTenantExists({
        custom_domain: customDomain,
      });
      if (existing && existing.id !== id) {
        throw new Error("Custom domain already in use");
      }
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenants,
      "update",
      {
        where: { id },
        data: {
          custom_domain: customDomain,
          updated_at: new Date(),
        },
      },
    );
  }

  /**
   * Sync tenant metadata
   */
  async syncTenantMetadata(
    id: string,
    metadata: Record<string, any>,
    options?: {
      merge?: boolean;
      override?: string[];
    },
  ) {
    const tenant = await this.getTenantById(id);
    if (!tenant) throw new Error("Tenant not found");

    let updatedMetadata: Record<string, any>;
    if (options?.merge) {
      updatedMetadata = {
        ...(tenant.metadata as Record<string, any>),
        ...metadata,
      };
    } else {
      updatedMetadata = metadata;
    }

    // Handle specific field overrides
    if (options?.override) {
      for (const field of options.override) {
        if (field in metadata) {
          updatedMetadata[field] = metadata[field];
        }
      }
    }

    return await this.updateTenant(id, { metadata: updatedMetadata });
  }

  /**
   * Get tenant resource utilization
   */
  async getTenantResourceUtilization(id: string) {
    const tenant = await this.getTenantById(id, {
      includeUserAccounts: true,
      includeBusinessAccounts: true,
      includeTeams: true,
    });

    if (!tenant) throw new Error("Tenant not found");

    return {
      storage: {
        total: Number(tenant.storage_quota || 0),
        used: Number(tenant.used_storage),
        available:
          Number(tenant.storage_quota || 0) - Number(tenant.used_storage),
      },
      users: {
        total: tenant.user_accounts.length,
        active: tenant.user_accounts.filter((u) => u.is_active).length,
      },
      businesses: {
        total: tenant.business_accounts.length,
        active: tenant.business_accounts.filter((b) => b.is_active).length,
      },
      teams: {
        total: tenant.teams.length,
        active: tenant.teams.filter((t) => t.is_active).length,
      },
    };
  }

  /**
   * Get tenants by usage pattern
   */
  async getTenantsByUsagePattern(
    organizationId: string,
    pattern: "high" | "medium" | "low",
    timeframe: number, // days
  ) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - timeframe);

    const tenants = await this.getTenants({
      organizationId,
      includeUsageLogs: true,
      status: ["active"],
    });

    const usageThresholds = {
      high: 0.8, // 80%
      medium: 0.4, // 40%
      low: 0.2, // 20%
    };

    return tenants.filter((tenant) => {
      const totalQuota = Number(tenant.storage_quota || 0);
      if (totalQuota === 0) return false;

      const usageRatio = Number(tenant.used_storage) / totalQuota;

      switch (pattern) {
        case "high":
          return usageRatio >= usageThresholds.high;
        case "medium":
          return (
            usageRatio >= usageThresholds.medium &&
            usageRatio < usageThresholds.high
          );
        case "low":
          return usageRatio < usageThresholds.low;
      }
    });
  }

  /**
   * Migrate tenant data
   */
  async migrateTenantData(
    sourceId: string,
    targetId: string,
    options: {
      includeUsers?: boolean;
      includeBusinesses?: boolean;
      includeTeams?: boolean;
      includeSettings?: boolean;
      deleteSource?: boolean;
    },
  ) {
    const {
      includeUsers = true,
      includeBusinesses = true,
      includeTeams = true,
      includeSettings = true,
      deleteSource = false,
    } = options;

    // Start a transaction
    return await this.prisma.$transaction(async (tx) => {
      if (includeUsers) {
        await tx.user_accounts.updateMany({
          where: { tenant_id: sourceId },
          data: { tenant_id: targetId },
        });
      }

      if (includeBusinesses) {
        await tx.business_accounts.updateMany({
          where: { tenant_id: sourceId },
          data: { tenant_id: targetId },
        });
      }

      if (includeTeams) {
        await tx.teams.updateMany({
          where: { tenant_id: sourceId },
          data: { tenant_id: targetId },
        });
      }

      if (includeSettings) {
        await this.cloneTenantSettings(sourceId, targetId);
      }

      if (deleteSource) {
        await tx.tenants.update({
          where: { id: sourceId },
          data: { status: "deleted" },
        });
      }

      return await tx.tenants.findUnique({
        where: { id: targetId },
        include: {
          user_accounts: true,
          business_accounts: true,
          teams: true,
          settings: true,
        },
      });
    });
  }

  /**
   * Set tenant storage quota with validation
   */
  async setTenantStorageQuota(
    id: string,
    newQuota: bigint,
    options?: {
      validateOrganizationLimits?: boolean;
      forceUpdate?: boolean;
    },
  ) {
    const { validateOrganizationLimits = true, forceUpdate = false } =
      options || {};

    const tenant = await this.getTenantById(id, {
      includeUserAccounts: true,
    });

    if (!tenant) throw new Error("Tenant not found");

    // Validate that new quota isn't less than current usage
    if (!forceUpdate && newQuota < tenant.used_storage) {
      throw new Error("New quota cannot be less than current usage");
    }

    if (validateOrganizationLimits) {
      const org = await this.middleware.enforceQueryRules(
        this.prisma,
        Prisma.ModelName.organizations,
        "findUnique",
        {
          where: { id: tenant.organization_id },
        },
      );

      if (!org) throw new Error("Organization not found");

      // Check if new quota would exceed organization's total quota
      const otherTenantsQuota = await this.getTotalTenantQuota(
        tenant.organization_id,
        id,
      );
      const totalQuota = otherTenantsQuota + Number(newQuota);

      if (totalQuota > Number(org.storage_quota)) {
        throw new Error("New quota would exceed organization storage limit");
      }
    }

    return await this.updateTenant(id, {
      storage_quota: newQuota,
    });
  }

  /**
   * Get total tenant quota for an organization (excluding specified tenant)
   */
  private async getTotalTenantQuota(
    organizationId: string,
    excludeTenantId?: string,
  ): Promise<number> {
    const tenants = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.tenants,
      "findMany",
      {
        where: {
          organization_id: organizationId,
          id: excludeTenantId ? { not: excludeTenantId } : undefined,
          status: "active",
        },
        select: {
          storage_quota: true,
        },
      },
    );

    return tenants.reduce(
      (total, tenant) => total + Number(tenant.storage_quota || 0),
      0,
    );
  }

  /**
   * Aggregate activity metrics by timeframe
   */
  private aggregateActivityMetrics(
    logs: any[],
    timeframe: "daily" | "weekly" | "monthly",
  ) {
    const metrics = new Map<string, number>();

    logs.forEach((log) => {
      let key: string;
      const date = new Date(log.timestamp);

      switch (timeframe) {
        case "daily":
          key = date.toISOString().split("T")[0];
          break;
        case "weekly":
          key = this.getWeekKey(date);
          break;
        case "monthly":
          key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
          break;
      }

      const currentValue = metrics.get(key) || 0;
      metrics.set(key, currentValue + Number(log.quantity));
    });

    return Array.from(metrics.entries())
      .map(([period, value]) => ({
        period,
        value,
      }))
      .sort((a, b) => a.period.localeCompare(b.period));
  }

  /**
   * Get week key for activity metrics
   */
  private getWeekKey(date: Date): string {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const weekNumber = Math.ceil(
      ((date.getTime() - startOfYear.getTime()) / 86400000 +
        startOfYear.getDay() +
        1) /
        7,
    );
    return `${date.getFullYear()}-W${String(weekNumber).padStart(2, "0")}`;
  }

  /**
   * Aggregate daily usage
   */
  private aggregateDailyUsage(usageLogs: any[]) {
    const dailyUsage = new Map<string, number>();

    usageLogs.forEach((log) => {
      const date = log.timestamp.toISOString().split("T")[0];
      const currentUsage = dailyUsage.get(date) || 0;
      dailyUsage.set(date, currentUsage + Number(log.quantity));
    });

    return Array.from(dailyUsage.entries()).map(([date, usage]) => ({
      date,
      usage,
    }));
  }
}
