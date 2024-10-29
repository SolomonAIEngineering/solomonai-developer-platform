import { QueryMiddleware, QueryMiddlewareFactory } from "../client";
import { PrismaClient, Prisma } from "../generated/postgresql";
import { QueryOptions, RequestContext } from "../types";

type OrgMemberWithRelations = Prisma.org_membersGetPayload<{
  include: {
    organization: true;
  };
}>;

/**
 * Available member roles in the system
 */
type MemberRole = "owner" | "admin" | "member";

/**
 * Member status types
 */
type MemberStatus = "active" | "invited" | "suspended";

/**
 * Available permissions for organization members
 */
type OrgPermission =
  | "manage_tenants"
  | "view_usage"
  | "manage_api_keys"
  | "manage_members"
  | "manage_settings"
  | "view_audit_logs"
  | "manage_billing"
  | "manage_teams"
  | "view_reports"
  | "manage_integrations"
  | "manage_security"
  | "manage_compliance";

/**
 * Organization member-specific query implementation providing comprehensive
 * member management functionality.
 */
export class OrgMemberQueries {
  private middleware: QueryMiddleware;
  private prisma: PrismaClient;

  // Role-based permission presets
  private static readonly ROLE_PERMISSIONS: Record<
    MemberRole,
    OrgPermission[]
  > = {
    owner: [
      "manage_tenants",
      "view_usage",
      "manage_api_keys",
      "manage_members",
      "manage_settings",
      "view_audit_logs",
      "manage_billing",
      "manage_teams",
      "view_reports",
      "manage_integrations",
      "manage_security",
      "manage_compliance",
    ],
    admin: [
      "manage_tenants",
      "view_usage",
      "manage_api_keys",
      "manage_members",
      "manage_settings",
      "view_audit_logs",
      "manage_teams",
      "view_reports",
      "manage_integrations",
    ],
    member: ["view_usage", "view_reports"],
  };

  constructor(context: RequestContext, prisma: PrismaClient) {
    this.middleware = QueryMiddlewareFactory.create(context, prisma);
    this.prisma = prisma;
  }

  /**
   * Create a new organization member with role-based permissions
   */
  async createMember(data: {
    organization_id: string;
    user_id: string;
    role: MemberRole;
    email: string;
    name?: string;
    invited_by?: string;
    additional_permissions?: OrgPermission[];
  }) {
    // Validate unique constraints
    await this.validateUniqueMember(
      data.organization_id,
      data.user_id,
      data.email,
    );

    // Get default permissions for the role
    const rolePermissions = OrgMemberQueries.ROLE_PERMISSIONS[data.role];

    // Combine with additional permissions if provided
    const permissions = [
      ...new Set([...rolePermissions, ...(data.additional_permissions || [])]),
    ];

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "create",
      {
        data: {
          ...data,
          status: "invited",
          permissions,
          joined_at: new Date(),
        },
      },
    );
  }

  /**
   * Bulk create organization members
   */
  async bulkCreateMembers(
    organizationId: string,
    members: Array<{
      user_id: string;
      role: MemberRole;
      email: string;
      name?: string;
    }>,
    invitedBy: string,
  ) {
    const createdMembers = await this.prisma.$transaction(async (tx) => {
      const results = [];
      for (const member of members) {
        // Validate unique constraints for each member
        await this.validateUniqueMember(
          organizationId,
          member.user_id,
          member.email,
        );

        const rolePermissions = OrgMemberQueries.ROLE_PERMISSIONS[member.role];

        const created = await this.middleware.enforceQueryRules(
          tx as unknown as PrismaClient,
          Prisma.ModelName.org_members,
          "create",
          {
            data: {
              organization_id: organizationId,
              user_id: member.user_id,
              role: member.role,
              email: member.email,
              name: member.name,
              invited_by: invitedBy,
              status: "invited",
              permissions: rolePermissions,
              joined_at: new Date(),
            },
          },
        );
        results.push(created);
      }
      return results;
    });

    return createdMembers;
  }

  /**
   * Get organization members with flexible filtering
   */
  async getMembers(
    options?: QueryOptions & {
      organizationId?: string;
      searchTerm?: string;
      roles?: MemberRole[];
      status?: MemberStatus[];
      permissions?: OrgPermission[];
      invitedBy?: string;
      joinedAfter?: Date;
      joinedBefore?: Date;
      lastAccessAfter?: Date;
      lastAccessBefore?: Date;
      includeOrganization?: boolean;
    },
  ) {
    const {
      organizationId,
      searchTerm,
      roles,
      status,
      permissions,
      invitedBy,
      joinedAfter,
      joinedBefore,
      lastAccessAfter,
      lastAccessBefore,
      includeOrganization,
      ...queryOptions
    } = options || {};

    let whereClause: Prisma.org_membersWhereInput = {};

    if (organizationId) {
      whereClause.organization_id = organizationId;
    }

    if (searchTerm) {
      whereClause.OR = [
        { email: { contains: searchTerm, mode: "insensitive" } },
        { name: { contains: searchTerm, mode: "insensitive" } },
      ];
    }

    if (roles?.length) {
      whereClause.role = { in: roles };
    }

    if (status?.length) {
      whereClause.status = { in: status };
    }

    if (permissions?.length) {
      whereClause.permissions = {
        hasEvery: permissions,
      };
    }

    if (invitedBy) {
      whereClause.invited_by = invitedBy;
    }

    if (joinedAfter || joinedBefore) {
      whereClause.joined_at = {};
      if (joinedAfter) whereClause.joined_at.gte = joinedAfter;
      if (joinedBefore) whereClause.joined_at.lte = joinedBefore;
    }

    if (lastAccessAfter || lastAccessBefore) {
      whereClause.last_access = {};
      if (lastAccessAfter) whereClause.last_access.gte = lastAccessAfter;
      if (lastAccessBefore) whereClause.last_access.lte = lastAccessBefore;
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "findMany",
      {
        where: whereClause,
        include: {
          organization: includeOrganization,
        },
      },
      queryOptions,
    );
  }

  /**
   * Get member by ID
   */
  async getMemberById(
    id: bigint,
    options?: QueryOptions & {
      includeOrganization?: boolean;
    },
  ): Promise<OrgMemberWithRelations | null> {
    const { includeOrganization, ...queryOptions } = options || {};

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "findUnique",
      {
        where: { id },
        include: {
          organization: includeOrganization,
        },
      },
      queryOptions,
    );
  }

  /**
   * Get member by user ID and organization ID
   */
  async getMemberByUserAndOrg(
    userId: string,
    organizationId: string,
  ): Promise<OrgMemberWithRelations | null> {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "findUnique",
      {
        where: {
          organization_id_user_id: {
            organization_id: organizationId,
            user_id: userId,
          },
        },
        include: {
          organization: true,
        },
      },
    );
  }

  /**
   * Update member details
   */
  async updateMember(
    id: bigint,
    data: {
      role?: MemberRole;
      email?: string;
      name?: string;
      permissions?: OrgPermission[];
    },
  ) {
    const member = await this.getMemberById(id);
    if (!member) throw new Error("Member not found");

    // If updating email, validate uniqueness
    if (data.email && data.email !== member.email) {
      const existing = await this.middleware.enforceQueryRules(
        this.prisma,
        Prisma.ModelName.org_members,
        "findFirst",
        {
          where: {
            organization_id: member.organization_id,
            email: data.email,
            id: { not: id },
          },
        },
      );
      if (existing) throw new Error("Email already in use");
    }

    // If updating role, merge role-based permissions with any additional ones
    let updatedPermissions = data.permissions;
    if (data.role) {
      const rolePermissions = OrgMemberQueries.ROLE_PERMISSIONS[data.role];
      updatedPermissions = [
        ...new Set([...rolePermissions, ...(data.permissions || [])]),
      ];
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "update",
      {
        where: { id },
        data: {
          ...data,
          permissions: updatedPermissions,
        },
      },
    );
  }

  /**
   * Update member status
   */
  async updateMemberStatus(id: bigint, status: MemberStatus, reason?: string) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "update",
      {
        where: { id },
        data: {
          status,
          ...(reason ? { metadata: { suspension_reason: reason } } : {}),
        },
      },
    );
  }

  /**
   * Bulk update member statuses
   */
  async bulkUpdateMemberStatus(ids: bigint[], status: MemberStatus) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "updateMany",
      {
        where: {
          id: { in: ids },
        },
        data: {
          status,
        },
      },
    );
  }

  /**
   * Record member access
   */
  async recordMemberAccess(id: bigint) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "update",
      {
        where: { id },
        data: {
          last_access: new Date(),
        },
      },
    );
  }

  /**
   * Add permissions to member
   */
  async addPermissions(id: bigint, newPermissions: OrgPermission[]) {
    const member = await this.getMemberById(id);
    if (!member) throw new Error("Member not found");

    const updatedPermissions = [
      ...new Set([...member.permissions, ...newPermissions]),
    ];

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "update",
      {
        where: { id },
        data: {
          permissions: updatedPermissions,
        },
      },
    );
  }

  /**
   * Remove permissions from member
   */
  async removePermissions(id: bigint, permissionsToRemove: OrgPermission[]) {
    const member = await this.getMemberById(id);
    if (!member) throw new Error("Member not found");

    // Keep role-based permissions
    const rolePermissions =
      OrgMemberQueries.ROLE_PERMISSIONS[member.role as MemberRole];
    const updatedPermissions = member.permissions.filter(
      (p) =>
        !permissionsToRemove.includes(p as OrgPermission) ||
        rolePermissions.includes(p as OrgPermission),
    );

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "update",
      {
        where: { id },
        data: {
          permissions: updatedPermissions,
        },
      },
    );
  }

  /**
   * Get inactive members
   */
  async getInactiveMembers(organizationId: string, inactiveDays: number) {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - inactiveDays);

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "findMany",
      {
        where: {
          organization_id: organizationId,
          status: "active",
          last_access: {
            lt: cutoffDate,
          },
        },
      },
    );
  }

  /**
   * Transfer member to another organization
   */
  async transferMember(
    id: bigint,
    newOrganizationId: string,
    options?: {
      keepRole?: boolean;
      keepPermissions?: boolean;
    },
  ) {
    const { keepRole = false, keepPermissions = false } = options || {};

    const member = await this.getMemberById(id);
    if (!member) throw new Error("Member not found");

    // Validate unique constraints in new organization
    await this.validateUniqueMember(
      newOrganizationId,
      member.user_id,
      member.email,
    );
    const updateData: Prisma.org_membersUpdateInput = {
      organization: {
        connect: {
          id: newOrganizationId,
        },
      },
      status: "active",
    };

    if (!keepRole) {
      updateData.role = "member";
      updateData.permissions = OrgMemberQueries.ROLE_PERMISSIONS.member;
    }

    if (!keepPermissions && keepRole) {
      updateData.permissions =
        OrgMemberQueries.ROLE_PERMISSIONS[member.role as MemberRole];
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "update",
      {
        where: { id },
        data: updateData,
      },
    );
  }

  /**
   * Get member activity summary continued...
   */
  async getMemberActivitySummary(id: bigint, startDate: Date, endDate: Date) {
    const member = await this.getMemberById(id);
    if (!member) throw new Error("Member not found");

    // Get audit logs for the member
    const auditLogs = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: {
          actor_id: member.user_id,
          created_at: {
            gte: startDate,
            lte: endDate,
          },
        },
      },
    );

    // Group activities by type
    const activitySummary = auditLogs.reduce(
      (summary: Record<string, number>, log) => {
        summary[log.event_type] = (summary[log.event_type] || 0) + 1;
        return summary;
      },
      {},
    );

    return {
      memberId: id,
      userId: member.user_id,
      period: {
        start: startDate,
        end: endDate,
      },
      lastAccess: member.last_access,
      activityCount: auditLogs.length,
      activityBreakdown: activitySummary,
    };
  }

  /**
   * Get member permissions audit
   */
  async getMemberPermissionsAudit(id: bigint) {
    const member = await this.getMemberById(id);
    if (!member) throw new Error("Member not found");

    const roleBasePermissions =
      OrgMemberQueries.ROLE_PERMISSIONS[member.role as MemberRole];
    const currentPermissions = member.permissions as OrgPermission[];

    const additionalPermissions = currentPermissions.filter(
      (p) => !roleBasePermissions.includes(p),
    );

    const missingRolePermissions = roleBasePermissions.filter(
      (p) => !currentPermissions.includes(p),
    );

    return {
      memberId: id,
      role: member.role,
      roleBasePermissions,
      currentPermissions,
      additionalPermissions,
      missingRolePermissions,
      hasCustomPermissions:
        additionalPermissions.length > 0 || missingRolePermissions.length > 0,
    };
  }

  /**
   * Sync member permissions with role
   */
  async syncPermissionsWithRole(id: bigint) {
    const member = await this.getMemberById(id);
    if (!member) throw new Error("Member not found");

    const rolePermissions =
      OrgMemberQueries.ROLE_PERMISSIONS[member.role as MemberRole];

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "update",
      {
        where: { id },
        data: {
          permissions: rolePermissions,
        },
      },
    );
  }

  /**
   * Get members by permission
   */
  async getMembersByPermission(
    organizationId: string,
    permission: OrgPermission,
  ) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "findMany",
      {
        where: {
          organization_id: organizationId,
          status: "active",
          permissions: {
            has: permission,
          },
        },
      },
    );
  }

  /**
   * Get organization owners
   */
  async getOrganizationOwners(organizationId: string) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "findMany",
      {
        where: {
          organization_id: organizationId,
          role: "owner",
          status: "active",
        },
      },
    );
  }

  /**
   * Validate member role change
   */
  async validateRoleChange(
    id: bigint,
    newRole: MemberRole,
  ): Promise<{ valid: boolean; reason?: string }> {
    const member = await this.getMemberById(id);
    if (!member) throw new Error("Member not found");

    // Check if this is the last owner
    if (member.role === "owner" && newRole !== "owner") {
      const owners = await this.getOrganizationOwners(member.organization_id);
      if (owners.length === 1) {
        return {
          valid: false,
          reason: "Cannot change role of the last owner",
        };
      }
    }

    // Add additional role change validation logic here
    return { valid: true };
  }

  /**
   * Get member access history
   */
  async getMemberAccessHistory(id: bigint, limit: number = 10) {
    const member = await this.getMemberById(id);
    if (!member) throw new Error("Member not found");

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: {
          actor_id: member.user_id,
          event_type: "access",
        },
        orderBy: {
          created_at: "desc",
        },
        take: limit,
      },
    );
  }

  /**
   * Bulk invite members
   */
  async bulkInviteMembers(
    organizationId: string,
    invites: Array<{
      email: string;
      role: MemberRole;
      name?: string;
    }>,
    invitedBy: string,
  ) {
    // Generate temporary user IDs for invited members
    const invitesWithIds = invites.map((invite) => ({
      ...invite,
      user_id: `temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    }));

    // Create all members in a transaction
    return await this.prisma.$transaction(async (tx) => {
      const results = [];

      for (const invite of invitesWithIds) {
        // Validate email uniqueness
        const existing = await this.middleware.enforceQueryRules(
          tx as unknown as PrismaClient,
          Prisma.ModelName.org_members,
          "findFirst",
          {
            where: {
              organization_id: organizationId,
              email: invite.email,
            },
          },
        );

        if (existing) {
          results.push({
            email: invite.email,
            status: "error",
            reason: "Email already exists",
          });
          continue;
        }

        try {
          const member = await this.middleware.enforceQueryRules(
            tx as unknown as PrismaClient,
            Prisma.ModelName.org_members,
            "create",
            {
              data: {
                organization_id: organizationId,
                user_id: invite.user_id,
                role: invite.role,
                email: invite.email,
                name: invite.name,
                invited_by: invitedBy,
                status: "invited",
                permissions: OrgMemberQueries.ROLE_PERMISSIONS[invite.role],
              },
            },
          );

          results.push({
            email: invite.email,
            status: "success",
            member,
          });
        } catch (error) {
          results.push({
            email: invite.email,
            status: "error",
            reason: "Failed to create member",
          });
        }
      }

      return results;
    });
  }

  /**
   * Accept member invitation
   */
  async acceptInvitation(id: bigint, userId: string) {
    const member = await this.getMemberById(id);
    if (!member) throw new Error("Member not found");

    if (member.status !== "invited") {
      throw new Error("Member is not in invited status");
    }

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "update",
      {
        where: { id },
        data: {
          user_id: userId,
          status: "active",
          joined_at: new Date(),
        },
      },
    );
  }

  /**
   * Get member statistics
   */
  async getMemberStatistics(organizationId: string) {
    const members = await this.getMembers({ organizationId });

    return {
      total: members.length,
      byRole: members.reduce((acc: Record<string, number>, member) => {
        acc[member.role] = (acc[member.role] || 0) + 1;
        return acc;
      }, {}),
      byStatus: members.reduce((acc: Record<string, number>, member) => {
        acc[member.status] = (acc[member.status] || 0) + 1;
        return acc;
      }, {}),
      activeInLast30Days: members.filter(
        (member) =>
          member.last_access &&
          member.last_access > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      ).length,
    };
  }

  /**
   * Validate unique member constraints
   */
  private async validateUniqueMember(
    organizationId: string,
    userId: string,
    email: string,
  ) {
    const existing = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "findFirst",
      {
        where: {
          OR: [
            {
              organization_id: organizationId,
              user_id: userId,
            },
            {
              organization_id: organizationId,
              email: email,
            },
          ],
        },
      },
    );

    if (existing) {
      throw new Error(
        "Member with this user ID or email already exists in the organization",
      );
    }
  }

  /**
   * Hard delete a member
   * WARNING: This operation is irreversible
   */
  async permanentlyDeleteMember(id: bigint) {
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "delete",
      {
        where: { id },
      },
    );
  }

  /**
   * Permission group management functions
   */
  async createPermissionGroup(
    organizationId: string,
    data: {
      name: string;
      permissions: OrgPermission[];
      description?: string;
    },
  ) {
    // Store in metadata of organization or separate table
    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "update",
      {
        where: { id: organizationId },
        data: {
          metadata: {
            permission_groups: {
              [data.name]: {
                permissions: data.permissions,
                description: data.description,
                created_at: new Date(),
              },
            },
          },
        },
      },
    );
  }

  /**
   * Assign permission group to member
   */
  async assignPermissionGroup(memberId: bigint, groupName: string) {
    const member = await this.getMemberById(memberId);
    if (!member) throw new Error("Member not found");

    const org = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.organizations,
      "findUnique",
      {
        where: { id: member.organization_id },
      },
    );

    const permissionGroups =
      (org?.metadata as { permission_groups?: Record<string, any> })
        ?.permission_groups || {};
    const group = permissionGroups[groupName];

    if (!group) throw new Error("Permission group not found");

    return await this.addPermissions(memberId, group.permissions);
  }

  /**
   * Get member login history
   */
  async getMemberLoginHistory(
    memberId: bigint,
    options?: {
      startDate?: Date;
      endDate?: Date;
      limit?: number;
      includeDeviceInfo?: boolean;
    },
  ) {
    const member = await this.getMemberById(memberId);
    if (!member) throw new Error("Member not found");
    let whereClause: Prisma.audit_logsWhereInput = {
      actor_id: member.user_id,
      event_type: "login",
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
        select: {
          created_at: true,
          ip_address: true,
          user_agent: options?.includeDeviceInfo,
          metadata: true,
        },
      },
    );
  }

  /**
   * Get member role history
   */
  async getMemberRoleHistory(memberId: bigint) {
    const member = await this.getMemberById(memberId);
    if (!member) throw new Error("Member not found");

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: {
          entity_type: "org_member",
          entity_id: member.id,
          event_type: "role_change",
        },
        orderBy: {
          created_at: "desc",
        },
        select: {
          created_at: true,
          actor_id: true,
          change_summary: true,
        },
      },
    );
  }

  /**
   * Get member permission change history
   */
  async getMemberPermissionHistory(memberId: bigint) {
    const member = await this.getMemberById(memberId);
    if (!member) throw new Error("Member not found");

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: {
          entity_type: "org_member",
          entity_id: member.id,
          event_type: "permission_change",
        },
        orderBy: {
          created_at: "desc",
        },
      },
    );
  }

  /**
   * Get members with conflicting permissions
   */
  async getMembersWithConflictingPermissions(organizationId: string) {
    const members = await this.getMembers({ organizationId });

    return members.filter((member) => {
      const rolePermissions =
        OrgMemberQueries.ROLE_PERMISSIONS[member.role as MemberRole];
      const currentPermissions = member.permissions as OrgPermission[];

      // Check for missing role-based permissions
      const hasMissingRolePermissions = rolePermissions.some(
        (p) => !currentPermissions.includes(p),
      );

      // Check for permissions that shouldn't be there based on role
      const hasExtraPermissions = currentPermissions.some(
        (p) => !rolePermissions.includes(p as OrgPermission),
      );

      return hasMissingRolePermissions || hasExtraPermissions;
    });
  }

  /**
   * Get members approaching inactivity threshold
   */
  async getMembersApproachingInactivity(
    organizationId: string,
    thresholdDays: number,
    warningDays: number,
  ) {
    const warningDate = new Date();
    warningDate.setDate(warningDate.getDate() - (thresholdDays - warningDays));

    const thresholdDate = new Date();
    thresholdDate.setDate(thresholdDate.getDate() - thresholdDays);

    return await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.org_members,
      "findMany",
      {
        where: {
          organization_id: organizationId,
          status: "active",
          last_access: {
            lt: warningDate,
            gt: thresholdDate,
          },
        },
      },
    );
  }

  /**
   * Get member access patterns
   */
  async getMemberAccessPatterns(memberId: bigint, days: number = 30) {
    const member = await this.getMemberById(memberId);
    if (!member) throw new Error("Member not found");

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const accessLogs = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: {
          actor_id: member.user_id,
          event_type: "access",
          created_at: {
            gte: startDate,
          },
        },
      },
    );

    // Analyze access patterns
    const patterns = {
      totalAccesses: accessLogs.length,
      byHour: new Array(24).fill(0),
      byDay: new Array(7).fill(0),
      commonIPs: new Map<string, number>(),
    };

    accessLogs.forEach((log) => {
      const date = new Date(log.created_at);
      patterns.byHour[date.getHours()]++;
      patterns.byDay[date.getDay()]++;

      if (log.ip_address) {
        patterns.commonIPs.set(
          log.ip_address,
          (patterns.commonIPs.get(log.ip_address) || 0) + 1,
        );
      }
    });

    return {
      ...patterns,
      commonIPs: Array.from(patterns.commonIPs.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5),
    };
  }

  /**
   * Check for suspicious member activity
   */
  async checkSuspiciousActivity(
    memberId: bigint,
    options?: {
      timeWindowMinutes?: number;
      maxLoginAttempts?: number;
      maxPermissionChanges?: number;
      unusualIpThreshold?: number;
    },
  ) {
    const {
      timeWindowMinutes = 60,
      maxLoginAttempts = 5,
      maxPermissionChanges = 3,
      unusualIpThreshold = 3,
    } = options || {};

    const member = await this.getMemberById(memberId);
    if (!member) throw new Error("Member not found");

    const timeWindow = new Date();
    timeWindow.setMinutes(timeWindow.getMinutes() - timeWindowMinutes);

    // Get recent activity
    const recentActivity = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: {
          actor_id: member.user_id,
          created_at: {
            gte: timeWindow,
          },
        },
      },
    );

    // Analyze activity
    const loginAttempts = recentActivity.filter(
      (log) => log.event_type === "login",
    ).length;

    const permissionChanges = recentActivity.filter(
      (log) => log.event_type === "permission_change",
    ).length;

    const uniqueIPs = new Set(
      recentActivity.map((log) => log.ip_address).filter(Boolean),
    ).size;

    const suspiciousActivity = {
      memberId,
      timeWindow: `${timeWindowMinutes} minutes`,
      suspicious: false,
      reasons: [] as string[],
    };

    if (loginAttempts > maxLoginAttempts) {
      suspiciousActivity.suspicious = true;
      suspiciousActivity.reasons.push(
        `Excessive login attempts: ${loginAttempts}`,
      );
    }

    if (permissionChanges > maxPermissionChanges) {
      suspiciousActivity.suspicious = true;
      suspiciousActivity.reasons.push(
        `Unusual permission changes: ${permissionChanges}`,
      );
    }

    if (uniqueIPs > unusualIpThreshold) {
      suspiciousActivity.suspicious = true;
      suspiciousActivity.reasons.push(`Multiple IP addresses: ${uniqueIPs}`);
    }

    return suspiciousActivity;
  }

  /**
   * Get member role recommendations
   */
  async getMemberRoleRecommendations(memberId: bigint) {
    const member = await this.getMemberById(memberId);
    if (!member) throw new Error("Member not found");

    // Get member's recent activity
    const recentActivity = await this.middleware.enforceQueryRules(
      this.prisma,
      Prisma.ModelName.audit_logs,
      "findMany",
      {
        where: {
          actor_id: member.user_id,
          created_at: {
            gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
          },
        },
      },
    );

    // Analyze activity patterns
    const usedPermissions = new Set<string>();
    recentActivity.forEach((log) => {
      if (
        typeof log.metadata === "object" &&
        log.metadata &&
        "used_permissions" in log.metadata
      ) {
        const permissions = log.metadata.used_permissions;
        if (Array.isArray(permissions)) {
          permissions.forEach((p) => {
            if (typeof p === "string") {
              usedPermissions.add(p);
            }
          });
        }
      }
    });

    // Compare with role-based permissions
    const currentRole = member.role as MemberRole;
    const currentRolePermissions = new Set(
      OrgMemberQueries.ROLE_PERMISSIONS[currentRole],
    );

    // Calculate permission usage
    const unusedPermissions = [...currentRolePermissions].filter(
      (p) => !usedPermissions.has(p),
    );

    const recommendedRole = this.getRecommendedRole(usedPermissions);

    return {
      memberId,
      currentRole,
      recommendedRole,
      unusedPermissions,
      usedPermissions: [...usedPermissions],
      analysis: {
        permissionUtilization:
          (usedPermissions.size / currentRolePermissions.size) * 100,
        hasUnusedPermissions: unusedPermissions.length > 0,
        roleMismatch: currentRole !== recommendedRole,
      },
    };
  }

  /**
   * Get recommended role based on permissions
   */
  private getRecommendedRole(usedPermissions: Set<string>): MemberRole {
    const rolePermissionSets = {
      owner: new Set(OrgMemberQueries.ROLE_PERMISSIONS.owner),
      admin: new Set(OrgMemberQueries.ROLE_PERMISSIONS.admin),
      member: new Set(OrgMemberQueries.ROLE_PERMISSIONS.member),
    };

    // Check which role's permission set best matches the used permissions
    if (this.isSubset(usedPermissions, rolePermissionSets.member)) {
      return "member";
    } else if (this.isSubset(usedPermissions, rolePermissionSets.admin)) {
      return "admin";
    } else {
      return "owner";
    }
  }

  /**
   * Check if set A is a subset of set B
   */
  private isSubset(setA: Set<string>, setB: Set<string>): boolean {
    for (const elem of setA) {
      if (!setB.has(elem)) return false;
    }
    return true;
  }
}
