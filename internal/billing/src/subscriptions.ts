import { z } from "zod";

import { billingTier } from "./tiers";

const fixedSubscriptionSchema = z.object({
  productId: z.string(),
  cents: z.string().regex(/^\d{1,15}(\.\d{1,12})?$/), // in cents, e.g. "10.124" = $0.10124
});

/**
 * Represents a fixed-price subscription.
 * @property {string} productId - The unique identifier for the product in the billing system.
 * @property {string} cents - The price in cents, formatted as a string with up to 12 decimal places.
 */
export type FixedSubscription = z.infer<typeof fixedSubscriptionSchema>;

const tieredSubscriptionSchema = z.object({
  productId: z.string(),
  tiers: z.array(billingTier),
});

/**
 * Represents a tiered subscription with multiple pricing levels.
 * @property {string} productId - The unique identifier for the product in the billing system.
 * @property {billingTier[]} tiers - An array of billing tiers, each defining a range and price.
 */
export type TieredSubscription = z.infer<typeof tieredSubscriptionSchema>;

/**
 * Defines the structure for all available subscriptions.
 * @property {TieredSubscription} [verifications] - Tiered subscription for key verifications.
 * @property {TieredSubscription} [ratelimits] - Tiered subscription for rate limits.
 * @property {FixedSubscription} [plan] - Fixed subscription for the main plan.
 * @property {FixedSubscription} [support] - Fixed subscription for support services.
 */
export const subscriptionsSchema = z.object({
  verifications: tieredSubscriptionSchema.optional(),
  ratelimits: tieredSubscriptionSchema.optional(),
  plan: fixedSubscriptionSchema.optional(),
  support: fixedSubscriptionSchema.optional(),
});

/**
 * Represents the complete set of subscriptions for a user or organization.
 */
export type Subscriptions = z.infer<typeof subscriptionsSchema>;

/**
 * Generates the default Pro subscriptions configuration based on environment variables.
 *
 * @returns {Subscriptions | null} The default Pro subscriptions configuration, or null if environment variables are missing.
 *
 * @description
 * This function creates a default Pro subscriptions object with the following components:
 * - A fixed-price plan subscription
 * - A tiered verifications subscription
 * - A tiered rate limits subscription
 *
 * It relies on specific environment variables for product IDs:
 * - STRIPE_PRODUCT_ID_PRO_PLAN
 * - STRIPE_PRODUCT_ID_KEY_VERIFICATIONS
 * - STRIPE_PRODUCT_ID_RATELIMITS
 * - STRIPE_PRODUCT_ID_SUPPORT
 *
 * If any of these environment variables are missing, the function returns null.
 *
 * @example
 * const proSubscriptions = defaultProSubscriptions();
 * if (proSubscriptions) {
 *   // Use the pro subscriptions configuration
 * } else {
 *   console.error("Failed to load Pro subscriptions configuration");
 * }
 */
export function defaultProSubscriptions(): Subscriptions | null {
  const stripeEnv = z.object({
    STRIPE_PRODUCT_ID_PRO_PLAN: z.string(),
    STRIPE_PRODUCT_ID_KEY_VERIFICATIONS: z.string(),
    STRIPE_PRODUCT_ID_RATELIMITS: z.string(),
    STRIPE_PRODUCT_ID_SUPPORT: z.string(),
  });
  const env = stripeEnv.parse(process.env);
  if (!env) {
    return null;
  }
  return {
    plan: {
      productId: env.STRIPE_PRODUCT_ID_PRO_PLAN,
      cents: "2500", // $25
    },
    verifications: {
      productId: env.STRIPE_PRODUCT_ID_KEY_VERIFICATIONS,
      tiers: [
        {
          firstUnit: 1,
          lastUnit: 150_000,
          centsPerUnit: null,
        },
        {
          firstUnit: 150_001,
          lastUnit: null,
          centsPerUnit: "0.01", // $0.0001 per verification or  $10 per 100k verifications
        },
      ],
    },
    ratelimits: {
      productId: env.STRIPE_PRODUCT_ID_RATELIMITS,
      tiers: [
        {
          firstUnit: 1,
          lastUnit: 2_500_000,
          centsPerUnit: null,
        },
        {
          firstUnit: 2_500_001,
          lastUnit: null,
          centsPerUnit: "0.001", // $0.00001 per ratelimit or  $1 per 100k verifications
        },
      ],
    },
  };
}
