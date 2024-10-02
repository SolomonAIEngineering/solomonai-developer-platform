"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeSessionReqBodySchema =
  exports.changePasswordReqBodySchema =
  exports.resetPasswordReqBodySchema =
  exports.forgotPasswordReqBodySchema =
  exports.resgisterReqBodySchema =
  exports.loginReqBodySchema =
    void 0;
const zod_1 = require("zod");
exports.loginReqBodySchema = zod_1.z.object({
  email: zod_1.z.string().email(),
  password: zod_1.z.string().min(3),
});
exports.resgisterReqBodySchema = zod_1.z.object({
  email: zod_1.z.string().email(),
  password: zod_1.z.string().min(6),
  name: zod_1.z.string().min(3).max(50),
  surname: zod_1.z.string().min(3).max(50),
  username: zod_1.z.string().min(3).max(50),
});
exports.forgotPasswordReqBodySchema = zod_1.z.object({
  email: zod_1.z.string().email(),
});
exports.resetPasswordReqBodySchema = zod_1.z.object({
  email: zod_1.z.string().email(),
  password: zod_1.z.string().min(6),
  access_token: zod_1.z.string(),
  refresh_token: zod_1.z.string(),
});
exports.changePasswordReqBodySchema = zod_1.z.object({
  old_password: zod_1.z.string().min(6),
  new_password: zod_1.z.string().min(6),
});
exports.initializeSessionReqBodySchema = zod_1.z.object({
  access_token: zod_1.z.string(),
  refresh_token: zod_1.z.string(),
});
