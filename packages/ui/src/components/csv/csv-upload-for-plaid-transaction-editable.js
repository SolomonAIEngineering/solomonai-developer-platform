"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditableCsvUploaderForPlaidTransactions = exports.transactionDataFields = void 0;
const react_1 = __importStar(require("react"));
const outline_1 = require("@heroicons/react/24/outline");
const react_spreadsheet_import_1 = require("react-spreadsheet-import");
const cn_1 = require("../../utils/cn");
const button_1 = require("../button");
exports.transactionDataFields = [
    {
        label: "Amount",
        key: "amount",
        alternateMatches: ["transaction amount", "price"],
        fieldType: {
            type: "input",
        },
        example: "100.00",
        validations: [
            {
                rule: "required",
                errorMessage: "Amount is required",
                level: "error",
            },
            {
                rule: "regex",
                errorMessage: "Invalid amount format",
                level: "error",
                validationPattern: "^\\d+(\\.\\d{1,2})?$", // Validates a number with up to two decimal places
            },
        ],
    },
    {
        label: "Description",
        key: "description",
        alternateMatches: ["desc", "transaction description"],
        fieldType: {
            type: "input",
        },
        example: "Payment for services rendered",
        validations: [
            {
                rule: "required",
                errorMessage: "Description is required",
                level: "error",
            },
        ],
    },
    {
        label: "Date",
        key: "date",
        alternateMatches: ["transaction date", "date of transaction"],
        fieldType: {
            type: "input",
        },
        example: "2021-12-01",
        validations: [
            {
                rule: "required",
                errorMessage: "Date is required",
                level: "error",
            },
            {
                rule: "regex",
                errorMessage: "Invalid date format",
                level: "error",
                validationPattern: "^\\d{4}-\\d{2}-\\d{2}$", // YYYY-MM-DD format
            },
        ],
    },
    {
        label: "Merchant",
        key: "merchant",
        alternateMatches: ["vendor", "store"],
        fieldType: {
            type: "input",
        },
        example: "Acme Corp",
        validations: [
            {
                rule: "required",
                errorMessage: "Merchant is required",
                level: "error",
            },
        ],
    },
    {
        label: "Category",
        key: "category",
        alternateMatches: ["type", "transaction type"],
        fieldType: {
            type: "select",
            options: ["Food", "Travel", "Healthcare", "Entertainment", "Other"], // Example categories
        },
        example: "Travel",
        validations: [
            {
                rule: "required",
                errorMessage: "Category is required",
                level: "info",
            },
        ],
    },
    {
        label: "City",
        key: "city",
        alternateMatches: ["location", "place"],
        fieldType: {
            type: "input",
        },
        example: "New York City",
        validations: [
            {
                rule: "required",
                errorMessage: "City is required",
                level: "info",
            },
        ],
    },
];
/**
 * Component for uploading and processing CSV files. It uses the
 * `react-csv-importer` library to handle file input, parsing, and processing in
 * chunks.
 *
 * @example
 *   return <EditableCsvUploaderForPlaidTransactions />
 *
 * @component
 */
const EditableCsvUploaderForPlaidTransactions = ({ onSubmit, className, fields = exports.transactionDataFields }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    return (<div>
      <button_1.Button onClick={() => setIsOpen(true)} className={(0, cn_1.cn)("flex flex-1 gap-2", className)}>
        Open CSV Importer
        <outline_1.ArrowRightStartOnRectangleIcon className="h-5 w-5"/>
      </button_1.Button>
      <react_spreadsheet_import_1.ReactSpreadsheetImport isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={onSubmit} fields={fields} customTheme={{
            colors: {
                background: "white",
            },
            components: {
                Button: {
                    baseStyle: {
                        borderRadius: "4px",
                    },
                    defaultProps: {
                        colorScheme: "black",
                    },
                },
                UploadStep: {
                    baseStyle: {
                        dropzoneButton: {
                            bg: "black",
                        },
                    },
                },
            },
        }}/>
    </div>);
};
exports.EditableCsvUploaderForPlaidTransactions = EditableCsvUploaderForPlaidTransactions;
