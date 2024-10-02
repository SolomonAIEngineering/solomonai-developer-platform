"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeToGoalRatioSchema = void 0;
const zod_1 = require("zod");
exports.IncomeToGoalRatioSchema = zod_1.z.object({
    Month: zod_1.z.number().int().min(202201).max(209912),
    IncomeToGoalRatio: zod_1.z.number().nonnegative(),
    UserId: zod_1.z.string().uuid(),
});
