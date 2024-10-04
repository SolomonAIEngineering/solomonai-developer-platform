"use server";

import { authActionClient } from "@/actions/safe-action";
import { inboxFilterSchema } from "@/actions/schema";
import { CookieKeys as Cookies } from "@v1/utils/cookies";
import { addYears } from "date-fns";
import { cookies } from "next/headers";

export const changeInboxFilterAction = authActionClient
  .schema(inboxFilterSchema)
  .metadata({
    name: "change-inbox-filter",
  })
  .action(({ parsedInput: value }) => {
    cookies().set({
      name: Cookies.InboxFilter,
      value: value,
      expires: addYears(new Date(), 1),
    });

    return Promise.resolve(value);
  });
