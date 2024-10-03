import { getTeamUser } from "@v1/db/cached-queries";
import { getTeamMembersQuery } from "@v1/db/queries";
import { createClient } from "@v1/db/server";
import { DataTable } from "./table";

export async function MembersTable() {
  const supabase = createClient();
  const user = await getTeamUser();
  const teamMembers = await getTeamMembersQuery(supabase, user.data.team_id);

  return <DataTable data={teamMembers?.data} currentUser={user?.data} />;
}
