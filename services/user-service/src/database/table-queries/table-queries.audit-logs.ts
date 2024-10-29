import { Prisma, PrismaClient } from "../generated/postgresql";
import {
  QueryMiddlewareFactory,
  QueryMiddleware,
} from "../middleware/query.middleware";
import { QueryOptions, RequestContext } from "../middleware/types";

/**
 * Table-specific query implementation with type-safe methods
 * and proper access control enforcement.
 */
export class AuditLogsTableQueries {
  private middleware: QueryMiddleware;
  private prisma: PrismaClient;

  constructor(context: RequestContext, prisma: PrismaClient) {
    this.middleware = QueryMiddlewareFactory.create(context);
    this.prisma = prisma;
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
