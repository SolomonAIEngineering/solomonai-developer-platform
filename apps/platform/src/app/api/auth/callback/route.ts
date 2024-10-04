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
export async function GET(req: NextRequest): Promise<NextResponse> {
  console.log("handleTeamCallback started");
  const cookieStore = cookies();
  const requestUrl = new URL(req.url);
  const code = requestUrl.searchParams.get("code");
  const client = requestUrl.searchParams.get("client");
  const returnTo = requestUrl.searchParams.get("return_to");
  const provider = requestUrl.searchParams.get("provider");
  const mfaSetupVisited = cookieStore.has(Cookies.MfaSetupVisited);

  console.log("Request parameters:", {
    code,
    client,
    returnTo,
    provider,
    mfaSetupVisited,
  });

  // Handle desktop client redirect
  if (client === "desktop") {
    console.log("Redirecting to desktop client");
    return NextResponse.redirect(`${requestUrl.origin}/verify?code=${code}`);
  }

  // Set preferred sign-in provider cookie if provided
  if (provider) {
    console.log("Setting preferred sign-in provider:", provider);
    cookieStore.set(Cookies.PreferredSignInProvider, provider, {
      expires: addYears(new Date(), 1),
    });
  }

  // Handle authentication code exchange and session creation
  if (code) {
    console.log("Exchanging code for session");
    const supabase = createClient(cookieStore as any);
    await supabase.auth.exchangeCodeForSession(code);

    const {
      data: { session },
    } = await getSession();

    console.log(
      "Session retrieved:",
      session ? "Session exists" : "No session",
    );

    if (session) {
      const userId = session.user.id;
      console.log("User ID:", userId);

      // Set up and track analytics
      console.log("Setting up analytics");
      const analytics = await setupAnalytics({
        userId,
        fullName: session?.user?.user_metadata?.full_name,
      });

      console.log("Tracking sign-in event");
      await analytics.track({
        event: LogEvents.SignIn.name,
        channel: LogEvents.SignIn.channel,
      });

      // Check if user belongs to any team
      console.log("Checking user team membership");
      const { count } = await supabase
        .from("users_on_team")
        .select("*", { count: "exact" })
        .eq("user_id", userId);

      console.log("User team count:", count);

      // Redirect to team creation if user has no teams and not accepting an invite
      if (count === 0 && !returnTo?.startsWith("teams/invite/")) {
        console.log("Redirecting to team creation");
        return NextResponse.redirect(`${requestUrl.origin}/teams/create`);
      }
    }
  }

  // Handle MFA setup if not visited before
  if (!mfaSetupVisited) {
    console.log("Setting MFA setup visited cookie");
    cookieStore.set(Cookies.MfaSetupVisited, "true", {
      expires: addYears(new Date(), 1),
    });

    console.log("Redirecting to MFA setup");
    return NextResponse.redirect(`${requestUrl.origin}/mfa/setup`);
  }

  // Handle return_to parameter if present
  if (returnTo) {
    console.log("Redirecting to return_to URL:", returnTo);
    return NextResponse.redirect(`${requestUrl.origin}/${returnTo}`);
  }

  // Default redirect to the origin
  console.log("Default redirect to origin");
  return NextResponse.redirect(requestUrl.origin);
}
