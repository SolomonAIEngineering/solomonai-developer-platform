"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRunwayTool = getRunwayTool;
const date_fns_1 = require("date-fns");
const zod_1 = require("zod");
const dbes_1 = require("@v1/dbes");
function getRunwayTool({ defaultValues, supabase, teamId, }) {
    return {
        description: 'Get the runway',
        parameters: zod_1.z.object({
            currency: zod_1.z.string().describe('The currency for the runway').optional(),
            startDate: zod_1.z.coerce
                .date()
                .describe('The start date of the runway, in ISO-8601 format')
                .default(new Date(defaultValues.from)),
            endDate: zod_1.z.coerce
                .date()
                .describe('The end date of the runway, in ISO-8601 format')
                .default(new Date(defaultValues.to)),
        }),
        execute: async ({ currency, startDate, endDate, }) => {
            const { data } = await (0, dbes_1.getRunwayQuery)(supabase, {
                currency,
                from: (0, date_fns_1.startOfMonth)(startDate).toISOString(),
                to: endDate.toISOString(),
                teamId,
            });
            if (!data) {
                return 'No runway found';
            }
            return `Runway with currency ${currency} is ${data} months. Based on the data from ${startDate.toISOString()} to ${endDate.toISOString()}.`;
        },
    };
}
