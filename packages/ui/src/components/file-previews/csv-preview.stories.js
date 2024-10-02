"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvPreviewWithFileUrl = exports.Default = void 0;
const csv_preview_1 = require("./csv-preview");
const meta = {
    component: csv_preview_1.CsvPreview,
    argTypes: {
        fileUrl: {
            control: "text",
            defaultValue: "", // Default value
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        fileUrl: "https://data.wa.gov/api/views/f6w7-q2d2/rows.csv",
    },
};
exports.CsvPreviewWithFileUrl = {
    args: {
        fileUrl: "https://data.wa.gov/api/views/f6w7-q2d2/rows.csv",
    },
};
