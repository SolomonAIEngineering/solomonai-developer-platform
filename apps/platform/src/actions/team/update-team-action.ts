"use server";

import { updateTeam } from "@v1/db/mutations";
import {
  revalidatePath as revalidatePathFunc,
  revalidateTag,
} from "next/cache";
import { authActionClient } from "../safe-action";
import { updateTeamSchema } from "../schema";

/**
 * Action to update a team's information.
 *
 * This server action is authenticated and uses a schema for input validation.
 * It updates the team's data, revalidates the cache if necessary, and updates
 * the user's cache tag.
 *
 * @function
 * @async
 * @param {Object} options - The options object.
 * @param {Object} options.parsedInput - The parsed and validated input data.
 * @param {string} [options.parsedInput.revalidatePath] - Optional path to revalidate after update.
 * @param {Object} options.parsedInput.data - The team data to update.
 * @param {Object} options.ctx - The context object.
 * @param {Object} options.ctx.user - The authenticated user object.
 * @param {Object} options.ctx.supabase - The Supabase client instance.
 * @returns {Promise<Object>} The updated team object.
 * @throws Will throw an error if the team update fails.
 */
export const updateTeamAction = authActionClient
  .schema(updateTeamSchema)
  .metadata({
    name: "update-team",
  })
  .action(
    async ({
      parsedInput: { revalidatePath, ...data },
      ctx: { user, supabase },
    }) => {
      // Update the team with the provided data
      const team = await updateTeam(supabase, data);

      // Revalidate the specified path if provided
      if (revalidatePath) {
        revalidatePathFunc(revalidatePath);
      }

      // Revalidate the user's cache tag
      revalidateTag(`user_${user.data?.id}`);

      return team;
    },
  );
