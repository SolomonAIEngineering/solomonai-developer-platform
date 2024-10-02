"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInboxIdFromEmail = getInboxIdFromEmail;
exports.getInboxEmail = getInboxEmail;
function getInboxIdFromEmail(email) {
    return email.split('@').at(0);
}
function getInboxEmail(inboxId) {
    if (process.env.NODE_ENV !== 'production') {
        return `${inboxId}@inbox.staging.solomon-ai.app`;
    }
    return `${inboxId}@inbox.solomon-ai.app`;
}
