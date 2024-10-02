import type {
  DocumentClientParams,
  GetDocumentRequest,
  GetDocumentResponse,
} from "./types";

import { ExpenseProcessor } from "./processors/expense/expense-processor";
import { InvoiceProcessor } from "./processors/invoice/invoice-processor";

export class DocumentClient {
  #processor;

  constructor({ contentType }: DocumentClientParams) {
    switch (contentType) {
      case "application/pdf":
        this.#processor = new InvoiceProcessor();
        break;
      default:
        this.#processor = new ExpenseProcessor();
    }
  }

  public async getDocument(
    params: GetDocumentRequest,
  ): Promise<GetDocumentResponse> {
    return this.#processor.getDocument(params);
  }
}
