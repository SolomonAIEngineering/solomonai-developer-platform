"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceVolatilityAnalysisSchema = void 0;
const zod_1 = require("zod");
exports.BalanceVolatilityAnalysisSchema = zod_1.z.object({
    Month: zod_1.z.number().int().min(202201).max(209912),
    AccountId: zod_1.z.string(),
    IsoCurrencyCode: zod_1.z.string(),
    BalanceVolatility: zod_1.z.number().nonnegative(),
    UserId: zod_1.z.string().uuid(),
    ProfileType: zod_1.z.string(),
});
