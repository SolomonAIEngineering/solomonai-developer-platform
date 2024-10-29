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
export class TeamsTableQueries {
  private middleware: QueryMiddleware;
  private prisma: PrismaClient;

  constructor(context: RequestContext, prisma: PrismaClient) {
    this.middleware = QueryMiddlewareFactory.create(context);
    this.prisma = prisma;
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
}
