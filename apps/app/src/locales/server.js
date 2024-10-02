"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticParams = exports.getScopedI18n = exports.getI18n = void 0;
const server_1 = require("next-international/server");
_a = (0, server_1.createI18nServer)({
    en: () => import("./en"),
    fr: () => import("./fr"),
}), exports.getI18n = _a.getI18n, exports.getScopedI18n = _a.getScopedI18n, exports.getStaticParams = _a.getStaticParams;
