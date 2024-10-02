"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAppointmentSchema = exports.updateAppointmentSchema = void 0;
const zod_1 = require("zod");
exports.updateAppointmentSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(1, { message: "Title is required" })
        .max(50, { message: "Title is too long" }),
    start: zod_1.z.date(),
    end: zod_1.z.date(),
    details: zod_1.z.record(zod_1.z.any()).optional(),
});
exports.createAppointmentSchema = zod_1.z
    .object({
    title: zod_1.z
        .string()
        .min(1, { message: "Title is required" })
        .max(50, { message: "Title is too long" }),
    start: zod_1.z.date(),
    end: zod_1.z.date(),
    resourceId: zod_1.z.string().min(1, { message: "Resource is required" }),
    order: zod_1.z.number().optional(),
    details: zod_1.z.record(zod_1.z.any()).optional(),
})
    .refine((data) => data.end.getTime() >= data.start.getTime(), {
    message: "End date must be after start date",
    path: ["end"], // This helps to focus the error message on the end date field
});
