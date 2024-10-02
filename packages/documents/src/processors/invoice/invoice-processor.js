"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceProcessor = void 0;
const ai_document_intelligence_1 = require("@azure-rest/ai-document-intelligence");
const change_case_1 = require("change-case");
const azure_1 = require("../../provider/azure");
const utils_1 = require("../../utils");
const llm_processor_1 = require("../llm/llm-processor");
class InvoiceProcessor {
    async #processDocument(content) {
        const initialResponse = await azure_1.client
            .path('/documentModels/{modelId}:analyze', 'prebuilt-invoice')
            .post({
            contentType: 'application/json',
            body: {
                base64Source: content,
            },
            queryParameters: {
                features: ['queryFields'],
                queryFields: ['VendorEmail', 'CustomerEmail'],
                split: 'none',
            },
        });
        if ((0, ai_document_intelligence_1.isUnexpected)(initialResponse)) {
            throw initialResponse.body.error;
        }
        const poller = await (0, ai_document_intelligence_1.getLongRunningPoller)(azure_1.client, initialResponse);
        const result = (await poller.pollUntilDone())
            .body;
        return this.#extractData(result);
    }
    #getWebsiteFromFields(fields, content) {
        const website = 
        // First try to get the email domain
        (0, utils_1.getDomainFromEmail)(fields?.VendorEmail?.valueString) ||
            fields?.Website?.valueString ||
            // Then try to get the website from the content
            (0, utils_1.extractRootDomain)(content) ||
            null;
        return website;
    }
    async #extractData(data) {
        const fields = data.analyzeResult?.documents?.[0]?.fields;
        const content = data.analyzeResult?.content;
        const website = this.#getWebsiteFromFields(fields, content);
        const result = {
            name: (fields?.VendorName?.valueString &&
                (0, change_case_1.capitalCase)(fields?.VendorName?.valueString)) ??
                null,
            date: fields?.DueDate?.valueDate || fields?.InvoiceDate?.valueDate || null,
            currency: (0, utils_1.getCurrency)(fields?.InvoiceTotal),
            amount: fields?.InvoiceTotal?.valueCurrency?.amount ?? null,
            type: 'invoice',
            website,
        };
        // Return if all values are not null
        if (Object.values(result).every((value) => value !== null)) {
            return result;
        }
        const fallback = content ? await this.#fallbackToLlm(content) : null;
        // Only replace null values from LLM
        const mappedResult = Object.fromEntries(Object.entries(result).map(([key, value]) => [
            key,
            value ?? fallback?.[key] ?? null,
        ]));
        return {
            ...mappedResult,
            // We only have description from LLM
            description: fallback?.description ?? null,
        };
    }
    async #fallbackToLlm(content) {
        const llm = new llm_processor_1.LlmProcessor();
        const fallbackData = await llm.getStructuredData(content);
        return { ...fallbackData, type: 'invoice' };
    }
    async getDocument(params) {
        return this.#processDocument(params.content);
    }
}
exports.InvoiceProcessor = InvoiceProcessor;
