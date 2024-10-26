import { Env } from "@/env";
import { Prisma } from "@prisma/client";
import { ConsoleLogger } from "../metric/logger";
import { PrismaClient as PostgresPrismaClient } from './generated/postgresql';

/**
 * Database client using Prisma Accelerate (Hyperdrive) for Cloudflare Workers
 * Optimized for edge environments with connection pooling and caching
 */
export class DatabaseClient {
  private prisma: PostgresPrismaClient;
  private logger: ConsoleLogger;

  constructor(env: Env) {
    // Ensure the DATABASE_URL is a Prisma Accelerate connection string
    if (!env.DATABASE_URL.includes("prisma-accelerate")) {
      throw new Error(
        "DATABASE_URL must be a Prisma Accelerate connection string",
      );
    }

    this.prisma = new PostgresPrismaClient({
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

    // Enhanced logging for development
    if (env.ENVIRONMENT === "development") {
      (this.prisma.$on as any)("query", (event: Prisma.QueryEvent) => {
        this.logger.debug(`Query: ${event.query}`);
        this.logger.debug(`Params: ${event.params}`);
        this.logger.debug(`Duration: ${event.duration}ms`);
        this.logger.debug(`Database: ${event.target}`);
      });
    }

    // Error handling with Accelerate-specific logging
    (this.prisma.$on as any)("error", (event: Prisma.LogEvent) => {
      this.logger.error("Prisma Error:", {
        error: event,
        timestamp: new Date().toISOString(),
        target: event.target,
      });
    });
  }

  public async connect(): Promise<void> {
    try {
      await this.prisma.$connect();
      this.logger.info("Successfully connected to Prisma Accelerate");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      this.logger.error("Failed to connect to Prisma Accelerate:", {
        error: errorMessage,
        timestamp: new Date().toISOString(),
      });
      throw new Error("Failed to connect to Prisma Accelerate", {
        cause: error,
      });
    }
  }

  public async disconnect(): Promise<void> {
    try {
      await this.prisma.$disconnect();
      this.logger.info("Disconnected from Prisma Accelerate");
    } catch (error) {
      this.logger.error("Error disconnecting from Prisma Accelerate:", {
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }

  /**
   * Helper method to check if the connection is healthy
   */
  public async healthCheck(): Promise<boolean> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return true;
    } catch (error) {
      this.logger.error("PostgreSQL health check failed:", {
        error: error instanceof Error ? error.message : String(error),
      });
      return false;
    }
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

      // Verify connection is healthy
      const isHealthy = await db.healthCheck();
      if (!isHealthy) {
        throw new Error('Database connection is unhealthy');
      }

      // Your database operations here
      const client = db.getClient();
      // ... do work ...

      return new Response('Success');
    } catch (error) {
      return new Response(
        `Database error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        { status: 500 }
      );
    } finally {
      await disconnectDatabase();
    }
  }
};
*/
