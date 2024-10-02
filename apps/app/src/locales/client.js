"use client";
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nProviderClient = exports.useScopedI18n = exports.useI18n = void 0;
const client_1 = require("next-international/client");
_a = (0, client_1.createI18nClient)({
    en: () => import("./en"),
    fr: () => import("./fr"),
}), exports.useI18n = _a.useI18n, exports.useScopedI18n = _a.useScopedI18n, exports.I18nProviderClient = _a.I18nProviderClient;
