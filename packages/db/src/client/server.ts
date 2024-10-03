import { cookies, headers } from "next/headers";

import type { CookieOptions } from "@supabase/ssr";
import type { Client, Database } from "../types";

import { createServerClient } from "@supabase/ssr";

const conWarn = console.warn;
const conLog = console.log;

const IGNORE_WARNINGS = [
  "Using the user object as returned from supabase.auth.getSession()",
];

console.warn = (...args) => {
  const match = args.find((arg) =>
    typeof arg === "string"
      ? IGNORE_WARNINGS.find((warning) => arg.includes(warning))
      : false,
  );
  if (!match) {
    conWarn(...args);
  }
};

console.log = (...args) => {
  const match = args.find((arg) =>
    typeof arg === "string"
      ? IGNORE_WARNINGS.find((warning) => arg.includes(warning))
      : false,
  );
  if (!match) {
    conLog(...args);
  }
};

/**
 * Options for creating a Supabase client.
 */
type CreateClientOptions = {
  /**
   * Whether to create an admin client with elevated privileges.
   * @default false
   */
  admin?: boolean;
  /**
   * The schema to use for the client.
   * @default "public"
   */
  schema?: "public" | "storage";
};

/**
 * Creates a Supabase client for server-side operations.
 *
 * This function sets up a Supabase client with the appropriate configuration
 * for server-side usage in a Next.js application. It handles cookie management
 * and sets up authentication based on whether an admin client is requested.
 *
 * @param options - Configuration options for the client.
 * @param options.admin - Whether to create an admin client. Defaults to false.
 * @param options.schema - The schema to use. Can be "public" or "storage".
 * @returns A configured Supabase client instance.
 *
 * @example
 * const supabase = createClient({ admin: true, schema: "public" });
 */
export const createClient = (options?: CreateClientOptions) => {
  const { admin = false, ...rest } = options ?? {};

  const cookieStore = cookies();

  const key = admin
    ? process.env["SUPABASE_SERVICE_KEY"]!
    : process.env["NEXT_PUBLIC_SUPABASE_ANON_KEY"]!;

  const auth = admin
    ? {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      }
    : {};

  return createServerClient<Database>(
    process.env["NEXT_PUBLIC_SUPABASE_URL"]!,
    key,
    {
      ...rest,
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {}
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {}
        },
      },
      auth,
      global: {
        headers: {
          // Pass user agent from browser
          "user-agent": headers().get("user-agent") as string,
        },
      },
    },
  );
};
