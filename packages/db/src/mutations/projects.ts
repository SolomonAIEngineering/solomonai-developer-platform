import { getCurrentUserTeamQuery } from "../queries";
import type { Client } from "../types";

/**
 * Parameters for creating a new project.
 */
type CreateProjectParams = {
  /** The name of the project. */
  name: string;
  /** An optional description of the project. */
  description?: string;
  /** An optional estimate of the project's duration or cost. */
  estimate?: number;
  /** Indicates whether the project is billable. Default is false if not provided. */
  billable?: boolean;
  /** The hourly rate for the project, if applicable. */
  rate?: number;
  /** The currency code for the project's rate (e.g., 'USD', 'EUR'). */
  currency?: string;
};

/**
 * Creates a new project for the current user's team.
 *
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for creating the project.
 * @returns A promise that resolves to the newly created project data.
 * @throws {Error} If the current user's team cannot be retrieved or the user is not associated with a team.
 */
export async function createProject(
  supabase: Client,
  params: CreateProjectParams,
) {
  const res = await getCurrentUserTeamQuery(supabase);

  if (!res) {
    throw new Error("Failed to get current user team");
  }

  const userData = res.data;

  if (!userData?.team_id) {
    throw new Error("User is not associated with a team");
  }

  return supabase
    .from("tracker_projects")
    .insert({
      ...params,
      team_id: userData.team_id,
    })
    .select();
}