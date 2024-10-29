import { PrismaClient, Prisma } from "../generated/postgresql";
import {
  QueryMiddleware,
  QueryMiddlewareFactory,
} from "../middleware/query.middleware";
import { QueryOptions, RequestContext } from "../middleware/types";

type TeamMemberRole = "admin" | "member" | "guest";
type TeamMemberStatus = "active" | "invited" | "suspended";

type TeamMemberWithRelations = Prisma.team_membersGetPayload<{
  include: {
    team: true;
    user_account: true;
    business_account: true;
  };
}>;

export class TeamMemberQueries {
  private middleware: QueryMiddleware;
  private prisma: PrismaClient;

  constructor(context: RequestContext, prisma: PrismaClient) {
    this.middleware = QueryMiddlewareFactory.create(context, prisma);
    this.prisma = prisma;
  }

  /**
   * Create team membership
   */
  async createTeamMember(data: {
    team_id: bigint;
    user_account_id?: bigint;
    business_account_id?: bigint;
    role: TeamMemberRole;
    metadata?: Record<string, any>;
  }) {
    // Validate that either user_account_id or business_account_id is provided
    if (!data.user_account_id && !data.business_account_id) {
      throw new Error(
        "Either user_account_id or business_account_id must be provided",
      );
    }

    // Check for existing membership
    await this.validateUniqueMembership(
      data.team_id,
      data.user_account_id,
      data.business_account_id,
    );

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.team_members,
      "create",
      {
        data: {
          ...data,
          invited_by: this.middleware.getContext().userId,
          status: "invited",
        },
        include: {
          team: true,
          user_account: true,
          business_account: true,
        },
      },
    );
  }

  /**
   * Bulk create team memberships
   */
  async bulkCreateTeamMembers(
    teamId: bigint,
    members: Array<{
      user_account_id?: bigint;
      business_account_id?: bigint;
      role: TeamMemberRole;
      metadata?: Record<string, any>;
    }>,
  ) {
    const createdMembers = await this.prisma.$transaction(async (tx) => {
      const results = [];

      for (const member of members) {
        try {
          // Validate membership
          await this.validateUniqueMembership(
            teamId,
            member.user_account_id,
            member.business_account_id,
          );

          const created = await this.middleware.enforceQueryRules(
            tx as unknown as PrismaClient,
            Prisma.ModelName.team_members,
            "create",
            {
              data: {
                team_id: teamId,
                ...member,
                invited_by: this.middleware.getContext().userId,
                status: "invited",
              },
            },
          );

          results.push({
            success: true,
            member: created,
          });
        } catch (error) {
          results.push({
            success: false,
            error: error instanceof Error ? error.message : String(error),
            member: member,
          });
        }
      }

      return results;
    });

    return createdMembers;
  }

  /**
   * Get team members with flexible filtering
   */
  async getTeamMembers(
    options?: QueryOptions & {
      teamId?: bigint;
      roles?: TeamMemberRole[];
      status?: TeamMemberStatus[];
      invitedBy?: string;
      joinedAfter?: Date;
      joinedBefore?: Date;
      includeTeam?: boolean;
      includeAccounts?: boolean;
      searchTerm?: string;
    },
  ) {
    const {
      teamId,
      roles,
      status,
      invitedBy,
      joinedAfter,
      joinedBefore,
      includeTeam,
      includeAccounts,
      searchTerm,
      ...queryOptions
    } = options || {};

    let whereClause: any = {};

    if (teamId) {
      whereClause.team_id = teamId;
    }

    if (roles?.length) {
      whereClause.role = { in: roles };
    }

    if (status?.length) {
      whereClause.status = { in: status };
    }

    if (invitedBy) {
      whereClause.invited_by = invitedBy;
    }

    if (joinedAfter || joinedBefore) {
      whereClause.joined_at = {};
      if (joinedAfter) whereClause.joined_at.gte = joinedAfter;
      if (joinedBefore) whereClause.joined_at.lte = joinedBefore;
    }

    if (searchTerm) {
      whereClause.OR = [
        {
          user_account: {
            OR: [
              { email: { contains: searchTerm, mode: "insensitive" } },
              { firstname: { contains: searchTerm, mode: "insensitive" } },
              { lastname: { contains: searchTerm, mode: "insensitive" } },
            ],
          },
        },
        {
          business_account: {
            OR: [
              { company_name: { contains: searchTerm, mode: "insensitive" } },
              { email: { contains: searchTerm, mode: "insensitive" } },
            ],
          },
        },
      ];
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.team_members,
      "findMany",
      {
        where: whereClause,
        include: {
          team: includeTeam,
          user_account: includeAccounts,
          business_account: includeAccounts,
        },
      },
      queryOptions,
    );
  }

  /**
   * Get team member by ID
   */
  async getTeamMemberById(
    id: bigint,
    options?: QueryOptions & {
      includeTeam?: boolean;
      includeAccounts?: boolean;
    },
  ): Promise<TeamMemberWithRelations | null> {
    const { includeTeam, includeAccounts, ...queryOptions } = options || {};

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.team_members,
      "findUnique",
      {
        where: { id },
        include: {
          team: includeTeam,
          user_account: includeAccounts,
          business_account: includeAccounts,
        },
      },
      queryOptions,
    );
  }

  /**
   * Update team member
   */
  async updateTeamMember(
    id: bigint,
    data: {
      role?: TeamMemberRole;
      status?: TeamMemberStatus;
      metadata?: Record<string, any>;
    },
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.team_members,
      "update",
      {
        where: { id },
        data,
        include: {
          team: true,
          user_account: true,
          business_account: true,
        },
      },
    );
  }

  /**
   * Update team member status
   */
  async updateMemberStatus(
    id: bigint,
    status: TeamMemberStatus,
    reason?: string,
  ) {
    const updateData: any = {
      status,
      metadata: reason
        ? {
            status_change_reason: reason,
            status_changed_at: new Date(),
          }
        : undefined,
    };

    if (status === "active") {
      updateData.joined_at = new Date();
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.team_members,
      "update",
      {
        where: { id },
        data: updateData,
      },
    );
  }

  /**
   * Bulk update member status
   */
  async bulkUpdateMemberStatus(memberIds: bigint[], status: TeamMemberStatus) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.team_members,
      "updateMany",
      {
        where: {
          id: { in: memberIds },
        },
        data: {
          status,
          joined_at: status === "active" ? new Date() : undefined,
        },
      },
    );
  }

  /**
   * Remove team member
   */
  async removeTeamMember(id: bigint) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.team_members,
      "delete",
      {
        where: { id },
      },
    );
  }

  /**
   * Bulk remove team members
   */
  async bulkRemoveTeamMembers(memberIds: bigint[]) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.team_members,
      "deleteMany",
      {
        where: {
          id: { in: memberIds },
        },
      },
    );
  }

  /**
   * Get member roles across teams
   */
  async getMemberRolesAcrossTeams(
    accountId: bigint,
    isBusinessAccount: boolean = false,
  ) {
    const whereClause = isBusinessAccount
      ? { business_account_id: accountId }
      : { user_account_id: accountId };

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.team_members,
      "findMany",
      {
        where: whereClause,
        include: {
          team: true,
        },
      },
    );
  }

  /**
   * Transfer membership
   */
  async transferMembership(
    sourceId: bigint,
    targetTeamId: bigint,
    options?: {
      keepRole?: boolean;
      keepMetadata?: boolean;
    },
  ) {
    const { keepRole = false, keepMetadata = false } = options || {};

    const sourceMember = await this.getTeamMemberById(sourceId);
    if (!sourceMember) throw new Error("Source member not found");

    // Validate unique membership in target team
    await this.validateUniqueMembership(
      targetTeamId,
      sourceMember.user_account_id || undefined,
      sourceMember.business_account_id || undefined,
    );

    // Create new membership
    const newMember = await this.createTeamMember({
      team_id: targetTeamId,
      user_account_id: sourceMember.user_account_id || undefined,
      business_account_id: sourceMember.business_account_id || undefined,
      role: keepRole ? (sourceMember.role as TeamMemberRole) : "member",
      metadata: keepMetadata
        ? (sourceMember.metadata as Record<string, any>)
        : undefined,
    });

    // Remove old membership
    await this.removeTeamMember(sourceId);

    return newMember;
  }

  /**
   * Get member activity history
   */
  async getMemberActivityHistory(
    id: bigint,
    options?: {
      startDate?: Date;
      endDate?: Date;
      limit?: number;
    },
  ) {
    const member = await this.getTeamMemberById(id);
    if (!member) throw new Error("Member not found");

    let whereClause: any = {
      entity_type: "team_member",
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
        orderBy: {
          created_at: "desc",
        },
        take: options?.limit,
      },
    );
  }

  /**
   * Get member invitations
   */
  async getMemberInvitations(options?: {
    teamId?: bigint;
    status?: TeamMemberStatus[];
    olderThan?: Date;
    includeTeam?: boolean;
  }) {
    const {
      teamId,
      status = ["invited"],
      olderThan,
      includeTeam,
    } = options || {};

    let whereClause: any = {
      status: { in: status },
    };

    if (teamId) {
      whereClause.team_id = teamId;
    }

    if (olderThan) {
      whereClause.joined_at = {
        lt: olderThan,
      };
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.team_members,
      "findMany",
      {
        where: whereClause,
        include: {
          team: includeTeam,
          user_account: true,
          business_account: true,
        },
      },
    );
  }

  /**
   * Process invitation response
   */
  async processInvitationResponse(
    id: bigint,
    accept: boolean,
    responderId: string,
  ) {
    const member = await this.getTeamMemberById(id);
    if (!member) throw new Error("Member not found");

    if (member.status !== "invited") {
      throw new Error("Invitation is no longer pending");
    }

    if (accept) {
      return await this.updateMemberStatus(id, "active");
    } else {
      return await this.removeTeamMember(id);
    }
  }

  /**
   * Validate that the member doesn't already exist in the team
   */
  private async validateUniqueMembership(
    teamId: bigint,
    userAccountId?: bigint,
    businessAccountId?: bigint,
  ): Promise<void> {
    if (!userAccountId && !businessAccountId) {
      throw new Error(
        "Either user_account_id or business_account_id must be provided",
      );
    }

    const existingMember = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.team_members,
      "findFirst",
      {
        where: {
          team_id: teamId,
          OR: [
            userAccountId ? { user_account_id: userAccountId } : {},
            businessAccountId ? { business_account_id: businessAccountId } : {},
          ],
          status: {
            in: ["active", "invited"], // Check both active and invited members
          },
        },
      },
    );

    if (existingMember) {
      throw new Error(
        `Member already exists in team with status: ${existingMember.status}`,
      );
    }
  }
}
