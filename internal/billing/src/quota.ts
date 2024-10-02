/**
 * Represents the quota limits for various features in the billing system.
 * @interface
 */
export type Quotas = {
  /** The maximum number of active keys allowed. */
  maxActiveKeys: number;
  /** The maximum number of verifications permitted. */
  maxVerifications: number;
  /** The maximum number of rate limits that can be set. */
  maxRatelimits: number;
};

/**
 * Defines the quota limits for different subscription tiers.
 * @constant
 * @type {Record<string, Quotas>}
 *
 * @property {Quotas} free - Quota limits for the free tier.
 * @property {number} free.maxActiveKeys - Maximum active keys for free tier (1000).
 * @property {number} free.maxVerifications - Maximum verifications for free tier (2,500).
 * @property {number} free.maxRatelimits - Maximum rate limits for free tier (100,000).
 *
 * @example
 * // Accessing quota limits for the free tier
 * const freeQuota = QUOTA.free;
 * console.log(freeQuota.maxActiveKeys); // Output: 1000
 */
export const QUOTA = {
  free: {
    maxActiveKeys: 1000,
    maxVerifications: 2_500,
    maxRatelimits: 100_000,
  },
} satisfies Record<string, Quotas>;
