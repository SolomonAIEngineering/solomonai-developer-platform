import { getTinybird } from "./tinybird.ts";
import { emailEventSchema } from "./types/index.ts";
const tb = getTinybird();
export const publishEmailEvent = tb?.buildIngestEndpoint({
    datasource: "email_events",
    event: emailEventSchema,
});
