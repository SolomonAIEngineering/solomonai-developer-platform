'use server';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutWithStripe = checkoutWithStripe;
exports.createStripePortal = createStripePortal;
const stripe_1 = __importDefault(require("stripe"));
const server_1 = require("@v1/db/server");
const index_1 = require("./mutations/index");
const utils_1 = require("./utils");
// Initialize Stripe with the secret key
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-06-20',
});
/**
 * Initiates a checkout process with Stripe for a given price.
 *
 * @async
 * @template T
 * @param {Price} price - The price object for the item being purchased.
 * @param {string} [redirectPath="/teams"] - The path to redirect to after successful checkout.
 * @param {string} [errorRedirect="/teams"] - The path to redirect to in case of an error.
 * @returns {Promise<CheckoutResponse>} A promise that resolves to a CheckoutResponse object.
 *
 * @throws {Error} If there's an issue retrieving the user, accessing the customer record, or creating the checkout session.
 *
 * @description
 * This function performs the following steps:
 * 1. Retrieves the current user from Supabase authentication.
 * 2. Creates or retrieves a Stripe customer for the user.
 * 3. Constructs the parameters for the Stripe checkout session.
 * 4. Creates a Stripe checkout session.
 * 5. Returns the session ID on success or an error redirect URL on failure.
 *
 * The function handles both recurring subscriptions and one-time payments.
 * For recurring subscriptions, it sets up a trial period if specified in the price object.
 */
async function checkoutWithStripe(price, redirectPath = '/teams', errorRedirect = '/teams') {
    const client = (0, server_1.createClient)();
    try {
        // Get the user from Supabase auth
        const { error, data: { user }, } = await client.auth.getUser();
        if (error || !user) {
            console.error(error);
            throw new Error('Could not get user session.');
        }
        console.log('user obtained', user);
        // Retrieve or create the customer in Stripe
        let customer;
        try {
            customer = await (0, index_1.createOrRetrieveCustomer)({
                uuid: user.id,
                email: user.email || '',
                client,
            });
            console.log('customer obtained', customer);
        }
        catch (err) {
            console.error(err);
            throw new Error('Unable to access customer record.', { cause: err });
        }
        // Use the initialized stripe instance
        let params = {
            allow_promotion_codes: true,
            billing_address_collection: 'required',
            customer,
            customer_update: {
                address: 'auto',
            },
            line_items: [
                {
                    price: price.id,
                    quantity: 1,
                },
            ],
            cancel_url: (0, utils_1.getURL)(),
            success_url: (0, utils_1.getURL)(redirectPath),
        };
        console.log('Trial end:', (0, utils_1.calculateTrialEndUnixTimestamp)(price.trial_period_days));
        if (price.type === 'recurring') {
            params = {
                ...params,
                mode: 'subscription',
                subscription_data: {
                    trial_end: (0, utils_1.calculateTrialEndUnixTimestamp)(price.trial_period_days),
                },
            };
        }
        else if (price.type === 'one_time') {
            params = {
                ...params,
                mode: 'payment',
            };
        }
        // Create a checkout session in Stripe
        let session;
        try {
            session = await stripe.checkout.sessions.create(params);
        }
        catch (err) {
            console.error(err);
            throw new Error('Unable to create checkout session.');
        }
        // Return the session ID
        if (session) {
            return { sessionId: session.id };
        }
        else {
            throw new Error('Unable to create checkout session.');
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return {
                errorRedirect: (0, utils_1.getErrorRedirect)(errorRedirect, error.message, 'Please try again later or contact a system administrator.'),
            };
        }
        else {
            return {
                errorRedirect: (0, utils_1.getErrorRedirect)(errorRedirect, 'An unknown error occurred.', 'Please try again later or contact a system administrator.'),
            };
        }
    }
}
/**
 * Creates a Stripe billing portal session for the current user.
 *
 * @async
 * @template T
 * @param {string} currentPath - The current path in the application.
 * @param {SupabaseClient<T>} client - The Supabase client instance.
 * @returns {Promise<string>} A promise that resolves to the URL of the Stripe billing portal.
 *
 * @throws {Error} If there's an issue retrieving the user, accessing the customer record, or creating the billing portal session.
 *
 * @description
 * This function performs the following steps:
 * 1. Retrieves the current user from Supabase authentication.
 * 2. Creates or retrieves a Stripe customer for the user.
 * 3. Creates a Stripe billing portal session for the customer.
 * 4. Returns the URL of the billing portal on success.
 *
 * If any step fails, it returns an error redirect URL.
 *
 * @example
 * ```typescript
 * const supabaseClient = createClient();
 * const portalUrl = await createStripePortal('/account', supabaseClient);
 * // Redirect the user to portalUrl
 * ```
 */
async function createStripePortal(currentPath, client) {
    try {
        const { error, data: { user }, } = await client.auth.getUser();
        if (!user) {
            if (error) {
                console.error(error);
            }
            throw new Error('Could not get user session.');
        }
        let customer;
        try {
            customer = await (0, index_1.createOrRetrieveCustomer)({
                uuid: user.id || '',
                email: user.email || '',
                client,
            });
        }
        catch (err) {
            console.error(err);
            throw new Error('Unable to access customer record.', { cause: err });
        }
        if (!customer) {
            throw new Error('Could not get customer.');
        }
        try {
            const stripeReturnUrl = (0, utils_1.getURL)('/account');
            console.log('Return URL for stripe billing portal:', stripeReturnUrl);
            const { url } = await stripe.billingPortal.sessions.create({
                customer,
                return_url: stripeReturnUrl,
            });
            if (!url) {
                throw new Error('Could not create billing portal');
            }
            return url;
        }
        catch (err) {
            console.error(err);
            throw new Error('Could not create billing portal');
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error);
            return (0, utils_1.getErrorRedirect)(currentPath, error.message, 'Please try again later or contact a system administrator.');
        }
        else {
            return (0, utils_1.getErrorRedirect)(currentPath, 'An unknown error occurred.', 'Please try again later or contact a system administrator.');
        }
    }
}
