"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRevenueTool = getRevenueTool;
const date_fns_1 = require("date-fns");
const zod_1 = require("zod");
const dbes_1 = require("@v1/dbes");
function getRevenueTool({ defaultValues, supabase, teamId, }) {
    return {
        description: 'Get revenue',
        parameters: zod_1.z.object({
            startDate: zod_1.z.coerce
                .date()
                .describe('The start date of the revenue, in ISO-8601 format')
                .default(new Date(defaultValues.from)),
            endDate: zod_1.z.coerce
                .date()
                .describe('The end date of the revenue, in ISO-8601 format')
                .default(new Date(defaultValues.to)),
            currency: zod_1.z.string().describe('The currency for revenue').optional(),
        }),
        execute: async ({ currency, startDate, endDate, }) => {
            const data = await (0, dbes_1.getMetricsQuery)(supabase, {
                teamId,
                from: (0, date_fns_1.startOfMonth)(new Date(startDate)).toISOString(),
                to: new Date(endDate).toISOString(),
                type: 'revenue',
                currency,
            });
            if (!data) {
                return 'No revenue data found';
            }
            return `Based on the period from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}, the current revenue is ${Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: data.summary.currency,
            }).format(data.summary.currentTotal)}`;
        },
    };
}
