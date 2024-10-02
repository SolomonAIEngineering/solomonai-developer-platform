"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeVolatilitySchema = void 0;
const zod_1 = require("zod");
exports.IncomeVolatilitySchema = zod_1.z.object({
    Month: zod_1.z.number().int(),
    Volatility: zod_1.z.number(),
    UserId: zod_1.z.string().uuid(),
});
