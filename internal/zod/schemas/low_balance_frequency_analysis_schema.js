"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowBalanceFrequencyAnalysisSchema = void 0;
const zod_1 = require("zod");
exports.LowBalanceFrequencyAnalysisSchema = zod_1.z.object({
    Month: zod_1.z.number().int(),
    AccountId: zod_1.z.string(),
    IsoCurrencyCode: zod_1.z.string(),
    LowBalanceCount: zod_1.z.number().int(),
    TotalBalanceRecords: zod_1.z.number().int(),
    LowBalanceFrequency: zod_1.z.number(),
    UserId: zod_1.z.string().uuid(),
    ProfileType: zod_1.z.string(),
});
