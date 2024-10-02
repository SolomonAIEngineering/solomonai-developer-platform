"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiCurrencyBalanceSummarySchema = void 0;
const zod_1 = require("zod");
exports.MultiCurrencyBalanceSummarySchema = zod_1.z.object({
    Month: zod_1.z.number().int(),
    UserId: zod_1.z.string().uuid(),
    ProfileType: zod_1.z.string(),
    AccountIds: zod_1.z.array(zod_1.z.string()),
    Currencies: zod_1.z.array(zod_1.z.string()),
    AvgBalances: zod_1.z.array(zod_1.z.number()),
});
