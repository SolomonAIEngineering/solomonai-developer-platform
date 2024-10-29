import { QueryOptions } from "@axiomhq/js";
import { QueryMiddleware, QueryMiddlewareFactory } from "../client";
import { PrismaClient, Prisma } from "../generated/postgresql";


type BusinessAccountType = "customer" | "supplier" | "partner";
type BusinessAccountStatus = "active" | "pending" | "suspended" | "closed";

type BusinessAccountWithRelations = Prisma.business_accountsGetPayload<{
  include: {
    organization: true;
    tenant: true;
    settings: true;
    addresses: true;
    team_memberships: true;
  };
}>;

export class BusinessAccountQueries {
  private middleware: QueryMiddleware;
  private prisma: PrismaClient;

  constructor(context: RequestContext, prisma: PrismaClient) {
    this.middleware = QueryMiddlewareFactory.create(context, prisma);
    this.prisma = prisma;
  }

  /**
   * Create a new business account
   */
  async createBusinessAccount(data: {
    organization_id?: string;
    tenant_id?: string;
    account_type: BusinessAccountType;
    company_name: string;
    email?: string;
    is_active?: boolean;
    auth0_user_id?: string;
    status?: BusinessAccountStatus;
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
      Prisma.ModelName.business_accounts,
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
        },
      },
    );
  }

  /**
   * Bulk create business accounts
   */
  async bulkCreateBusinessAccounts(
    accounts: Array<{
      organization_id?: string;
      tenant_id?: string;
      account_type: BusinessAccountType;
      company_name: string;
      email?: string;
      is_active?: boolean;
      auth0_user_id?: string;
      status?: BusinessAccountStatus;
      metadata?: Record<string, any>;
    }>,
  ) {
    const results = await this.prisma.$transaction(async (tx) => {
      const createdAccounts = [];
      for (const account of accounts) {
        try {
          const created = await this.middleware.enforceQueryRules(
            tx as unknown as PrismaClient,
            Prisma.ModelName.business_accounts,
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
          createdAccounts.push({ success: true, account: created });
        } catch (error) {
          createdAccounts.push({
            success: false,
            error: error instanceof Error ? error.message : String(error),
            account,
          });
        }
      }
      return createdAccounts;
    });

    return results;
  }

  /**
   * Get business accounts with flexible filtering
   */
  async getBusinessAccounts(
    options?: QueryOptions & {
      organization_id?: string;
      tenant_id?: string;
      account_types?: BusinessAccountType[];
      statuses?: BusinessAccountStatus[];
      is_active?: boolean;
      searchTerm?: string;
      includeRelations?: boolean;
    },
  ) {
    const {
      organization_id,
      tenant_id,
      account_types,
      statuses,
      is_active,
      searchTerm,
      includeRelations,
      ...queryOptions
    } = options || {};

    const whereClause: Prisma.business_accountsWhereInput = {};

    if (organization_id) whereClause.organization_id = organization_id;
    if (tenant_id) whereClause.tenant_id = tenant_id;
    if (account_types) whereClause.account_type = { in: account_types };
    if (statuses) whereClause.status = { in: statuses };
    if (typeof is_active === "boolean") whereClause.is_active = is_active;

    if (searchTerm) {
      whereClause.OR = [
        { company_name: { contains: searchTerm, mode: "insensitive" } },
        { email: { contains: searchTerm, mode: "insensitive" } },
        { metadata: { path: ["industry"], string_contains: searchTerm } },
      ];
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.business_accounts,
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
            }
          : undefined,
      },
      queryOptions,
    );
  }

  /**
   * Get a business account by ID
   */
  async getBusinessAccountById(
    id: bigint,
    options?: QueryOptions & { includeRelations?: boolean },
  ): Promise<BusinessAccountWithRelations | null> {
    const { includeRelations, ...queryOptions } = options || {};

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.business_accounts,
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
            }
          : undefined,
      },
      queryOptions,
    );
  }

  /**
   * Update a business account
   */
  async updateBusinessAccount(
    id: bigint,
    data: {
      account_type?: BusinessAccountType;
      company_name?: string;
      email?: string;
      is_active?: boolean;
      status?: BusinessAccountStatus;
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
      Prisma.ModelName.business_accounts,
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
        },
      },
    );
  }

  /**
   * Bulk update business accounts
   */
  async bulkUpdateBusinessAccounts(
    ids: bigint[],
    data: {
      is_active?: boolean;
      status?: BusinessAccountStatus;
      metadata?: Record<string, any>;
    },
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.business_accounts,
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
   * Bulk delete business accounts
   */
  async bulkDeleteBusinessAccounts(ids: bigint[]) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.business_accounts,
      "deleteMany",
      {
        where: { id: { in: ids } },
      },
    );
  }

  /**
   * Get business account by email
   */
  async getBusinessAccountByEmail(
    email: string,
    options?: QueryOptions & { includeRelations?: boolean },
  ): Promise<BusinessAccountWithRelations | null> {
    const { includeRelations, ...queryOptions } = options || {};

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.business_accounts,
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
            }
          : undefined,
      },
      queryOptions,
    );
  }

  /**
   * Get activity history of a business account
   */
  async getBusinessAccountActivityHistory(
    id: bigint,
    options?: {
      startDate?: Date;
      endDate?: Date;
      limit?: number;
    },
  ) {
    const account = await this.getBusinessAccountById(id);
    if (!account) throw new Error("Business account not found");

    const whereClause: Prisma.audit_logsWhereInput = {
      entity_type: "business_account",
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
   * Update storage usage
   */
  async updateStorageUsage(id: bigint, usedStorage: bigint) {
    return await this.updateBusinessAccount(id, {
      used_storage: usedStorage,
    });
  }

  /**
   * Soft delete business account
   */
  async deleteBusinessAccount(id: bigint) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.business_accounts,
      "update",
      {
        where: { id },
        data: {
          is_active: false,
          status: "inactive",
          team_memberships: {
            updateMany: {
              where: {
                business_account_id: id,
              },
              data: {
                status: "inactive",
              },
            },
          },
        },
      },
    );
  }

  /**
   * Hard delete business account
   * WARNING: This will permanently delete the account and all related data
   */
  async permanentlyDeleteBusinessAccount(id: bigint) {
    return await this.prisma.$transaction(async (tx) => {
      // Delete related records first
      await tx.settings.deleteMany({
        where: { business_account_id: id },
      });

      await tx.addresses.deleteMany({
        where: { business_account_id: id },
      });

      await tx.team_members.deleteMany({
        where: { business_account_id: id },
      });

      await tx.audit_logs.deleteMany({
        where: {
          entity_type: "business_account",
          entity_id: id,
        },
      });

      // Finally delete the business account
      return await tx.business_accounts.delete({
        where: { id },
      });
    });
  }

  /**
   * Transfer business account to different organization/tenant
   */
  async transferBusinessAccount(
    id: bigint,
    data: {
      new_organization_id?: string;
      new_tenant_id?: string;
    },
    options?: {
      transferSettings?: boolean;
      transferAddresses?: boolean;
      transferTeamMemberships?: boolean;
    },
  ) {
    const {
      transferSettings = false,
      transferAddresses = false,
      transferTeamMemberships = false,
    } = options || {};

    if (!data.new_organization_id && !data.new_tenant_id) {
      throw new Error(
        "Either new_organization_id or new_tenant_id must be provided",
      );
    }

    return await this.prisma.$transaction(async (tx) => {
      // Update business account
      const updatedAccount = await tx.business_accounts.update({
        where: { id },
        data: {
          organization_id: data.new_organization_id,
          tenant_id: data.new_tenant_id,
        },
      });

      if (!transferSettings) {
        await tx.settings.deleteMany({
          where: { business_account_id: id },
        });
      }

      if (!transferAddresses) {
        await tx.addresses.deleteMany({
          where: { business_account_id: id },
        });
      }

      if (!transferTeamMemberships) {
        await tx.team_members.deleteMany({
          where: { business_account_id: id },
        });
      }

      return updatedAccount;
    });
  }

  /**
   * Suspend a business account
   */
  async suspendBusinessAccount(id: bigint, reason?: string) {
    return await this.updateBusinessAccount(id, {
      status: "suspended",
      metadata: {
        suspension_reason: reason,
        suspended_at: new Date(),
      },
    });
  }

  /**
   * Activate a suspended business account
   */
  async activateBusinessAccount(id: bigint) {
    return await this.updateBusinessAccount(id, {
      status: "active",
      metadata: {
        activated_at: new Date(),
      },
    });
  }

  /**
   * Process invitation response
   */
  async processInvitationResponse(id: bigint, accept: boolean) {
    const account = await this.getBusinessAccountById(id);
    if (!account) throw new Error("Business account not found");

    if (account.status !== "pending") {
      throw new Error("Invitation is no longer pending");
    }

    if (accept) {
      return await this.updateBusinessAccount(id, {
        status: "active",
      });
    } else {
      return await this.deleteBusinessAccount(id);
    }
  }

  /**
   * Get business accounts with pending invitations
   */
  async getPendingInvitations(options?: {
    organization_id?: string;
    olderThan?: Date;
    includeRelations?: boolean;
  }) {
    const { organization_id, olderThan, includeRelations } = options || {};

    const whereClause: Prisma.business_accountsWhereInput = {
      status: "pending",
    };

    if (organization_id) whereClause.organization_id = organization_id;
    if (olderThan) {
      whereClause.created_at = { lt: olderThan };
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.business_accounts,
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
            }
          : undefined,
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
      Prisma.ModelName.business_accounts,
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
        "A business account with this email already exists in the organization",
      );
    }
  }
}
