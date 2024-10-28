import { DatabaseClient as PostgresDatabaseClient } from '@/database/client';
import { Context, Next } from 'hono';
import { HTTPException } from 'hono/http-exception';

/**
 * Combined authentication middleware for Hono applications.
 * Handles API key validation, organization verification, and user authentication.
 *
 * @async
 * @function authenticate
 * @param {Context} c - Hono context object containing request and response information
 * @param {Next} next - Hono next function to pass control to the next middleware
 * @throws {HTTPException} 401 - When authentication credentials are missing or invalid
 * @throws {HTTPException} 403 - When API key doesn't match the organization
 *
 * @example
 * ```typescript
 * const app = new Hono();
 *
 * // Apply globally
 * app.use('*', authenticate);
 *
 * // Or apply to specific routes
 * app.use('/api/protected/*', authenticate);
 *
 * // Access authenticated context in routes
 * app.get('/api/profile', (c) => {
 *   const user = c.get('user');
 *   return c.json({ user });
 * });
 * ```
 *
 * @requires DatabaseClient - Must be set in context as c.get('ctx').DatabaseClient
 * @requires Headers - x-api-key, x-org-id, x-user-id must be present in request
 *
 * @sets context.apiKey - Validated API key record
 * @sets context.organization - Validated organization record
 * @sets context.user - Validated user record
 */
export const authenticate = async (c: Context, next: Next) => {
  const dbClient = c.get('ctx').DatabaseClient as PostgresDatabaseClient;

  // 1. API Key Validation
  const apiKey = c.req.header('x-api-key');
  if (!apiKey) {
    throw new HTTPException(401, { message: 'API key required' });
  }

  const keyPrefix = apiKey.split('_')[0];
  const apiKeyRecord = await dbClient.postgres.org_api_keys.findFirst({
    where: {
      key_prefix: keyPrefix,
      is_active: true,
      expires_at: {
        gt: new Date(),
      },
    },
    include: {
      organization: true,
    },
  });

  if (!apiKeyRecord) {
    throw new HTTPException(401, { message: 'Invalid API key' });
  }

  // Update API key last used timestamp
  await dbClient.postgres.org_api_keys.update({
    where: { id: apiKeyRecord.id },
    data: { last_used: new Date() },
  });

  // 2. Organization Validation
  const orgId = c.req.header('x-org-id');
  if (!orgId) {
    throw new HTTPException(401, { message: 'Organization ID required' });
  }

  const organization = await dbClient.postgres.organizations.findFirst({
    where: {
      id: orgId,
      is_active: true,
    },
  });

  if (!organization) {
    throw new HTTPException(401, { message: 'Invalid organization' });
  }

  if (apiKeyRecord.organization_id !== orgId) {
    throw new HTTPException(403, { message: 'API key does not match organization' });
  }

  // 3. User Validation
  const userId = c.req.header('x-user-id');
  if (!userId) {
    throw new HTTPException(401, { message: 'User ID required' });
  }

  const user = await dbClient.postgres.user_accounts.findFirst({
    where: {
      auth0_user_id: userId,
      organization_id: organization.id,
      is_active: true,
    },
  });

  if (!user) {
    throw new HTTPException(401, { message: 'Invalid user' });
  }

  // Update user last access timestamp
  await dbClient.postgres.user_accounts.update({
    where: { id: user.id },
    data: { last_access: new Date() },
  });

  // Create audit log entry
  await dbClient.postgres.audit_logs.create({
    data: {
      organization_id: organization.id,
      actor_type: 'user',
      actor_id: userId,
      event_type: 'api.access',
      entity_type: 'user',
      entity_id: user.id,
      metadata: {
        path: c.req.path,
        method: c.req.method,
      },
      ip_address: c.req.header('x-forwarded-for') || c.req.header('x-real-ip'),
      user_agent: c.req.header('user-agent'),
    },
  });

  // Set context for downstream middleware and handlers
  c.set('apiKey', apiKeyRecord);
  c.set('organization', organization);
  c.set('user', user);

  await next();
};