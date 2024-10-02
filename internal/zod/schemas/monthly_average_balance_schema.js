"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyAverageBalanceSchema = void 0;
const zod_1 = require("zod");
exports.MonthlyAverageBalanceSchema = zod_1.z.object({
    Month: zod_1.z.number().int(),
    AccountId: zod_1.z.string(),
    IsoCurrencyCode: zod_1.z.string(),
    AverageBalance: zod_1.z.number(),
    UserId: zod_1.z.string().uuid(),
    ProfileType: zod_1.z.string(),
});
