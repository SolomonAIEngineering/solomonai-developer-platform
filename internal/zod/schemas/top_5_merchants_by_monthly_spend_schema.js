"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Top5MerchantsByMonthlySpendSchema = void 0;
const zod_1 = require("zod");
exports.Top5MerchantsByMonthlySpendSchema = zod_1.z.object({
    Month: zod_1.z.number().int(),
    MerchantName: zod_1.z.string(),
    TotalSpend: zod_1.z.number(),
    UserId: zod_1.z.string().uuid(),
});
