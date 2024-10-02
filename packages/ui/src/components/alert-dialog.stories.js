"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const alert_dialog_1 = require("./alert-dialog");
const button_1 = require("./button");
const meta = {
    component: () => (<alert_dialog_1.AlertDialog>
      <alert_dialog_1.AlertDialogTrigger asChild>
        <button_1.Button variant="outline">Show Dialog</button_1.Button>
      </alert_dialog_1.AlertDialogTrigger>
      <alert_dialog_1.AlertDialogContent>
        <alert_dialog_1.AlertDialogHeader>
          <alert_dialog_1.AlertDialogTitle>Are you absolutely sure?</alert_dialog_1.AlertDialogTitle>
          <alert_dialog_1.AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </alert_dialog_1.AlertDialogDescription>
        </alert_dialog_1.AlertDialogHeader>
        <alert_dialog_1.AlertDialogFooter>
          <alert_dialog_1.AlertDialogCancel>Cancel</alert_dialog_1.AlertDialogCancel>
          <alert_dialog_1.AlertDialogAction>Continue</alert_dialog_1.AlertDialogAction>
        </alert_dialog_1.AlertDialogFooter>
      </alert_dialog_1.AlertDialogContent>
    </alert_dialog_1.AlertDialog>),
};
exports.default = meta;
exports.Default = {};
