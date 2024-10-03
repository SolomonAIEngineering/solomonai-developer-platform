"use server";

import { createTeam, updateUser } from "@v1/db/mutations";
import { LogEvents } from "@v1/events/events";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { authActionClient } from "../safe-action";
import { createTeamSchema } from "../schema";

/**
 * Action to create a new team and update the user's team association.
 *
 * This server action performs the following steps:
 * 1. Creates a new team with the given name
 * 2. Updates the user's record with the new team ID
 * 3. Revalidates relevant cache tags
 * 4. Optionally redirects the user
 *
 * @remarks
 * This action is protected by authentication and uses a schema for input validation.
 * It also includes metadata for logging and tracking purposes.
 *
 * @param options - The input options for creating a team
 * @param options.parsedInput.name - The name of the team to be created
 * @param options.parsedInput.redirectTo - Optional URL to redirect after team creation
 * @param options.ctx.supabase - The authenticated Supabase client instance
 *
 * @returns The ID of the newly created team, or undefined if the user update fails
 *
 * @throws Will throw an error if team creation or user update fails
 */
export const createTeamAction = authActionClient
  .schema(createTeamSchema)
  .metadata({
    name: "create-team",
    track: {
      event: LogEvents.CreateTeam.name,
      channel: LogEvents.CreateTeam.channel,
    },
  })
  .action(async ({ parsedInput: { name, redirectTo }, ctx: { supabase } }) => {
    // Create the team and get the new team ID
    const team_id = await createTeam(supabase, { name });

    // Update the user's record with the new team ID
    const user = await updateUser(supabase, { team_id });

    // If user update failed, return early
    if (!user?.data) {
      return;
    }

    // Revalidate cache tags for user and teams
    revalidateTag(`user_${user.data.id}`);
    revalidateTag(`teams_${user.data.id}`);

    // Redirect if a redirect URL was provided
    if (redirectTo) {
      redirect(redirectTo);
    }

    // Return the new team ID
    return team_id;
  });
