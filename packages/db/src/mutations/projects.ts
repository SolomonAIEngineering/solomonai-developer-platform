import { getCurrentUserTeamQuery } from "../queries";
import type { Client } from "../types";
import { Database } from "../types/db";

type TrackerProject = Database["public"]["Tables"]["tracker_projects"]["Row"];
type UpdateProjectParams =
  Database["public"]["Tables"]["tracker_projects"]["Update"];

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

/**
 * Updates an existing project.
 *
 * @param supabase - The Supabase client instance.
 * @param id - The ID of the project to update.
 * @param params - The parameters to update in the project.
 * @returns A promise that resolves to the updated project data.
 * @throws {Error} If the project update fails.
 */
export async function updateProject(
  supabase: Client,
  id: string,
  params: UpdateProjectParams,
): Promise<TrackerProject> {
  const { data, error } = await supabase
    .from("tracker_projects")
    .update(params)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Deletes a project.
 *
 * @param supabase - The Supabase client instance.
 * @param id - The ID of the project to delete.
 * @returns A promise that resolves to the deleted project data.
 * @throws {Error} If the project deletion fails.
 */
export async function deleteProject(
  supabase: Client,
  id: string,
): Promise<TrackerProject | null> {
  const { data, error } = await supabase
    .from("tracker_projects")
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Retrieves a project by its ID.
 *
 * @param supabase - The Supabase client instance.
 * @param id - The ID of the project to retrieve.
 * @returns A promise that resolves to the project data.
 * @throws {Error} If the project retrieval fails.
 */
export async function getProjectById(
  supabase: Client,
  id: string,
): Promise<TrackerProject | null> {
  const { data, error } = await supabase
    .from("tracker_projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

/**
 * Retrieves all projects for a team.
 *
 * @param supabase - The Supabase client instance.
 * @param teamId - The ID of the team.
 * @returns A promise that resolves to an array of project data.
 * @throws {Error} If the project retrieval fails.
 */
export async function getProjectsByTeam(
  supabase: Client,
  teamId: string,
): Promise<TrackerProject[]> {
  const { data, error } = await supabase
    .from("tracker_projects")
    .select("*")
    .eq("team_id", teamId);

  if (error) throw error;
  return data;
}

/**
 * Updates the status of a project.
 *
 * @param supabase - The Supabase client instance.
 * @param id - The ID of the project to update.
 * @param status - The new status of the project.
 * @returns A promise that resolves to the updated project data.
 * @throws {Error} If the status update fails.
 */
export async function updateProjectStatus(
  supabase: Client,
  id: string,
  status: Database["public"]["Enums"]["trackerStatus"],
): Promise<TrackerProject> {
  const { data, error } = await supabase
    .from("tracker_projects")
    .update({ status })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Updates the estimate of a project.
 *
 * @param supabase - The Supabase client instance.
 * @param id - The ID of the project to update.
 * @param estimate - The new estimate for the project.
 * @returns A promise that resolves to the updated project data.
 * @throws {Error} If the estimate update fails.
 */
export async function updateProjectEstimate(
  supabase: Client,
  id: string,
  estimate: number,
): Promise<TrackerProject> {
  const { data, error } = await supabase
    .from("tracker_projects")
    .update({ estimate })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Retrieves all completed projects for a team.
 *
 * @param supabase - The Supabase client instance.
 * @param teamId - The ID of the team.
 * @returns A promise that resolves to an array of completed project data.
 * @throws {Error} If the project retrieval fails.
 */
export async function getCompletedProjectsByTeam(
  supabase: Client,
  teamId: string,
): Promise<TrackerProject[]> {
  const { data, error } = await supabase
    .from("tracker_projects")
    .select("*")
    .eq("team_id", teamId)
    .eq("status", "completed");

  if (error) throw error;
  return data;
}

/**
 * Retrieves all in-progress projects for a team.
 *
 * @param supabase - The Supabase client instance.
 * @param teamId - The ID of the team.
 * @returns A promise that resolves to an array of in-progress project data.
 * @throws {Error} If the project retrieval fails.
 */
export async function getInProgressProjectsByTeam(
  supabase: Client,
  teamId: string,
): Promise<TrackerProject[]> {
  const { data, error } = await supabase
    .from("tracker_projects")
    .select("*")
    .eq("team_id", teamId)
    .eq("status", "in_progress");

  if (error) throw error;
  return data;
}
