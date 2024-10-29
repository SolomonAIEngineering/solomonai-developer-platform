import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client/extension";
import { env } from "cloudflare:test";
import { Pool } from "pg";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { QueryMiddleware } from "./client";
import { Prisma } from "./generated/postgresql";
import { RequestContext } from "./types";

describe("QueryMiddleware", () => {
  let prisma: PrismaClient;
  let middleware: QueryMiddleware;
  const context: RequestContext = {
    organizationId: "org123",
    tenantId: "tenant456",
    userId: "user789",
    roles: ["admin"],
    permissions: ["manage_users"],
  };

  beforeEach(() => {
    const pool = new Pool({
      connectionString: env.HYPERDRIVE.connectionString,
    });
    const adapter = new PrismaPg(pool);
    const prisma = new PrismaClient({ adapter });
    middleware = new QueryMiddleware(context, prisma);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("validateAccess", () => {
    it("allows access for valid roles and permissions", () => {
      expect(() => {
        middleware["validateAccess"](
          Prisma.ModelName.user_accounts,
          "findMany",
        );
      }).not.toThrow();
    });

    it("denies access if role is insufficient", () => {
      const invalidContext = { ...context, roles: ["viewer"] };
      const invalidMiddleware = new QueryMiddleware(invalidContext, prisma);

      expect(() => {
        invalidMiddleware["validateAccess"](
          Prisma.ModelName.user_accounts,
          "create",
        );
      }).toThrowError("Insufficient role permissions");
    });

    it("denies access for unlisted operations", () => {
      expect(() => {
        middleware["validateAccess"](Prisma.ModelName.user_accounts, "delete");
      }).toThrowError("Operation delete not allowed on model");
    });
  });

  describe("applyTenantIsolation", () => {
    it("applies tenant and organization filters to the query", () => {
      const queryEnhancement = {
        model: Prisma.ModelName.user_accounts,
        args: { where: { is_active: true } },
      };
      const result = middleware.applyTenantIsolation(queryEnhancement);

      expect(result.args.where).toEqual({
        AND: [
          { is_active: true },
          {
            organization_id: context.organizationId,
            tenant_id: context.tenantId,
          },
        ],
      });
    });

    it("does not apply filters to system models", () => {
      const queryEnhancement = {
        model: Prisma.ModelName.organizations,
        args: { where: { is_active: true } },
      };
      const result = middleware.applyTenantIsolation(queryEnhancement);

      expect(result.args.where).toEqual({ is_active: true });
    });
  });

  describe("enforceQueryRules", () => {
    it("enhances query with tenant isolation and executes it", async () => {
      const spy = vi
        .spyOn(middleware as any, "executeQuery")
        .mockResolvedValueOnce([{ id: 1 }]);

      const result = await middleware.enforceQueryRules(
        prisma,
        Prisma.ModelName.user_accounts,
        "findMany",
        { where: { is_active: true } },
      );

      expect(spy).toHaveBeenCalledWith(
        prisma,
        Prisma.ModelName.user_accounts,
        "findMany",
        {
          where: {
            AND: [
              { is_active: true },
              {
                organization_id: context.organizationId,
                tenant_id: context.tenantId,
              },
            ],
          },
        },
      );
      expect(result).toEqual([{ id: 1 }]);
    });

    it("throws an error if access is denied", async () => {
      const invalidContext = { ...context, roles: ["viewer"] };
      const invalidMiddleware = new QueryMiddleware(invalidContext, prisma);

      await expect(
        invalidMiddleware.enforceQueryRules(
          prisma,
          Prisma.ModelName.user_accounts,
          "create",
          { data: { email: "test@example.com" } },
        ),
      ).rejects.toThrowError("Insufficient role permissions");
    });
  });

  describe("executeQuery", () => {
    it("executes a valid operation on the model client", async () => {
      const spy = vi
        .spyOn(prisma.user_accounts, "findMany")
        .mockResolvedValueOnce([
          {
            id: 1n,
            email: null,
            created_at: new Date(),
            updated_at: new Date(),
            is_active: false,
            metadata: null,
            storage_quota: null,
            used_storage: null,
            organization_id: null,
            status: null,
            last_access: null,
            tenant_id: null,
            auth0_user_id: null,
            base_directory: null,
            bucket_location: null,
            bucket_name: null,
            region: null,
            firstname: null,
            lastname: null,
          },
        ]);
      const result = await middleware["executeQuery"](
        prisma,
        Prisma.ModelName.user_accounts,
        "findMany",
        {},
      );

      expect(spy).toHaveBeenCalledWith({});
      expect(result).toEqual([{ id: 1n }]);
    });
    it("throws custom error on unique constraint violation", async () => {
      const error = new Prisma.PrismaClientKnownRequestError(
        "Unique constraint failed",
        {
          code: "P2002",
          clientVersion: "5.0.0",
        },
      );
      vi.spyOn(prisma.user_accounts, "create").mockRejectedValueOnce(error);

      await expect(
        middleware["executeQuery"](
          prisma,
          Prisma.ModelName.user_accounts,
          "create",
          { data: { email: "duplicate@example.com" } },
        ),
      ).rejects.toThrowError("Unique constraint violation on user_accounts");
    });
  });
});
