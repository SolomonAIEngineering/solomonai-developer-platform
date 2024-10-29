import { Env, zEnv } from "./env";
import { newApp } from "./hono/app";
import { UserActionMessageBody } from "./message";
import { ConsoleLogger } from "./metric/logger";
import { setupRoutes } from "./routes";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { QueryMiddlewareFactory } from "./database/middleware/query.middleware";

const app = newApp();

// Set up all the routes
setupRoutes(app);

// Define default handler
const handler = {
  fetch: async (req: Request, env: Env, executionCtx: ExecutionContext) => {
    const parsedEnv = zEnv.safeParse(env);
    if (!parsedEnv.success) {
      new ConsoleLogger({
        requestId: "",
        environment: env.ENVIRONMENT,
        application: "api",
      }).fatal(`BAD_ENVIRONMENT: ${parsedEnv.error.message}`);
      return Response.json(
        {
          code: "BAD_ENVIRONMENT",
          message: "Some environment variables are missing or are invalid",
          errors: parsedEnv.error,
        },
        { status: 500 },
      );
    }

    const pool = new Pool({
      connectionString: parsedEnv.data.HYPERDRIVE.connectionString,
    });
    const adapter = new PrismaPg(pool);
    const prisma = new PrismaClient({ adapter });

    try {
      // Attach dbClient to the context so that routes can access it
      parsedEnv.data.DATABASE_CLIENT = prisma;

      // Pass the updated env with dbClient to the app
      const response = await app.fetch(req, parsedEnv.data, executionCtx);
      return response;
    } catch (error) {
      new ConsoleLogger({
        requestId: "",
        environment: env.ENVIRONMENT,
        application: "api",
      }).fatal(
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

  queue: async (
    batch: MessageBatch<UserActionMessageBody>,
    env: Env,
    _executionContext: ExecutionContext,
  ) => {
    const logger = new ConsoleLogger({
      requestId: "queue",
      environment: env.ENVIRONMENT,
      application: "api",
      defaultFields: { environment: env.ENVIRONMENT },
    });

    const parsedEnv = zEnv.safeParse(env);
    if (!parsedEnv.success) {
      logger.fatal(`BAD_ENVIRONMENT: ${parsedEnv.error.message}`);
      // Handle error appropriately
      return;
    }

    const pool = new Pool({
      connectionString: parsedEnv.data.HYPERDRIVE.connectionString,
    });
    const adapter = new PrismaPg(pool);
    const prisma = new PrismaClient({ adapter });

    try {
      // Attach dbClient to the environment for use in message processing
      parsedEnv.data.DATABASE_CLIENT = prisma;

      switch (batch.queue) {
        case "key-migrations-development":
        case "key-migrations-preview":
        case "key-migrations-canary":
        case "key-migrations-production": {
          for (const message of batch.messages) {
            // Example usage of dbClient in message processing
            // const result = await migrateKey(message.body, parsedEnv.data, dbClient);
            // if (result.err) {
            //   const delaySeconds = 2 ** message.attempts;
            //   logger.error("Unable to migrate key", {
            //     message,
            //     error: result.err.message,
            //     delaySeconds,
            //   });
            //   message.retry({ delaySeconds });
            // } else {
            //   message.ack();
            // }
            logger.info("Processed message", {
              message: message.body,
            });
            message.ack();
          }
          break;
        }
        case "key-migrations-development-dlq":
        case "key-migrations-preview-dlq":
        case "key-migrations-canary-dlq":
        case "key-migrations-production-dlq": {
          for (const message of batch.messages) {
            // Example usage of dbClient in DLQ processing
            // await storeMigrationError(message.body, parsedEnv.data, dbClient);
            logger.info("Processed message from DLQ", {
              message: message.body,
            });
          }
          break;
        }
        default:
          throw new Error(`No queue handler: ${batch.queue}`);
      }
    } catch (error) {
      logger.error("Error processing queue messages:", {
        error: error instanceof Error ? error.message : String(error),
      });
    }
  },
} satisfies ExportedHandler<Env, UserActionMessageBody>;

export default handler;
