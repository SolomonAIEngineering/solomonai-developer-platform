import { drizzle } from "drizzle-orm/d1";
import { DatabaseError, QueryError, TransactionError, } from "../errors/index.js";
import * as schema from "./schema/index.js";
export class DatabaseClient {
    db;
    constructor(db) {
        this.initialize(db);
    }
    /**
     * Initializes the database client.
     * @param env - The environment object containing the D1 database instance.
     * @throws {DatabaseError} If there's an error initializing the database client.
     */
    async initialize(db) {
        try {
            this.db = drizzle(db, { schema });
        }
        catch (error) {
            throw new DatabaseError({
                code: "INTERNAL_SERVER_ERROR",
                message: `Failed to initialize database client: ${error instanceof Error ? error.message : "Unknown error"}`,
            });
        }
    }
    /**
     * Gets the Drizzle database client.
     * @returns The DrizzleD1Database instance.
     * @throws {DatabaseError} If the database client is not initialized.
     */
    getClient(db) {
        if (!this.db) {
            if (!db) {
                throw new DatabaseError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "Database client is not initialized",
                });
            }
            this.initialize(db);
        }
        return this.db;
    }
    /**
     * Helper function to execute a database query with enhanced error handling.
     *
     * @param db - The Drizzle database client.
     * @param queryFn - A function that performs the database query.
     * @returns A Promise that resolves to the query result.
     * @throws {QueryError} If there's an error executing the query.
     *
     * @example
     * const result = await executeQuery(db, async (db) => {
     *   return db.select().from(users).where(eq(users.id, userId));
     * });
     */
    async executeQuery(queryFn) {
        try {
            return await queryFn(this.getClient());
        }
        catch (error) {
            const queryString = error instanceof Error ? error.message : "Unknown query";
            console.error("Database query error:", error);
            throw new QueryError({
                code: "INTERNAL_SERVER_ERROR",
                message: `Failed to execute query: ${queryString}`,
            });
        }
    }
    /**
     * Helper function to perform a database transaction with enhanced error handling.
     *
     * @param db - The Drizzle database client.
     * @param transactionFn - A function that performs the database operations within a transaction.
     * @returns A Promise that resolves to the transaction result.
     * @throws {TransactionError} If there's an error during the transaction.
     *
     * @example
     * const result = await executeTransaction(db, async (tx) => {
     *   await tx.insert(users).values({ name: 'John Doe', email: 'john@example.com' });
     *   await tx.insert(posts).values({ userId: 1, title: 'My First Post' });
     *   return { success: true };
     * });
     */
    async executeTransaction(transactionFn) {
        try {
            return await this.getClient().transaction(async (tx) => {
                return await transactionFn(tx);
            });
        }
        catch (error) {
            console.error("Transaction error:", error);
            throw new TransactionError({
                code: "INTERNAL_SERVER_ERROR",
                message: `Failed to execute transaction: ${error instanceof Error ? error.message : "Unknown transaction error"}`,
            });
        }
    }
}
