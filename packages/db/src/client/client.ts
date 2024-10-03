import type { Database } from "../types";

import { createBrowserClient } from "@supabase/ssr";

/**
 * Creates and returns a Supabase client for browser-side usage.
 *
 * @function
 * @returns {ReturnType<typeof createBrowserClient<Database>>} A Supabase client instance
 * configured for the browser environment.
 *
 * @description
 * This function initializes a Supabase client using environment variables
 * for the project URL and anonymous key. It's specifically designed for
 * client-side (browser) usage in a Next.js application.
 *
 * @example
 * const supabase = createClient();
 * const
 */

export const createClient = () =>
  createBrowserClient<Database>(
    process.env["NEXT_PUBLIC_SUPABASE_URL"]!,
    process.env["NEXT_PUBLIC_SUPABASE_ANON_KEY"]!,
  );
