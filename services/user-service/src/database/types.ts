/**
 * Represents the context of a request, including information about the organization,
 * tenant, user, and their roles and permissions.
 * This context is critical for enforcing access control and multi-tenancy.
 */
export interface RequestContext {
  organizationId?: string; // The ID of the organization the request is scoped to
  tenantId?: string; // The ID of the tenant the request is scoped to
  userId: string; // The ID of the user making the request
  roles: string[]; // The roles of the user making the request
  ip?: string; // The IP address of the user making the request
  apiKey?: string; // The API key used to authenticate the request
  userAgent?: string; // The user agent of the user making the request
  permissions?: string[];
}

/**
 * Options that can be passed to the query method to modify its behavior.
 * - includeInactive: Whether to include inactive records.
 * - includeMemberships: Whether to include membership relations.
 * - includeRelations: An array of relation names to include.
 * - pagination: Pagination options.
 * - useCache: Whether to cache the result of the query.
 * - cacheTTL: Time-to-live for the cache entry in seconds.
 * - bypassRateLimit: Whether to bypass rate limiting for this query.
 * - timeout: Maximum time in milliseconds to wait for the query to complete.
 */
export interface QueryOptions {
  includeInactive?: boolean;
  includeMemberships?: boolean;
  includeRelations?: string[];
  pagination?: {
    take?: number;
    skip?: number;
    cursor?: any;
  };
  useCache?: boolean;
  cacheTTL?: number;
  bypassRateLimit?: boolean;
  timeout?: number;
}
