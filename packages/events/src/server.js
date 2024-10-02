"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAnalytics = void 0;
const headers_1 = require("next/headers");
const nextjs_1 = require("@openpanel/nextjs");
const functions_1 = require("@vercel/functions");
const setupAnalytics = async (options) => {
    const { userId, fullName } = options ?? {};
    const trackingConsent = (0, headers_1.cookies)().get('tracking-consent')?.value === '0';
    const client = new nextjs_1.OpenPanel({
        clientId: process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID,
        clientSecret: process.env.OPENPANEL_SECRET_KEY,
    });
    if (trackingConsent && userId && fullName) {
        const [firstName, lastName] = fullName.split(' ');
        (0, functions_1.waitUntil)(client.identify({
            profileId: userId,
            firstName,
            lastName,
        }));
    }
    return {
        track: (options) => {
            if (process.env.NODE_ENV !== 'production') {
                console.log('Track', options);
                return;
            }
            const { event, ...rest } = options;
            (0, functions_1.waitUntil)(client.track(event, rest));
        },
    };
};
exports.setupAnalytics = setupAnalytics;
