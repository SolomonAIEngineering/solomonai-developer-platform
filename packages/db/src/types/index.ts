import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "../types/db";

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Client = SupabaseClient<Database>;
export type PublicSchemaClient = SupabaseClient<Database, "public", PublicSchema>;

export * from "./db";
export * from "./individual_types";

