"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceTrendAnalysisSchema = void 0;
const zod_1 = require("zod");
exports.BalanceTrendAnalysisSchema = zod_1.z.object({
    Month: zod_1.z.number().int().min(202201).max(209912),
    AccountId: zod_1.z.string(),
    IsoCurrencyCode: zod_1.z.string(),
    MinBalance: zod_1.z.number(),
    MaxBalance: zod_1.z.number(),
    AvgBalance: zod_1.z.number(),
    StartBalance: zod_1.z.number(),
    EndBalance: zod_1.z.number(),
    UserId: zod_1.z.string().uuid(),
    ProfileType: zod_1.z.string(),
});
