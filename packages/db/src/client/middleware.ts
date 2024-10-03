import type { CookieOptions } from "@supabase/ssr";
import type { NextRequest, NextResponse } from "next/server";

import { createServerClient } from "@supabase/ssr";

/**
 * Updates the user session in a Next.js middleware context.
 *
 * This function creates a Supabase server client and manages cookies for authentication.
 * It's designed to be used in Next.js middleware to handle server-side authentication.
 *
 * @param request - The incoming Next.js request object.
 * @param response - The outgoing Next.js response object.
 *
 * @returns A Promise that resolves to the modified NextResponse object.
 *
 * @throws Will throw an error if the Supabase URL or Anon Key environment variables are not set.
 *
 * @example
 * ```typescript
 * import { NextResponse } from 'next/server'
 * import type { NextRequest } from 'next/server'
 * import { updateSession } from './path/to/middleware'
 *
 * export async function middleware(request: NextRequest) {
 *   const response = NextResponse.next()
 *   return updateSession(request, response)
 * }
 * ```
 */
export async function updateSession(
  request: NextRequest,
  response: NextResponse,
): Promise<NextResponse> {
  const supabase = createServerClient(
    process.env["NEXT_PUBLIC_SUPABASE_URL"] as string,
    process.env["NEXT_PUBLIC_SUPABASE_ANON_KEY"] as string,
    {
      cookies: {
        /**
         * Retrieves a cookie value by name from the request.
         * @param name - The name of the cookie to retrieve.
         * @returns The value of the cookie, or undefined if not found.
         */
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        /**
         * Sets a cookie in both the request and response.
         * @param name - The name of the cookie to set.
         * @param value - The value to assign to the cookie.
         * @param options - Additional options for the cookie (e.g., expiration, path).
         */
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({ name, value, ...options });
          response.cookies.set({ name, value, ...options });
        },
        /**
         * Removes a cookie by setting its value to an empty string.
         * @param name - The name of the cookie to remove.
         * @param options - Additional options for the cookie removal.
         */
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: "", ...options });
          response.cookies.set({ name, value: "", ...options });
        },
      },
    },
  );

  // Refreshes the session and retrieves the current user
  await supabase.auth.getUser();

  return response;
}
