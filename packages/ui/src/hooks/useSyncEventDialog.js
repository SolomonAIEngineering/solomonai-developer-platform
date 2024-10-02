"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDataSyncDialog = void 0;
const react_1 = require("react");
const sync_event_dialog_1 = __importDefault(require("../components/dialog/sync-event-dialog"));
/**
 * A hook to manage and render a DataSyncDialog.
 *
 * @param status The current status to display in the dialog.
 * @returns An object containing the dialog component and an open state boolean.
 *
 *   Const SomeComponent: React.FC = () => { const { DataSyncDialogComponent,
 *   isDialogOpen } = useDataSyncDialog("Uploading data...");
 *
 *   Return ( <div> <button onClick={() => isDialogOpen(true)}>Open Data Sync
 *   Dialog</button> <DataSyncDialogComponent /> </div> ); };
 */
const useDataSyncDialog = (status) => {
    const [isDialogOpen, setDialogOpen] = (0, react_1.useState)(false);
    const onOpenChange = () => {
        setDialogOpen(!isDialogOpen);
    };
    const handleCloseDialog = () => {
        setDialogOpen(false);
    };
    const component = (0, sync_event_dialog_1.default)({
        isOpen: isDialogOpen,
        status,
        onOpenChange: onOpenChange,
        handleCloseDialog,
    });
    return {
        DataSyncDialogComponent: component,
        isDialogOpen,
        setDialogOpen,
    };
};
exports.useDataSyncDialog = useDataSyncDialog;
