// import { handleTeamCallback } from '@v1/auth';

/**
 * Handles the authentication callback for team-based authentication.
 *
 * This module exports the `handleTeamCallback` function as the GET handler
 * for the `/api/auth/callback` route in a Next.js application.
 *
 * @function GET
 * @async
 * @param {NextApiRequest} req - The incoming HTTP request object.
 * @param {NextApiResponse} res - The HTTP response object.
 * @returns {Promise<void>} A promise that resolves when the callback is handled.
 *
 * @description
 * The `handleTeamCallback` function is responsible for processing the
 * authentication callback after a user has attempted to authenticate with
 * their team credentials. It typically performs the following tasks:
 *
 * 1. Validates the incoming request and extracts necessary parameters.
 * 2. Verifies the authentication state and tokens.
 * 3. Creates or updates user and team information in the database.
 * 4. Sets appropriate cookies or headers for maintaining the session.
 * 5. Redirects the user to the appropriate page based on the authentication result.
 *
 * @example
 * // This function is automatically called by Next.js when a GET request
 * // is made to /api/auth/callback
 * // The implementation details are handled in the @v1/auth package
 *
 * @see {@link https://nextjs.org/docs/api-routes/introduction} for more information on Next.js API routes.
 * @see The `@v1/auth` package documentation for details on the `handleTeamCallback` implementation.
 */
import { Cookies } from "@/utils/constants";
import { getSession } from "@v1/db/cached-queries";
import { createClient } from "@v1/db/server";
import { LogEvents } from "@v1/events/events";
import { setupAnalytics } from "@v1/events/server";
import { addYears } from "date-fns";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const preferredRegion = ["fra1", "sfo1", "iad1"];

/**
 * Handles the GET request for the authentication callback.
 * This function manages the authentication flow, including code exchange,
 * session creation, analytics tracking, and various redirections based on
 * the user's state and the request parameters.
 *
 * @param {NextRequest} req - The incoming request object.
 * @returns {Promise<NextResponse>} A promise that resolves to a NextResponse object,
 *                                  typically containing a redirect.
 *
 * @throws Will throw an error if there are issues with Supabase client operations
 *         or analytics tracking.
 *
 * @example
 * // This function is typically called automatically by Next.js routing
 * // when a GET request is made to the callback URL.
 * export const GET = callbackTeamHandler;
 */
export async function handleTeamCallback(req: NextRequest): Promise<NextResponse> {
  const cookieStore = cookies();
  const requestUrl = new URL(req.url);
  const code = requestUrl.searchParams.get("code");
  const client = requestUrl.searchParams.get("client");
  const returnTo = requestUrl.searchParams.get("return_to");
  const provider = requestUrl.searchParams.get("provider");
  const mfaSetupVisited = cookieStore.has(Cookies.MFA_SETUP_VISITED);

  // Handle desktop client redirect
  if (client === "desktop") {
    return NextResponse.redirect(`${requestUrl.origin}/verify?code=${code}`);
  }

  // Set preferred sign-in provider cookie if provided
  if (provider) {
    cookieStore.set(Cookies.PREFERRED_SIGN_IN_PROVIDER, provider, {
      expires: addYears(new Date(), 1),
    });
  }

  // Handle authentication code exchange and session creation
  if (code) {
    const supabase = createClient(cookieStore as any);
    await supabase.auth.exchangeCodeForSession(code);

    const {
      data: { session },
    } = await getSession();

    if (session) {
      const userId = session.user.id;

      // Set up and track analytics
      const analytics = await setupAnalytics({
        userId,
        fullName: session?.user?.user_metadata?.full_name,
      });

      await analytics.track({
        event: LogEvents.SignIn.name,
        channel: LogEvents.SignIn.channel,
      });

      // Check if user belongs to any team
      const { count } = await supabase
        .from("users_on_team")
        .select("*", { count: "exact" })
        .eq("user_id", userId);

      // Redirect to team creation if user has no teams and not accepting an invite
      if (count === 0 && !returnTo?.startsWith("teams/invite/")) {
        return NextResponse.redirect(`${requestUrl.origin}/teams/create`);
      }
    }
  }

  // Handle MFA setup if not visited before
  if (!mfaSetupVisited) {
    cookieStore.set(Cookies.MFA_SETUP_VISITED, "true", {
      expires: addYears(new Date(), 1),
    });

    return NextResponse.redirect(`${requestUrl.origin}/mfa/setup`);
  }

  // Handle return_to parameter if present
  if (returnTo) {
    return NextResponse.redirect(`${requestUrl.origin}/${returnTo}`);
  }

  // Default redirect to the origin
  return NextResponse.redirect(requestUrl.origin);
}
