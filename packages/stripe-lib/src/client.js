'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStripe = void 0;
const stripe_js_1 = require("@stripe/stripe-js");
let stripePromise;
/**
 * Retrieves the Stripe instance for client-side usage, initializing it if necessary.
 * @returns {Promise<Stripe | null>} A promise that resolves to the Stripe instance.
 */
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = (0, stripe_js_1.loadStripe)(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '');
    }
    return stripePromise;
};
exports.getStripe = getStripe;
