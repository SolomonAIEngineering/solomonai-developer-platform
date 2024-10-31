import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client/extension";
import { Pool } from "pg";
import { Env, zEnv } from "./env";
import { newApp } from "./hono/app";
import { UserActionMessageBody } from "./message";
import { ConsoleLogger } from "./metric/logger";
import { setupRoutes } from "./routes";

const app = newApp();
setupRoutes(app);

/**
 * Initializes and returns a Prisma client connected to a PostgreSQL database using the provided connection string.
 * @param connectionString - The PostgreSQL connection string.
 * @returns A new `PrismaClient` instance configured to use the `PrismaPg` adapter.
 */
const createPrismaClient = (connectionString: string) => {
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
};

/**
 * Initializes and returns a new instance of `ConsoleLogger` configured with the environment and request ID.
 * @param env - The application environment variables.
 * @param requestId - A unique identifier for the request; defaults to an empty string.
 * @returns A new `ConsoleLogger` instance.
 */
const createLogger = (env: Env, requestId = "") =>
  new ConsoleLogger({
    requestId,
    environment: env.ENVIRONMENT,
    application: "api",
    defaultFields: { environment: env.ENVIRONMENT },
  });

/**
 * Defines the handler for both `fetch` and `queue` operations.
 * Handles requests to the API and manages message batch processing for different queues.
 */
const handler = {
  /**
   * Handles HTTP requests, initializing required environment variables and database connections.
   * @param req - The incoming HTTP request object.
   * @param env - The environment configuration, parsed and validated against `Env`.
   * @param executionCtx - The execution context of the request.
   * @returns A `Response` object indicating success or failure.
   */
  fetch: async (req: Request, env: Env, executionCtx: ExecutionContext) => {
    console.log("this is the env", env);
    const parsedEnv = zEnv.safeParse(env);
    if (!parsedEnv.success) {
      createLogger(env).fatal(`BAD_ENVIRONMENT: ${parsedEnv.error.message}`);
      return Response.json(
        {
          code: "BAD_ENVIRONMENT",
          message: "Some environment variables are missing or are invalid",
          errors: parsedEnv.error,
        },
        { status: 500 },
      );
    }

    try {
      parsedEnv.data.DATABASE_CLIENT = createPrismaClient(
        parsedEnv.data.HYPERDRIVE.connectionString,
      );
      return await app.fetch(req, parsedEnv.data, executionCtx);
    } catch (error) {
      createLogger(env).fatal(
        `DATABASE_CONNECTION_ERROR: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      return Response.json(
        {
          code: "DATABASE_CONNECTION_ERROR",
          message: "Failed to connect to the database",
          errors: error,
        },
        { status: 500 },
      );
    }
  },
} satisfies ExportedHandler<Env, UserActionMessageBody>;

export default handler;
