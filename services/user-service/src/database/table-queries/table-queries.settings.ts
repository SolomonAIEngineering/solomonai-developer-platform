import { PrismaClient, Prisma } from "../generated/postgresql";
import {
  QueryMiddleware,
  QueryMiddlewareFactory,
} from "../middleware/query.middleware";
import { QueryOptions, RequestContext } from "../middleware/types";

type SettingsWithRelations = Prisma.settingsGetPayload<{
  include: {
    tenant: true;
    business_accounts: true;
    user_accounts: true;
  };
}>;

export class SettingsQueries {
  private middleware: QueryMiddleware;
  private prisma: PrismaClient;

  constructor(context: RequestContext, prisma: PrismaClient) {
    this.middleware = QueryMiddlewareFactory.create(context);
    this.prisma = prisma;
  }

  /**
   * Create a new settings entry
   */
  async createSettings(data: {
    organization_id?: string;
    tenant_id?: string;
    business_account_id?: bigint;
    user_account_id?: bigint;
    settings_data?: Record<string, any>;
    preferred_language?: string;
    notification_settings?: Record<string, any>;
    ui_settings?: Record<string, any>;
  }) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "create",
      {
        data: {
          ...data,
          created_at: new Date(),
          updated_at: new Date(),
        },
        include: {
          tenant: true,
          business_accounts: true,
          user_accounts: true,
        },
      },
    );
  }

  /**
   * Bulk create settings entries
   */
  async bulkCreateSettings(
    settingsArray: Array<{
      organization_id?: string;
      tenant_id?: string;
      business_account_id?: bigint;
      user_account_id?: bigint;
      settings_data?: Record<string, any>;
      preferred_language?: string;
      notification_settings?: Record<string, any>;
      ui_settings?: Record<string, any>;
    }>,
  ) {
    const results = await this.prisma.$transaction(async (tx) => {
      const createdSettings = [];
      for (const settings of settingsArray) {
        try {
          const created = await this.middleware.enforceQueryRules(
            tx as unknown as PrismaClient,
            Prisma.ModelName.settings,
            "create",
            {
              data: {
                ...settings,
                created_at: new Date(),
                updated_at: new Date(),
              },
            },
          );
          createdSettings.push({ success: true, settings: created });
        } catch (error) {
          createdSettings.push({
            success: false,
            error: error instanceof Error ? error.message : String(error),
            settings,
          });
        }
      }
      return createdSettings;
    });

    return results;
  }

  /**
   * Get settings with flexible filtering
   */
  async getSettings(
    options?: QueryOptions & {
      organization_id?: string;
      tenant_id?: string;
      business_account_id?: bigint;
      user_account_id?: bigint;
      preferred_language?: string;
      includeRelations?: boolean;
    },
  ) {
    const {
      organization_id,
      tenant_id,
      business_account_id,
      user_account_id,
      preferred_language,
      includeRelations,
      ...queryOptions
    } = options || {};

    const whereClause: Prisma.settingsWhereInput = {};

    if (organization_id) whereClause.organization_id = organization_id;
    if (tenant_id) whereClause.tenant_id = tenant_id;
    if (business_account_id)
      whereClause.business_account_id = business_account_id;
    if (user_account_id) whereClause.user_account_id = user_account_id;
    if (preferred_language) whereClause.preferred_language = preferred_language;

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "findMany",
      {
        where: whereClause,
        include: includeRelations
          ? {
              tenant: true,
              business_accounts: true,
              user_accounts: true,
            }
          : undefined,
      },
      queryOptions,
    );
  }

  /**
   * Get settings by ID
   */
  async getSettingsById(
    id: bigint,
    options?: QueryOptions & { includeRelations?: boolean },
  ): Promise<SettingsWithRelations | null> {
    const { includeRelations, ...queryOptions } = options || {};

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "findUnique",
      {
        where: { id },
        include: includeRelations
          ? {
              tenant: true,
              business_accounts: true,
              user_accounts: true,
            }
          : undefined,
      },
      queryOptions,
    );
  }

  /**
   * Update settings entry
   */
  async updateSettings(
    id: bigint,
    data: {
      settings_data?: Record<string, any>;
      preferred_language?: string;
      notification_settings?: Record<string, any>;
      ui_settings?: Record<string, any>;
    },
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "update",
      {
        where: { id },
        data: {
          ...data,
          updated_at: new Date(),
        },
        include: {
          tenant: true,
          business_accounts: true,
          user_accounts: true,
        },
      },
    );
  }

  /**
   * Delete settings entry
   */
  async deleteSettings(id: bigint) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "delete",
      {
        where: { id },
      },
    );
  }

  /**
   * Bulk update settings
   */
  async bulkUpdateSettings(
    ids: bigint[],
    data: {
      settings_data?: Record<string, any>;
      preferred_language?: string;
      notification_settings?: Record<string, any>;
      ui_settings?: Record<string, any>;
    },
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "updateMany",
      {
        where: { id: { in: ids } },
        data: {
          ...data,
          updated_at: new Date(),
        },
      },
    );
  }

  /**
   * Bulk delete settings entries
   */
  async bulkDeleteSettings(ids: bigint[]) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "deleteMany",
      {
        where: { id: { in: ids } },
      },
    );
  }

  /**
   * Get settings by preferred language
   */
  async getSettingsByLanguage(language: string) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "findMany",
      {
        where: { preferred_language: language },
        include: {
          tenant: true,
          business_accounts: true,
          user_accounts: true,
        },
      },
    );
  }

  /**
   * Get notification settings for specific user
   */
  async getNotificationSettings(user_account_id: bigint) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "findFirst",
      {
        where: { user_account_id },
        select: {
          notification_settings: true,
        },
      },
    );
  }

  /**
   * Update notification settings for user
   */
  async updateNotificationSettings(
    user_account_id: bigint,
    settings: Record<string, any>,
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "updateMany",
      {
        where: { user_account_id },
        data: { notification_settings: settings },
      },
    );
  }

  /**
   * Get users with a specific UI setting enabled
   */
  async getUsersWithUiSetting(key: string, value: any) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "findMany",
      {
        where: {
          ui_settings: {
            path: [key],
            equals: value,
          },
        },
        include: {
          user_accounts: true,
        },
      },
    );
  }

  /**
   * Get recent changes to settings by organization
   */
  async getRecentSettingsChanges(organization_id: string, startDate: Date) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "findMany",
      {
        where: {
          organization_id,
          updated_at: { gte: startDate },
        },
        orderBy: { updated_at: "desc" },
      },
    );
  }

  /**
   * Count settings entries by language preference
   */
  async countSettingsByLanguage() {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "groupBy",
      {
        by: ["preferred_language"],
        _count: { id: true },
        orderBy: undefined,
      },
    );
  }

  /**
   * Get settings changes by user over time
   */
  async getUserSettingsHistory(
    user_account_id: bigint,
    startDate: Date,
    endDate?: Date,
  ) {
    const whereClause: Prisma.settingsWhereInput = {
      user_account_id,
      updated_at: { gte: startDate, ...(endDate ? { lte: endDate } : {}) },
    };

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "findMany",
      {
        where: whereClause,
        orderBy: { updated_at: "desc" },
      },
    );
  }

  /**
   * Retrieve settings with a specific notification preference
   */
  async getSettingsByNotificationPreference(key: string, value: any) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "findMany",
      {
        where: {
          notification_settings: {
            path: [key],
            equals: value,
          },
        },
        include: {
          tenant: true,
          business_accounts: true,
          user_accounts: true,
        },
      },
    );
  }

  /**
   * Count settings entries by organization
   */
  async countSettingsByOrganization() {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "groupBy",
      {
        by: ["organization_id"],
        _count: { id: true },
        orderBy: undefined,
      },
    );
  }

  /**
   * Find duplicate settings entries by account
   */
  async findDuplicateSettingsByAccount(
    user_account_id?: bigint,
    business_account_id?: bigint,
  ) {
    const whereClause: Prisma.settingsWhereInput = {
      ...(user_account_id ? { user_account_id } : {}),
      ...(business_account_id ? { business_account_id } : {}),
    };

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "findMany",
      {
        where: whereClause,
        orderBy: { created_at: "desc" },
      },
    );
  }

  /**
   * Get most recent UI settings changes
   */
  async getRecentUiSettingsChanges(limit: number) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "findMany",
      {
        orderBy: { updated_at: "desc" },
        take: limit,
        select: {
          ui_settings: true,
          updated_at: true,
          user_accounts: true,
        },
      },
    );
  }

  /**
   * Update UI settings for all users in an organization
   */
  async bulkUpdateUiSettingsForOrganization(
    organization_id: string,
    ui_settings: Record<string, any>,
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "updateMany",
      {
        where: { organization_id },
        data: { ui_settings },
      },
    );
  }

  /**
   * Get tenants with specific settings data attribute
   */
  async getTenantsWithSettingsDataAttribute(key: string, value: any) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "findMany",
      {
        where: {
          settings_data: {
            path: [key],
            equals: value,
          },
        },
        include: {
          tenant: true,
        },
      },
    );
  }

  /**
   * Get users with notification preferences changed in the last month
   */
  async getUsersWithRecentNotificationPreferenceChanges(startDate: Date) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "findMany",
      {
        where: {
          updated_at: { gte: startDate },
          notification_settings: { not: undefined },
        },
        include: {
          user_accounts: true,
        },
        orderBy: { updated_at: "desc" },
      },
    );
  }

  /**
   * Reset notification settings for all users in a tenant
   */
  async resetNotificationSettingsForTenant(tenant_id: string) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "updateMany",
      {
        where: { tenant_id },
        data: { notification_settings: {} },
      },
    );
  }

  /**
   * Get preferred languages of all users in an organization
   */
  async getLanguagesByOrganization(organization_id: string) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "findMany",
      {
        where: { organization_id },
        select: { preferred_language: true },
      },
    );
  }
}
