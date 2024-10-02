"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeSourceAnalysisSchema = void 0;
const zod_1 = require("zod");
exports.IncomeSourceAnalysisSchema = zod_1.z.object({
    Month: zod_1.z.number().int().min(201001).max(209912),
    Source: zod_1.z.string(),
    TotalIncome: zod_1.z.number().nonnegative(),
    TransactionCount: zod_1.z.number().int().nonnegative(),
    UserId: zod_1.z.string().uuid(),
});
