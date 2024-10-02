"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bun_test_1 = require("bun:test");
const _1 = require(".");
(0, bun_test_1.test)('Get inbox id from email', () => {
    (0, bun_test_1.expect)((0, _1.getInboxIdFromEmail)('egr34f@inbox.solomon-ai.app')).toMatch('egr34f');
});
(0, bun_test_1.test)('Get inbox email by id', () => {
    (0, bun_test_1.expect)((0, _1.getInboxEmail)('egr34f')).toMatch('egr34f@inbox.staging.solomon-ai.app');
});
