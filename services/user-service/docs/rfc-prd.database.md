# Multi-tenant Query Logic Implementation PRD
**Environment**: Cloudflare Workers
**Database**: PostgreSQL (via Prisma)
**Version**: 1.0.0

## 1. Overview

### 1.1 Purpose
This document outlines the implementation requirements for query logic in our multi-tenant system, specifically designed for a Cloudflare Workers environment. The system will handle data access patterns for organizations, tenants, teams, and users while maintaining strict isolation and security.

### 1.2 Goals
- Implement secure, efficient query patterns for multi-tenant data access
- Ensure complete tenant isolation
- Optimize for Cloudflare Workers' execution environment
- Maintain audit logging for all operations
- Support flexible querying while preventing unauthorized access

## 2. Technical Architecture

### 2.1 Query Middleware Layer

#### Base Query Middleware
```typescript
interface RequestContext {
  organizationId: string;
  tenantId?: string;
  userId: string;
  roles: string[];
}

class QueryMiddleware {
  private context: RequestContext;

  constructor(context: RequestContext) {
    this.context = context;
  }

  async enforceQueryRules<T>(
    prisma: PrismaClient,
    model: string,
    operation: 'findMany' | 'findUnique' | 'create' | 'update' | 'delete',
    args: any
  ): Promise<T> {
    // Add organization and tenant filters
    const enhancedArgs = this.enhanceQueryArgs(model, operation, args);

    // Validate access permissions
    await this.validateAccess(model, operation);

    // Execute query with timeout
    return await this.executeWithTimeout(
      () => (prisma[model] as any)[operation](enhancedArgs),
      5000 // 5 second timeout
    );
  }
}
```

### 2.2 Query Enhancement Rules

#### Organization-Level Filtering
```typescript
private enhanceQueryArgs(model: string, operation: string, args: any): any {
  const baseFilters = {
    organization_id: this.context.organizationId,
    ...(this.context.tenantId && { tenant_id: this.context.tenantId })
  };

  if (operation === 'findMany') {
    return {
      ...args,
      where: {
        AND: [
          baseFilters,
          args.where || {}
        ]
      }
    };
  }

  if (operation === 'create') {
    return {
      ...args,
      data: {
        ...args.data,
        ...baseFilters
      }
    };
  }

  return args;
}
```

## 3. Implementation Requirements

### 3.1 Data Access Patterns

#### User Query Pattern
```typescript
interface UserQueryOptions {
  includeInactive?: boolean;
  includeTeams?: boolean;
  includeAddresses?: boolean;
}

async function queryUsers(
  context: RequestContext,
  options: UserQueryOptions = {}
): Promise<user_accounts[]> {
  const queryMiddleware = new QueryMiddleware(context);

  return await queryMiddleware.enforceQueryRules(
    prisma,
    'user_accounts',
    'findMany',
    {
      where: {
        ...(options.includeInactive ? {} : { is_active: true })
      },
      include: {
        team_memberships: options.includeTeams,
        addresses: options.includeAddresses
      }
    }
  );
}
```

#### Team Query Pattern
```typescript
interface TeamQueryOptions {
  includeMemberships?: boolean;
  type?: string;
}

async function queryTeams(
  context: RequestContext,
  options: TeamQueryOptions = {}
): Promise<teams[]> {
  const queryMiddleware = new QueryMiddleware(context);

  return await queryMiddleware.enforceQueryRules(
    prisma,
    'teams',
    'findMany',
    {
      where: {
        is_active: true,
        ...(options.type && { team_type: options.type })
      },
      include: {
        team_members: options.includeMemberships
      }
    }
  );
}
```

### 3.2 Caching Strategy

#### Worker KV Implementation
```typescript
interface CacheConfig {
  ttl: number;
  namespace: string;
}

class QueryCache {
  private kv: KVNamespace;
  private config: CacheConfig;

  constructor(kv: KVNamespace, config: CacheConfig) {
    this.kv = kv;
    this.config = config;
  }

  async getCachedQuery(key: string): Promise<any> {
    const cached = await this.kv.get(key, 'json');
    if (cached) {
      return cached;
    }
    return null;
  }

  async setCachedQuery(key: string, data: any): Promise<void> {
    await this.kv.put(key, JSON.stringify(data), {
      expirationTtl: this.config.ttl
    });
  }
}
```

### 3.3 Audit Logging

#### Audit Log Implementation
```typescript
interface AuditLogEntry {
  organization_id: string;
  tenant_id?: string;
  actor_id: string;
  event_type: string;
  entity_type: string;
  entity_id: string;
  changes: any;
  metadata: any;
}

class AuditLogger {
  async logOperation(
    context: RequestContext,
    entry: Partial<AuditLogEntry>
  ): Promise<void> {
    const fullEntry: AuditLogEntry = {
      organization_id: context.organizationId,
      tenant_id: context.tenantId,
      actor_id: context.userId,
      ...entry,
      metadata: {
        ...entry.metadata,
        timestamp: new Date().toISOString(),
        ip: context.ip,
        userAgent: context.userAgent
      }
    };

    await prisma.audit_logs.create({
      data: fullEntry
    });
  }
}
```

## 4. Security Requirements

### 4.1 Query Validation Rules
- All queries must include organization_id
- Tenant-specific queries must include tenant_id
- Validate user permissions before executing queries
- Implement query timeout protection
- Sanitize all input parameters

### 4.2 Rate Limiting Implementation
```typescript
interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

class RateLimiter {
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
  }

  async checkRateLimit(
    context: RequestContext
  ): Promise<boolean> {
    const key = `ratelimit:${context.organizationId}:${context.userId}`;
    const count = await incrementCounter(key);

    return count <= this.config.maxRequests;
  }
}
```

## 5. Performance Requirements

### 5.1 Query Optimization Guidelines
- Limit result sets to maximum 100 items by default
- Use cursor-based pagination for large result sets
- Implement selective loading of related data
- Cache frequently accessed data in Worker KV
- Use appropriate indexes for common query patterns

### 5.2 Performance Monitoring
```typescript
interface QueryMetrics {
  operation: string;
  duration: number;
  timestamp: string;
  success: boolean;
}

class QueryMonitor {
  async trackQuery(
    metrics: QueryMetrics
  ): Promise<void> {
    // Log metrics to your monitoring system
    await fetch('https://metrics-api/log', {
      method: 'POST',
      body: JSON.stringify(metrics)
    });
  }
}
```

## 6. Implementation Examples

### 6.1 Common Query Patterns

#### Fetch User with Teams
```typescript
async function getUserWithTeams(
  context: RequestContext,
  userId: string
): Promise<user_accounts> {
  const queryMiddleware = new QueryMiddleware(context);

  return await queryMiddleware.enforceQueryRules(
    prisma,
    'user_accounts',
    'findUnique',
    {
      where: { id: userId },
      include: {
        team_memberships: {
          include: {
            team: true
          }
        },
        addresses: true
      }
    }
  );
}
```

#### Update Team Members
```typescript
async function updateTeamMembers(
  context: RequestContext,
  teamId: string,
  memberUpdates: any[]
): Promise<void> {
  const queryMiddleware = new QueryMiddleware(context);

  await queryMiddleware.enforceQueryRules(
    prisma,
    'teams',
    'update',
    {
      where: { id: teamId },
      data: {
        team_members: {
          updateMany: memberUpdates
        }
      }
    }
  );
}
```

## 7. Testing Requirements

### 7.1 Test Categories
- Unit tests for query middleware
- Integration tests for data access patterns
- Performance tests for common queries
- Security tests for access control
- Load tests for concurrent access

### 7.2 Test Implementation
```typescript
describe('Query Middleware', () => {
  test('enforces organization isolation', async () => {
    const context = {
      organizationId: 'org1',
      userId: 'user1',
      roles: ['admin']
    };

    const middleware = new QueryMiddleware(context);
    const result = await middleware.enforceQueryRules(
      prisma,
      'user_accounts',
      'findMany',
      {}
    );

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          organization_id: 'org1'
        })
      ])
    );
  });
});
```

## 8. Deployment Requirements

### 8.1 Environment Configuration
- Configure Prisma Client for Cloudflare Workers
- Set up Worker KV namespaces
- Configure environment variables
- Set up monitoring and logging

### 8.2 Deployment Checklist
- Validate database indexes
- Test query performance
- Configure rate limits
- Set up audit logging
- Deploy middleware components
- Configure caching rules

## 9. Maintenance and Monitoring

### 9.1 Monitoring Requirements
- Query performance metrics
- Error rates and types
- Cache hit/miss rates
- Rate limit violations
- Audit log volume

### 9.2 Maintenance Tasks
- Regular performance review
- Index optimization
- Cache configuration updates
- Security audit reviews
- Query pattern analysis

## 10. Future Considerations

### 10.1 Planned Enhancements
- GraphQL API layer
- Real-time subscriptions
- Enhanced caching strategies
- Advanced permission systems
- Automated query optimization

### 10.2 Scalability Considerations
- Horizontal scaling patterns
- Cross-region deployment
- Cache warming strategies
- Query load balancing
- Database partitioning