import { UserAccountDatabaseClient } from "./user-account-client.js";
export class DatabaseManager {
    static instance = null;
    userAccountDbClient = null;
    constructor() { }
    static async getInstance(db) {
        if (!DatabaseManager.instance) {
            const client = await UserAccountDatabaseClient.getInstance(db);
            DatabaseManager.instance = new DatabaseManager();
            DatabaseManager.instance.userAccountDbClient = client;
        }
        return DatabaseManager.instance;
    }
}
