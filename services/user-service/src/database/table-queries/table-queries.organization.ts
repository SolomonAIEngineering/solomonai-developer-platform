import { QueryMiddleware, QueryMiddlewareFactory } from "../client";
import { PrismaClient, Prisma } from "../generated/postgresql";
import { QueryOptions, RequestContext } from "../types";

type OrganizationWithRelations = Prisma.organizationsGetPayload<{
  include: {
    org_members: true;
    org_usage_logs: true;
    org_api_keys: true;
    tenants: true;
    teams: true;
  };
}>;

/**
 * Organization-specific query implementation providing CRUD operations
 * and additional business logic for organization management.
 */
export class OrganizationQueries {
  private middleware: QueryMiddleware;
  private prisma: PrismaClient;

  constructor(context: RequestContext, prisma: PrismaClient) {
    this.middleware = QueryMiddlewareFactory.create(context, prisma);
    this.prisma = prisma;
  }

  /**
   * Create a new organization with proper validation and initialization
   */
  async createOrganization(data: {
    name: string;
    display_name?: string;
    domain?: string;
    subscription_tier: "free" | "premium" | "enterprise";
    email: string;
    technical_contact?: string;
    user_id?: string;
    metadata?: Record<string, any>;
    security_settings?: Record<string, any>;
    feature_flags?: Record<string, any>;
  }) {
    // Generate a unique API key prefix
    const apiKeyPrefix = await this.generateUniqueApiKeyPrefix();

    // Set subscription limits based on tier
    const tierLimits = this.getSubscriptionTierLimits(data.subscription_tier);

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "create",
      {
        data: {
          id: `org_${Date.now()}`,
          ...data,
          subscription_status: "active",
          api_key_prefix: apiKeyPrefix,
          storage_quota: tierLimits.storageQuota,
          max_users: tierLimits.maxUsers,
          max_workspaces: tierLimits.maxWorkspaces,
          max_members: tierLimits.maxMembers,
          used_storage: BigInt(0),
          is_active: true,
        },
      },
    );
  }

  /**
   * Retrieve organizations with flexible filtering and search
   */
  async getOrganizations(
    options?: QueryOptions & {
      searchTerm?: string;
      subscriptionTiers?: ("free" | "premium" | "enterprise")[];
      subscriptionStatus?: ("active" | "suspended" | "trialing")[];
      domain?: string;
      email?: string;
      name?: string;
      display_name?: string;
      maxUsers?: number;
      storageQuota?: bigint;
      usedStorage?: bigint;
      maxWorkspaces?: number;
      maxMembers?: number;
      includeTenants?: boolean;
      includeMembers?: boolean;
      includeApiKeys?: boolean;
      minCreatedDate?: Date;
      maxCreatedDate?: Date;
    },
  ) {
    const {
      searchTerm,
      subscriptionTiers,
      subscriptionStatus,
      domain,
      email,
      name,
      display_name,
      includeTenants,
      includeMembers,
      minCreatedDate,
      maxCreatedDate,
      maxUsers,
      storageQuota,
      usedStorage,
      maxWorkspaces,
      maxMembers,
      includeApiKeys,
      ...queryOptions
    } = options || {};

    let whereClause: Prisma.organizationsWhereInput = {};

    if (searchTerm) {
      whereClause.OR = [
        { name: { contains: searchTerm, mode: "insensitive" } },
        { display_name: { contains: searchTerm, mode: "insensitive" } },
        { email: { contains: searchTerm, mode: "insensitive" } },
      ];
    }

    if (subscriptionTiers?.length) {
      whereClause.subscription_tier = { in: subscriptionTiers };
    }

    if (subscriptionStatus?.length) {
      whereClause.subscription_status = { in: subscriptionStatus };
    }

    if (domain) {
      whereClause.domain = domain;
    }

    if (minCreatedDate || maxCreatedDate) {
      whereClause.created_at = {};
      if (minCreatedDate) whereClause.created_at.gte = minCreatedDate;
      if (maxCreatedDate) whereClause.created_at.lte = maxCreatedDate;
    }

    if (maxUsers) {
      whereClause.max_users = { lte: maxUsers };
    }

    if (storageQuota) {
      whereClause.storage_quota = { lte: storageQuota };
    }

    if (usedStorage) {
      whereClause.used_storage = { lte: usedStorage };
    }

    if (maxWorkspaces) {
      whereClause.max_workspaces = { lte: maxWorkspaces };
    }

    if (maxMembers) {
      whereClause.max_members = { lte: maxMembers };
    }

    if (name) {
      whereClause.name = name;
    }

    if (display_name) {
      whereClause.display_name = display_name;
    }

    if (email) {
      whereClause.email = email;
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "findMany",
      {
        where: whereClause,
        include: {
          tenants: includeTenants,
          org_members: includeMembers,
          teams: true,
          org_api_keys: includeApiKeys,
        },
      },
      queryOptions,
    );
  }

  /**
   * Check if organization exists by various identifiers
   */
  async checkOrganizationExists(identifier: {
    id?: string;
    email?: string;
    name?: string;
    display_name?: string;
  }) {
    if (
      !identifier.id &&
      !identifier.email &&
      !identifier.name &&
      !identifier.display_name
    ) {
      throw new Error(
        "Either id, email, name, or display_name must be provided",
      );
    }

    let whereClause: Prisma.organizationsWhereInput = {};

    if (identifier.id) whereClause.id = identifier.id;
    if (identifier.email) whereClause.email = identifier.email;
    if (identifier.name) whereClause.name = identifier.name;
    if (identifier.display_name)
      whereClause.display_name = identifier.display_name;
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "findFirst",
      {
        where: whereClause,
      },
    );
  }

  /**
   * Get a single organization by ID with optional relation loading
   */
  async getOrganizationById(
    id: string,
    options?: QueryOptions & {
      includeTenants?: boolean;
      includeMembers?: boolean;
      includeTeams?: boolean;
      includeApiKeys?: boolean;
      includeUsageLogs?: boolean;
    },
  ): Promise<OrganizationWithRelations> {
    const {
      includeTenants,
      includeMembers,
      includeTeams,
      includeApiKeys,
      includeUsageLogs,
      ...queryOptions
    } = options || {};

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "findUnique",
      {
        where: { id },
        include: {
          tenants: includeTenants,
          org_members: includeMembers,
          teams: includeTeams,
          org_api_keys: includeApiKeys,
          org_usage_logs: includeUsageLogs,
        },
      },
      queryOptions,
    );
  }

  /**
   * Update organization details with proper validation
   */
  async updateOrganization(
    id: string,
    data: {
      name?: string;
      display_name?: string;
      domain?: string;
      email?: string;
      technical_contact?: string;
      metadata?: Record<string, any>;
      security_settings?: Record<string, any>;
      feature_flags?: Record<string, any>;
    },
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "update",
      {
        where: { id },
        data,
      },
    );
  }

  /**
   * Update organization subscription with proper tier limit adjustments
   */
  async updateSubscription(
    id: string,
    data: {
      subscription_tier: "free" | "premium" | "enterprise";
      subscription_status?: "active" | "suspended" | "trialing";
    },
  ) {
    const tierLimits = this.getSubscriptionTierLimits(data.subscription_tier);

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "update",
      {
        where: { id },
        data: {
          ...data,
          ...tierLimits,
        },
      },
    );
  }

  /**
   * Soft delete an organization and related entities
   */
  async deleteOrganization(id: string) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "update",
      {
        where: { id },
        data: {
          is_active: false,
          subscription_status: "suspended",
          tenants: {
            updateMany: {
              where: { organization_id: id },
              data: { status: "deleted" },
            },
          },
          org_api_keys: {
            updateMany: {
              where: { organization_id: id },
              data: { is_active: false },
            },
          },
          org_members: {
            updateMany: {
              where: { organization_id: id },
              data: { status: "deleted" },
            },
          },
        },
      },
    );
  }

  /**
   * Check if organization has reached its member limit
   */
  async hasReachedMemberLimit(id: string): Promise<boolean> {
    const org = await this.getOrganizationById(id);
    if (!org || !org.max_members) return true;

    const memberCount = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "count",
      {
        where: {
          organization_id: id,
          status: "active",
        },
      },
    );

    // memberCount is possibly null, so default to 0 if null
    const currentMembers = memberCount ?? 0;
    return currentMembers >= org.max_members;
  }

  /**
   * Update organization storage usage
   */
  async updateStorageUsage(id: string, bytesChanged: number) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
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
   * Get organization usage metrics
   */
  async getUsageMetrics(id: string, startDate: Date, endDate: Date) {
    const usageLogs = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_usage_logs,
      "findMany",
      {
        where: {
          organization_id: id,
          timestamp: {
            gte: startDate,
            lte: endDate,
          },
        },
      },
    );

    // Aggregate usage by type
    return usageLogs.reduce(
      (
        metrics: Record<string, number>,
        log: { event_type: string | number; quantity: any },
      ) => {
        metrics[log.event_type] =
          (metrics[log.event_type] || 0) + Number(log.quantity);
        return metrics;
      },
      {},
    );
  }

  /**
   * Check organization health status
   */
  async getHealthStatus(id: string) {
    const org = (await this.getOrganizationById(id, {
      includeUsageLogs: true,
      includeMembers: true,
    })) as OrganizationWithRelations;

    if (!org) throw new Error("Organization not found");

    const storageUtilization =
      (Number(org.used_storage) / Number(org.storage_quota)) * 100;
    const memberUtilization =
      (org.org_members.length / (org.max_members || 1)) * 100;

    return {
      id: org.id,
      status: org.subscription_status,
      storageUtilization,
      memberUtilization,
      isHealthy:
        org.is_active &&
        org.subscription_status === "active" &&
        storageUtilization < 90 &&
        memberUtilization < 90,
    };
  }

  /**
   * Generate a unique API key prefix
   */
  private async generateUniqueApiKeyPrefix(): Promise<string> {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let prefix: string;
    let isUnique = false;

    while (!isUnique) {
      prefix = Array.from({ length: 10 }, () =>
        characters.charAt(Math.floor(Math.random() * characters.length)),
      ).join("");

      const existing = await this.middleware.enforceQueryRules(
        this.prisma,
        Prisma.ModelName.organizations,
        "findUnique",
        {
          where: { api_key_prefix: prefix },
        },
      );

      if (!existing) isUnique = true;
    }

    return prefix!;
  }

  /**
   * Get subscription tier limits
   */
  private getSubscriptionTierLimits(tier: "free" | "premium" | "enterprise"): {
    storageQuota: bigint;
    maxUsers: number;
    maxWorkspaces: number;
    maxMembers: number;
  } {
    switch (tier) {
      case "free":
        return {
          storageQuota: BigInt(5 * 1024 * 1024 * 1024), // 5GB
          maxUsers: 10,
          maxWorkspaces: 3,
          maxMembers: 5,
        };
      case "premium":
        return {
          storageQuota: BigInt(100 * 1024 * 1024 * 1024), // 100GB
          maxUsers: 100,
          maxWorkspaces: 10,
          maxMembers: 50,
        };
      case "enterprise":
        return {
          storageQuota: BigInt(1024 * 1024 * 1024 * 1024), // 1TB
          maxUsers: 1000,
          maxWorkspaces: 100,
          maxMembers: 500,
        };
    }
  }

  /**
   * Get organizations by domain pattern
   */
  async getOrganizationsByDomain(
    domainPattern: string,
    options?: QueryOptions & {
      includeInactive?: boolean;
      includeTenants?: boolean;
    },
  ) {
    const { includeInactive, includeTenants, ...queryOptions } = options || {};

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "findMany",
      {
        where: {
          domain: {
            contains: domainPattern,
            mode: "insensitive",
          },
          ...(includeInactive ? {} : { is_active: true }),
        },
        include: {
          tenants: includeTenants,
        },
      },
      queryOptions,
    );
  }

  /**
   * Get organizations by subscription expiration
   */
  async getOrganizationsBySubscriptionStatus(
    daysUntilExpiration: number,
    options?: QueryOptions,
  ) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysUntilExpiration);

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "findMany",
      {
        where: {
          subscription_status: {
            in: ["active", "trialing"],
          },
          updated_at: {
            lte: expirationDate,
          },
        },
      },
      options,
    );
  }

  /**
   * Get organizations approaching storage limit
   */
  async getOrganizationsNearStorageLimit(
    thresholdPercentage: number = 90,
    options?: QueryOptions,
  ) {
    // First get all active organizations
    const organizations = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "findMany",
      {
        where: {
          is_active: true,
          storage_quota: {
            not: undefined,
          },
          used_storage: {
            not: undefined,
          },
        },
        orderBy: {
          used_storage: "desc",
        },
      },
      options,
    );

    // Then filter in memory for those over the threshold
    return organizations.filter(
      (org: { used_storage: bigint; storage_quota: bigint }) => {
        const usedPercentage =
          (Number(org.used_storage) / Number(org.storage_quota)) * 100;
        return usedPercentage >= thresholdPercentage;
      },
    );
  }

  /**
   * Update organization feature flags
   */
  async updateFeatureFlags(id: string, featureFlags: Record<string, boolean>) {
    const org = await this.getOrganizationById(id);
    if (!org) throw new Error("Organization not found");

    const updatedFlags = {
      ...((org.feature_flags as Record<string, boolean>) || {}),
      ...featureFlags,
    };

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "update",
      {
        where: { id },
        data: {
          feature_flags: updatedFlags,
        },
      },
    );
  }

  /**
   * Update organization security settings
   */
  async updateSecuritySettings(
    id: string,
    settings: {
      mfa_required?: boolean;
      password_policy?: {
        min_length: number;
        require_special_chars: boolean;
        require_numbers: boolean;
      };
      session_timeout?: number;
      ip_whitelist?: string[];
    },
  ) {
    const org = await this.getOrganizationById(id);
    if (!org) throw new Error("Organization not found");

    const updatedSettings = {
      ...((org.security_settings as Record<string, any>) || {}),
      ...settings,
    };

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "update",
      {
        where: { id },
        data: {
          security_settings: updatedSettings,
        },
      },
    );
  }

  /**
   * Bulk update organization statuses
   */
  async bulkUpdateStatus(
    ids: string[],
    status: "active" | "suspended" | "trialing",
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "updateMany",
      {
        where: {
          id: { in: ids },
        },
        data: {
          subscription_status: status,
          updated_at: new Date(),
        },
      },
    );
  }

  /**
   * Transfer organization ownership
   */
  async transferOwnership(
    id: string,
    newOwnerId: string,
    newOwnerEmail: string,
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "update",
      {
        where: { id },
        data: {
          user_id: newOwnerId,
          email: newOwnerEmail,
          updated_at: new Date(),
        },
      },
    );
  }

  /**
   * Reset organization API key
   */
  async resetApiKey(id: string) {
    const newPrefix = await this.generateUniqueApiKeyPrefix();

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "update",
      {
        where: { id },
        data: {
          api_key_prefix: newPrefix,
          updated_at: new Date(),
        },
      },
    );
  }

  /**
   * Get organization storage trends
   */
  async getStorageTrends(id: string, days: number) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const usageLogs = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_usage_logs,
      "findMany",
      {
        where: {
          organization_id: id,
          event_type: "storage",
          timestamp: {
            gte: startDate,
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
   * Clone organization settings
   */
  async cloneOrganizationSettings(
    sourceId: string,
    targetId: string,
    options: {
      cloneSecuritySettings?: boolean;
      cloneFeatureFlags?: boolean;
      cloneMetadata?: boolean;
    } = {},
  ) {
    const sourceOrg = await this.getOrganizationById(sourceId);
    if (!sourceOrg) throw new Error("Source organization not found");

    const updateData: Record<string, any> = {};

    if (options.cloneSecuritySettings) {
      updateData.security_settings = sourceOrg.security_settings;
    }
    if (options.cloneFeatureFlags) {
      updateData.feature_flags = sourceOrg.feature_flags;
    }
    if (options.cloneMetadata) {
      updateData.metadata = sourceOrg.metadata;
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "update",
      {
        where: { id: targetId },
        data: updateData,
      },
    );
  }

  /**
   * Archive organization data
   */
  async archiveOrganization(id: string) {
    const org = await this.getOrganizationById(id, {
      includeTenants: true,
      includeMembers: true,
      includeApiKeys: true,
      includeUsageLogs: true,
    });

    if (!org) throw new Error("Organization not found");

    // Create archive record
    const archiveData = {
      organization_data: org,
      archived_at: new Date(),
      archived_by: this.middleware.getContext().userId,
    };

    // Store archive data (implementation depends on your archive storage solution)
    // await this.archiveStorage.store(`org_${id}_archive`, archiveData);

    // Soft delete the organization
    return await this.deleteOrganization(id);
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

  /**
   * Hard delete an organization and all related data
   * WARNING: This operation is irreversible
   */
  async permanentlyDeleteOrganization(id: string) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "delete",
      {
        where: { id },
      },
    );
  }
}
