"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalancePercentileAnalysisSchema = void 0;
const zod_1 = require("zod");
exports.BalancePercentileAnalysisSchema = zod_1.z.object({
    Month: zod_1.z.number().int().min(202201).max(209912),
    AccountId: zod_1.z.string(),
    IsoCurrencyCode: zod_1.z.string(),
    Q1Balance: zod_1.z.number(),
    MedianBalance: zod_1.z.number(),
    Q3Balance: zod_1.z.number(),
    UserId: zod_1.z.string().uuid(),
    ProfileType: zod_1.z.string(),
});
