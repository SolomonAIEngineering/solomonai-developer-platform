"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowedMimeTypes = void 0;
exports.getAllowedAttachments = getAllowedAttachments;
exports.getCurrency = getCurrency;
exports.extractRootDomain = extractRootDomain;
exports.getDomainFromEmail = getDomainFromEmail;
exports.allowedMimeTypes = [
    'image/heic',
    'image/png',
    'image/jpeg',
    'image/jpg',
    'application/pdf',
    'application/octet-stream',
];
function getAllowedAttachments(attachments) {
    return attachments?.filter((attachment) => exports.allowedMimeTypes.includes(attachment.ContentType));
}
function getCurrency(field) {
    return field?.valueCurrency?.currencyCode ?? 'USD';
}
function extractRootDomain(content) {
    const domainPattern = /(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(?:\/|$)/g;
    const match = content?.match(domainPattern);
    if (!match) {
        return null;
    }
    const matchWithoutProtocol = match
        .at(0)
        ?.replace(/(?:https?:\/\/)?(?:www\.)?/, '');
    const rootDomain = matchWithoutProtocol?.split('/').at(0);
    return rootDomain;
}
function getDomainFromEmail(email) {
    const emailPattern = /^[^\s@]+@([^\s@]+)$/;
    const match = email?.match(emailPattern);
    const domain = match?.at(1);
    if (!domain)
        return null;
    const domainParts = domain.split('.');
    if (domainParts.length > 2) {
        return domainParts.slice(-2).join('.');
    }
    return domain;
}
