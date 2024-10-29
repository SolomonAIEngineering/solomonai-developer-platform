import { PrismaClient, Prisma } from "./generated/postgresql";
import { QueryOptions, RequestContext } from "./types";

/**
 * User roles within the system
 */
export enum UserRole {
  ADMIN = "admin",
  USER_MANAGER = "user_manager",
  TEAM_MANAGER = "team_manager",
}

/**
 * Role-based permissions configuration
 */
const ROLE_PERMISSIONS = {
  [UserRole.ADMIN]: [
    'manage_users',
    'manage_teams',
    'manage_settings',
    'manage_api_keys',
    'view_audit_logs',
    'manage_storage',
    'manage_organizations',
  ],
  [UserRole.USER_MANAGER]: [
    'manage_users',
    'view_audit_logs',
    'manage_settings',
  ],
  [UserRole.TEAM_MANAGER]: [
    'manage_teams',
    'view_team_audit_logs',
    'manage_team_settings',
  ]
};
/**
 * Retrieve all model names from the Prisma Client.
 * This will be used to ensure type safety and to reference models dynamically.
 */
type PrismaModels = Prisma.ModelName;

/**
 * Retrieve all valid operations for a specific model from the Prisma Client.
 * This helps in defining what operations are available for each model.
 */
type ModelOperations<T extends PrismaModels> =
  keyof PrismaClient[Uncapitalize<T>];

/**
 * Define the list of valid operations that can be performed on the models.
 * These operations correspond to the common CRUD operations in Prisma.
 */
type ValidOperations =
  | "findMany"
  | "findUnique"
  | "create"
  | "update"
  | "delete"
  | "count"
  | "updateMany"
  | "deleteMany"
  | "findFirst"
  | "createMany"
  | "groupBy";

/**
 * Utility type to extract the argument types for a given model and operation.
 * It uses TypeScript's `Parameters` utility to infer the parameter types.
 */
type OperationArgs<
  TModel extends PrismaModels,
  TOperation extends ValidOperations,
> = Parameters<PrismaClient[Uncapitalize<TModel>][TOperation]>[0];

/**
 * Utility type to extract the return type for a given model and operation.
 * It uses TypeScript's `ReturnType` utility to infer the return types.
 */
type OperationResult<
  TModel extends PrismaModels,
  TOperation extends ValidOperations,
> = ReturnType<PrismaClient[Uncapitalize<TModel>][TOperation]>;

/**
 * Represents the enhancement to be applied to a query, including the model and arguments.
 * This is used within the middleware to modify queries before they are executed.
 */
interface QueryEnhancement<TModel extends PrismaModels> {
  model: TModel;
  args: any; // In actual usage, this would be properly typed per operation.
}

/**
 * Defines the access policy for a particular model.
 * It specifies which roles have access to which operations on the model,
 * and includes optional conditions and filters for more granular control.
 */
interface AccessPolicy<TModel extends PrismaModels> {
  model: TModel;
  operations: ValidOperations[];
  roles: string[];
  conditions?: (context: RequestContext) => boolean;
  filters?: (context: RequestContext) => Record<string, any>;
}

/**
 * The `QueryMiddleware` class handles multi-tenant isolation, access control,
 * and query enhancement for database operations.
 * It ensures that all database interactions comply with the defined access policies
 * and are properly scoped to the tenant and organization.
 */
export class QueryMiddleware {
  private prisma: PrismaClient;
  /**
   * A list of protected models that require special access controls.
   * Access to these models is typically restricted to admin roles.
   */
  private static readonly PROTECTED_MODELS: PrismaModels[] = [
    Prisma.ModelName.organizations,
    Prisma.ModelName.tenants,
    Prisma.ModelName.org_members,
    Prisma.ModelName.org_api_keys,
    Prisma.ModelName.settings,
  ];

  /**
   * A list of access policies defining who can perform which operations on which models.
   * Each policy includes the model, allowed operations, roles, and optional conditions and filters.
   */
  private static readonly ACCESS_POLICIES: AccessPolicy<PrismaModels>[] = [
    {
      model: Prisma.ModelName.user_accounts,
      operations: ["findMany", "findUnique", "create", "update", "delete"],
      roles: [UserRole.ADMIN, UserRole.USER_MANAGER],
      conditions: (context) =>
        context.permissions?.includes("manage_users") ?? false,
      filters: (context) => ({
        organization_id: context.organizationId,
        tenant_id: context.tenantId,
      }),
    },
    {
      model: Prisma.ModelName.business_accounts,
      operations: ["findMany", "findUnique", "create", "update", "delete"],
      roles: [UserRole.ADMIN, UserRole.USER_MANAGER],
      conditions: (context) =>
        context.permissions?.includes("manage_users") ?? false,
      filters: (context) => ({
        organization_id: context.organizationId,
        tenant_id: context.tenantId,
      }),
    },
    {
      model: Prisma.ModelName.teams,
      operations: ["findMany", "findUnique", "create", "update", "delete"],
      roles: [UserRole.ADMIN, UserRole.TEAM_MANAGER],
      filters: (context) => ({
        organization_id: context.organizationId,
        tenant_id: context.tenantId,
      }),
    },
    {
      model: Prisma.ModelName.team_members,
      operations: ["findMany", "findUnique", "create", "update", "delete"],
      roles: [UserRole.ADMIN, UserRole.USER_MANAGER, UserRole.TEAM_MANAGER],
      filters: (context) => ({
        user_account: {
          organization_id: context.organizationId,
          tenant_id: context.tenantId,
        },
      }),
    },
    {
      model: Prisma.ModelName.addresses,
      operations: ["findMany", "findUnique", "create", "update", "delete"],
      roles: [UserRole.ADMIN, UserRole.USER_MANAGER, UserRole.TEAM_MANAGER],
      filters: (context) => ({
        user_account: {
          organization_id: context.organizationId,
          tenant_id: context.tenantId,
        },
      }),
    },
    {
      model: Prisma.ModelName.audit_logs,
      operations: ["findMany", "findUnique", "create", "update", "delete"],
      roles: [UserRole.ADMIN, UserRole.USER_MANAGER, UserRole.TEAM_MANAGER],
      filters: (context) => ({
        user_account: {
          organization_id: context.organizationId,
          tenant_id: context.tenantId,
        },
      }),
    },
    {
      model: Prisma.ModelName.settings,
      operations: ["findMany", "findUnique", "create", "update", "delete"],
      roles: [UserRole.ADMIN, UserRole.USER_MANAGER, UserRole.TEAM_MANAGER],
      filters: (context) => ({
        user_account: {
          organization_id: context.organizationId,
          tenant_id: context.tenantId,
        },
      }),
    },
  ];

  /**
   * Initializes a new instance of the `QueryMiddleware` class.
   * @param context - The request context containing user and organization information.
   */
  constructor(
    private context: RequestContext,
    prisma: PrismaClient,
  ) {
    this.prisma = prisma;
  }

  /**
   * Enforces query rules including tenant isolation and access control.
   * This method should be called before executing any database operation.
   *
   * @param prisma - The Prisma client instance.
   * @param model - The model on which the operation is to be performed.
   * @param operation - The operation to be performed (e.g., findMany, create).
   * @param args - The arguments for the operation.
   * @param options - Additional query options to modify the behavior.
   * @returns The result of the database operation.
   *
   * @example
   * ```typescript
   * // Create a new instance of PrismaClient.
   * const prisma = new PrismaClient();
   *
   * // Instantiate the middleware with the necessary request context.
   * const middleware = new QueryMiddleware({
   *   organizationId: 'org123',
   *   tenantId: 'tenant456',
   *   userId: 'user789',
   *   roles: ['admin', 'user_manager'],
   *   permissions: ['manage_users', 'view_reports'],
   * });
   *
   * // Perform a type-safe query with inferred return type.
   * (async () => {
   *   try {
   *     const users = await middleware.enforceQueryRules(
   *       prisma,
   *       Prisma.ModelName.user_accounts,
   *       'findMany',
   *       {
   *         where: { is_active: true },
   *         include: { team_memberships: true },
   *       },
   *       {
   *         includeInactive: false,
   *         includeRelations: ['profiles', 'roles'],
   *         pagination: { take: 10, skip: 0 },
   *         useCache: true,
   *         cacheTTL: 300,
   *       }
   *     );
   *
   *     console.log('Active users:', users);
   *   } catch (error) {
   *     console.error('Error fetching users:', error);
   *   }
   * })();
   * ```
   */
  public async enforceQueryRules<
    TModel extends PrismaModels,
    TOperation extends ValidOperations,
    TResult = OperationResult<TModel, TOperation>,
  >(
    prisma: PrismaClient,
    model: TModel,
    operation: TOperation,
    args: OperationArgs<TModel, TOperation>,
    options?: QueryOptions,
  ): Promise<TResult> {
    // Validate that the user has access to perform the operation on the model.
    this.validateAccess(model, operation);

    // Enhance the query arguments with tenant isolation and other enhancements.
    const enhancedArgs = this.enhanceQuery(model, operation, args, options);

    // Execute the query with proper error handling and timeout.
    return await this.executeQuery<TModel, TOperation, TResult>(
      prisma,
      model,
      operation,
      enhancedArgs,
      options,
    );
  }

  /**
   * Applies tenant isolation to the query parameters.
   * This ensures that users can only access data belonging to their tenant and organization.
   *
   * @param params - The query enhancement parameters including the model and arguments.
   * @returns The enhanced query parameters with tenant isolation applied.
   *
   * @example
   * ```typescript
   * // Example of integrating the middleware into Prisma's $use method.
   * prisma.$use(async (params, next) => {
   *   // Create an instance of the middleware with the request context.
   *   const middleware = new QueryMiddleware({
   *     organizationId: 'org123',
   *     tenantId: 'tenant456',
   *     userId: 'user789',
   *     roles: ['admin', 'user_manager'],
   *     permissions: ['manage_users', 'view_reports'],
   *   });
   *
   *   // If the operation involves a model and an action, apply tenant isolation.
   *   if (params.model && params.action) {
   *     const enhanced = middleware.applyTenantIsolation({
   *       model: params.model as PrismaModels,
   *       args: params.args,
   *     });
   *
   *     // Proceed with the next middleware or the database operation using the enhanced arguments.
   *     return next({ ...params, args: enhanced.args });
   *   }
   *
   *   // For operations not involving a model, proceed without modification.
   *   return next(params);
   * });
   * ```
   */
  public applyTenantIsolation<TModel extends PrismaModels>(
    params: QueryEnhancement<TModel>,
  ): QueryEnhancement<TModel> {
    const { model, args } = params;

    // Skip tenant isolation for system-level models.
    if (this.isSystemModel(model)) {
      return params;
    }

    // Retrieve the access policy for the model, if any.
    const policy = QueryMiddleware.ACCESS_POLICIES.find(
      (p) => p.model === model,
    );

    // Apply filters from the access policy or use default filters.
    const filters = policy?.filters?.(this.context) || this.getDefaultFilters();

    // Modify the 'where' clause to include tenant isolation filters.
    if (args.where) {
      args.where = {
        AND: [args.where, filters],
      };
    } else {
      args.where = filters;
    }

    // For create operations, inject tenant context into the data.
    if (args.data) {
      args.data = {
        ...args.data,
        ...this.getDefaultFilters(),
      };
    }

    return { model, args };
  }

  /**
   * Retrieves the current request context.
   * @returns A copy of the request context.
   */
  public getContext(): RequestContext {
    return { ...this.context };
  }

  /**
   * Validates whether the user has access to perform the operation on the model.
   * Throws an error if access is denied.
   * @param model - The model on which the operation is to be performed.
   * @param operation - The operation to be performed.
   */
  private validateAccess<TModel extends PrismaModels>(
    model: TModel,
    operation: ValidOperations,
  ): void {
    // Check if the model is a system model requiring admin access.
    if (this.isSystemModel(model) && !this.context.roles.includes("admin")) {
      throw new Error(`Access denied to system model: ${model}`);
    }

    // Retrieve the access policy for the model.
    const policy = QueryMiddleware.ACCESS_POLICIES.find(
      (p) => p.model === model,
    );

    // If no policy is defined, deny access.
    if (!policy) {
      throw new Error(`No access policy defined for model: ${model}`);
    }

    // Check if the operation is allowed under the access policy.
    if (!policy.operations.includes(operation)) {
      throw new Error(`Operation ${operation} not allowed on model: ${model}`);
    }

    // Check if the user's roles include any of the roles specified in the access policy.
    const hasRole = this.context.roles.some((role) =>
      policy.roles.includes(role),
    );
    if (!hasRole) {
      throw new Error(
        `Insufficient role permissions for: ${model}.${operation}`,
      );
    }

    // Evaluate any additional conditions specified in the access policy.
    if (policy.conditions && !policy.conditions(this.context)) {
      throw new Error(`Access conditions not met for: ${model}.${operation}`);
    }
  }

  /**
   * Enhances the query arguments with additional data, such as tenant IDs and audit fields.
   * It also applies query options like including inactive records, relations, and pagination.
   * @param model - The model on which the operation is to be performed.
   * @param operation - The operation to be performed.
   * @param args - The original arguments for the operation.
   * @param options - Additional query options to modify the behavior.
   * @returns The enhanced arguments with additional fields.
   */
  private enhanceQuery<TModel extends PrismaModels>(
    model: TModel,
    operation: ValidOperations,
    args: any,
    options?: QueryOptions,
  ): any {
    const enhancedArgs = { ...args };

    // Apply tenant isolation to the arguments.
    const { args: isolatedArgs } = this.applyTenantIsolation({
      model,
      args: enhancedArgs,
    });

    // Apply query options.
    if (options) {
      // Include inactive records if specified.
      if (!options.includeInactive) {
        isolatedArgs.where = {
          ...isolatedArgs.where,
          is_active: true,
        };
      }

      // Include specified relations.
      if (options.includeRelations && options.includeRelations.length > 0) {
        isolatedArgs.include = options.includeRelations.reduce(
          (acc: any, relation: string) => {
            acc[relation] = true;
            return acc;
          },
          isolatedArgs.include || {},
        );
      }

      // Include memberships.
      if (options.includeMemberships) {
        isolatedArgs.include = {
          ...isolatedArgs.include,
          memberships: true,
        };
      }

      // Apply pagination options.
      if (options.pagination) {
        if (options.pagination.take !== undefined) {
          isolatedArgs.take = options.pagination.take;
        }
        if (options.pagination.skip !== undefined) {
          isolatedArgs.skip = options.pagination.skip;
        }
        if (options.pagination.cursor !== undefined) {
          isolatedArgs.cursor = options.pagination.cursor;
        }
      }
    }

    // Add operation-specific enhancements.
    switch (operation) {
      case "create":
        // For create operations, add the 'created_by' field.
        isolatedArgs.data = {
          ...isolatedArgs.data,
          created_by: this.context.tenantId,
        };
        break;

      case "update":
        // For update operations, add 'updated_by' and 'updated_at' fields.
        isolatedArgs.data = {
          ...isolatedArgs.data,
          updated_by: this.context.tenantId,
          updated_at: new Date(),
        };
        break;

      case "delete":
        // For delete operations on soft-delete models, convert to an update operation.
        if (this.hasSoftDelete(model)) {
          return {
            where: isolatedArgs.where,
            data: {
              is_active: false,
              deleted_by: this.context.tenantId,
              deleted_at: new Date(),
            },
          };
        }
        break;
    }

    return isolatedArgs;
  }

  /**
   * Executes the database query with proper error handling and optional timeout.
   * @param prisma - The Prisma client instance.
   * @param model - The model on which the operation is to be performed.
   * @param operation - The operation to be performed.
   * @param args - The arguments for the operation.
   * @param options - Additional query options, such as timeout.
   * @returns The result of the database operation.
   */
  private async executeQuery<
    TModel extends PrismaModels,
    TOperation extends ValidOperations,
    TResult,
  >(
    prisma: PrismaClient,
    model: TModel,
    operation: TOperation,
    args: OperationArgs<TModel, TOperation>,
    options?: QueryOptions,
  ): Promise<TResult> {
    try {
      // Retrieve the model client from the Prisma client.
      const modelClient = prisma[model.toLowerCase() as keyof typeof prisma];

      // Ensure the operation exists on the model client.
      if (
        !modelClient ||
        typeof (modelClient as any)[operation] !== "function"
      ) {
        throw new Error(`Invalid operation ${operation} for model ${model}`);
      }

      // Execute the operation with the provided arguments and optional timeout.
      const execute = async () => {
        return (await (modelClient as any)[operation](args)) as TResult;
      };

      if (options?.timeout) {
        return await this.withTimeout(execute, options.timeout);
      } else {
        return await execute();
      }
    } catch (error) {
      // Handle known Prisma errors with custom messages.
      if (this.isPrismaError(error)) {
        throw this.handlePrismaError(error, model, operation);
      }

      // Re-throw any other errors.
      throw error;
    }
  }

  /**
   * Executes a promise with a timeout.
   * @param promiseFn - The promise-returning function to execute.
   * @param timeoutMs - The timeout in milliseconds.
   * @returns The result of the promise if it resolves before the timeout.
   */
  private async withTimeout<T>(
    promiseFn: () => Promise<T>,
    timeoutMs: number,
  ): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error("Operation timed out"));
      }, timeoutMs);

      promiseFn()
        .then((result) => {
          clearTimeout(timeoutId);
          resolve(result);
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          reject(error);
        });
    });
  }

  /**
   * Checks if a model is a system model that requires special access.
   * @param model - The model to check.
   * @returns True if the model is a system model; otherwise, false.
   */
  private isSystemModel(model: PrismaModels): boolean {
    return QueryMiddleware.PROTECTED_MODELS.includes(model);
  }

  /**
   * Retrieves the default filters for tenant isolation.
   * These filters are applied to queries to ensure data is scoped to the tenant and organization.
   * @returns An object containing the default filters.
   */
  private getDefaultFilters(): Record<string, any> {
    const filters: Record<string, any> = {
      organization_id: this.context.organizationId,
    };

    if (this.context.tenantId) {
      filters.tenant_id = this.context.tenantId;
    }

    return filters;
  }

  /**
   * Determines if a model supports soft deletion.
   * @param model - The model to check.
   * @returns True if the model supports soft deletion; otherwise, false.
   */
  private hasSoftDelete(model: PrismaModels): boolean {
    const softDeleteModels: PrismaModels[] = [
      Prisma.ModelName.user_accounts,
      Prisma.ModelName.business_accounts,
      Prisma.ModelName.teams,
      Prisma.ModelName.organizations,
    ];
    return softDeleteModels.includes(model);
  }

  /**
   * Handles known Prisma errors and returns custom error messages.
   * @param error - The Prisma error object.
   * @param model - The model on which the operation was attempted.
   * @param operation - The operation that was attempted.
   * @returns An Error object with a custom message.
   */
  private handlePrismaError(
    error: Prisma.PrismaClientKnownRequestError,
    model: PrismaModels,
    operation: ValidOperations,
  ): Error {
    switch (error.code) {
      case "P2002":
        // Unique constraint violation.
        return new Error(`Unique constraint violation on ${model}`);
      case "P2003":
        // Foreign key constraint violation.
        return new Error(`Foreign key constraint violation on ${model}`);
      case "P2025":
        // Record not found.
        return new Error(`Record not found in ${model}`);
      default:
        // Generic database operation failure.
        return new Error(`Database operation failed: ${operation} on ${model}`);
    }
  }

  /**
   * Checks if an error is a known Prisma client error.
   * @param error - The error to check.
   * @returns True if the error is a Prisma client known request error; otherwise, false.
   */
  private isPrismaError(
    error: unknown,
  ): error is Prisma.PrismaClientKnownRequestError {
    return error instanceof Prisma.PrismaClientKnownRequestError;
  }
}

/**
 * Extends the `RequestContext` interface to include additional optional properties.
 * This allows for more flexibility in passing context information throughout the application.
 */
export interface ExtendedRequestContext extends RequestContext {
  features?: string[];
  metadata?: Record<string, any>;
  subscriptionTier?: string;
}

/**
 * Factory class for creating instances of `QueryMiddleware`.
 * It includes validation of the request context to ensure all required fields are present.
 */
export class QueryMiddlewareFactory {
  /**
   * Creates a new instance of `QueryMiddleware` after validating the context.
   * @param context - The request context.
   * @returns A new `QueryMiddleware` instance.
   */
  static create(
    context: RequestContext | ExtendedRequestContext,
    prisma: PrismaClient,
  ): QueryMiddleware {
    this.validateContext(context);
    return new QueryMiddleware(context, prisma);
  }

  /**
   * Validates the request context to ensure all required fields are present.
   * Throws an error if any required fields are missing.
   * @param context - The request context to validate.
   */
  private static validateContext(context: RequestContext): void {
    if (!context.organizationId) {
      throw new Error("Organization ID is required");
    }

    if (!context.tenantId) {
      throw new Error("User ID is required");
    }

    if (!context.roles || context.roles.length === 0) {
      throw new Error("At least one role is required");
    }
  }
}

/**
 * Type representing a function that enhances a query.
 * It takes in query enhancement parameters and the request context,
 * and returns enhanced query parameters.
 */
export type QueryEnhancer<TModel extends PrismaModels> = (
  params: QueryEnhancement<TModel>,
  context: RequestContext,
) => QueryEnhancement<TModel>;

/**
 * Type representing a function that validates access for a given model and operation.
 * It returns a boolean indicating whether access is allowed.
 */
export type AccessValidator = (
  model: PrismaModels,
  operation: ValidOperations,
  context: RequestContext,
) => boolean;

/**
 * Usage Examples:
 *
 * ### Performing a Type-Safe Query with QueryOptions
 *
 * ```typescript
 * // Create a new instance of PrismaClient.
 * const prisma = new PrismaClient();
 *
 * // Instantiate the middleware with the necessary request context.
 * const middleware = new QueryMiddleware({
 *   organizationId: 'org123',
 *   tenantId: 'tenant456',
 *   userId: 'user789',
 *   roles: ['admin', 'user_manager'],
 *   permissions: ['manage_users', 'view_reports'],
 * });
 *
 * // Perform a type-safe query with additional query options.
 * (async () => {
 *   try {
 *     const users = await middleware.enforceQueryRules(
 *       prisma,
 *       Prisma.ModelName.user_accounts,
 *       'findMany',
 *       {
 *         where: { },
 *       },
 *       {
 *         includeInactive: false,
 *         includeRelations: ['profiles', 'roles'],
 *         pagination: { take: 10, skip: 0 },
 *         useCache: true,
 *         cacheTTL: 300,
 *         timeout: 5000,
 *       }
 *     );
 *
 *     console.log('Active users with profiles and roles:', users);
 *   } catch (error) {
 *     console.error('Error fetching users:', error);
 *   }
 * })();
 * ```
 *
 * ### Performing a Type-Safe Update
 *
 * ```typescript
 * // Perform a type-safe update operation with proper argument typing.
 * (async () => {
 *   try {
 *     const updatedUser = await middleware.enforceQueryRules(
 *       prisma,
 *       Prisma.ModelName.user_accounts,
 *       'update',
 *       {
 *         where: { id: 123 },
 *         data: { email: 'new.email@example.com' },
 *       },
 *       {
 *         timeout: 3000,
 *       }
 *     );
 *
 *     console.log('Updated user:', updatedUser);
 *   } catch (error) {
 *     console.error('Error updating user:', error);
 *   }
 * })();
 * ```
 *
 * ### Integrating Middleware with Prisma
 *
 * ```typescript
 * // Example of integrating the middleware into Prisma's $use method.
 * prisma.$use(async (params, next) => {
 *   // Create an instance of the middleware with the request context.
 *   const middleware = new QueryMiddleware({
 *     organizationId: 'org123',
 *     tenantId: 'tenant456',
 *     userId: 'user789',
 *     roles: ['admin', 'user_manager'],
 *     permissions: ['manage_users', 'view_reports'],
 *   });
 *
 *   // If the operation involves a model and an action, apply tenant isolation.
 *   if (params.model && params.action) {
 *     const enhanced = middleware.applyTenantIsolation({
 *       model: params.model as PrismaModels,
 *       args: params.args,
 *     });
 *
 *     // Proceed with the next middleware or the database operation using the enhanced arguments.
 *     return next({ ...params, args: enhanced.args });
 *   }
 *
 *   // For operations not involving a model, proceed without modification.
 *   return next(params);
 * });
 * ```
 *
 * These examples demonstrate how to use the `QueryMiddleware` class
 * in a type-safe manner with proper context and options, including the new `QueryOptions`.
 */
