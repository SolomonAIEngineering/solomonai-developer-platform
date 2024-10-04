"use server";

import { CookieKeys as Cookies } from "@v1/utils/cookies";
import { createClient } from "@v1/db/server";
import { addYears } from "date-fns";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { actionClient } from "./safe-action";
import { verifyOtpSchema } from "./schema";

export const verifyOtpAction = actionClient
  .schema(verifyOtpSchema)

  .action(async ({ parsedInput: { email, token } }) => {
    const supabase = createClient();

    await supabase.auth.verifyOtp({
      email,
      token,
      type: "email",
    });

    cookies().set(Cookies.PreferredSignInProvider, "otp", {
      expires: addYears(new Date(), 1),
    });

    redirect("/");
  });
