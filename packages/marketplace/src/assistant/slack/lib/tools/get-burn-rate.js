"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBurnRateTool = getBurnRateTool;
const date_fns_1 = require("date-fns");
const zod_1 = require("zod");
const dbes_1 = require("@v1/dbes");
function getBurnRateTool({ defaultValues, supabase, teamId, }) {
    return {
        description: 'Get burn rate',
        parameters: zod_1.z.object({
            startDate: zod_1.z.coerce
                .date()
                .describe('The start date of the burn rate, in ISO-8601 format')
                .default(new Date(defaultValues.from)),
            endDate: zod_1.z.coerce
                .date()
                .describe('The end date of the burn rate, in ISO-8601 format')
                .default(new Date(defaultValues.to)),
            currency: zod_1.z
                .string()
                .describe('The currency for the burn rate')
                .optional(),
        }),
        execute: async ({ currency, startDate, endDate, }) => {
            const { data } = await (0, dbes_1.getBurnRateQuery)(supabase, {
                currency,
                from: (0, date_fns_1.startOfMonth)(startDate).toISOString(),
                to: endDate.toISOString(),
                teamId,
            });
            if (!data) {
                return 'No burn rate found';
            }
            const averageBurnRate = data?.reduce((acc, curr) => acc + curr.value, 0) / data?.length;
            return `Based on your historical data, your average burn rate is ${Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: data.at(0)?.currency,
            }).format(averageBurnRate)} per month.`;
        },
    };
}
