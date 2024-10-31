import { QueryMiddlewareFactory } from "../client";
import { QueryMiddleware } from "../client";
import { Prisma, PrismaClient } from "@/database/generated/postgresql";
import { QueryOptions, RequestContext } from "../types";

type TeamWithRelations = Prisma.teamsGetPayload<{
  include: {
    organization: true;
    tenant: true;
    team_members: true;
    addresses: true;
    audit_logs: true;
  };
}>;

type TeamType = "department" | "project" | "workgroup";

export class TeamQueries {
  private middleware: QueryMiddleware;
  private prisma: PrismaClient;

  constructor(context: RequestContext, prisma: PrismaClient) {
    this.middleware = QueryMiddlewareFactory.create(context, prisma);
    this.prisma = prisma;
  }

  /**
   * Create a new team
   */
  async createTeam(data: {
    organization_id: string;
    tenant_id?: string;
    name: string;
    description?: string;
    team_type: TeamType;
    metadata?: Record<string, any>;
    initial_members?: Array<{
      user_account_id?: bigint;
      business_account_id?: bigint;
      role: string;
    }>;
  }) {
    // Validate unique team name within organization
    await this.validateTeamName(data.organization_id, data.name);

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.teams,
      "create",
      {
        data: {
          organization_id: data.organization_id,
          tenant_id: data.tenant_id,
          name: data.name,
          description: data.description,
          team_type: data.team_type,
          metadata: data.metadata,
          created_by: this.middleware.getContext().userId,
          team_members: data.initial_members
            ? {
                create: data.initial_members.map((member) => ({
                  ...member,
                  invited_by: this.middleware.getContext().userId,
                  status: "active",
                })),
              }
            : undefined,
        },
        include: {
          team_members: true,
          organization: true,
          tenant: true,
        },
      },
    );
  }

  /**
   * Get teams with flexible filtering
   */
  async getTeams(
    options?: QueryOptions & {
      organizationId?: string;
      tenantId?: string;
      teamTypes?: TeamType[];
      searchTerm?: string;
      isActive?: boolean;
      createdBy?: string;
      createdAfter?: Date;
      createdBefore?: Date;
      minMembers?: number;
      maxMembers?: number;
      includeMembers?: boolean;
      includeAddresses?: boolean;
      includeAuditLogs?: boolean;
    },
  ) {
    const {
      organizationId,
      tenantId,
      teamTypes,
      searchTerm,
      isActive,
      createdBy,
      createdAfter,
      createdBefore,
      minMembers,
      maxMembers,
      includeMembers,
      includeAddresses,
      includeAuditLogs,
      ...queryOptions
    } = options || {};

    let whereClause: Prisma.teamsWhereInput = {};

    if (organizationId) {
      whereClause.organization_id = organizationId;
    }

    if (tenantId) {
      whereClause.tenant_id = tenantId;
    }

    if (teamTypes?.length) {
      whereClause.team_type = { in: teamTypes };
    }

    if (searchTerm) {
      whereClause.OR = [
        { name: { contains: searchTerm, mode: "insensitive" } },
        { description: { contains: searchTerm, mode: "insensitive" } },
      ];
    }

    if (typeof isActive === "boolean") {
      whereClause.is_active = isActive;
    }

    if (createdBy) {
      whereClause.created_by = createdBy;
    }

    if (createdAfter || createdBefore) {
      whereClause.created_at = {};
      if (createdAfter) whereClause.created_at.gte = createdAfter;
      if (createdBefore) whereClause.created_at.lte = createdBefore;
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.teams,
      "findMany",
      {
        where: whereClause,
        include: {
          team_members: includeMembers,
          addresses: includeAddresses,
          audit_logs: includeAuditLogs,
          organization: true,
          tenant: true,
        },
      },
      queryOptions,
    );
  }

  /**
   * Get team by ID
   */
  async getTeamById(
    id: bigint,
    options?: QueryOptions & {
      includeMembers?: boolean;
      includeAddresses?: boolean;
      includeAuditLogs?: boolean;
    },
  ): Promise<TeamWithRelations | null> {
    const {
      includeMembers,
      includeAddresses,
      includeAuditLogs,
      ...queryOptions
    } = options || {};

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.teams,
      "findUnique",
      {
        where: { id },
        include: {
          team_members: includeMembers,
          addresses: includeAddresses,
          audit_logs: includeAuditLogs,
          organization: true,
          tenant: true,
        },
      },
      queryOptions,
    );
  }

  /**
   * Update team details
   */
  async updateTeam(
    id: bigint,
    data: {
      name?: string;
      description?: string;
      team_type?: TeamType;
      metadata?: Record<string, any>;
      is_active?: boolean;
    },
  ) {
    const team = await this.getTeamById(id);
    if (!team) throw new Error("Team not found");

    // Validate team name if being updated
    if (data.name && data.name !== team.name) {
      await this.validateTeamName(team.organization_id, data.name);
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.teams,
      "update",
      {
        where: { id },
        data: {
          ...data,
          updated_at: new Date(),
        },
        include: {
          team_members: true,
          organization: true,
          tenant: true,
        },
      },
    );
  }

  /**
   * Soft delete team
   */
  async deleteTeam(id: bigint) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.teams,
      "update",
      {
        where: { id },
        data: {
          is_active: false,
          team_members: {
            updateMany: {
              where: { team_id: id },
              data: { status: "inactive" },
            },
          },
        },
      },
    );
  }

  /**
   * Hard delete team and all related data
   */
  async permanentlyDeleteTeam(id: bigint) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.teams,
      "delete",
      {
        where: { id },
        include: {
          team_members: true,
          addresses: true,
          audit_logs: true,
        },
      },
    );
  }

  /**
   * Add members to team
   */
  async addTeamMembers(
    teamId: bigint,
    members: Array<{
      user_account_id?: bigint;
      business_account_id?: bigint;
      role: string;
    }>,
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.team_members,
      "createMany",
      {
        data: members.map((member) => ({
          team_id: teamId,
          ...member,
          invited_by: this.middleware.getContext().userId,
          status: "active",
        })),
      },
    );
  }

  /**
   * Remove members from team
   */
  async removeTeamMembers(teamId: bigint, memberIds: bigint[]) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.team_members,
      "deleteMany",
      {
        where: {
          team_id: teamId,
          id: { in: memberIds },
        },
      },
    );
  }

  /**
   * Update team member roles
   */
  async updateTeamMemberRoles(
    teamId: bigint,
    updates: Array<{
      member_id: bigint;
      new_role: string;
    }>,
  ) {
    const updatePromises = updates.map((update) =>
      this.middleware.enforceQueryRules(
        this.prisma,
        Prisma.ModelName.team_members,
        "update",
        {
          where: {
            id: update.member_id,
            team_id: teamId,
          },
          data: {
            role: update.new_role,
          },
        },
      ),
    );

    return await Promise.all(updatePromises);
  }

  /**
   * Get team member count
   */
  async getTeamMemberCount(
    teamId: bigint,
    options?: {
      activeOnly?: boolean;
      byRole?: boolean;
    },
  ) {
    const { activeOnly = true, byRole = false } = options || {};

    const whereClause: Prisma.team_membersWhereInput = {
      team_id: teamId,
    };

    if (activeOnly) {
      whereClause.status = "active";
    }

    if (byRole) {
      return await this.middleware.enforceQueryRules(
        this.prisma,
        Prisma.ModelName.team_members,
        "groupBy",
        {
          by: ["role"],
          where: whereClause,
          _count: true,
          orderBy: undefined,
        },
      );
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.team_members,
      "count",
      {
        where: whereClause,
      },
    );
  }

  /**
   * Transfer team to different tenant
   */
  async transferTeam(
    id: bigint,
    newTenantId: string,
    options?: {
      keepMembers?: boolean;
      keepAddresses?: boolean;
    },
  ) {
    const { keepMembers = false, keepAddresses = false } = options || {};

    if (!keepMembers) {
      await this.removeAllTeamMembers(id);
    }

    if (!keepAddresses) {
      await this.removeAllTeamAddresses(id);
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.teams,
      "update",
      {
        where: { id },
        data: {
          tenant_id: newTenantId,
          updated_at: new Date(),
        },
      },
    );
  }

  /**
   * Merge teams
   */
  async mergeTeams(
    sourceTeamId: bigint,
    targetTeamId: bigint,
    options?: {
      mergeMembers?: boolean;
      mergeAddresses?: boolean;
      deleteSource?: boolean;
    },
  ) {
    const {
      mergeMembers = true,
      mergeAddresses = true,
      deleteSource = true,
    } = options || {};

    // Start a transaction
    return await this.prisma.$transaction(async (tx) => {
      if (mergeMembers) {
        // Transfer members
        await tx.team_members.updateMany({
          where: { team_id: sourceTeamId },
          data: { team_id: targetTeamId },
        });
      }

      if (mergeAddresses) {
        // Transfer addresses
        await tx.addresses.updateMany({
          where: { team_id: sourceTeamId },
          data: { team_id: targetTeamId },
        });
      }

      if (deleteSource) {
        // Delete source team
        await tx.teams.delete({
          where: { id: sourceTeamId },
        });
      }

      return await tx.teams.findUnique({
        where: { id: targetTeamId },
        include: {
          team_members: true,
          addresses: true,
        },
      });
    });
  }

  /**
   * Clone team
   */
  async cloneTeam(
    sourceTeamId: bigint,
    newTeamName: string,
    options?: {
      cloneMembers?: boolean;
      cloneAddresses?: boolean;
      cloneMetadata?: boolean;
    },
  ) {
    const sourceTeam = await this.getTeamById(sourceTeamId, {
      includeMembers: true,
      includeAddresses: true,
    });

    if (!sourceTeam) throw new Error("Source team not found");

    // Validate new team name
    await this.validateTeamName(sourceTeam.organization_id, newTeamName);

    const cloneData: any = {
      organization_id: sourceTeam.organization_id,
      tenant_id: sourceTeam.tenant_id,
      name: newTeamName,
      description: sourceTeam.description,
      team_type: sourceTeam.team_type,
      metadata: options?.cloneMetadata ? sourceTeam.metadata : undefined,
      created_by: this.middleware.getContext().userId,
    };

    if (options?.cloneMembers) {
      cloneData.team_members = {
        create: sourceTeam.team_members.map((member) => ({
          user_account_id: member.user_account_id,
          business_account_id: member.business_account_id,
          role: member.role,
          invited_by: this.middleware.getContext().userId,
          status: "active",
        })),
      };
    }

    if (options?.cloneAddresses) {
      cloneData.addresses = {
        create: sourceTeam.addresses.map((address) => ({
          addressable_type: "team",
          address_line1: address.address_line1,
          address_line2: address.address_line2,
          city: address.city,
          state: address.state,
          country: address.country,
          postal_code: address.postal_code,
          latitude: address.latitude,
          longitude: address.longitude,
          is_primary: address.is_primary,
          address_type: address.address_type,
          metadata: address.metadata,
        })),
      };
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.teams,
      "create",
      {
        data: cloneData,
        include: {
          team_members: true,
          addresses: true,
        },
      },
    );
  }
  /**
   * Get team statistics
   */
  async getTeamStatistics(
    teamId: bigint,
    options?: {
      includeInactive?: boolean;
      includeDeletedMembers?: boolean;
      timeRange?: {
        start: Date;
        end: Date;
      };
    },
  ) {
    const team = await this.getTeamById(teamId, {
      includeMembers: true,
      includeAuditLogs: true,
    });

    if (!team) throw new Error("Team not found");

    const memberStats = await this.calculateMemberStats(
      teamId,
      options?.includeInactive,
      options?.includeDeletedMembers,
    );

    const activityStats = await this.calculateActivityStats(
      teamId,
      options?.timeRange?.start,
      options?.timeRange?.end,
    );

    return {
      team_info: {
        id: team.id,
        name: team.name,
        type: team.team_type,
        created_at: team.created_at,
        age_days: Math.floor(
          (Date.now() - team.created_at.getTime()) / (1000 * 60 * 60 * 24),
        ),
      },
      member_stats: memberStats,
      activity_stats: activityStats,
      metadata: team.metadata,
    };
  }

  /**
   * Calculate member statistics
   */
  private async calculateMemberStats(
    teamId: bigint,
    includeInactive?: boolean,
    includeDeleted?: boolean,
  ) {
    const whereClause: Prisma.team_membersWhereInput = {
      team_id: teamId,
    };

    if (!includeInactive) {
      whereClause.status = "active";
    }

    if (!includeDeleted) {
      whereClause.deleted_at = null;
    }

    const members = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.team_members,
      "findMany",
      {
        where: whereClause,
        include: {
          user_account: true,
          business_account: true,
        },
      },
    );

    return {
      total_members: members.length,
      active_members: members.filter((m) => m.status === "active").length,
      by_role: this.groupMembersByRole(members),
      by_type: {
        user_accounts: members.filter((m) => m.user_account_id).length,
        business_accounts: members.filter((m) => m.business_account_id).length,
      },
      joining_trend: this.calculateJoiningTrend(members),
    };
  }

  /**
   * Calculate activity statistics
   */
  private async calculateActivityStats(
    teamId: bigint,
    startDate?: Date,
    endDate?: Date,
  ) {
    let whereClause: Prisma.audit_logsWhereInput = {
      team: {
        id: teamId,
      },
    };

    if (startDate || endDate) {
      whereClause.created_at = {};
      if (startDate) whereClause.created_at.gte = startDate;
      if (endDate) whereClause.created_at.lte = endDate;
    }

    const logs = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: whereClause,
      },
    );

    return {
      total_activities: logs.length,
      by_type: this.groupActivitiesByType(logs),
      recent_activities: this.getRecentActivities(logs),
      activity_trend: this.calculateActivityTrend(logs),
    };
  }

  /**
   * Group members by role
   */
  private groupMembersByRole(members: any[]) {
    return members.reduce((acc: Record<string, number>, member) => {
      acc[member.role] = (acc[member.role] || 0) + 1;
      return acc;
    }, {});
  }

  /**
   * Calculate joining trend
   */
  private calculateJoiningTrend(members: any[]) {
    const monthlyJoins = members.reduce(
      (acc: Record<string, number>, member) => {
        const monthYear = member.joined_at.toISOString().slice(0, 7);
        acc[monthYear] = (acc[monthYear] || 0) + 1;
        return acc;
      },
      {},
    );

    return Object.entries(monthlyJoins)
      .map(([month, count]) => ({ month, count }))
      .sort((a, b) => a.month.localeCompare(b.month));
  }

  /**
   * Group activities by type
   */
  private groupActivitiesByType(logs: any[]) {
    return logs.reduce((acc: Record<string, number>, log) => {
      acc[log.event_type] = (acc[log.event_type] || 0) + 1;
      return acc;
    }, {});
  }

  /**
   * Get recent activities
   */
  private getRecentActivities(logs: any[], limit: number = 10) {
    return logs
      .sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
      .slice(0, limit)
      .map((log) => ({
        timestamp: log.created_at,
        event_type: log.event_type,
        actor: log.actor_id,
        details: log.change_summary,
      }));
  }

  /**
   * Calculate activity trend
   */
  private calculateActivityTrend(logs: any[]) {
    const dailyActivities = logs.reduce((acc: Record<string, number>, log) => {
      const date = log.created_at.toISOString().slice(0, 10);
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(dailyActivities)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date));
  }

  /**
   * Get team member overlap with other teams
   */
  async getTeamOverlap(teamId: bigint) {
    const team = await this.getTeamById(teamId, {
      includeMembers: true,
    });

    if (!team) throw new Error("Team not found");

    const memberIds = team.team_members
      .map((member) => member.user_account_id || member.business_account_id)
      .filter(Boolean);

    const overlappingTeams = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.teams,
      "findMany",
      {
        where: {
          id: { not: teamId },
          organization_id: team.organization_id,
          team_members: {
            some: {
              OR: [
                { user_account_id: { in: memberIds as bigint[] } },
                { business_account_id: { in: memberIds as bigint[] } },
              ],
            },
          },
        },
        include: {
          team_members: true,
        },
      },
    );

    return overlappingTeams.map((otherTeam: any) => {
      const sharedMembers = otherTeam.team_members.filter((member: any) =>
        memberIds.includes(
          member.user_account_id || member.business_account_id,
        ),
      );

      return {
        team_id: otherTeam.id,
        team_name: otherTeam.name,
        shared_member_count: sharedMembers.length,
        overlap_percentage:
          (sharedMembers.length / team.team_members.length) * 100,
        shared_members: sharedMembers,
      };
    });
  }

  /**
   * Get team hierarchy
   */
  async getTeamHierarchy(
    organizationId: string,
    options?: {
      includeInactive?: boolean;
      includeMemberCounts?: boolean;
    },
  ) {
    const teams = await this.getTeams({
      organizationId,
      isActive: options?.includeInactive ? undefined : true,
      includeMembers: options?.includeMemberCounts,
    });

    const hierarchy = this.buildHierarchyTree(teams);
    return this.calculateHierarchyMetrics(hierarchy);
  }

  /**
   * Build hierarchy tree
   */
  private buildHierarchyTree(teams: any[]) {
    const departments = teams.filter((team) => team.team_type === "department");

    return departments.map((department) => ({
      ...department,
      projects: teams
        .filter(
          (team) =>
            team.team_type === "project" &&
            team.metadata?.department_id === department.id,
        )
        .map((project) => ({
          ...project,
          workgroups: teams.filter(
            (team) =>
              team.team_type === "workgroup" &&
              team.metadata?.project_id === project.id,
          ),
        })),
    }));
  }

  /**
   * Calculate hierarchy metrics
   */
  private calculateHierarchyMetrics(hierarchy: any) {
    return hierarchy.map((department: any) => ({
      department: {
        id: department.id,
        name: department.name,
        member_count: department.team_members?.length || 0,
      },
      projects: department.projects.map((project: any) => ({
        id: project.id,
        name: project.name,
        member_count: project.team_members?.length || 0,
        workgroups: project.workgroups.map((workgroup: any) => ({
          id: workgroup.id,
          name: workgroup.name,
          member_count: workgroup.team_members?.length || 0,
        })),
      })),
      total_members: this.calculateTotalMembers(department),
      depth: this.calculateHierarchyDepth(department),
    }));
  }

  /**
   * Calculate total members in hierarchy branch
   */
  private calculateTotalMembers(branch: any): number {
    let total = branch.team_members?.length || 0;

    if (branch.projects) {
      total += branch.projects.reduce((sum: number, project: any) => {
        return sum + this.calculateTotalMembers(project);
      }, 0);
    }

    if (branch.workgroups) {
      total += branch.workgroups.reduce((sum: number, workgroup: any) => {
        return sum + (workgroup.team_members?.length || 0);
      }, 0);
    }

    return total;
  }

  /**
   * Calculate hierarchy depth
   */
  private calculateHierarchyDepth(branch: any): number {
    if (!branch.projects?.length) return 1;

    const projectDepths = branch.projects.map((project: any) => {
      if (!project.workgroups?.length) return 2;
      return 3;
    });

    return Math.max(...projectDepths);
  }

  /**
   * Validate team name uniqueness
   */
  private async validateTeamName(organizationId: string, name: string) {
    const existing = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.teams,
      "findFirst",
      {
        where: {
          organization_id: organizationId,
          name,
        },
      },
    );

    if (existing) {
      throw new Error(
        `Team name "${name}" already exists in this organization`,
      );
    }
  }

  /**
   * Remove all team members
   */
  private async removeAllTeamMembers(teamId: bigint) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.team_members,
      "deleteMany",
      {
        where: { team_id: teamId },
      },
    );
  }

  /**
   * Remove all team addresses
   */
  private async removeAllTeamAddresses(teamId: bigint) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.addresses,
      "deleteMany",
      {
        where: { team_id: teamId },
      },
    );
  }
}
