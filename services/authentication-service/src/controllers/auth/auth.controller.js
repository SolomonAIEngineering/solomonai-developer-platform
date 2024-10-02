"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser_helper_1 = require("../../helpers/bodyParser.helper");
const auth_schema_1 = require("./auth.schema");
const CustomError_class_1 = __importStar(require("../../error/CustomError.class"));
const general_helper_1 = require("../../helpers/general.helper");
const cookie_1 = require("hono/cookie");
class Auth {
    async login(c) {
        const body = await (0, bodyParser_helper_1.parseBodyByContentType)(c, auth_schema_1.loginReqBodySchema);
        const supabaseClient = c.get("ANON_CLIENT");
        const { data: loginData, error: loginError } = await supabaseClient.auth.signInWithPassword({
            email: body.email,
            password: body.password,
        });
        if (loginError !== null) {
            if (loginError.message.includes("credentials")) {
                throw new CustomError_class_1.default("AUTH-002", loginError, CustomError_class_1.ErrorTypes.AuthenticationError);
            }
            else if (loginError.message.includes("confirm")) {
                // resend email confirm email
                await supabaseClient.auth.resend({ email: body.email, type: "signup" });
                throw new CustomError_class_1.default("AUTH-003", loginError, CustomError_class_1.ErrorTypes.AuthenticationError);
            }
            throw new CustomError_class_1.default("Supabase", loginError, CustomError_class_1.ErrorTypes.SupabaseError);
        }
        const custom_access_token = (0, general_helper_1.generateRandomString)(128);
        const custom_session = {
            access_token: loginData.session.access_token,
            refresh_token: loginData.session.refresh_token,
            user: loginData.user,
            expires_at: Date.now() + 1000 * 60 * 60 * 24 * 30, // 30 days TODO : remember me
        };
        await c.env.KV_AUTH_SESSIONS.put(custom_access_token, JSON.stringify(custom_session), {
            expiration: custom_session.expires_at / 1000,
        });
        (0, cookie_1.setCookie)(c, "AUTH-ACCESS-TOKEN", custom_access_token, {
            path: "/",
            expires: new Date(custom_session.expires_at),
        });
        return c.json({
            status: "success",
            message: "Succesfully logged in.",
            data: {
                "AUTH-ACCESS-TOKEN": custom_access_token,
            },
        });
    }
    async logout(c) {
        const session = c.get("CUSTOM_AUTH_SESSION");
        await c.env.KV_AUTH_SESSIONS.delete(session.custom_access_token);
        return c.json({
            status: "success",
            message: "Succesfully logged out.",
        });
    }
    async checkSession(c) {
        const session = c.get("CUSTOM_AUTH_SESSION");
        return c.json({
            status: "success",
            message: "Session is valid.",
            role: session.role,
            isValid: true,
        });
    }
    async getUser(c) {
        const session = c.get("CUSTOM_AUTH_SESSION");
        return c.json({
            message: "User data",
            data: {
                email: session.user.email,
                ...session.user.user_metadata,
                role: session.user.app_metadata.role,
            },
        });
    }
    async register(c) {
        const body = await (0, bodyParser_helper_1.parseBodyByContentType)(c, auth_schema_1.resgisterReqBodySchema);
        const supabaseClient = c.get("SERVICE_CLIENT");
        const { data: inviteData, error: inviteError } = await supabaseClient.auth.admin.inviteUserByEmail(body.email, {
            data: {
                name: body.name,
                surname: body.surname,
                username: body.username,
            },
            redirectTo: c.env.REGISTER_REDIRECT_URL,
        });
        if (inviteError !== null) {
            if (inviteError.message.includes("unique") ||
                inviteError.message.includes("already")) {
                throw new CustomError_class_1.default("AUTH-001", inviteError, CustomError_class_1.ErrorTypes.AuthenticationError);
            }
            throw new CustomError_class_1.default("Supabase", inviteError, CustomError_class_1.ErrorTypes.SupabaseError);
        }
        const { error: updateError } = await supabaseClient.auth.admin.updateUserById(inviteData.user.id, {
            password: body.password,
            app_metadata: {
                role: "user",
            },
        });
        if (updateError !== null) {
            throw new CustomError_class_1.default("Supabase", updateError, CustomError_class_1.ErrorTypes.SupabaseError);
        }
        return c.json({
            status: "success",
            message: "Succesfully registered. Please check your email for verification.",
        });
    }
    async forgotPassword(c) {
        const body = await (0, bodyParser_helper_1.parseBodyByContentType)(c, auth_schema_1.forgotPasswordReqBodySchema);
        const supabaseClient = c.get("SERVICE_CLIENT");
        console.log(body.email);
        const { error: forgotPasswordError } = await supabaseClient.auth.resetPasswordForEmail(body.email, {
            redirectTo: c.env.RESET_PASSWORD_REDIRECT_URL,
        });
        if (forgotPasswordError !== null) {
            throw new CustomError_class_1.default("Supabase", forgotPasswordError, CustomError_class_1.ErrorTypes.SupabaseError);
        }
        return c.json({
            status: "success",
            message: "Succesfully sent reset password email.",
        });
    }
    async resetPassword(c) {
        const body = await (0, bodyParser_helper_1.parseBodyByContentType)(c, auth_schema_1.resetPasswordReqBodySchema);
        const supabaseClient = c.get("ANON_CLIENT");
        const { error: sessionError } = await supabaseClient.auth.setSession({
            access_token: body.access_token,
            refresh_token: body.refresh_token,
        });
        if (sessionError !== null) {
            throw new CustomError_class_1.default("Supabase", sessionError, CustomError_class_1.ErrorTypes.SupabaseError);
        }
        const { error: resetPasswordError } = await supabaseClient.auth.updateUser({
            password: body.password,
        });
        if (resetPasswordError !== null) {
            throw new CustomError_class_1.default("Supabase", resetPasswordError, CustomError_class_1.ErrorTypes.SupabaseError);
        }
        return c.json({
            status: "success",
            message: "Succesfully reset password.",
        });
    }
    async changePassword(c) {
        const body = await (0, bodyParser_helper_1.parseBodyByContentType)(c, auth_schema_1.changePasswordReqBodySchema);
        const session = c.get("CUSTOM_AUTH_SESSION");
        const supabaseClient = c.get("ANON_CLIENT");
        const { error: loginError } = await supabaseClient.auth.signInWithPassword({
            email: session.user.email ?? "",
            password: body.old_password,
        });
        if (loginError !== null) {
            throw new CustomError_class_1.default("AUTH-004", {}, CustomError_class_1.ErrorTypes.AuthenticationError);
        }
        const { error: changePasswordError } = await supabaseClient.auth.updateUser({
            password: body.new_password,
        });
        if (changePasswordError !== null) {
            throw new CustomError_class_1.default("Supabase", changePasswordError, CustomError_class_1.ErrorTypes.SupabaseError);
        }
        return c.json({
            status: "success",
            message: "Succesfully changed password.",
        });
    }
    async initializeSession(c) {
        const body = await (0, bodyParser_helper_1.parseBodyByContentType)(c, auth_schema_1.initializeSessionReqBodySchema);
        const supabaseClient = c.get("SERVICE_CLIENT");
        const { data: sessionData, error: sessionError } = await supabaseClient.auth.setSession({
            access_token: body.access_token,
            refresh_token: body.refresh_token,
        });
        if (sessionError !== null) {
            throw new CustomError_class_1.default("Supabase", sessionError, CustomError_class_1.ErrorTypes.SupabaseError);
        }
        if (sessionData === null ||
            sessionData.user === null ||
            sessionData.session === null) {
            throw new CustomError_class_1.default("AUTH-005", {}, CustomError_class_1.ErrorTypes.AuthenticationError);
        }
        const custom_access_token = (0, general_helper_1.generateRandomString)(128);
        const custom_session = {
            access_token: sessionData.session.access_token,
            refresh_token: sessionData.session.refresh_token,
            user: sessionData.user,
            expires_at: Date.now() + 1000 * 60 * 60 * 24 * 30, // 30 days TODO : remember me
        };
        await c.env.KV_AUTH_SESSIONS.put(custom_access_token, JSON.stringify(custom_session), {
            expiration: custom_session.expires_at / 1000,
        });
        (0, cookie_1.setCookie)(c, "AUTH-ACCESS-TOKEN", custom_access_token, {
            path: "/",
            expires: new Date(custom_session.expires_at),
        });
        return c.json({
            status: "success",
            message: "Succesfully logged in.",
            data: {
                "AUTH-ACCESS-TOKEN": custom_access_token,
            },
        });
    }
}
exports.default = new Auth();
