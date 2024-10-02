"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecurringExpenseDetectionSchema = void 0;
const zod_1 = require("zod");
exports.RecurringExpenseDetectionSchema = zod_1.z.object({
    MerchantName: zod_1.z.string(),
    Category: zod_1.z.string(),
    AvgAmount: zod_1.z.number(),
    TransactionCount: zod_1.z.number().int(),
    UserId: zod_1.z.string().uuid(),
});
