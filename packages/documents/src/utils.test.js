"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bun_test_1 = require("bun:test");
const utils_1 = require("./utils");
(0, bun_test_1.test)('Get domain from email', () => {
    (0, bun_test_1.expect)((0, utils_1.getDomainFromEmail)('invoice@supabase.com')).toMatch('supabase.com');
});
(0, bun_test_1.test)('Should return 2 allowed attachments', () => {
    (0, bun_test_1.expect)((0, utils_1.getAllowedAttachments)([
        {
            ContentLength: 51899,
            Name: 'DigitalOcean Invoice 2023 Apr (33-11).pdf',
            ContentType: 'application/pdf',
            ContentID: '',
            Content: '',
        },
        {
            ContentLength: 51899,
            Name: 'Photo.jpg',
            ContentType: 'image/jpeg',
            ContentID: '',
            Content: '',
        },
        {
            ContentLength: 673,
            Name: 'ergerwed',
            ContentType: 'application/pgp-keys',
            ContentID: '',
            Content: '',
        },
        {
            ContentLength: 249,
            Name: 'wedwed',
            ContentType: 'application/pgp-signature',
            ContentID: '',
            Content: '',
        },
    ])).toBeArrayOfSize(2);
});
