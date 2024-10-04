import type { MutableAIState } from "@/actions/ai/types";
import { getInboxSearchQuery } from "@v1/db/queries";
import { createClient } from "@v1/db/server";
import { nanoid } from "nanoid";
import { z } from "zod";
import { DocumentsUI } from "./ui/documents-ui";

type Args = {
  aiState: MutableAIState;
  teamId: string;
};

export function getInvoicesTool({ aiState, teamId }: Args) {
  return {
    description: "Find reciept or invoice",
    parameters: z.object({
      name: z.string().describe("The name of the invoice or reciept"),
    }),
    generate: async (args) => {
      const { name, amount } = args;
      const supabase = createClient();

      const searchQuery = name || amount;

      const data = await getInboxSearchQuery(supabase, {
        teamId,
        q: searchQuery,
      });

      const props = {
        data,
      };

      const toolCallId = nanoid();

      aiState.done({
        ...aiState.get(),
        messages: [
          ...aiState.get().messages,
          {
            id: nanoid(),
            role: "assistant",
            content: [
              {
                type: "tool-call",
                toolName: "getInvoices",
                toolCallId,
                args,
              },
            ],
          },
          {
            id: nanoid(),
            role: "tool",
            content: [
              {
                type: "tool-result",
                toolName: "getInvoices",
                toolCallId,
                result: props,
              },
            ],
          },
        ],
      });

      return <DocumentsUI {...props} />;
    },
  };
}