"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratelimit = void 0;
require("server-only");
const ratelimit_1 = require("@upstash/ratelimit");
const _1 = require(".");
exports.ratelimit = new ratelimit_1.Ratelimit({
    limiter: ratelimit_1.Ratelimit.fixedWindow(10, "10s"),
    redis: _1.client,
});
