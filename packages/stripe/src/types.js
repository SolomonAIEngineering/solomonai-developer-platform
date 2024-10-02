"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomerSchema = exports.createCheckoutSessionSchema = exports.manageSubscriptionSchema = exports.createSubscriptionSchema = void 0;
const zod_1 = require("zod");
/**
 * Zod schema for creating a subscription.
 * @constant
 */
exports.createSubscriptionSchema = zod_1.z.object({
    /** ID of the price to subscribe to */
    priceId: zod_1.z.string(),
});
/**
 * Zod schema for managing a subscription.
 * @constant
 */
exports.manageSubscriptionSchema = zod_1.z.object({
    /** ID of the subscription to manage */
    subscriptionId: zod_1.z.string(),
    /** Action to perform on the subscription */
    action: zod_1.z.enum(["cancel", "reactivate"]),
});
/**
 * Zod schema for creating a checkout session.
 * @constant
 */
exports.createCheckoutSessionSchema = zod_1.z.object({
    /** ID of the price to use for the checkout session */
    price: zod_1.z.string(),
    /** Quantity of the item to purchase */
    quantity: zod_1.z.number().int().positive(),
    /** Additional metadata for the checkout session */
    metadata: zod_1.z.record(zod_1.z.string()).optional(),
});
exports.createCustomerSchema = zod_1.z.object({
    fullName: zod_1.z.string(),
});
