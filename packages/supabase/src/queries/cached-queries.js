"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCachedAuthenticatedUser = exports.getCachedUser = exports.getCachedProductsWithPrices = exports.getCachedActivePricesWithProducts = exports.getCachedPrices = exports.getCachedSubscriptionWithUserAndPrice = exports.getCachedSubscriptions = exports.getCachedCustomerByStripeId = exports.getCachedCustomers = exports.getCachedUsers = exports.getCachedPostById = exports.getCachedPosts = exports.getCachedUserWithPosts = exports.getCachedUserSubscriptions = void 0;
require("server-only");
const cache_1 = require("next/cache");
const react_1 = require("react");
const server_1 = require("@v1/supabase/server");
const logger_1 = require("@v1/logger");
const queries_1 = require("./queries");
const supabase = (0, server_1.createClient)();
/**
 * Cached function to get user subscriptions
 * @param invalidateCache Whether to bypass the cache
 * @returns User subscriptions or null if user is not authenticated
 */
exports.getCachedUserSubscriptions = (0, react_1.cache)(async (invalidateCache = false) => {
    const user = await (0, queries_1.getUser)();
    const userId = user?.id;
    if (!userId) {
        return null;
    }
    if (invalidateCache) {
        return getUserSubscriptionsQuery(userId);
    }
    return (0, cache_1.unstable_cache)(async () => getUserSubscriptionsQuery(userId), ["user", "subscriptions", userId], {
        tags: [`user_subscriptions_${userId}`],
        revalidate: 180,
    })();
});
async function getUserSubscriptionsQuery(userId) {
    try {
        const { data, error } = await supabase
            .from("subscriptions")
            .select(`
        *,
        user:users (*),
        price:prices (*, product:products (*))
      `)
            .eq("user_id", userId);
        if (error)
            throw error;
        return data;
    }
    catch (error) {
        logger_1.logger.error(`Error fetching subscriptions for user ${userId}:`, error);
        return null;
    }
}
/**
 * Cached function to get user with posts
 * @param userId The user ID
 * @param invalidateCache Whether to bypass the cache
 * @returns User with posts or null if not found
 */
exports.getCachedUserWithPosts = (0, react_1.cache)(async (userId, invalidateCache = false) => {
    if (invalidateCache) {
        return getUserWithPostsQuery(userId);
    }
    return (0, cache_1.unstable_cache)(async () => getUserWithPostsQuery(userId), ["user", "posts", userId], {
        tags: [`user_posts_${userId}`],
        revalidate: 60,
    })();
});
async function getUserWithPostsQuery(userId) {
    try {
        const { data, error } = await supabase
            .from("users")
            .select(`
        *,
        posts (*)
      `)
            .eq("id", userId)
            .single();
        if (error)
            throw error;
        return data;
    }
    catch (error) {
        logger_1.logger.error(`Error fetching user with posts for id ${userId}:`, error);
        return null;
    }
}
/**
 * Cached function to get all posts
 * @param invalidateCache Whether to bypass the cache
 * @returns Array of posts
 */
exports.getCachedPosts = (0, react_1.cache)(async (invalidateCache = false) => {
    if (invalidateCache) {
        return (0, queries_1.getPostsQuery)();
    }
    return (0, cache_1.unstable_cache)(async () => (0, queries_1.getPostsQuery)(), ["posts"], {
        tags: ["all_posts"],
        revalidate: 300,
    })();
});
/**
 * Cached function to get a specific post by ID
 * @param postId The post ID
 * @param invalidateCache Whether to bypass the cache
 * @returns Post object or null if not found
 */
exports.getCachedPostById = (0, react_1.cache)(async (postId, invalidateCache = false) => {
    if (invalidateCache) {
        return (0, queries_1.getPostByIdQuery)(postId);
    }
    return (0, cache_1.unstable_cache)(async () => (0, queries_1.getPostByIdQuery)(postId), ["post", postId], {
        tags: [`post_${postId}`],
        revalidate: 60,
    })();
});
/**
 * Cached function to get all users
 * @param invalidateCache Whether to bypass the cache
 * @returns Array of users
 */
exports.getCachedUsers = (0, react_1.cache)(async (invalidateCache = false) => {
    if (invalidateCache) {
        return (0, queries_1.getUsersQuery)();
    }
    return (0, cache_1.unstable_cache)(async () => (0, queries_1.getUsersQuery)(), ["users"], {
        tags: ["all_users"],
        revalidate: 300,
    })();
});
/**
 * Cached function to get all customers
 * @param invalidateCache Whether to bypass the cache
 * @returns Array of customers
 */
exports.getCachedCustomers = (0, react_1.cache)(async (invalidateCache = false) => {
    if (invalidateCache) {
        return (0, queries_1.getCustomersQuery)();
    }
    return (0, cache_1.unstable_cache)(async () => (0, queries_1.getCustomersQuery)(), ["customers"], {
        tags: ["all_customers"],
        revalidate: 300,
    })();
});
/**
 * Cached function to get a customer by Stripe ID
 * @param stripeCustomerId The Stripe customer ID
 * @param invalidateCache Whether to bypass the cache
 * @returns Customer object or null if not found
 */
exports.getCachedCustomerByStripeId = (0, react_1.cache)(async (stripeCustomerId, invalidateCache = false) => {
    if (invalidateCache) {
        return (0, queries_1.getCustomerByStripeIdQuery)(stripeCustomerId);
    }
    return (0, cache_1.unstable_cache)(async () => (0, queries_1.getCustomerByStripeIdQuery)(stripeCustomerId), ["customer", "stripe", stripeCustomerId], {
        tags: [`customer_stripe_${stripeCustomerId}`],
        revalidate: 60,
    })();
});
/**
 * Cached function to get all subscriptions
 * @param invalidateCache Whether to bypass the cache
 * @returns Array of subscriptions
 */
exports.getCachedSubscriptions = (0, react_1.cache)(async (invalidateCache = false) => {
    if (invalidateCache) {
        return (0, queries_1.getSubscriptionsQuery)();
    }
    return (0, cache_1.unstable_cache)(async () => (0, queries_1.getSubscriptionsQuery)(), ["subscriptions"], {
        tags: ["all_subscriptions"],
        revalidate: 300,
    })();
});
/**
 * Cached function to get a subscription with user and price information
 * @param subscriptionId The subscription ID
 * @param invalidateCache Whether to bypass the cache
 * @returns SubscriptionWithUserAndPrice object or null if not found
 */
exports.getCachedSubscriptionWithUserAndPrice = (0, react_1.cache)(async (subscriptionId, invalidateCache = false) => {
    if (invalidateCache) {
        return (0, queries_1.getSubscriptionWithUserAndPriceQuery)(subscriptionId);
    }
    return (0, cache_1.unstable_cache)(async () => (0, queries_1.getSubscriptionWithUserAndPriceQuery)(subscriptionId), ["subscription", "user", "price", subscriptionId], {
        tags: [`subscription_${subscriptionId}`],
        revalidate: 60,
    })();
});
/**
 * Cached function to get all prices
 * @param invalidateCache Whether to bypass the cache
 * @returns Array of prices
 */
exports.getCachedPrices = (0, react_1.cache)(async (invalidateCache = false) => {
    if (invalidateCache) {
        return (0, queries_1.getPricesQuery)();
    }
    return (0, cache_1.unstable_cache)(async () => (0, queries_1.getPricesQuery)(), ["prices"], {
        tags: ["all_prices"],
        revalidate: 3600,
    })();
});
/**
 * Cached function to get all active prices with their associated products
 * @param invalidateCache Whether to bypass the cache
 * @returns Array of Price objects with associated Product information
 */
exports.getCachedActivePricesWithProducts = (0, react_1.cache)(async (invalidateCache = false) => {
    if (invalidateCache) {
        return (0, queries_1.getActivePricesWithProductsQuery)();
    }
    return (0, cache_1.unstable_cache)(async () => (0, queries_1.getActivePricesWithProductsQuery)(), ["active_prices", "products"], {
        tags: ["active_prices_with_products"],
        revalidate: 3600,
    })();
});
/**
 * Cached function to get all products with prices
 * @param invalidateCache Whether to bypass the cache
 * @returns Array of products with prices
 */
exports.getCachedProductsWithPrices = (0, react_1.cache)(async (invalidateCache = false) => {
    if (invalidateCache) {
        return (0, queries_1.getProductsWithPricesQuery)();
    }
    return (0, cache_1.unstable_cache)(async () => (0, queries_1.getProductsWithPricesQuery)(), ["products", "prices"], {
        tags: ["products_with_prices"],
        revalidate: 3600,
    })();
});
/**
 * Cached function to get a user by ID
 * @param userId The user ID
 * @param invalidateCache Whether to bypass the cache
 * @returns User object or null if not found
 */
exports.getCachedUser = (0, react_1.cache)(async (userId, invalidateCache = false) => {
    if (invalidateCache) {
        return (0, queries_1.getUserQuery)(userId);
    }
    return (0, cache_1.unstable_cache)(async () => (0, queries_1.getUserQuery)(userId), ["user", userId], {
        tags: [`user_${userId}`],
        revalidate: 60,
    })();
});
/**
 * Cached function to get the authenticated user
 * @param invalidateCache Whether to bypass the cache
 * @returns User object or null if not found
 */
exports.getCachedAuthenticatedUser = (0, react_1.cache)(async (invalidateCache = false) => {
    if (invalidateCache) {
        return (0, queries_1.getUser)();
    }
    return (0, cache_1.unstable_cache)(async () => (0, queries_1.getUser)(), ["user"], {
        revalidate: 3600,
    });
});
