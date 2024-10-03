/**
 * This module sets up and exports various client instances for external services
 * used in the application's background jobs and API integrations.
 */

import { Resend } from "@trigger.dev/resend";
import { TriggerClient } from "@trigger.dev/sdk";
import { Supabase, SupabaseManagement } from "@trigger.dev/supabase";
import type { Database } from "@v1/db/types";

/**
 * The main Trigger.dev client instance for managing background jobs and workflows.
 * @type {TriggerClient}
 */
export const client = new TriggerClient({
  id: "solomon-ai-batch-jobs-background-22Wk",
  apiKey: process.env.TRIGGER_API_KEY,
  apiUrl: process.env.TRIGGER_API_URL,
});

/**
 * Supabase client instance for database operations.
 * This client is typed with the application's Database type for improved type safety.
 * @type {Supabase<Database>}
 */
export const supabase = new Supabase<Database>({
  id: "supabase",
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  supabaseKey: process.env.SUPABASE_SERVICE_KEY!,
});

/**
 * Supabase Management client for administrative operations.
 * This is not exported as it's used internally to create the `db` constant.
 * @type {SupabaseManagement}
 */
const supabaseManagement = new SupabaseManagement({
  id: "midday-supabase-management",
});

/**
 * A database client for Supabase, configured with the project's URL.
 * This client can be used for more advanced database operations or management tasks.
 * @type {ReturnType<SupabaseManagement['db']>}
 */
export const db = supabaseManagement.db(
  `https://${process.env.NEXT_PUBLIC_SUPABASE_ID}.supabase.co`,
);

/**
 * Resend client for email operations.
 * This client is used to send transactional emails from the application.
 * @type {Resend}
 */
export const resend = new Resend({
  id: "resend",
  apiKey: process.env.RESEND_API_KEY!,
});
