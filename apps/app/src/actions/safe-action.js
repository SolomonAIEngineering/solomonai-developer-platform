"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authActionClient = exports.actionClientWithMeta = exports.actionClient = void 0;
const Sentry = __importStar(require("@sentry/nextjs"));
const server_1 = require("@v1/analytics/server");
const ratelimit_1 = require("@v1/kv/ratelimit");
const logger_1 = require("@v1/logger");
const queries_1 = require("@v1/supabase/queries");
const server_2 = require("@v1/supabase/server");
const next_safe_action_1 = require("next-safe-action");
const headers_1 = require("next/headers");
const zod_1 = require("zod");
const handleServerError = (e) => {
    console.error("Action error:", e.message);
    if (e instanceof Error) {
        return e.message;
    }
    return next_safe_action_1.DEFAULT_SERVER_ERROR_MESSAGE;
};
exports.actionClient = (0, next_safe_action_1.createSafeActionClient)({
    handleServerError,
});
exports.actionClientWithMeta = (0, next_safe_action_1.createSafeActionClient)({
    handleServerError,
    defineMetadataSchema() {
        return zod_1.z.object({
            name: zod_1.z.string(),
            track: zod_1.z
                .object({
                event: zod_1.z.string(),
                channel: zod_1.z.string(),
            })
                .optional(),
        });
    },
});
exports.authActionClient = exports.actionClientWithMeta
    .use(async ({ next, clientInput, metadata }) => {
    const result = await next({ ctx: {} });
    if (process.env.NODE_ENV === "development") {
        logger_1.logger.info(`Input -> ${JSON.stringify(clientInput)}`);
        logger_1.logger.info(`Result -> ${JSON.stringify(result.data)}`);
        logger_1.logger.info(`Metadata -> ${JSON.stringify(metadata)}`);
        return result;
    }
    return result;
})
    .use(async ({ next, metadata }) => {
    const ip = (0, headers_1.headers)().get("x-forwarded-for");
    const { success, remaining } = await ratelimit_1.ratelimit.limit(`${ip}-${metadata.name}`);
    if (!success) {
        throw new Error("Too many requests");
    }
    return next({
        ctx: {
            ratelimit: {
                remaining,
            },
        },
    });
})
    .use(async ({ next, metadata }) => {
    const user = await (0, queries_1.getUser)();
    const supabase = (0, server_2.createClient)();
    if (!user) {
        throw new Error("Unauthorized");
    }
    if (metadata) {
        const analytics = await (0, server_1.setupAnalytics)({
            userId: user.id,
        });
        if (metadata.track) {
            analytics.track(metadata.track);
        }
    }
    return Sentry.withServerActionInstrumentation(metadata.name, async () => {
        return next({
            ctx: {
                supabase,
                user,
            },
        });
    });
});
