"use server";

import { LogEvents } from "@v1/events/events";
import { Events, client } from "@v1/jobs";
import { updateTeam } from "@v1/db/mutations";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";
import { authActionClient } from "../safe-action";

export const updateCurrencyAction = authActionClient
  .schema(
    z.object({
      baseCurrency: z.string(),
    }),
  )
  .metadata({
    name: "update-currency",
    track: {
      event: LogEvents.UpdateCurrency.name,
      channel: LogEvents.UpdateCurrency.channel,
    },
  })
  .action(
    async ({ parsedInput: { baseCurrency }, ctx: { user, supabase } }) => {
      await updateTeam(supabase, {
        id: user.team_id,
        base_currency: baseCurrency,
      });

      revalidateTag(`team_settings_${user.team_id}`);
      revalidatePath("/settings/accounts");

      const event = await client.sendEvent({
        name: Events.UPDATE_CURRENCY,
        payload: {
          baseCurrency,
          teamId: user.team_id,
        },
      });

      return event;
    },
  );
