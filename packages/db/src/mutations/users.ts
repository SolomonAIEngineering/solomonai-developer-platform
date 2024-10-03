import { getCurrentUserTeamQuery, getUserInviteQuery } from "../queries";
import type { Client } from "../types";

/**
 * Updates the current user's information in the database.
 *
 * @param supabase - The Supabase client instance.
 * @param data - An object containing the user data to be updated.
 * @returns A promise that resolves to the updated user data or undefined if no session is found.
 * @throws Will throw an error if the update operation fails.
 */
export async function updateUser(supabase: Client, data: any) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.user) {
    return;
  }

  return supabase
    .from("users")
    .update(data)
    .eq("id", session.user.id)
    .select()
    .single();
}

/**
 * Deletes the current user's account and associated data.
 *
 * @param supabase - The Supabase client instance.
 * @returns A promise that resolves to the deleted user's ID or undefined if no session is found.
 * @throws Will throw an error if any of the delete operations fail.
 */
export async function deleteUser(supabase: Client) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.user) {
    return;
  }

  await Promise.all([
    supabase.auth.admin.deleteUser(session.user.id),
    supabase.from("users").delete().eq("id", session.user.id),
    supabase.auth.signOut(),
  ]);

  return session.user.id;
}

/**
 * Adds a user to a team using an invite code.
 *
 * @param supabase - The Supabase client instance.
 * @param code - The invite code for joining the team.
 * @returns A promise that resolves to the updated user data if successful, or null if the invite is invalid.
 * @throws Will throw an error if adding the user to the team fails.
 */
export async function joinTeamByInviteCode(supabase: Client, code: string) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.user.email) {
    return;
  }

  const { data: inviteData } = await getUserInviteQuery(supabase, {
    code,
    email: session.user.email,
  });

  if (inviteData) {
    const { data, error } = await supabase
      .from("users_on_team")
      .insert({
        user_id: session.user.id as string,
        team_id: inviteData?.team_id as string,
        role: inviteData.role,
      })
      .single();

    if (error) {
      console.error("Error inserting user into team:", error);
      throw new Error("Failed to add user to team");
    }

    const { data: userData } = await supabase
      .from("users")
      .update({
        team_id: inviteData?.team_id,
      })
      .eq("id", session.user.id)
      .select()
      .single();

    await supabase.from("user_invites").delete().eq("code", code);

    return userData;
  }

  return null;
}