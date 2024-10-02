"use client";
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
exports.DialogTrigger = exports.DialogTitle = exports.DialogPortal = exports.DialogOverlay = exports.DialogHeader = exports.DialogFooter = exports.DialogDescription = exports.DialogContentFrameless = exports.DialogContent = exports.Dialog = void 0;
const React = __importStar(require("react"));
const DialogPrimitive = __importStar(require("@radix-ui/react-dialog"));
const react_icons_1 = require("@radix-ui/react-icons");
const utils_1 = require("../utils");
const Dialog = DialogPrimitive.Root;
exports.Dialog = Dialog;
const DialogTrigger = DialogPrimitive.Trigger;
exports.DialogTrigger = DialogTrigger;
const DialogPortal = DialogPrimitive.Portal;
exports.DialogPortal = DialogPortal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (<DialogPrimitive.Overlay ref={ref} className={(0, utils_1.cn)("fixed inset-0 z-50 bg-[#f6f6f3]/60 dark:bg-[#121212]/80 data-[state=closed]:animate-[dialog-overlay-hide_100ms] data-[state=open]:animate-[dialog-overlay-show_100ms]", className)} {...props}/>));
exports.DialogOverlay = DialogOverlay;
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, hideClose, ...props }, ref) => (<DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content ref={ref} className={(0, utils_1.cn)("bg-background border-border border fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-xl dark:p-px text-primary z-50 data-[state=closed]:animate-[dialog-content-hide_100ms] data-[state=open]:animate-[dialog-content-show_100ms] border bg-background text-foreground rounded-2xl border-gray-50 dark:border-zinc-950 shadow-lg", className)} {...props}>
      {children}

      {!hideClose && (<DialogPrimitive.Close className="absolute right-6 top-6 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <react_icons_1.Cross2Icon className="h-4 w-4"/>
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>)}
    </DialogPrimitive.Content>
  </DialogPortal>));
exports.DialogContent = DialogContent;
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogContentFrameless = React.forwardRef(({ className, children, ...props }, ref) => (<DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content ref={ref} className={(0, utils_1.cn)("fixed bg-background top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-xl border dark:border-none dark:p-px text-primary z-50 data-[state=closed]:animate-[dialog-content-hide_100ms] data-[state=open]:animate-[dialog-content-show_100ms]", className)} {...props}>
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>));
exports.DialogContentFrameless = DialogContentFrameless;
const DialogHeader = ({ className, ...props }) => (<div className={(0, utils_1.cn)("flex flex-col space-y-1.5 text-left", className)} {...props}/>);
exports.DialogHeader = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props }) => (<div className={(0, utils_1.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props}/>);
exports.DialogFooter = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (<DialogPrimitive.Title ref={ref} className={(0, utils_1.cn)("text-lg font-semibold leading-none tracking-tight mb-4", className)} {...props}/>));
exports.DialogTitle = DialogTitle;
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (<DialogPrimitive.Description ref={ref} className={(0, utils_1.cn)("text-sm text-[#878787]", className)} {...props}/>));
exports.DialogDescription = DialogDescription;
DialogDescription.displayName = DialogPrimitive.Description.displayName;
