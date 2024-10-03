"use server";

import { deleteTeam } from "@v1/db/mutations";
import { LogEvents } from "@v1/events/events";
import { revalidateTag } from "next/cache";
import { authActionClient } from "../safe-action";
import { deleteTeamSchema } from "../schema";

/**
 * Action to delete a team.
 *
 * This server action is authenticated and uses a schema for input validation.
 * It deletes the specified team and revalidates related cache tags.
 *
 * @remarks
 * This action is tracked using the LogEvents.DeleteTeam event.
 *
 * @param parsedInput - The validated input containing the team ID.
 * @param parsedInput.teamId - The ID of the team to be deleted.
 * @param ctx - The context object containing user and Supabase client.
 * @param ctx.user - The authenticated user object.
 * @param ctx.supabase - The Supabase client for database operations.
 *
 * @returns A promise that resolves to the data returned by the deleteTeam function.
 *
 * @throws Will throw an error if the team deletion fails or if the user is not authorized.
 */
export const deleteTeamAction = authActionClient
  .schema(deleteTeamSchema)
  .metadata({
    name: "delete-team",
    track: {
      event: LogEvents.DeleteTeam.name,
      channel: LogEvents.DeleteTeam.channel,
    },
  })
  .action(async ({ parsedInput: { teamId }, ctx: { user, supabase } }) => {
    const { data } = await deleteTeam(supabase, teamId);

    revalidateTag(`user_${user.data?.id}`);
    revalidateTag(`teams_${user.data?.id}`);

    return data;
  });
