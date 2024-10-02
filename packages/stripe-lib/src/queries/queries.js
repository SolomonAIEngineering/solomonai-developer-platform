"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserSubscriptions = exports.getProducts = void 0;
const cache_1 = require("next/cache");
/**
 * Fetches the subscription data for the specified client.
 *
 * @param client - The Supabase client to use.
 * @returns The subscription data.
 */
const getSubscriptionQuery = async (client) => {
    const { data: subscription, error } = await client
        .from('subscriptions')
        .select('*, prices(*, products(*))')
        .in('status', ['trialing', 'active'])
        .maybeSingle();
    return subscription;
};
/**
 * Fetches the products data for the specified client.
 *
 * @param supabase - The Supabase client to use.
 * @returns The products data.
 */
const getProductsQuery = async (client) => {
    const { data: products, error } = await client
        .from('products')
        .select('*, prices(*)')
        .eq('active', true)
        .eq('prices.active', true)
        .order('metadata->index')
        .order('unit_amount', { foreignTable: 'prices' });
    return products;
};
/**
 * Fetches the user subscriptions for the specified client.
 *
 * @param userId - The ID of the user.
 * @param client - The Supabase client to use.
 * @param invalidateCache - Whether to invalidate the cache.
 * @returns The user subscriptions.
 */
const getUserSubscriptions = async (userId, client, invalidateCache = false) => {
    if (invalidateCache) {
        return getSubscriptionQuery(client);
    }
    return (0, cache_1.unstable_cache)(async () => {
        return getSubscriptionQuery(client);
    }, ['user', 'subscriptions', userId], {
        tags: [`user_subscriptions_${userId}`],
        revalidate: 180,
    })();
};
exports.getUserSubscriptions = getUserSubscriptions;
/**
 * Fetches the products data for the specified client.
 *
 * @param client - The Supabase client to use.
 * @param invalidateCache - Whether to invalidate the cache.
 * @returns The products data.
 */
const getProducts = async (client, invalidateCache = false) => {
    if (invalidateCache) {
        return getProductsQuery(client);
    }
    return (0, cache_1.unstable_cache)(async () => {
        return getProductsQuery(client);
    }, ['products'], {
        tags: ['products'],
        revalidate: 180,
    })();
};
exports.getProducts = getProducts;
