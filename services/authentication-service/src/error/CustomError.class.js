"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorTypes = void 0;
const errors_1 = __importDefault(require("./data/errors"));
var ErrorTypes;
(function (ErrorTypes) {
    ErrorTypes["ValidationError"] = "ValidationError";
    ErrorTypes["AuthenticationError"] = "AuthenticationError";
    ErrorTypes["AuthorizationError"] = "AuthorizationError";
    ErrorTypes["InternalError"] = "InternalError";
    ErrorTypes["UnknownError"] = "UnknownError";
    ErrorTypes["SupabaseError"] = "SupabaseError";
})(ErrorTypes || (exports.ErrorTypes = ErrorTypes = {}));
const statusCodes = {
    ValidationError: 400,
    AuthenticationError: 401,
    AuthorizationError: 403,
    InternalError: 500,
    UnknownError: 500,
    SupabaseError: 500,
};
const errors = errors_1.default;
class CustomError extends Error {
    code;
    message;
    devMessage;
    data;
    type;
    constructor(code, data, type) {
        super();
        this.code = code;
        this.message = errors[code]?.message ?? "Unknown Error Code";
        this.devMessage = errors[code]?.devMessage ?? "Unknown Error Code";
        this.type = type ?? ErrorTypes.UnknownError;
        this.data = data;
    }
    /**
     *
     * @returns {object} returns the error object without devMessage also it removes data property if it's not allowed
     */
    toProdJSON() {
        const object = {
            code: this.code,
            message: this.message,
            data: this.data,
        };
        const AllowedTypes = [ErrorTypes.ValidationError];
        if (!AllowedTypes.includes(this.type)) {
            delete object.data;
        }
        return object;
    }
    /**
     *
     * @param c is a instance of Context class from hono
     * @param isDev is a boolean which tells if the error is in development mode or not, if it's null then it checks the ENV variable
     * @returns {Response} returns the response object it removes devMessage depends on Env type
     */
    getResponseObject(c, isDev) {
        if (isDev === undefined) {
            isDev = c.env.ENV_MODE?.toLocaleLowerCase() === "development";
        }
        if (isDev) {
            const response = { status: "error", error: { ...this } };
            return c.json(response, statusCodes[this.type]); // type is the status code
        }
        else {
            const response = { status: "error", error: { ...this.toProdJSON() } };
            return c.json(response, statusCodes[this.type]); // type is the status code
        }
    }
    /**
     *
     * @param supabase is a instance of SupabaseClient class from supabase/supabase-js
     * @param ip of the user who got the error. Nullable
     * @returns {boolean} returns true if the error is saved to database successfully
     */
    async saveErrorToDatabase(supabase, ip, path) {
        const { error } = await supabase.from("errors").insert({
            type: this.type.toString(),
            code: this.code,
            message: this.message,
            dev_message: this.devMessage,
            data: this.data,
            ip: ip ?? null,
            path,
        });
        if (error !== null) {
            return false;
        }
        return true;
    }
}
exports.default = CustomError;
