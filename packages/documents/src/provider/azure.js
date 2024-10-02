"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const ai_document_intelligence_1 = __importDefault(require("@azure-rest/ai-document-intelligence"));
exports.client = (0, ai_document_intelligence_1.default)(process.env.AZURE_DOCUMENT_INTELLIGENCE_ENDPOINT, {
    key: process.env.AZURE_DOCUMENT_INTELLIGENCE_KEY,
});
