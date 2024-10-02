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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncEventDialog = exports.Default = void 0;
const React = __importStar(require("react"));
const useSyncEventDialog_1 = require("../../hooks/useSyncEventDialog");
const button_1 = require("../button");
const sync_event_dialog_1 = __importDefault(require("./sync-event-dialog"));
const meta = {
    component: sync_event_dialog_1.default,
    argTypes: {
        isOpen: {
            control: "boolean",
            defaultValue: "", // Default value
        },
        status: {
            control: "text",
            defaultValue: "", // Default value
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        isOpen: false,
        status: "syncing",
    },
    render: () => {
        const { DataSyncDialogComponent, setDialogOpen } = (0, useSyncEventDialog_1.useDataSyncDialog)("Uploading data...");
        return (<div>
        <button_1.Button onClick={() => setDialogOpen(true)}>
          Open Data Sync Dialog
        </button_1.Button>
        {DataSyncDialogComponent}
      </div>);
    },
};
exports.SyncEventDialog = {
    args: {
        isOpen: true,
        status: "syncing",
    },
};
