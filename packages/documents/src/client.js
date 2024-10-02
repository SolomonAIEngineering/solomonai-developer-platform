"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentClient = void 0;
const expense_processor_1 = require("./processors/expense/expense-processor");
const invoice_processor_1 = require("./processors/invoice/invoice-processor");
class DocumentClient {
    #processor;
    constructor({ contentType }) {
        switch (contentType) {
            case 'application/pdf':
                this.#processor = new invoice_processor_1.InvoiceProcessor();
                break;
            default:
                this.#processor = new expense_processor_1.ExpenseProcessor();
        }
    }
    async getDocument(params) {
        return this.#processor.getDocument(params);
    }
}
exports.DocumentClient = DocumentClient;
