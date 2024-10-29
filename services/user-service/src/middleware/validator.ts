import { ServiceCache } from "@/cache";
import { Prisma, PrismaClient } from "@/database/generated/postgresql/edge";
import { HeaderKey, RequestHeaders } from "@/header-utils";
import { ServiceContext } from "@/hono/env";
import { Context, Next } from "hono";
import { HTTPException } from "hono/http-exception";

// Configuration
const CONFIG = {
  CACHE: {
    TTL: 6000, // 1 hour
    REVALIDATE_AFTER: 5500, // 55 minutes
    PREFIX: "validation:",
    MAX_RETRIES: 3,
  },
  ERROR_TYPES: {
    TENANT_DISABLED: 'TENANT_DISABLED',
    API_KEY_EXPIRED: 'API_KEY_EXPIRED',
    ORG_INACTIVE: 'ORG_INACTIVE',
    INSUFFICIENT_PERMISSIONS: 'INSUFFICIENT_PERMISSIONS',
  }
} as const;

// Enhanced type definitions
interface CachedAuthContext {
  apiKey: Prisma.org_api_keysGetPayload<{
    include: {
      organization: boolean;
    }
  }>;
  organization: Prisma.organizationsGetPayload<{}>;
  tenant: Prisma.tenantsGetPayload<{}>;
  timestamp: number;
}

interface ValidationError extends Error {
  type: keyof typeof CONFIG.ERROR_TYPES;
  details?: Record<string, any>;
}

/**
 * Enhanced validation middleware with sophisticated checks and optimizations
 */
export class ValidationService {
  private cache: ServiceCache;
  private dbClient: PrismaClient;

  constructor(private serviceContext: ServiceContext) {
    this.cache = serviceContext.cache;
    this.dbClient = serviceContext.prismaRef;
  }

  /**
   * Comprehensive validation of API key and related entities
   */
  private async validateApiKey(apiKey: string, orgId: string): Promise<CachedAuthContext['apiKey']> {
    const apiKeyRecord = await this.dbClient.org_api_keys.findFirst({
      where: {
        key_id: apiKey,
        organization_id: orgId,
        is_active: true,
        expires_at: {
          gt: new Date(),
        },
      },
      include: {
        organization: true
      },
    });

    if (!apiKeyRecord) {
      throw this.createError('API_KEY_EXPIRED', 'Invalid or expired API key');
    }

    if (apiKeyRecord.expires_at && apiKeyRecord.expires_at < new Date()) {
      throw this.createError('API_KEY_EXPIRED', 'API key has expired');
    }

    // Check for key usage limits if defined
    if (apiKeyRecord.max_usage_count > 0 && apiKeyRecord.usage_count >= apiKeyRecord.max_usage_count) {
      throw this.createError('API_KEY_EXPIRED', 'API key usage limit exceeded');
    }

    return {
      ...apiKeyRecord,
      organization: apiKeyRecord.organization,
    };
  }

  /**
   * Validate tenant and its relationship with organization
   */
  private async validateTenant(tenantId: string, orgId: string): Promise<CachedAuthContext['tenant']> {
    const tenant = await this.dbClient.tenants.findFirst({
      where: {
        id: tenantId,
        organization_id: orgId,
      },
    });

    if (!tenant) {
      throw this.createError('TENANT_DISABLED', 'Invalid tenant');
    }

    if (tenant.is_soft_deleted || !tenant.is_active) {
      throw this.createError('TENANT_DISABLED', 'Tenant is disabled');
    }

    return tenant;
  }

  /**
   * Validate organization status and settings
   */
  private async validateOrganization(orgId: string): Promise<CachedAuthContext['organization']> {
    const organization = await this.dbClient.organizations.findFirst({
      where: {
        id: orgId,
        is_active: true,
      },
    });

    if (!organization) {
      throw this.createError('ORG_INACTIVE', 'Invalid organization');
    }

    if (!organization.is_active) {
      throw this.createError('ORG_INACTIVE', 'Organization is inactive');
    }


    return organization;
  }

  /**
   * Create structured validation error
   */
  private createError(type: keyof typeof CONFIG.ERROR_TYPES, message: string, details?: Record<string, any>): ValidationError {
    const error = new Error(message) as ValidationError;
    error.type = type;
    error.details = details;
    return error;
  }


  /**
   * Main validation middleware
   */
  public middleware = async (c: Context, next: Next) => {
    try {
      const headers = c.req.header as unknown as RequestHeaders;
      const apiKey = headers[HeaderKey.API_KEY];
      const tenantId = headers[HeaderKey.TENANT_ID];
      const orgId = headers[HeaderKey.ORG_ID];

      // Validate required headers
      if (!apiKey || !orgId || !tenantId) {
        throw new HTTPException(401, {
          message: "Missing or invalid authentication headers",
        });
      }

      // Try cache first
      const cacheKey = `${CONFIG.CACHE.PREFIX}${apiKey}:${orgId}:${tenantId}`;
      const cachedAuth = await this.cache.get<CachedAuthContext>(cacheKey, {
        expirationTtl: CONFIG.CACHE.TTL,
        revalidateAfter: CONFIG.CACHE.REVALIDATE_AFTER,
        staleWhileRevalidate: true,
      });

      if (cachedAuth) {
        // Quick validation of cached data
        if (this.isContextValid(cachedAuth)) {
          this.setContext(c, cachedAuth);
          await next();
          return;
        }
        // If cached data is invalid, invalidate cache
        await this.cache.delete(cacheKey);
      }

      // Perform full validation
      const [apiKeyRecord, organization, tenant] = await Promise.all([
        this.validateApiKey(apiKey, orgId),
        this.validateOrganization(orgId),
        this.validateTenant(tenantId, orgId),
      ]);

      const authContext: CachedAuthContext = {
        apiKey: apiKeyRecord,
        organization,
        tenant,
        timestamp: Date.now(),
      };

      // Cache the result
      await this.cache.set(cacheKey, authContext, {
        expirationTtl: CONFIG.CACHE.TTL,
        revalidateAfter: CONFIG.CACHE.REVALIDATE_AFTER,
      });

      // Set context and continue
      this.setContext(c, authContext);
      await next();

    } catch (error) {
      if (error instanceof HTTPException) {
        throw error;
      }

      const validationError = error as ValidationError;
      throw new HTTPException(401, {
        message: validationError.message,
      });
    }
  };

  /**
   * Validate cached context is still valid
   */
  private isContextValid(context: CachedAuthContext): boolean {
    const now = new Date();

    // Check API key expiration
    if (context.apiKey.expires_at && context.apiKey.expires_at < now) {
      return false;
    }

    // Check organization status
    if (!context.organization.is_active) {
      return false;
    }

    // Check tenant status and expiration
    if (!context.tenant.is_active || context.tenant) {
      return false;
    }

    return true;
  }

  /**
   * Set context values for downstream middleware
   */
  private setContext(c: Context, authContext: CachedAuthContext) {
    c.set("apiKey", authContext.apiKey);
    c.set("organization", authContext.organization);
    c.set("tenant", authContext.tenant);
  }
}

// Export middleware factory
export const createValidationMiddlewareFactory = (serviceContext: ServiceContext) => {
  const validationService = new ValidationService(serviceContext);
  return validationService.middleware;
};