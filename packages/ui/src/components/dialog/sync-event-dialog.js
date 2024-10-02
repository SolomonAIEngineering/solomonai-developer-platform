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
exports.DataSyncDialog = void 0;
const react_1 = __importStar(require("react"));
require("./animation.css");
const badge_1 = require("../badge");
const _1 = require(".");
/**
 * DataSyncDialog is a component that renders a dialog.
 *
 * @param {DataSyncDialogProps} props - Props for the DataSyncDialog
 * @returns {JSX.Element} - The rendered DataSyncDialog component.
 * @see https://www.radix-ui.com/docs/primitives/components/dialog
 */
const DataSyncDialog = ({ isOpen, status, onOpenChange, }) => {
    const [isDialogOpen, setDialogOpen] = (0, react_1.useState)(isOpen);
    (0, react_1.useEffect)(() => {
        setDialogOpen(isOpen);
    }, [isOpen]);
    return (<_1.Dialog open={isDialogOpen} onOpenChange={onOpenChange}>
      <_1.DialogContent className="max-w-4xl rounded-2xl bg-zinc-950 p-[2%] text-foreground md:min-h-[70%]">
        <_1.DialogHeader>
          <_1.DialogDescription>Data Sync Operation</_1.DialogDescription>
        </_1.DialogHeader>
        <DataSyncContent title="Data Sync In Progress" description="Please grab a coffee while this process ensues" status={status}/>
      </_1.DialogContent>
    </_1.Dialog>);
};
exports.DataSyncDialog = DataSyncDialog;
/**
 * DataSyncContent is a component that renders a dialog content.
 *
 * @param {DataSyncContentProps} props - Props for the DataSyncContent
 * @returns {JSX.Element} - The rendered DataSyncContent component.
 * @see https://www.radix-ui.com/docs/primitives/components/dialog
 */
const DataSyncContent = ({ title, description, status, }) => {
    const [opacity, setOpacity] = react_1.default.useState(0);
    react_1.default.useEffect(() => {
        const timeout = setTimeout(() => setOpacity(1), 100); // Start the fade-in effect after 100ms
        return () => clearTimeout(timeout);
    }, []);
    return (<div className="flex items-center justify-center">
      <div style={{ transition: "opacity 6s", opacity }} className="flex flex-col items-center justify-center gap-5">
        {status && (<badge_1.Badge className="rounded-2xl bg-white px-3 py-2">{status}</badge_1.Badge>)}
        <h1 className="text-3xl font-bold text-foreground md:text-7xl">
          {title}
        </h1>
        <div className="flex max-w-3xl flex-col items-center justify-center gap-4">
          <h2 className="text-xl font-bold text-foreground md:text-3xl">
            ☕ {description}
          </h2>
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>);
};
exports.default = exports.DataSyncDialog;
