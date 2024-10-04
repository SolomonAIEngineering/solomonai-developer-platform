"use server";

import { CookieKeys as Cookies } from "@v1/utils/cookies";
import { cookies } from "next/headers";
import { authActionClient } from "./safe-action";
import { requestAccessSchema } from "./schema";

export const requestAccessAction = authActionClient
  .schema(requestAccessSchema)
  .metadata({
    name: "request-access",
  })
  .action(async () => {
    cookies().set(Cookies.RequestAccess, "true");

    return true;
  });
