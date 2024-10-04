import { createClient } from "@v1/db/server";
import { Apps } from "./apps";

export async function AppsServer({ user }) {
  const supabase = createClient();

  const { data } = await supabase
    .from("apps")
    .select("app_id, settings")
    .eq("team_id", user.team_id);

  return (
    <Apps
      installedApps={data?.map((app) => app.app_id) ?? []}
      user={user}
      settings={data}
    />
  );
}