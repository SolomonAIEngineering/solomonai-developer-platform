"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareDocument = prepareDocument;
const base64_arraybuffer_1 = require("base64-arraybuffer");
const heic_convert_1 = __importDefault(require("heic-convert"));
const sharp_1 = __importDefault(require("sharp"));
const utils_1 = require("@v1/utils");
const MAX_SIZE = 1500;
async function prepareDocument(document) {
    const buffer = (0, base64_arraybuffer_1.decode)(document.Content);
    const fileName = document.Name.split('.')?.at(0) ?? 'File';
    const sanitizedName = (0, utils_1.stripSpecialCharacters)(fileName);
    switch (document.ContentType) {
        case 'application/octet-stream':
        case 'application/pdf': {
            return {
                content: buffer,
                mimeType: 'application/pdf',
                size: document.ContentLength,
                name: fileName,
                fileName: `${sanitizedName}.pdf`,
            };
        }
        case 'image/heic': {
            const decodedImage = await (0, heic_convert_1.default)({
                // @ts-ignore
                buffer: new Uint8Array(buffer),
                format: 'JPEG',
                quality: 1,
            });
            const image = await (0, sharp_1.default)(decodedImage)
                .rotate()
                .resize({ width: MAX_SIZE })
                .toFormat('jpeg')
                .toBuffer();
            return {
                content: image,
                mimeType: 'image/jpeg',
                size: image.byteLength,
                name: fileName,
                fileName: `${sanitizedName}.jpg`,
            };
        }
        default: {
            const image = await (0, sharp_1.default)(buffer)
                .rotate()
                .resize({ width: MAX_SIZE })
                .toFormat('jpeg')
                .toBuffer();
            return {
                content: image,
                mimeType: 'image/jpeg',
                size: image.byteLength,
                name: fileName,
                fileName: `${sanitizedName}.jpg`,
            };
        }
    }
}
