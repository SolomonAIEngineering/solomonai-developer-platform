"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { authActionClient } from "../safe-action";

// The schema for the unenrollMfaAction.
export const unenrollMfaSchema = z.object({
  factorId: z.string(),
});

/**
 * Action to unenroll a user from Multi-Factor Authentication (MFA).
 *
 * This server action is responsible for removing an MFA factor from a user's account.
 * It uses the Supabase authentication client to perform the unenrollment.
 *
 * @remarks
 * This action is protected by the `authActionClient`, which handles
 * authentication and input validation.
 *
 * @param options - The options object containing the parsed input and context.
 * @param options.parsedInput - The validated input based on the `unenrollMfaSchema`.
 * @param options.parsedInput.factorId - The unique identifier of the MFA factor to be removed.
 * @param options.ctx - The context object provided by the `authActionClient`.
 * @param options.ctx.supabase - The Supabase client instance for authentication operations.
 *
 * @throws {Error} If the Supabase unenrollment operation fails.
 *
 * @returns The data returned by the Supabase unenrollment operation.
 */
export const unenrollMfaAction = authActionClient
  .schema(unenrollMfaSchema)
  .metadata({
    name: "unenroll-mfa",
  })
  .action(async ({ parsedInput: { factorId }, ctx: { supabase } }) => {
    const { data, error } = await supabase.auth.mfa.unenroll({
      factorId,
    });

    if (error) {
      throw Error(error.message);
    }

    revalidatePath("/account/security");

    return data;
  });
