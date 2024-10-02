"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeByPaymentChannelSchema = void 0;
const zod_1 = require("zod");
exports.IncomeByPaymentChannelSchema = zod_1.z.object({
    Month: zod_1.z.number().int().min(202201).max(209912),
    PaymentChannel: zod_1.z.string(),
    TotalIncome: zod_1.z.number().nonnegative(),
    TransactionCount: zod_1.z.number().int().nonnegative(),
    UserId: zod_1.z.string().uuid(),
});
