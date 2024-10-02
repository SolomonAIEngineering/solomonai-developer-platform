"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LlmProcessor = void 0;
const openai_1 = require("@ai-sdk/openai");
const ai_1 = require("ai");
const zod_1 = require("zod");
const schema = zod_1.z.object({
    name: zod_1.z.string().describe('The supplier or company of the invoice.'),
    amount: zod_1.z
        .number()
        .describe('The total amount of the invoice, usually the highest amount.'),
    date: zod_1.z
        .string()
        .describe('The due date of the invoice (ISO 8601 date string).'),
    website: zod_1.z
        .string()
        .describe("Website of the supplier or company without protocol (e.g. example.com) and only return if it's not null otherwise get the domain namn from the supplier name."),
    currency: zod_1.z.string().describe('Currency code of the invoice.'),
    description: zod_1.z
        .string()
        .describe('Summarize the purchase details by focusing on the supplier name and the content of the purchase. Max 1 sentence. Ignore amounts.'),
});
class LlmProcessor {
    async getStructuredData(content) {
        try {
            const { object } = await (0, ai_1.generateObject)({
                model: (0, openai_1.openai)('gpt-4o-mini'),
                mode: 'json',
                schema,
                prompt: content,
            });
            return {
                name: object.name,
                amount: object.amount,
                date: object.date,
                website: object.website?.replace(/^https?:\/\//, ''),
                currency: object.currency,
                description: object.description,
            };
        }
        catch (error) {
            return null;
        }
    }
}
exports.LlmProcessor = LlmProcessor;
