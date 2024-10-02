"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpendingTool = getSpendingTool;
const date_fns_1 = require("date-fns");
const zod_1 = require("zod");
const dbes_1 = require("@v1/dbes");
function getSpendingTool({ defaultValues, supabase, teamId, }) {
    return {
        description: 'Get spending from category',
        parameters: zod_1.z.object({
            currency: zod_1.z.string().describe('The currency for spending').optional(),
            category: zod_1.z.string().describe('The category for spending'),
            startDate: zod_1.z.coerce
                .date()
                .describe('The start date of the spending, in ISO-8601 format')
                .default(new Date(defaultValues.from)),
            endDate: zod_1.z.coerce
                .date()
                .describe('The end date of the spending, in ISO-8601 format')
                .default(new Date(defaultValues.to)),
        }),
        execute: async ({ category, currency, startDate, endDate, }) => {
            const { data } = await (0, dbes_1.getSpendingQuery)(supabase, {
                currency,
                from: (0, date_fns_1.startOfMonth)(startDate).toISOString(),
                to: endDate.toISOString(),
                teamId,
            });
            const found = data?.find((c) => category?.toLowerCase() === c?.name?.toLowerCase());
            if (!found) {
                return 'No spending on this category found';
            }
            return `You have spent ${Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: found.currency,
            }).format(Math.abs(found.amount))} on ${found.name} from ${startDate.toISOString()} to ${endDate.toISOString()}.`;
        },
    };
}
