"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutProcessor = void 0;
const ai_document_intelligence_1 = require("@azure-rest/ai-document-intelligence");
const azure_1 = require("../../provider/azure");
class LayoutProcessor {
    async #processDocument(content) {
        const initialResponse = await azure_1.client
            .path('/documentModels/{modelId}:analyze', 'prebuilt-layout')
            .post({
            contentType: 'application/json',
            body: {
                base64Source: content,
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
    async #extractData(data) {
        const tables = data.analyzeResult?.tables;
        const firstTable = tables?.at(0);
        if (!firstTable?.cells?.length)
            return null;
        const cellsByRow = firstTable.cells.reduce((acc, cell) => {
            const rowIndex = cell.rowIndex ?? 0;
            if (!acc[rowIndex])
                acc[rowIndex] = [];
            acc[rowIndex].push({
                columnIndex: cell.columnIndex ?? 0,
                content: cell.content ?? '',
            });
            return acc;
        }, {});
        return Object.entries(cellsByRow)
            .sort(([a], [b]) => Number(a) - Number(b))
            .map(([rowIndex, cells]) => ({
            rowIndex: Number(rowIndex),
            cells: cells
                .sort((a, b) => a.columnIndex - b.columnIndex)
                .map((cell) => ({
                columnIndex: cell.columnIndex,
                content: cell.content,
            })),
        }));
    }
    async getDocument(params) {
        return this.#processDocument(params.content);
    }
}
exports.LayoutProcessor = LayoutProcessor;
