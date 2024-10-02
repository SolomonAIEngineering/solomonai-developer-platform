"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserButton = void 0;
const react_1 = __importDefault(require("react"));
const outline_1 = require("@heroicons/react/24/outline");
const cn_1 = require("../../utils/cn");
const alert_dialog_1 = require("../alert-dialog");
const _1 = require(".");
const spinner_1 = require("../spinner");
/**
 * DeleteUserButton is a component that renders a back button.
 *
 * @param {DeleteUserButtonProps} props - Props for the DeleteUserButton
 *   component.
 * @returns {JSX.Element} - The rendered DeleteUserButton component.
 */
const DeleteUserButton = ({ showDeleteAlert, isDeleteLoading, openDeleteDialog, onCloseDialog, handleDelete, className, }) => {
    return (<>
      <_1.Button className={(0, cn_1.cn)("text-foreground", className)} variant="outline" onClick={openDeleteDialog}>
        <outline_1.TrashIcon className="mr-2 inline-block h-5 w-5"/>
        <span>Delete Profile</span>
      </_1.Button>
      {showDeleteAlert && (<alert_dialog_1.AlertDialog open={showDeleteAlert} onOpenChange={() => { }}>
          <alert_dialog_1.AlertDialogContent>
            <alert_dialog_1.AlertDialogHeader>
              <alert_dialog_1.AlertDialogTitle>
                Are you sure you want to delete your profile?
              </alert_dialog_1.AlertDialogTitle>
              <alert_dialog_1.AlertDialogDescription>
                This action cannot be undone.
              </alert_dialog_1.AlertDialogDescription>
            </alert_dialog_1.AlertDialogHeader>
            <alert_dialog_1.AlertDialogFooter>
              <alert_dialog_1.AlertDialogCancel onClick={onCloseDialog}>
                Cancel
              </alert_dialog_1.AlertDialogCancel>
              <alert_dialog_1.AlertDialogAction onClick={handleDelete}>
                {isDeleteLoading ? (<spinner_1.Spinner className="mr-2 h-4 w-4 animate-spin"/>) : (<outline_1.TrashIcon className="mr-2 h-4 w-4"/>)}
                <span>Delete</span>
              </alert_dialog_1.AlertDialogAction>
            </alert_dialog_1.AlertDialogFooter>
          </alert_dialog_1.AlertDialogContent>
        </alert_dialog_1.AlertDialog>)}
    </>);
};
exports.DeleteUserButton = DeleteUserButton;
