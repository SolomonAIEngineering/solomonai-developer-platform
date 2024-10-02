"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
exports.withCookies = withCookies;
const customer_1 = require("./api/customer");
const subscription_1 = require("./api/subscription");
const payment_intent_1 = require("./api/payment-intent");
const checkout_1 = require("./api/checkout");
const stripe_1 = require("./webhooks/stripe");
const headers_1 = require("next/headers");
/**
 * Wraps a request handler function with cookie access.
 * @param handler - The original request handler function
 * @returns A new function that handles the request and provides cookie access
 * @example
 * const wrappedHandler = withCookies(originalHandler);
 * // Use wrappedHandler in your API route
 */
function withCookies(handler) {
    return async (req, res) => {
        const cookieStore = (0, headers_1.cookies)();
        return handler(req, res, cookieStore);
    };
}
/**
 * Object containing wrapped API route handlers with cookie access.
 * @example
 * // In your API route file (e.g., app/api/stripe/customer/route.js):
 * import { routes } from '../../../../src/routes';
 * export const POST = routes.customer;
 */
exports.routes = {
    /**
     * Wrapped customer route handler
     * @example
     * // POST /api/stripe/customer
     * const response = await fetch('/api/stripe/customer', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify({ email: 'user@example.com', name: 'John Doe' })
     * });
     */
    customer: withCookies(customer_1.POST),
    /**
     * Wrapped subscription route handler
     * @example
     * // POST /api/stripe/subscription
     * const response = await fetch('/api/stripe/subscription', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify({ priceId: 'price_1234', customerId: 'cus_5678' })
     * });
     */
    subscription: withCookies(subscription_1.POST),
    /**
     * Wrapped manage subscription route handler
     * @example
     * // PATCH /api/stripe/subscription
     * const response = await fetch('/api/stripe/subscription', {
     *   method: 'PATCH',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify({ subscriptionId: 'sub_1234', action: 'cancel' })
     * });
     */
    manageSubscription: withCookies(subscription_1.PATCH),
    /**
     * Wrapped payment intent route handler
     * @example
     * // POST /api/stripe/payment-intent
     * const response = await fetch('/api/stripe/payment-intent', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify({ amount: 1000, currency: 'usd' })
     * });
     */
    paymentIntent: withCookies(payment_intent_1.POST),
    /**
     * Wrapped checkout route handler
     * @example
     * // POST /api/stripe/checkout
     * const response = await fetch('/api/stripe/checkout', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify({ priceId: 'price_1234' })
     * });
     */
    checkout: withCookies(checkout_1.POST),
    /**
     * Wrapped webhook route handler
     * @example
     * // POST /api/webhooks/stripe
     * // This is typically called by Stripe, not directly by your application
     * const response = await fetch('/api/webhooks/stripe', {
     *   method: 'POST',
     *   headers: { 'Stripe-Signature': 'webhook_secret' },
     *   body: JSON.stringify(eventData)
     * });
     */
    webhook: withCookies(stripe_1.POST),
    withCookies: withCookies,
};