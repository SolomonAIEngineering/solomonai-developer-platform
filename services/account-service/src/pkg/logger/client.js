import { ConsoleLogger } from "./logger.js";
export class LoggerSingleton {
    static instance;
    constructor() { }
    static getInstance(requestId = "base-request", defaultFields = { default: "field" }) {
        if (!LoggerSingleton.instance || requestId !== "base-request") {
            LoggerSingleton.instance = new ConsoleLogger({
                requestId,
                environment: "production",
                application: "api",
                defaultFields,
            });
        }
        return LoggerSingleton.instance;
    }
}
