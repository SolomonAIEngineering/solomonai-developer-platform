"use server";

import { getSession } from "@v1/db/cached-queries";
import { createClient } from "@v1/db/server";
import { LogEvents } from "@v1/events/events";
import { setupAnalytics } from "@v1/events/server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

/**
 * Performs the sign-out action for the current user.
 *
 * This server-side function handles the following operations:
 * 1. Signs out the user from the Supabase client.
 * 2. Logs the sign-out event for analytics.
 * 3. Revalidates the user's cache tag.
 * 4. Redirects the user to the login page.
 *
 * @async
 * @function
 * @throws {Error} If there's an issue with Supabase signOut, analytics setup, or Next.js operations.
 * @returns {Promise<never>} The function doesn't actually return; it redirects to the login page.
 */
export async function signOutAction(): Promise<never> {
  const supabase = createClient();
  const {
    data: { session },
  } = await getSession();

  await supabase.auth.signOut({
    scope: "local",
  });

  const analytics = await setupAnalytics({
    userId: session?.user.id,
    fullName: session?.user.user_metadata?.full_name,
  });

  analytics.track({
    event: LogEvents.SignOut.name,
    channel: LogEvents.SignOut.channel,
  });

  revalidateTag(`user_${session?.user.id}`);

  return redirect("/login");
}
