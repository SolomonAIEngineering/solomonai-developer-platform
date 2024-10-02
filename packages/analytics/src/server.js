"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAnalytics = void 0;
const nextjs_1 = require("@openpanel/nextjs");
const logger_1 = require("@v1/logger");
const functions_1 = require("@vercel/functions");
const setupAnalytics = async (options) => {
    const { userId, fullName } = options ?? {};
    const client = new nextjs_1.OpenPanel({
        clientId: process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID,
        clientSecret: process.env.OPENPANEL_SECRET_KEY,
    });
    if (userId && fullName) {
        const [firstName, lastName] = fullName.split(" ");
        (0, functions_1.waitUntil)(client.identify({
            profileId: userId,
            firstName,
            lastName,
        }));
    }
    return {
        track: (options) => {
            if (process.env.NODE_ENV !== "production") {
                logger_1.logger.info("Track", options);
                return;
            }
            const { event, ...rest } = options;
            (0, functions_1.waitUntil)(client.track(event, rest));
        },
    };
};
exports.setupAnalytics = setupAnalytics;
