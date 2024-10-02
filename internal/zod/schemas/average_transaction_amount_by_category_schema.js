"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvgTransactionAmountByCategorySchema = void 0;
const zod_1 = require("zod");
exports.AvgTransactionAmountByCategorySchema = zod_1.z.object({
    Category: zod_1.z.string(),
    AvgAmount: zod_1.z.number().nonnegative(),
    UserId: zod_1.z.string().uuid(),
});
