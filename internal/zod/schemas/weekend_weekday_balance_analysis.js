"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeekendWeekdayBalanceAnalysisSchema = void 0;
const zod_1 = require("zod");
exports.WeekendWeekdayBalanceAnalysisSchema = zod_1.z.object({
    Month: zod_1.z.number().int(),
    AccountId: zod_1.z.string(),
    IsoCurrencyCode: zod_1.z.string(),
    AvgWeekendBalance: zod_1.z.number(),
    AvgWeekdayBalance: zod_1.z.number(),
    UserId: zod_1.z.string().uuid(),
    ProfileType: zod_1.z.string(),
});
