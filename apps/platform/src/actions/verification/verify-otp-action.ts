"use server";

import { Cookies } from "@/utils/constants";
import { createClient } from "@v1/db/server";
import { addYears } from "date-fns";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { actionClient } from "../safe-action";

/**
 * The schema for verifying a one-time password (OTP) for email authentication.
 */
export const verifyOtpSchema = z.object({
  token: z.string(),
  email: z.string(),
});

/**
 * Verifies a one-time password (OTP) for email authentication.
 *
 * This server action performs the following steps:
 * 1. Validates the input using the verifyOtpSchema.
 * 2. Verifies the OTP with Supabase authentication.
 * 3. Sets a cookie to remember the user's preferred sign-in method.
 * 4. Redirects the user to the home page upon successful verification.
 *
 * @remarks
 * This action is created using the actionClient from next-safe-action,
 * which provides type-safe server actions with input validation.
 *
 * @param options - The action input options.
 * @param options.parsedInput - The parsed and validated input.
 * @param options.parsedInput.email - The user's email address.
 * @param options.parsedInput.token - The OTP token to verify.
 *
 * @throws Will throw an error if OTP verification fails.
 *
 * @returns A Promise that resolves when the OTP is verified and the user is redirected.
 *          The function doesn't explicitly return a value due to the redirect.
 */
export const verifyOtpAction = actionClient
  .schema(verifyOtpSchema)
  .action(async ({ parsedInput: { email, token } }) => {
    // Create a Supabase client for authentication
    const supabase = createClient();

    // Verify the OTP with Supabase
    await supabase.auth.verifyOtp({
      email,
      token,
      type: "email",
    });

    // Set a cookie to remember the user's preferred sign-in method
    cookies().set(Cookies.PreferredSignInProvider, "otp", {
      expires: addYears(new Date(), 1),
    });

    // Redirect the user to the home page
    redirect("/");
  });
