"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyBalanceSnapshotSchema = void 0;
const zod_1 = require("zod");
exports.DailyBalanceSnapshotSchema = zod_1.z.object({
    Date: zod_1.z.date(),
    AccountId: zod_1.z.string(),
    IsoCurrencyCode: zod_1.z.string(),
    EndOfDayBalance: zod_1.z.number(),
    UserId: zod_1.z.string().uuid(),
    ProfileType: zod_1.z.string(),
});
