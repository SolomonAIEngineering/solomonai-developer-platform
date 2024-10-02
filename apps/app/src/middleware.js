"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.middleware = middleware;
const middleware_1 = require("@v1/supabase/middleware");
const middleware_2 = require("next-international/middleware");
const server_1 = require("next/server");
const I18nMiddleware = (0, middleware_2.createI18nMiddleware)({
    locales: ["en", "fr"],
    defaultLocale: "en",
    urlMappingStrategy: "rewrite",
});
async function middleware(request) {
    const { response, user } = await (0, middleware_1.updateSession)(request, I18nMiddleware(request));
    if (!request.nextUrl.pathname.endsWith("/login") && !user) {
        return server_1.NextResponse.redirect(new URL("/login", request.url));
    }
    return response;
}
exports.config = {
    matcher: [
        "/((?!_next/static|api|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
