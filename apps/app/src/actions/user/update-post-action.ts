"use server";

import { authActionClient } from "@/actions/safe-action";
import { updateUser } from "@v1/supabase/mutations";
import { updateUserSchema } from "./schema";

// export const updateUserAction = authActionClient
//   .schema(updateUserSchema)
//   .metadata({
//     name: "update-user",
//   })
//   .action(async ({ parsedInput: input, ctx: { user } }) => {
//     const result = await updateUser(user.data?.id as string, input);

//     return result;
//   });
