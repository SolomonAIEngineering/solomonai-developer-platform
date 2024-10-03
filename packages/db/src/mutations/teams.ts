import { getCurrentUserTeamQuery } from "../queries";
import type { Client } from "../types";

/**
 * Updates the team information for the current user.
 *
 * @param supabase - The Supabase client instance.
 * @param data - An object containing the team data to be updated.
 * @returns A promise that resolves to the updated team data.
 * @throws Error if the current user's team cannot be retrieved or if the user is not associated with a team.
 */
export async function updateTeam(supabase: Client, data: any) {
  const res = await getCurrentUserTeamQuery(supabase);

  if (!res) {
    throw new Error("Failed to get current user team");
  }

  const userData = res.data;

  if (!userData?.team_id) {
    throw new Error("User is not associated with a team");
  }

  return supabase
    .from("teams")
    .update(data)
    .eq("id", userData?.team_id)
    .select("*")
    .maybeSingle();
}

type UpdateUserTeamRoleParams = {
  role: "owner" | "member";
  userId: string;
  teamId: string;
};

/**
 * Updates the role of a user within a team.
 *
 * @param supabase - The Supabase client instance.
 * @param params - An object containing the role update parameters.
 * @param params.role - The new role for the user ("owner" or "member").
 * @param params.userId - The ID of the user whose role is being updated.
 * @param params.teamId - The ID of the team in which the role is being updated.
 * @returns A promise that resolves to the updated user-team relationship data.
 */
export async function updateUserTeamRole(
  supabase: Client,
  params: UpdateUserTeamRoleParams,
) {
  const { role, userId, teamId } = params;

  return supabase
    .from("users_on_team")
    .update({
      role,
    })
    .eq("user_id", userId)
    .eq("team_id", teamId)
    .select()
    .single();
}

/**
 * Deletes a team from the database.
 *
 * @param supabase - The Supabase client instance.
 * @param teamId - The ID of the team to be deleted.
 * @returns A promise that resolves to the deletion result.
 */
export async function deleteTeam(supabase: Client, teamId: string) {
  return supabase.from("teams").delete().eq("id", teamId);
}

type DeleteTeamMemberParams = {
  userId: string;
  teamId: string;
};

/**
 * Removes a member from a team.
 *
 * @param supabase - The Supabase client instance.
 * @param params - An object containing the deletion parameters.
 * @param params.userId - The ID of the user to be removed from the team.
 * @param params.teamId - The ID of the team from which the user is being removed.
 * @returns A promise that resolves to the deleted user-team relationship data.
 */
export async function deleteTeamMember(
  supabase: Client,
  params: DeleteTeamMemberParams,
) {
  return supabase
    .from("users_on_team")
    .delete()
    .eq("user_id", params.userId)
    .eq("team_id", params.teamId)
    .select()
    .single();
}

type CreateTeamParams = {
  name: string;
};

/**
 * Creates a new team.
 *
 * @param supabase - The Supabase client instance.
 * @param params - An object containing the team creation parameters.
 * @param params.name - The name of the team to be created.
 * @returns A promise that resolves to the created team data.
 */
export async function createTeam(supabase: Client, params: CreateTeamParams) {
  const { data } = await supabase.rpc("create_team", {
    name: params.name,
  });

  return data;
}

type LeaveTeamParams = {
  userId: string;
  teamId: string;
};

/**
 * Removes a user from a team and updates their team association.
 *
 * @param supabase - The Supabase client instance.
 * @param params - An object containing the team leaving parameters.
 * @param params.userId - The ID of the user leaving the team.
 * @param params.teamId - The ID of the team the user is leaving.
 * @returns A promise that resolves to the deleted user-team relationship data.
 */
export async function leaveTeam(supabase: Client, params: LeaveTeamParams) {
  await supabase
    .from("users")
    .update({
      team_id: null,
    })
    .eq("id", params.userId)
    .eq("team_id", params.teamId);

  return supabase
    .from("users_on_team")
    .delete()
    .eq("team_id", params.teamId)
    .eq("user_id", params.userId)
    .select()
    .single();
}
