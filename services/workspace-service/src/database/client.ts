import { Env } from "@/env";
import { ConsoleLogger } from "../metric/logger";
import {
  Prisma as PostgresPrisma,
  PrismaClient as PostgresPrismaClient,
} from "./generated/postgresql";

type PrismaLogEvent = PostgresPrisma.LogEvent;
type PrismaQueryEvent = PostgresPrisma.QueryEvent;

/**
 * Enhanced Database client supporting both PostgreSQL and MongoDB with Prisma Accelerate
 * Optimized for edge environments with connection pooling and caching
 */
export class DatabaseClient {
  private postgresClient: PostgresPrismaClient;
  private logger: ConsoleLogger;

  constructor(env: Env) {
    // Initialize PostgreSQL client
    this.postgresClient = new PostgresPrismaClient({
      datasources: {
        db: {
          url: env.HYPERDRIVE.connectionString,
        },
      },
      log: [
        { emit: "event", level: "query" },
        { emit: "event", level: "error" },
        { emit: "event", level: "info" },
        { emit: "event", level: "warn" },
      ],
    });

    this.logger = new ConsoleLogger({
      application: "database",
      environment: env.ENVIRONMENT,
    });

    this.setupLogging(env);
  }

  private setupLogging(env: Env): void {
    // Development logging
    if (env.ENVIRONMENT === "development") {
      // PostgreSQL query logging
      (this.postgresClient.$on as any)("query", (event: PrismaQueryEvent) => {
        this.logger.debug(`[PostgreSQL] Query: ${event.query} `);
        this.logger.debug(`[PostgreSQL] Params: ${event.params} `);
        this.logger.debug(`[PostgreSQL] Duration: ${event.duration} ms`);
      });
    }

    // Error logging for both clients
    (this.postgresClient.$on as any)("error", (event: PrismaLogEvent) => {
      this.logger.error("[PostgreSQL] Error:", {
        error: event,
        timestamp: new Date().toISOString(),
        target: event.target,
      });
    });
  }

  /**
   * Get database clients
   */
  public get postgres() {
    return this.postgresClient;
  }

  /**
   * Connect to both databases
   */
  public async connect(): Promise<void> {
    try {
      await Promise.all([this.postgresClient.$connect()]);
      this.logger.info("Successfully connected to all databases");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      this.logger.error("Failed to connect to databases:", {
        error: errorMessage,
        timestamp: new Date().toISOString(),
      });
      throw new Error("Database connection failure", { cause: error });
    }
  }

  /**
   * Disconnect from both databases
   */
  public async disconnect(): Promise<void> {
    try {
      await Promise.all([this.postgresClient.$disconnect()]);
      this.logger.info("Disconnected from all databases");
    } catch (error) {
      this.logger.error("Error disconnecting from databases:", {
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }

  /**
   * Perform a transaction in PostgreSQL
   * @param callback Transaction callback function
   * @returns Result of the transaction
   */
  public async postgresTransaction<T>(
    callback: (tx: PostgresPrismaClient) => Promise<T>,
  ): Promise<T> {
    return await this.postgresClient.$transaction(
      async (postgresTransaction) => {
        try {
          const result = await callback(
            postgresTransaction as PostgresPrismaClient,
          );
          return result;
        } catch (error) {
          this.logger.error("PostgreSQL transaction failed:", {
            error: error instanceof Error ? error.message : String(error),
          });
          throw error;
        }
      },
    );
  }
  /**
   * Health check for both databases
   */
  public async healthCheck(): Promise<{
    postgres: boolean;
    mongo: boolean;
  }> {
    const health = {
      postgres: false,
      mongo: false,
    };

    try {
      await this.postgresClient.$queryRaw`SELECT 1`;
      health.postgres = true;
    } catch (error) {
      this.logger.error("PostgreSQL health check failed:", {
        error: error instanceof Error ? error.message : String(error),
      });
    }

    return health;
  }
}

// Request-scoped context
const context: { dbClient?: DatabaseClient } = {};

export function initializeDatabase(env: Env): DatabaseClient {
  context.dbClient = new DatabaseClient(env);
  return context.dbClient;
}

export function getDatabase(): DatabaseClient {
  if (!context.dbClient) {
    throw new Error(
      "Database client not initialized. Call initializeDatabase first.",
    );
  }
  return context.dbClient;
}

export const connectDatabase = () => getDatabase().connect();
export const disconnectDatabase = () => getDatabase().disconnect();

// Example usage in a Worker
/*
export default {
  async fetch(request: Request, env: Env) {
    const db = initializeDatabase(env);

    try {
      await connectDatabase();

      // Check health of both databases
      const health = await db.healthCheck();
      if (!health.postgres || !health.mongo) {
        throw new Error('One or more database connections are unhealthy');
      }

      // Example transaction using both databases
      await db.transaction(async ({ postgres, mongo }) => {
        const user = await postgres.user.create({
          data: {
            email: 'test@example.com',
            name: 'Test User'
          }
        });

        const post = await mongo.post.create({
          data: {
            title: 'Test Post',
            authorId: user.id
          }
        });

        return { user, post };
      });

      return new Response('Success');
    } catch (error) {
      return new Response(
        `Database error: ${ error instanceof Error ? error.message : 'Unknown error' } `,
        { status: 500 }
      );
    } finally {
      await disconnectDatabase();
    }
  }
};
*/
