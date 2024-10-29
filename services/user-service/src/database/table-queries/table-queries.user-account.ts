import { QueryMiddleware, QueryMiddlewareFactory } from "../client";
import { PrismaClient, Prisma } from "../generated/postgresql";
import { RequestContext } from "../types";
import { QueryOptions } from "../types";


type UserAccountStatus = "active" | "inactive" | "suspended";

type UserAccountWithRelations = Prisma.user_accountsGetPayload<{
  include: {
    organization: true;
    tenant: true;
    user_settings: true;
    settings: true;
    addresses: true;
    team_memberships: true;
    audit_logs: true;
    org_api_keys: true;
  };
}>;

export class UserAccountQueries {
  private middleware: QueryMiddleware;
  private prisma: PrismaClient;

  constructor(context: RequestContext, prisma: PrismaClient) {
    this.middleware = QueryMiddlewareFactory.create(context, prisma);
    this.prisma = prisma;
  }

  /**
   * Create a new user account
   */
  async createUserAccount(data: {
    organization_id?: string;
    tenant_id?: string;
    email: string;
    firstname?: string;
    lastname?: string;
    auth0_user_id: string;
    is_active?: boolean;
    status?: UserAccountStatus;
    metadata?: Record<string, any>;
    base_directory?: string;
    bucket_location?: string;
    bucket_name?: string;
    region?: string;
    storage_quota?: bigint;
    used_storage?: bigint;
  }) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.user_accounts,
      "create",
      {
        data: {
          ...data,
          is_active: data.is_active ?? true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        include: {
          organization: true,
          tenant: true,
          settings: true,
          addresses: true,
          team_memberships: true,
          audit_logs: true,
          org_api_keys: true,
        },
      },
    );
  }

  /**
   * Bulk create user accounts
   */
  async bulkCreateUserAccounts(
    accounts: Array<{
      organization_id?: string;
      tenant_id?: string;
      email: string;
      firstname?: string;
      lastname?: string;
      auth0_user_id: string;
      is_active?: boolean;
      status?: UserAccountStatus;
      metadata?: Record<string, any>;
    }>,
  ) {
    const createdAccounts = await this.prisma.$transaction(async (tx) => {
      const results = [];
      for (const account of accounts) {
        try {
          const created = await this.middleware.enforceQueryRules(
            tx as unknown as PrismaClient,
            Prisma.ModelName.user_accounts,
            "create",
            {
              data: {
                ...account,
                is_active: account.is_active ?? true,
                created_at: new Date(),
                updated_at: new Date(),
              },
            },
          );
          results.push({ success: true, account: created });
        } catch (error) {
          results.push({
            success: false,
            error: error instanceof Error ? error.message : String(error),
            account,
          });
        }
      }
      return results;
    });

    return createdAccounts;
  }

  /**
   * Get user accounts with flexible filtering
   */
  async getUserAccounts(
    options?: QueryOptions & {
      organization_id?: string;
      tenant_id?: string;
      statuses?: UserAccountStatus[];
      is_active?: boolean;
      searchTerm?: string;
      includeRelations?: boolean;
    },
  ) {
    const {
      organization_id,
      tenant_id,
      statuses,
      is_active,
      searchTerm,
      includeRelations,
      ...queryOptions
    } = options || {};

    const whereClause: Prisma.user_accountsWhereInput = {};

    if (organization_id) whereClause.organization_id = organization_id;
    if (tenant_id) whereClause.tenant_id = tenant_id;
    if (statuses) whereClause.status = { in: statuses };
    if (typeof is_active === "boolean") whereClause.is_active = is_active;

    if (searchTerm) {
      whereClause.OR = [
        { email: { contains: searchTerm, mode: "insensitive" } },
        { firstname: { contains: searchTerm, mode: "insensitive" } },
        { lastname: { contains: searchTerm, mode: "insensitive" } },
        { metadata: { path: ["department"], string_contains: searchTerm } },
      ];
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.user_accounts,
      "findMany",
      {
        where: whereClause,
        include: includeRelations
          ? {
              organization: true,
              tenant: true,
              settings: true,
              addresses: true,
              team_memberships: true,
              audit_logs: true,
              org_api_keys: true,
            }
          : undefined,
      },
      queryOptions,
    );
  }

  /**
   * Get a user account by ID
   */
  async getUserAccountById(
    id: bigint,
    options?: QueryOptions & { includeRelations?: boolean },
  ): Promise<UserAccountWithRelations | null> {
    const { includeRelations, ...queryOptions } = options || {};

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.user_accounts,
      "findUnique",
      {
        where: { id },
        include: includeRelations
          ? {
              organization: true,
              tenant: true,
              settings: true,
              addresses: true,
              team_memberships: true,
              audit_logs: true,
              org_api_keys: true,
            }
          : undefined,
      },
      queryOptions,
    );
  }

  /**
   * Update a user account
   */
  async updateUserAccount(
    id: bigint,
    data: {
      firstname?: string;
      lastname?: string;
      is_active?: boolean;
      status?: UserAccountStatus;
      metadata?: Record<string, any>;
      base_directory?: string;
      bucket_location?: string;
      bucket_name?: string;
      region?: string;
      storage_quota?: bigint;
      used_storage?: bigint;
    },
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.user_accounts,
      "update",
      {
        where: { id },
        data: {
          ...data,
          updated_at: new Date(),
        },
        include: {
          organization: true,
          tenant: true,
          settings: true,
          addresses: true,
          team_memberships: true,
          audit_logs: true,
          org_api_keys: true,
        },
      },
    );
  }

  /**
   * Delete a user account
   */
  async deleteUserAccount(id: bigint) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.user_accounts,
      "delete",
      {
        where: { id },
      },
    );
  }

  /**
   * Bulk update user accounts
   */
  async bulkUpdateUserAccounts(
    ids: bigint[],
    data: {
      is_active?: boolean;
      status?: UserAccountStatus;
      metadata?: Record<string, any>;
    },
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.user_accounts,
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
   * Bulk delete user accounts
   */
  async bulkDeleteUserAccounts(ids: bigint[]) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.user_accounts,
      "deleteMany",
      {
        where: { id: { in: ids } },
      },
    );
  }

  /**
   * Get user account by email
   */
  async getUserAccountByEmail(
    email: string,
    options?: QueryOptions & { includeRelations?: boolean },
  ): Promise<UserAccountWithRelations | null> {
    const { includeRelations, ...queryOptions } = options || {};

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.user_accounts,
      "findFirst",
      {
        where: { email },
        include: includeRelations
          ? {
              organization: true,
              tenant: true,
              settings: true,
              addresses: true,
              team_memberships: true,
              audit_logs: true,
              org_api_keys: true,
            }
          : undefined,
      },
      queryOptions,
    );
  }

  /**
   * Suspend a user account
   */
  async suspendUserAccount(id: bigint, reason?: string) {
    return await this.updateUserAccount(id, {
      status: "suspended",
      metadata: {
        suspension_reason: reason,
        suspended_at: new Date(),
      },
    });
  }

  /**
   * Activate a suspended user account
   */
  async activateUserAccount(id: bigint) {
    return await this.updateUserAccount(id, {
      status: "active",
      metadata: {
        activated_at: new Date(),
      },
    });
  }

  /**
   * Get user accounts with pending invitations
   */
  async getPendingInvitations(options?: {
    organization_id?: string;
    olderThan?: Date;
    includeRelations?: boolean;
  }) {
    const { organization_id, olderThan, includeRelations } = options || {};

    const whereClause: Prisma.user_accountsWhereInput = {
      status: "inactive",
    };

    if (organization_id) whereClause.organization_id = organization_id;
    if (olderThan) {
      whereClause.created_at = { lt: olderThan };
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.user_accounts,
      "findMany",
      {
        where: whereClause,
        include: includeRelations
          ? {
              organization: true,
              tenant: true,
              settings: true,
              addresses: true,
              team_memberships: true,
              audit_logs: true,
              org_api_keys: true,
            }
          : undefined,
      },
    );
  }

  /**
   * Update storage usage for a user account
   */
  async updateStorageUsage(id: bigint, usedStorage: bigint) {
    return await this.updateUserAccount(id, {
      used_storage: usedStorage,
    });
  }

  /**
   * Get user account activity history
   */
  async getUserAccountActivityHistory(
    id: bigint,
    options?: {
      startDate?: Date;
      endDate?: Date;
      limit?: number;
    },
  ) {
    const account = await this.getUserAccountById(id);
    if (!account) throw new Error("User account not found");

    const whereClause: Prisma.audit_logsWhereInput = {
      entity_type: "user_account",
      entity_id: id,
    };

    if (options?.startDate || options?.endDate) {
      whereClause.created_at = {};
      if (options.startDate) whereClause.created_at.gte = options.startDate;
      if (options.endDate) whereClause.created_at.lte = options.endDate;
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
   * Validate unique email per organization
   */
  private async validateUniqueEmail(
    organization_id: string,
    email: string,
  ): Promise<void> {
    const existingAccount = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.user_accounts,
      "findFirst",
      {
        where: {
          organization_id,
          email,
        },
      },
    );

    if (existingAccount) {
      throw new Error(
        "A user account with this email already exists in the organization",
      );
    }
  }

  /**
   * Get suspended user accounts
   */
  async getSuspendedUserAccounts(organization_id?: string) {
    const whereClause: Prisma.user_accountsWhereInput = {
      status: "suspended",
    };

    if (organization_id) whereClause.organization_id = organization_id;

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.user_accounts,
      "findMany",
      {
        where: whereClause,
        include: {
          organization: true,
          tenant: true,
          settings: true,
          addresses: true,
          team_memberships: true,
          audit_logs: true,
          org_api_keys: true,
        },
      },
    );
  }

  /**
   * Reactivate multiple suspended accounts
   */
  async bulkReactivateSuspendedAccounts(ids: bigint[]) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.user_accounts,
      "updateMany",
      {
        where: {
          id: { in: ids },
          status: "suspended",
        },
        data: {
          status: "active",
          metadata: { reactivated_at: new Date() },
        },
      },
    );
  }

  /**
   * Get users who have not logged in since a specific date
   */
  async getUsersInactiveSince(date: Date, organization_id?: string) {
    const whereClause: Prisma.user_accountsWhereInput = {
      last_access: { lte: date },
      is_active: true,
    };

    if (organization_id) whereClause.organization_id = organization_id;

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.user_accounts,
      "findMany",
      {
        where: whereClause,
        include: {
          organization: true,
          tenant: true,
          settings: true,
          addresses: true,
          team_memberships: true,
          audit_logs: true,
          org_api_keys: true,
        },
      },
    );
  }
}
