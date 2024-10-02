"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = getUser;
exports.getPostsQuery = getPostsQuery;
exports.getPostByIdQuery = getPostByIdQuery;
exports.getUsersQuery = getUsersQuery;
exports.getUserWithPosts = getUserWithPosts;
exports.getCustomersQuery = getCustomersQuery;
exports.getCustomerByStripeIdQuery = getCustomerByStripeIdQuery;
exports.getSubscriptionsQuery = getSubscriptionsQuery;
exports.getSubscriptionWithUserAndPriceQuery = getSubscriptionWithUserAndPriceQuery;
exports.getPricesQuery = getPricesQuery;
exports.getActivePricesWithProductsQuery = getActivePricesWithProductsQuery;
exports.getProductsWithPricesQuery = getProductsWithPricesQuery;
exports.getUserQuery = getUserQuery;
const logger_1 = require("@v1/logger");
const server_1 = require("@v1/supabase/server");
const supabase = (0, server_1.createClient)();
/**
 * Retrieves the currently authenticated user.
 * @returns The user data or null if not authenticated.
 */
async function getUser(cookieStore) {
    const supabase = (0, server_1.createClient)(cookieStore);
    try {
        const { data: { user }, error, } = await supabase.auth.getUser();
        if (error)
            throw error;
        return user;
    }
    catch (error) {
        logger_1.logger.error("Error fetching user:", error);
        throw error;
    }
}
/**
 * Retrieves all posts.
 * @returns An array of Post objects.
 */
async function getPostsQuery() {
    try {
        const { data, error } = await supabase.from("posts").select("*");
        if (error)
            throw error;
        return data;
    }
    catch (error) {
        logger_1.logger.error("Error fetching posts:", error);
        throw error;
    }
}
/**
 * Retrieves a specific post by its ID.
 * @param id The UUID of the post.
 * @returns The Post object or null if not found.
 */
async function getPostByIdQuery(id) {
    try {
        const { data, error } = await supabase
            .from("posts")
            .select("*")
            .eq("id", id)
            .single();
        if (error)
            throw error;
        return data;
    }
    catch (error) {
        logger_1.logger.error(`Error fetching post with id ${id}:`, error);
        throw error;
    }
}
/**
 * Retrieves all users.
 * @returns An array of User objects.
 */
async function getUsersQuery() {
    try {
        const { data, error } = await supabase.from("users").select("*");
        if (error)
            throw error;
        return data;
    }
    catch (error) {
        logger_1.logger.error("Error fetching users:", error);
        throw error;
    }
}
/**
 * Retrieves a user by their ID, including their posts.
 * @param userId The UUID of the user.
 * @returns A UserWithPosts object or null if not found.
 */
async function getUserWithPosts(userId) {
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
        throw error;
    }
}
/**
 * Retrieves all customers.
 * @returns An array of Customer objects.
 */
async function getCustomersQuery() {
    try {
        const { data, error } = await supabase.from("customers").select("*");
        if (error)
            throw error;
        return data;
    }
    catch (error) {
        logger_1.logger.error("Error fetching customers:", error);
        throw error;
    }
}
/**
 * Retrieves a customer by their Stripe customer ID.
 * @param stripeCustomerId The Stripe customer ID.
 * @returns The Customer object or null if not found.
 */
async function getCustomerByStripeIdQuery(stripeCustomerId) {
    try {
        const { data, error } = await supabase
            .from("customers")
            .select("*")
            .eq("stripe_customer_id", stripeCustomerId)
            .single();
        if (error)
            throw error;
        return data;
    }
    catch (error) {
        logger_1.logger.error(`Error fetching customer with Stripe ID ${stripeCustomerId}:`, error);
        throw error;
    }
}
/**
 * Retrieves all subscriptions.
 * @returns An array of Subscription objects.
 */
async function getSubscriptionsQuery() {
    try {
        const { data, error } = await supabase.from("subscriptions").select("*");
        if (error)
            throw error;
        return data;
    }
    catch (error) {
        logger_1.logger.error("Error fetching subscriptions:", error);
        throw error;
    }
}
/**
 * Retrieves a subscription with associated user and price information.
 * @param subscriptionId The UUID of the subscription.
 * @returns A SubscriptionWithUserAndPrice object or null if not found.
 */
async function getSubscriptionWithUserAndPriceQuery(subscriptionId) {
    try {
        const { data, error } = await supabase
            .from("subscriptions")
            .select(`
        *,
        user:users (*),
        price:prices (*)
      `)
            .eq("id", subscriptionId)
            .single();
        if (error)
            throw error;
        return data;
    }
    catch (error) {
        logger_1.logger.error(`Error fetching subscription with user and price for id ${subscriptionId}:`, error);
        throw error;
    }
}
/**
 * Retrieves all prices.
 * @returns An array of Price objects.
 */
async function getPricesQuery() {
    try {
        const { data, error } = await supabase.from("prices").select("*");
        if (error)
            throw error;
        return data;
    }
    catch (error) {
        logger_1.logger.error("Error fetching prices:", error);
        throw error;
    }
}
/**
 * Retrieves all active prices with their associated products.
 * @returns An array of Price objects with associated Product information.
 */
async function getActivePricesWithProductsQuery() {
    try {
        const { data, error } = await supabase
            .from("prices")
            .select(`
        *,
        product:products (*)
      `)
            .eq("active", true);
        if (error)
            throw error;
        return data;
    }
    catch (error) {
        logger_1.logger.error("Error fetching active prices with products:", error);
        throw error;
    }
}
/**
 * Retrieves all products with their associated prices.
 * @returns An array of ProductWithPrices objects.
 */
async function getProductsWithPricesQuery() {
    try {
        const { data, error } = await supabase.from("products").select(`
        *,
        prices (*)
      `);
        if (error)
            throw error;
        return data;
    }
    catch (error) {
        logger_1.logger.error("Error fetching products with prices:", error);
        throw error;
    }
}
async function getUserQuery(userId) {
    try {
        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("id", userId)
            .single();
        if (error)
            throw error;
        return data;
    }
    catch (error) {
        logger_1.logger.error(`Error fetching user with id ${userId}:`, error);
        return null;
    }
}
