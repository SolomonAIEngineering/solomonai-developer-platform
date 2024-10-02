"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeConcentrationSchema = void 0;
const zod_1 = require("zod");
exports.IncomeConcentrationSchema = zod_1.z.object({
    Month: zod_1.z.number().int().min(202201).max(209912),
    ConcentrationRatio: zod_1.z.number().min(0).max(1),
    UserId: zod_1.z.string().uuid(),
});
