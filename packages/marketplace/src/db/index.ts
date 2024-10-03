import { createClient } from "@v1/db/server";

export async function createApp(params: any) {
  const client = createClient({ admin: true });

  const { data, error } = await client
    .from("apps")
    .upsert(params)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
