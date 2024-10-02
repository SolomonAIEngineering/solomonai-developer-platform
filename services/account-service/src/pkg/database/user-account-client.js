import { desc, eq, like, or, sql } from "drizzle-orm";
import { DatabaseError } from "../errors/index.js";
import { ErrorCode } from "../errors/error-code.js";
import { DatabaseClient } from "./db.js";
import * as schema from "./schema/index.js";
import { z } from "zod"; // Add zod for input validation
/**
 * UserAccountDatabaseClient class for managing user account operations in the database.
 * This class follows the singleton pattern and extends DatabaseClient.
 */
export class UserAccountDatabaseClient extends DatabaseClient {
    static instance = null;
    constructor(db) {
        super(db);
    }
    static async getInstance(db) {
        if (!UserAccountDatabaseClient.instance) {
            UserAccountDatabaseClient.instance = new UserAccountDatabaseClient(db);
        }
        return UserAccountDatabaseClient.instance;
    }
    // Input validation schemas
    emailSchema = z.string().email();
    usernameSchema = z.string().min(3).max(30);
    supabaseAuth0UserIdSchema = z.string().min(1);
    /**
     * Validates input data using Zod schemas.
     * @throws {DatabaseError} If validation fails.
     */
    validateInput(schema, data) {
        try {
            return schema.parse(data);
        }
        catch (error) {
            if (error instanceof z.ZodError) {
                throw new DatabaseError({
                    code: ErrorCode.BAD_REQUEST,
                    message: `Validation error: ${error.errors.map((e) => e.message).join(", ")}`,
                });
            }
            throw error;
        }
    }
    /**
     * Checks if a user account exists by email and username.
     * @throws {DatabaseError} If the email or username is invalid.
     */
    async checkUserAccountExists(email, username) {
        this.validateInput(this.emailSchema, email);
        this.validateInput(this.usernameSchema, username);
        return this.executeQuery(async (db) => {
            const userAccount = await db
                .select({ count: sql `count(*)` })
                .from(schema.userAccounts)
                .where(or(eq(schema.userAccounts.email, email), eq(schema.userAccounts.username, username)))
                .get();
            return userAccount?.count ?? 0 > 0;
        });
    }
    /**
     * Creates a new user account.
     * @throws {DatabaseError} If the account creation fails or if a user with the same email or username already exists.
     */
    async createUserAccount(params) {
        const validatedParams = {
            email: this.validateInput(this.emailSchema, params.email),
            username: this.validateInput(this.usernameSchema, params.username),
            supabaseAuth0UserId: this.validateInput(this.supabaseAuth0UserIdSchema, params.supabaseAuth0UserId),
        };
        return this.executeTransaction(async (tx) => {
            const existingUser = await tx
                .select()
                .from(schema.userAccounts)
                .where(or(eq(schema.userAccounts.email, validatedParams.email), eq(schema.userAccounts.username, validatedParams.username)))
                .get();
            if (existingUser) {
                throw new DatabaseError({
                    code: ErrorCode.NOT_UNIQUE,
                    message: "User account already exists",
                });
            }
            const [newAccount] = await tx
                .insert(schema.userAccounts)
                .values(validatedParams)
                .returning();
            if (!newAccount) {
                throw new DatabaseError({
                    code: ErrorCode.INTERNAL_SERVER_ERROR,
                    message: "Failed to create user account",
                });
            }
            return newAccount;
        });
    }
    /**
     * Retrieves a user account by Supabase Auth0 User ID, email, or username.
     * @throws {DatabaseError} If no search parameter is provided or if there's an error during the database query.
     */
    async getUserAccountByAuthUserId({ supabaseAuth0UserId, email, username, }) {
        if (!supabaseAuth0UserId && !email && !username) {
            throw new DatabaseError({
                code: ErrorCode.BAD_REQUEST,
                message: "User ID, email or username is required",
            });
        }
        const query = this.getClient()
            .select()
            .from(schema.userAccounts)
            .where(or(supabaseAuth0UserId
            ? eq(schema.userAccounts.supabaseAuth0UserId, supabaseAuth0UserId)
            : undefined, email ? eq(schema.userAccounts.email, email) : undefined, username ? eq(schema.userAccounts.username, username) : undefined))
            .limit(1);
        const result = await this.executeQuery(() => query.get());
        return result || null;
    }
    /**
     * Deletes a user account by Supabase Auth0 User ID, email, or username.
     * @param ctx - The context object containing services like logger.
     * @param params - An object containing optional Supabase Auth0 User ID, email, or username.
     * @returns A Promise that resolves to a boolean indicating whether the deletion was successful.
     * @throws {DatabaseError} If no deletion parameter is provided or if there's an error during the database operation.
     */
    async deleteUserAccount(ctx, { supabaseAuth0UserId, email, username, }) {
        const { logger } = ctx.get("services");
        if (!supabaseAuth0UserId && !email && !username) {
            throw new DatabaseError({
                code: ErrorCode.BAD_REQUEST,
                message: "User ID, email or username is required for deletion",
            });
        }
        try {
            return await this.executeQuery(async (db) => {
                const result = await db
                    .delete(schema.userAccounts)
                    .where(or(email ? eq(schema.userAccounts.email, email) : undefined, username ? eq(schema.userAccounts.username, username) : undefined, supabaseAuth0UserId
                    ? eq(schema.userAccounts.supabaseAuth0UserId, supabaseAuth0UserId)
                    : undefined));
                return result.success;
            });
        }
        catch (error) {
            logger.error("Error deleting user account", {
                supabaseAuth0UserId,
                email,
                username,
                error,
            });
            throw error;
        }
    }
    /**
     * Retrieves a user account by its ID.
     * @param id The ID of the user account to retrieve.
     * @returns The user account if found, null otherwise.
     * @throws {DatabaseError} If the user ID is not provided or if there's an error during the database query.
     */
    async getUserAccountById(id) {
        if (!id) {
            throw new DatabaseError({
                code: ErrorCode.BAD_REQUEST,
                message: "User ID is required",
            });
        }
        try {
            return await this.executeQuery(async (db) => {
                const [userAccount] = await db
                    .select()
                    .from(schema.userAccounts)
                    .where(eq(schema.userAccounts.id, id));
                return userAccount || null;
            });
        }
        catch (error) {
            throw new DatabaseError({
                code: ErrorCode.INTERNAL_SERVER_ERROR,
                message: `Failed to get user account by ID: ${error instanceof Error ? error.message : "Unknown error"}`,
            });
        }
    }
    /**
     * Retrieves a user account by email or username.
     * @param identifier The email or username of the user account to retrieve.
     * @returns The user account if found, null otherwise.
     */
    async getUserAccountByEmailOrUsername(email, username) {
        if (!email && !username) {
            throw new DatabaseError({
                code: ErrorCode.BAD_REQUEST,
                message: "Email or username is required",
            });
        }
        try {
            return await this.executeQuery(async (db) => {
                const [userAccount] = await db
                    .select()
                    .from(schema.userAccounts)
                    .where(or(eq(schema.userAccounts.email, email), eq(schema.userAccounts.username, username)));
                return userAccount || null;
            });
        }
        catch (error) {
            throw new DatabaseError({
                code: ErrorCode.INTERNAL_SERVER_ERROR,
                message: `Failed to get user account by ID: ${error instanceof Error ? error.message : "Unknown error"}`,
            });
        }
    }
    /**
     * Updates a user account.
     * @param id The ID of the user account to update.
     * @param updateData The data to update.
     * @returns The updated user account.
     * @throws {DatabaseError} If the update fails.
     */
    async updateUserAccount(id, updateData) {
        try {
            const [updatedUser] = await this.getClient()
                .update(schema.userAccounts)
                .set(updateData)
                .where(eq(schema.userAccounts.id, id))
                .returning();
            if (!updatedUser) {
                throw new DatabaseError({
                    code: "NOT_FOUND",
                    message: `User account with ID ${id} not found`,
                });
            }
            return updatedUser;
        }
        catch (error) {
            throw new DatabaseError({
                code: "INTERNAL_SERVER_ERROR",
                message: `Failed to update user account: ${error instanceof Error ? error.message : "Unknown error"}`,
            });
        }
    }
    /**
     * Soft deletes a user account by setting isActive to false.
     * @param id The ID of the user account to soft delete.
     * @returns True if the account was soft deleted, false otherwise.
     */
    async softDeleteUserAccount({ id }) {
        if (!id) {
            throw new DatabaseError({
                code: ErrorCode.BAD_REQUEST,
                message: "User ID is required for deletion",
            });
        }
        try {
            return await this.executeQuery(async (db) => {
                const result = await db
                    .update(schema.userAccounts)
                    .set({ isActive: false })
                    .where(eq(schema.userAccounts.id, id))
                    .returning({ id: schema.userAccounts.id });
                return !!result;
            });
        }
        catch (error) {
            throw error;
        }
    }
    async hardDeleteUserAccount({ id }) {
        if (!id) {
            throw new DatabaseError({
                code: ErrorCode.BAD_REQUEST,
                message: "User ID is required for deletion",
            });
        }
        try {
            return await this.executeQuery(async (db) => {
                const [result] = await db
                    .delete(schema.userAccounts)
                    .where(eq(schema.userAccounts.id, id))
                    .returning({ id: schema.userAccounts.id });
                return !!result;
            });
        }
        catch (error) {
            throw error;
        }
    }
    /**
     * Verifies a user's email.
     * @param id The ID of the user account to verify.
     * @returns The updated user account.
     * @throws {DatabaseError} If the verification fails.
     */
    async verifyUserEmail(id) {
        if (!id) {
            throw new DatabaseError({
                code: ErrorCode.BAD_REQUEST,
                message: "User ID is required for deletion",
            });
        }
        try {
            return await this.executeQuery(async (db) => {
                const [verifiedUser] = await db
                    .update(schema.userAccounts)
                    .set({ isEmailVerified: true, verifiedAt: new Date().toISOString() })
                    .where(eq(schema.userAccounts.id, id))
                    .returning();
                return verifiedUser || null;
            });
        }
        catch (error) {
            throw new DatabaseError({
                code: ErrorCode.INTERNAL_SERVER_ERROR,
                message: `Failed to verify user email: ${error instanceof Error ? error.message : "Unknown error"}`,
            });
        }
    }
    /**
     * Searches for user accounts based on a query string.
     * @param query The search query.
     * @param limit The maximum number of results to return.
     * @param offset The number of results to skip.
     * @returns An array of user accounts matching the search criteria.
     */
    async searchUserAccounts(query, limit = 10, offset = 0) {
        const sanitizedQuery = query.replace(/[%_]/g, "\\$&"); // Escape special characters
        return this.executeQuery(async (db) => {
            return db
                .select()
                .from(schema.userAccounts)
                .where(or(like(schema.userAccounts.username, `%${sanitizedQuery}%`), like(schema.userAccounts.email, `%${sanitizedQuery}%`), like(schema.userAccounts.firstname, `%${sanitizedQuery}%`), like(schema.userAccounts.lastname, `%${sanitizedQuery}%`)))
                .limit(limit)
                .offset(offset);
        });
    }
    /**
     * Retrieves recently created user accounts.
     * @param limit The maximum number of results to return.
     * @returns An array of recently created user accounts.
     */
    async getRecentlyCreatedAccounts(limit = 10) {
        return this.executeQuery(async (db) => {
            return db
                .select()
                .from(schema.userAccounts)
                .orderBy(desc(schema.userAccounts.createdAt))
                .limit(limit);
        });
    }
    /**
     * Updates the profile image URL for a user account.
     * @param id The ID of the user account to update.
     * @param imageUrl The new profile image URL.
     * @returns The updated user account.
     * @throws {DatabaseError} If the update fails.
     */
    async updateProfileImage(id, imageUrl) {
        return this.executeTransaction(async (tx) => {
            const [updatedUser] = await tx
                .update(schema.userAccounts)
                .set({ profileImageUrl: imageUrl })
                .where(eq(schema.userAccounts.id, id))
                .returning();
            if (!updatedUser) {
                throw new DatabaseError({
                    code: ErrorCode.NOT_FOUND,
                    message: `User account with ID ${id} not found`,
                });
            }
            return updatedUser;
        });
    }
    /**
     * Retrieves a user account with all its related data including teams, address, API keys, roles, and settings.
     *
     * @param userId The ID of the user account to retrieve.
     * @returns A Promise resolving to an object containing the user account and all its related data.
     * @throws {DatabaseError} If the user is not found or if there's an error during the database query.
     */
    async getUserWithAllRelations(userId) {
        try {
            const result = await this.getClient().transaction(async (tx) => {
                // Fetch the user
                const [user] = await tx
                    .select()
                    .from(schema.userAccounts)
                    .where(eq(schema.userAccounts.id, userId));
                if (!user) {
                    throw new DatabaseError({
                        code: "NOT_FOUND",
                        message: `User with ID ${userId} not found`,
                    });
                }
                // Fetch teams
                const userTeams = await tx
                    .select({
                    id: schema.teams.id,
                    name: schema.teams.name,
                })
                    .from(schema.teamMembers)
                    .innerJoin(schema.teams, eq(schema.teamMembers.teamId, schema.teams.id))
                    .where(eq(schema.teamMembers.userAccountId, userId));
                // Fetch address
                const [userAddress] = await tx
                    .select({
                    street: schema.addresses.address,
                    city: schema.addresses.city,
                    state: schema.addresses.state,
                    zipcode: schema.addresses.zipcode,
                    unit: schema.addresses.unit,
                })
                    .from(schema.addresses)
                    .where(eq(schema.addresses.userAccountId, userId));
                // Fetch API keys
                const userApiKeys = await tx
                    .select({
                    id: schema.apiKeys.id,
                    key: schema.apiKeys.key,
                    name: schema.apiKeys.name,
                })
                    .from(schema.apiKeys)
                    .where(eq(schema.apiKeys.userAccountId, userId));
                // Fetch roles
                const userRoles = await tx
                    .select({
                    id: schema.roles.id,
                    name: schema.roles.name,
                })
                    .from(schema.roles)
                    .where(eq(schema.roles.userAccountId, userId));
                return {
                    user,
                    teams: userTeams,
                    address: userAddress || null,
                    apiKeys: userApiKeys,
                    roles: userRoles,
                };
            });
            return {
                user: result.user,
                teams: result.teams,
                address: result.address
                    ? {
                        street: result.address.street || "",
                        city: result.address.city || "",
                        state: result.address.state || "",
                        country: "", // Add a default empty string for country
                        postalCode: result.address.zipcode || "", // Use zipcode as postalCode
                    }
                    : null,
                apiKeys: result.apiKeys,
                roles: result.roles,
            };
        }
        catch (error) {
            if (error instanceof DatabaseError) {
                throw error;
            }
            throw new DatabaseError({
                code: "INTERNAL_SERVER_ERROR",
                message: `Failed to retrieve user data: ${error instanceof Error ? error.message : "Unknown error"}`,
            });
        }
    }
}
