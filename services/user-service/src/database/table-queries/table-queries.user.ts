import { QueryMiddleware, QueryMiddlewareFactory } from "../client";
import { Prisma, PrismaClient } from "../generated/postgresql";
import { QueryOptions, RequestContext } from "../types";

/**
 * Table-specific query implementation with type-safe methods
 * and proper access control enforcement.
 */
export class UserTableQueries {
  private middleware: QueryMiddleware;
  private prisma: PrismaClient;

  constructor(context: RequestContext, prisma: PrismaClient) {
    this.middleware = QueryMiddlewareFactory.create(context, prisma);
    this.prisma = prisma;
  }

  /**
   * User Accounts Queries
   */
  async getUserAccounts(
    options?: QueryOptions & {
      searchTerm?: string;
      statusFilter?: string[];
      teamId?: number;
    },
  ) {
    const { searchTerm, statusFilter, teamId, ...queryOptions } = options || {};

    let whereClause: any = {};

    // Add search condition if searchTerm is provided
    if (searchTerm) {
      whereClause.OR = [
        { email: { contains: searchTerm, mode: "insensitive" } },
        { firstname: { contains: searchTerm, mode: "insensitive" } },
        { lastname: { contains: searchTerm, mode: "insensitive" } },
      ];
    }

    // Add status filter if provided
    if (statusFilter?.length) {
      whereClause.status = { in: statusFilter };
    }

    // Add team filter if provided
    if (teamId) {
      whereClause.team_memberships = {
        some: { team_id: teamId },
      };
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.user_accounts,
      "findMany",
      {
        where: whereClause,
        include: {
          team_memberships: options?.includeMemberships,
          addresses: true,
          settings: true,
        },
      },
      queryOptions,
    );
  }

  async createUserAccount(data: {
    email: string;
    firstname?: string;
    lastname?: string;
    auth0_user_id: string;
    metadata?: Record<string, any>;
  }) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.user_accounts,
      "create",
      {
        data: {
          ...data,
          status: "active",
          storage_quota: BigInt(5 * 1024 * 1024 * 1024), // 5GB default
        },
      },
      {},
    );
  }

  /**
   * Team Queries
   */
  async getTeams(
    options?: QueryOptions & {
      searchTerm?: string;
      teamTypes?: string[];
      includeMembers?: boolean;
    },
  ) {
    const { searchTerm, teamTypes, includeMembers, ...queryOptions } =
      options || {};

    let whereClause: any = {};

    if (searchTerm) {
      whereClause.OR = [
        { name: { contains: searchTerm, mode: "insensitive" } },
        { description: { contains: searchTerm, mode: "insensitive" } },
      ];
    }

    if (teamTypes?.length) {
      whereClause.team_type = { in: teamTypes };
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.teams,
      "findMany",
      {
        where: whereClause,
        include: {
          team_members: includeMembers,
          addresses: true,
        },
      },
      queryOptions,
    );
  }

  async createTeam(data: {
    name: string;
    description?: string;
    team_type: string;
    metadata?: Record<string, any>;
    initialMembers?: Array<{
      user_account_id: number;
      role: string;
    }>;
  }) {
    const { initialMembers, ...teamData } = data;

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.teams,
      "create",
      {
        data: {
          ...teamData,
          created_by: this.middleware.getContext().userId,
          organization: {
            connect: {
              id: this.middleware.getContext().organizationId,
            },
          },
          team_members: initialMembers
            ? {
                create: initialMembers.map((member) => ({
                  ...member,
                  status: "active",
                  invited_by: this.middleware.getContext().userId,
                })),
              }
            : undefined,
        },
        include: {
          team_members: true,
        },
      },
      {},
    );
  }

  /**
   * Address Queries
   */
  async getAddresses(
    options?: QueryOptions & {
      addressableType?: string;
      addressType?: string;
      entityId?: number;
    },
  ) {
    const { addressableType, addressType, entityId, ...queryOptions } =
      options || {};

    let whereClause: any = {};

    if (addressableType) {
      whereClause.addressable_type = addressableType;
    }

    if (addressType) {
      whereClause.address_type = addressType;
    }

    if (entityId) {
      whereClause[`${addressableType?.toLowerCase()}_id`] = entityId;
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.addresses,
      "findMany",
      {
        where: whereClause,
      },
      queryOptions,
    );
  }

  async createAddress(data: {
    addressable_type: string;
    entity_id: number;
    address_type: string;
    address_line1: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
    is_primary?: boolean;
    metadata?: Record<string, any>;
  }) {
    const { entity_id, addressable_type, ...addressData } = data;

    const entityField = `${addressable_type.toLowerCase()}_id`;

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.addresses,
      "create",
      {
        data: {
          ...addressData,
          addressable_type,
          [entityField]: entity_id,
        },
      },
      {},
    );
  }

  /**
   * Settings Queries
   */
  async getSettings(
    options?: QueryOptions & {
      entityType: "tenant" | "business" | "user";
      entityId: number | string;
    },
  ) {
    const { entityType, entityId, ...queryOptions } = options || {};

    const whereClause = {
      [`${entityType}_id`]: entityId,
    };

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.settings,
      "findMany",
      {
        where: whereClause,
      },
      queryOptions,
    );
  }

  /**
   * Audit Log Queries
   */
  async getAuditLogs(
    options?: QueryOptions & {
      startDate?: Date;
      endDate?: Date;
      actorId?: string;
      eventTypes?: string[];
      entityType?: string;
      entityId?: number;
    },
  ) {
    const {
      startDate,
      endDate,
      actorId,
      eventTypes,
      entityType,
      entityId,
      ...queryOptions
    } = options || {};

    let whereClause: any = {};

    if (startDate || endDate) {
      whereClause.created_at = {};
      if (startDate) whereClause.created_at.gte = startDate;
      if (endDate) whereClause.created_at.lte = endDate;
    }

    if (actorId) {
      whereClause.actor_id = actorId;
    }

    if (eventTypes?.length) {
      whereClause.event_type = { in: eventTypes };
    }

    if (entityType) {
      whereClause.entity_type = entityType;
    }

    if (entityId) {
      whereClause.entity_id = entityId;
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
      },
      queryOptions,
    );
  }
}
