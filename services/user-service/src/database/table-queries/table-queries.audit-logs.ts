import { PrismaClient, Prisma } from "../generated/postgresql";
import {
  QueryMiddleware,
  QueryMiddlewareFactory,
} from "../client";
import { QueryOptions, RequestContext } from "../types";

type ActorType = "user" | "business" | "system";
type EventType = "create" | "update" | "delete";
type EntityType = "user" | "team" | "business";

type AuditLogWithRelations = Prisma.audit_logsGetPayload<{
  include: {
    organization: true;
    tenant: true;
    user_account: true;
    business_account: true;
    team: true;
  };
}>;

export class AuditLogQueries {
  private middleware: QueryMiddleware;
  private prisma: PrismaClient;

  constructor(context: RequestContext, prisma: PrismaClient) {
    this.middleware = QueryMiddlewareFactory.create(context, prisma);
    this.prisma = prisma;
  }

  /**
   * Create an audit log entry
   */
  async createAuditLog(data: {
    organization_id?: string;
    tenant_id?: string;
    actor_type: ActorType;
    actor_id: string;
    event_type: EventType;
    entity_type: EntityType;
    entity_id: bigint;
    change_summary?: Record<string, any>;
    metadata?: Record<string, any>;
    ip_address?: string;
    user_agent?: string;
  }) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "create",
      {
        data: {
          ...data,
          created_at: new Date(),
        },
        include: {
          organization: true,
          tenant: true,
          user_account: true,
          business_account: true,
          team: true,
        },
      },
    );
  }

  /**
   * Bulk create audit log entries
   */
  async bulkCreateAuditLogs(
    logs: Array<{
      organization_id?: string;
      tenant_id?: string;
      actor_type: ActorType;
      actor_id: string;
      event_type: EventType;
      entity_type: EntityType;
      entity_id: bigint;
      change_summary?: Record<string, any>;
      metadata?: Record<string, any>;
      ip_address?: string;
      user_agent?: string;
    }>,
  ) {
    const createdLogs = await this.prisma.$transaction(async (tx) => {
      const results = [];
      for (const log of logs) {
        try {
          const created = await this.middleware.enforceQueryRules(
            tx as unknown as PrismaClient,
            Prisma.ModelName.audit_logs,
            "create",
            {
              data: {
                ...log,
                created_at: new Date(),
              },
            },
          );
          results.push({ success: true, log: created });
        } catch (error) {
          results.push({
            success: false,
            error: error instanceof Error ? error.message : String(error),
            log,
          });
        }
      }
      return results;
    });

    return createdLogs;
  }

  /**
   * Get audit logs with flexible filtering
   */
  async getAuditLogs(
    options?: QueryOptions & {
      organization_id?: string;
      tenant_id?: string;
      actor_type?: ActorType;
      actor_id?: string;
      event_type?: EventType;
      entity_type?: EntityType;
      entity_id?: bigint;
      startDate?: Date;
      endDate?: Date;
      includeRelations?: boolean;
    },
  ) {
    const {
      organization_id,
      tenant_id,
      actor_type,
      actor_id,
      event_type,
      entity_type,
      entity_id,
      startDate,
      endDate,
      includeRelations,
      ...queryOptions
    } = options || {};

    const whereClause: Prisma.audit_logsWhereInput = {};

    if (organization_id) whereClause.organization_id = organization_id;
    if (tenant_id) whereClause.tenant_id = tenant_id;
    if (actor_type) whereClause.actor_type = actor_type;
    if (actor_id) whereClause.actor_id = actor_id;
    if (event_type) whereClause.event_type = event_type;
    if (entity_type) whereClause.entity_type = entity_type;
    if (entity_id) whereClause.entity_id = entity_id;
    if (startDate || endDate) {
      whereClause.created_at = {};
      if (startDate) whereClause.created_at.gte = startDate;
      if (endDate) whereClause.created_at.lte = endDate;
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: whereClause,
        orderBy: { created_at: "desc" },
        include: includeRelations
          ? {
              organization: true,
              tenant: true,
              user_account: true,
              business_account: true,
              team: true,
            }
          : undefined,
      },
      queryOptions,
    );
  }

  /**
   * Get audit log by ID
   */
  async getAuditLogById(
    id: bigint,
    options?: QueryOptions & { includeRelations?: boolean },
  ): Promise<AuditLogWithRelations | null> {
    const { includeRelations, ...queryOptions } = options || {};

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findUnique",
      {
        where: { id },
        include: includeRelations
          ? {
              organization: true,
              tenant: true,
              user_account: true,
              business_account: true,
              team: true,
            }
          : undefined,
      },
      queryOptions,
    );
  }

  /**
   * Bulk delete audit logs
   */
  async bulkDeleteAuditLogs(ids: bigint[]) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "deleteMany",
      {
        where: { id: { in: ids } },
      },
    );
  }

  /**
   * Get recent activity for an entity
   */
  async getRecentActivityForEntity(
    entity_type: EntityType,
    entity_id: bigint,
    options?: {
      limit?: number;
      includeRelations?: boolean;
    },
  ) {
    const { limit, includeRelations } = options || {};

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: {
          entity_type,
          entity_id,
        },
        orderBy: { created_at: "desc" },
        take: limit,
        include: includeRelations
          ? {
              organization: true,
              tenant: true,
              user_account: true,
              business_account: true,
              team: true,
            }
          : undefined,
      },
    );
  }

  /**
   * Get audit logs by actor
   */
  async getAuditLogsByActor(
    actor_type: ActorType,
    actor_id: string,
    options?: {
      startDate?: Date;
      endDate?: Date;
      limit?: number;
      includeRelations?: boolean;
    },
  ) {
    const { startDate, endDate, limit, includeRelations } = options || {};

    const whereClause: Prisma.audit_logsWhereInput = {
      actor_type,
      actor_id,
    };

    if (startDate || endDate) {
      whereClause.created_at = {};
      if (startDate) whereClause.created_at.gte = startDate;
      if (endDate) whereClause.created_at.lte = endDate;
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: whereClause,
        orderBy: { created_at: "desc" },
        take: limit,
        include: includeRelations
          ? {
              organization: true,
              tenant: true,
              user_account: true,
              business_account: true,
              team: true,
            }
          : undefined,
      },
    );
  }

  /**
   * Generate audit log report for organization
   */
  async generateAuditLogReport(
    organization_id: string,
    options?: {
      startDate?: Date;
      endDate?: Date;
      eventTypes?: EventType[];
      entityTypes?: EntityType[];
      limit?: number;
    },
  ) {
    const { startDate, endDate, eventTypes, entityTypes, limit } =
      options || {};
    const whereClause: Prisma.audit_logsWhereInput = {
      organization_id,
      event_type: eventTypes ? { in: eventTypes } : undefined,
      entity_type: entityTypes ? { in: entityTypes } : undefined,
    };

    if (startDate || endDate) {
      whereClause.created_at = {};
      if (startDate) whereClause.created_at.gte = startDate;
      if (endDate) whereClause.created_at.lte = endDate;
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: whereClause,
        orderBy: { created_at: "desc" },
        take: limit,
        include: {
          organization: true,
          tenant: true,
          user_account: true,
          business_account: true,
          team: true,
        },
      },
    );
  }

  /**
   * Count audit log events by type within a specific timeframe
   */
  async countEventsByType(
    startDate: Date,
    endDate: Date,
    options?: {
      organization_id?: string;
      tenant_id?: string;
    },
  ) {
    const { organization_id, tenant_id } = options || {};

    const whereClause: Prisma.audit_logsWhereInput = {
      created_at: {
        gte: startDate,
        lte: endDate,
      },
    };

    if (organization_id) whereClause.organization_id = organization_id;
    if (tenant_id) whereClause.tenant_id = tenant_id;

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "groupBy",
      {
        by: ["event_type"],
        where: whereClause,
        _count: {
          event_type: true,
        },
        orderBy: undefined,
      },
    );
  }

  /**
   * Count events by actor type
   */
  async countEventsByActorType(
    startDate: Date,
    endDate: Date,
    options?: {
      organization_id?: string;
      tenant_id?: string;
    },
  ) {
    const { organization_id, tenant_id } = options || {};

    const whereClause: Prisma.audit_logsWhereInput = {
      created_at: {
        gte: startDate,
        lte: endDate,
      },
    };

    if (organization_id) whereClause.organization_id = organization_id;
    if (tenant_id) whereClause.tenant_id = tenant_id;

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "groupBy",
      {
        by: ["actor_type"],
        where: whereClause,
        _count: {
          actor_type: true,
        },
        orderBy: undefined,
      },
    );
  }

  /**
   * Get audit logs by IP address
   */
  async getAuditLogsByIpAddress(
    ip_address: string,
    options?: {
      startDate?: Date;
      endDate?: Date;
      limit?: number;
      includeRelations?: boolean;
    },
  ) {
    const { startDate, endDate, limit, includeRelations } = options || {};

    const whereClause: Prisma.audit_logsWhereInput = {
      ip_address,
    };

    if (startDate || endDate) {
      whereClause.created_at = {};
      if (startDate) whereClause.created_at.gte = startDate;
      if (endDate) whereClause.created_at.lte = endDate;
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: whereClause,
        orderBy: { created_at: "desc" },
        take: limit,
        include: includeRelations
          ? {
              organization: true,
              tenant: true,
              user_account: true,
              business_account: true,
              team: true,
            }
          : undefined,
      },
    );
  }

  /**
   * Find duplicate audit logs based on event type and entity
   */
  async findDuplicateAuditLogs(
    entity_type: EntityType,
    entity_id: bigint,
    event_type: EventType,
    options?: {
      startDate?: Date;
      endDate?: Date;
    },
  ) {
    const { startDate, endDate } = options || {};

    const whereClause: Prisma.audit_logsWhereInput = {
      entity_type,
      entity_id,
      event_type,
    };

    if (startDate || endDate) {
      whereClause.created_at = {};
      if (startDate) whereClause.created_at.gte = startDate;
      if (endDate) whereClause.created_at.lte = endDate;
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: whereClause,
        orderBy: { created_at: "desc" },
      },
    );
  }

  /**
   * Get most frequent actors within a timeframe
   */
  async getFrequentActors(
    startDate: Date,
    endDate: Date,
    options?: {
      organization_id?: string;
      tenant_id?: string;
      limit?: number;
    },
  ) {
    const { organization_id, tenant_id, limit } = options || {};

    const whereClause: Prisma.audit_logsWhereInput = {
      created_at: {
        gte: startDate,
        lte: endDate,
      },
    };

    if (organization_id) whereClause.organization_id = organization_id;
    if (tenant_id) whereClause.tenant_id = tenant_id;

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "groupBy",
      {
        by: ["actor_id"],
        where: whereClause,
        _count: {
          actor_id: true,
        },
        orderBy: {
          _count: {
            actor_id: "desc",
          },
        },
        take: limit,
      },
    );
  }

  /**
   * Get recent audit logs for specific IP address range
   */
  async getAuditLogsForIpRange(
    ipStart: string,
    ipEnd: string,
    options?: {
      startDate?: Date;
      endDate?: Date;
      limit?: number;
      includeRelations?: boolean;
    },
  ) {
    const { startDate, endDate, limit, includeRelations } = options || {};

    const whereClause: Prisma.audit_logsWhereInput = {
      ip_address: {
        gte: ipStart,
        lte: ipEnd,
      },
    };

    if (startDate || endDate) {
      whereClause.created_at = {};
      if (startDate) whereClause.created_at.gte = startDate;
      if (endDate) whereClause.created_at.lte = endDate;
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: whereClause,
        orderBy: { created_at: "desc" },
        take: limit,
        include: includeRelations
          ? {
              organization: true,
              tenant: true,
              user_account: true,
              business_account: true,
              team: true,
            }
          : undefined,
      },
    );
  }
}
