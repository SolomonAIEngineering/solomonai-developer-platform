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
exports.AccordionContent = exports.AccordionTrigger = exports.AccordionItem = exports.Accordion = void 0;
const React = __importStar(require("react"));
const AccordionPrimitive = __importStar(require("@radix-ui/react-accordion"));
const lucide_react_1 = require("lucide-react");
const utils_1 = require("../utils");
const Accordion = AccordionPrimitive.Root;
exports.Accordion = Accordion;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (<AccordionPrimitive.Item ref={ref} className={(0, utils_1.cn)("border-b border-border", className)} {...props}/>));
exports.AccordionItem = AccordionItem;
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, chevronBefore, ...props }, ref) => (<AccordionPrimitive.Header className="flex w-full">
    <AccordionPrimitive.Trigger ref={ref} className={(0, utils_1.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180", chevronBefore && "[&[data-state=open]>svg]:rotate-0", className)} {...props}>
      {chevronBefore && (<lucide_react_1.ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 -rotate-90"/>)}
      {children}
      {!chevronBefore && (<lucide_react_1.ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200"/>)}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>));
exports.AccordionTrigger = AccordionTrigger;
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Content ref={ref} className={(0, utils_1.cn)("overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", className)} {...props}>
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>));
exports.AccordionContent = AccordionContent;
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
