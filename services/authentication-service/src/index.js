"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const ErrorHandler_1 = __importDefault(require("./error/ErrorHandler"));
const setSupabaseClients_mw_1 = __importDefault(require("./middlewares/setSupabaseClients.mw"));
const auth_controller_1 = __importDefault(require("./controllers/auth/auth.controller"));
const auth_mw_1 = __importDefault(require("./middlewares/auth.mw"));
// import loggerMw from './middlewares/logger.mw';
const auth_types_1 = require("./controllers/auth/auth.types");
const app = new hono_1.Hono();
// Middlewares
app.use("/*", setSupabaseClients_mw_1.default);
// app.use('/*', loggerMw); // using logger adding min 60ms to response time
app.post("/auth/login", auth_controller_1.default.login); // Login user
app.post("/auth/logout", (0, auth_mw_1.default)(auth_types_1.AuthRoles.Any), auth_controller_1.default.logout); // Logout user
app.get("/auth/check-session", (0, auth_mw_1.default)(auth_types_1.AuthRoles.Any), auth_controller_1.default.checkSession); // Check if session is valid
app.get("/auth/get-user", (0, auth_mw_1.default)(auth_types_1.AuthRoles.Any), auth_controller_1.default.getUser); // Get user info
app.post("/auth/register", auth_controller_1.default.register); // Register user
app.post("/auth/forgot-password", auth_controller_1.default.forgotPassword); // Send email with reset token
app.post("/auth/reset-password", auth_controller_1.default.resetPassword); // Reset password with reset token
app.post("/auth/change-password", (0, auth_mw_1.default)(auth_types_1.AuthRoles.Any), auth_controller_1.default.changePassword);
app.post("/auth/initialize-session", auth_controller_1.default.initializeSession); // Inıtialize session with supabase tokens
app.get("/test", async (c) => {
    return c.text("Hello World");
});
app.onError(ErrorHandler_1.default);
exports.default = app;
