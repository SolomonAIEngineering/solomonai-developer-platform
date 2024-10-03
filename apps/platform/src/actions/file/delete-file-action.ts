"use server";

import { remove } from "@v1/db/storage";
import { LogEvents } from "@v1/events/events";
import { logger } from "@v1/utils/logger";
import { revalidatePath } from "next/cache";
import { authActionClient } from "../safe-action";
import { deleteFileSchema } from "../schema";

/**
 * Action to delete a file from the vault storage.
 *
 * This server action is responsible for deleting a file from the team's vault storage.
 * It uses the authenticated action client to ensure the user has the necessary permissions.
 *
 * @remarks
 * The action is defined using the `authActionClient` which applies the following:
 * - Schema validation using `deleteFileSchema`
 * - Metadata for tracking and naming the action
 * - Authentication and context injection
 *
 * @param parsedInput - The validated input containing the file path and id
 * @param ctx - The context object containing user and Supabase client information
 *
 * @returns A promise that resolves to an object containing the success status and the deleted file id
 * @throws Will throw an error if the file deletion fails
 */
export const deleteFileAction = authActionClient
  .schema(deleteFileSchema)
  .metadata({
    name: "delete-file",
    track: {
      event: LogEvents.DeleteFile.name,
      channel: LogEvents.DeleteFile.channel,
    },
  })
  .action(async ({ parsedInput: { path, id }, ctx: { user, supabase } }) => {
    const teamId = user.team_id as string;
    try {
      // Log the attempt to delete the file
      logger.info(
        `Attempting to delete file: ${id} at path: ${path.join("/")}`,
      );

      // Perform the file deletion
      await remove(supabase, {
        bucket: "vault",
        path: [teamId, ...path],
      });

      // Log successful deletion
      logger.info(`File deleted successfully: ${id}`);

      // Revalidate affected paths to update the UI
      revalidatePath("/vault");
      revalidatePath(`/vault/${path[0]}`); // Revalidate the specific folder path

      // Return success status and file id
      return { success: true, id };
    } catch (error) {
      // Log the error for debugging purposes
      logger.error(`Error deleting file: ${id}`, error);

      // Throw a more informative error
      throw new Error(`Failed to delete file: ${error.message}`);
    }
  });
