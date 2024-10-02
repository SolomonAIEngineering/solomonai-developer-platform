"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = updateUser;
exports.updateUserProfile = updateUserProfile;
exports.deletePost = deletePost;
exports.createPost = createPost;
const logger_1 = require("@v1/logger");
const server_1 = require("@v1/supabase/server");
async function updateUser(userId, data) {
    const supabase = (0, server_1.createClient)();
    try {
        const result = await supabase.from("users").update(data).eq("id", userId);
        return result;
    }
    catch (error) {
        logger_1.logger.error(error);
        throw error;
    }
}
/**
 * Updates a user's profile information.
 * @param userId The UUID of the user to update.
 * @param updates The partial User object containing the fields to update.
 * @returns The updated User object.
 */
async function updateUserProfile(userId, updates) {
    const supabase = (0, server_1.createClient)();
    try {
        const { data, error } = await supabase
            .from("users")
            .update(updates)
            .eq("id", userId)
            .select()
            .single();
        if (error)
            throw error;
        return data;
    }
    catch (error) {
        logger_1.logger.error(`Error updating user profile for id ${userId}:`, error);
        throw error;
    }
}
/**
 * Deletes a post by its ID.
 * @param postId The UUID of the post to delete.
 * @returns True if the post was successfully deleted, false otherwise.
 */
async function deletePost(postId) {
    const supabase = (0, server_1.createClient)();
    try {
        const { error } = await supabase.from("posts").delete().eq("id", postId);
        if (error)
            throw error;
        return true;
    }
    catch (error) {
        logger_1.logger.error(`Error deleting post with id ${postId}:`, error);
        return false;
    }
}
/**
 * Creates a new post.
 * @param post The post data to insert.
 * @returns The created Post object.
 */
async function createPost(post) {
    const supabase = (0, server_1.createClient)();
    try {
        const { data, error } = await supabase
            .from("posts")
            .insert(post)
            .select()
            .single();
        if (error)
            throw error;
        return data;
    }
    catch (error) {
        logger_1.logger.error("Error creating post:", error);
        throw error;
    }
}
