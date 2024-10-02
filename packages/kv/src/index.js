"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
require("server-only");
const redis_1 = require("@upstash/redis");
exports.client = new redis_1.Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});
