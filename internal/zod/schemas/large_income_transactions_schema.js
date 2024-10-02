"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargeIncomeTransactionsSchema = void 0;
const zod_1 = require("zod");
exports.LargeIncomeTransactionsSchema = zod_1.z.object({
    Time: zod_1.z.date(),
    Amount: zod_1.z.number().min(1000),
    Source: zod_1.z.string(),
    Category: zod_1.z.string(),
    UserId: zod_1.z.string().uuid(),
});
