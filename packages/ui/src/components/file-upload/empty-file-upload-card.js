"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyFileUploadCard = EmptyFileUploadCard;
const react_1 = __importDefault(require("react"));
const react_icons_1 = require("@radix-ui/react-icons");
const cn_1 = require("../../utils/cn");
const card_1 = require("../card");
function EmptyFileUploadCard({ title, description, icon: Icon = react_icons_1.ImageIcon, action, className, ...props }) {
    return (<card_1.Card className={(0, cn_1.cn)("flex w-full flex-col items-center justify-center space-y-6 bg-transparent p-16", className)} {...props}>
      <div className="mr-4 shrink-0 rounded-full border border-dashed p-4">
        <Icon className="size-8 text-muted-foreground" aria-hidden="true"/>
      </div>
      <div className="flex flex-col items-center gap-1.5 text-center">
        <card_1.CardTitle>{title}</card_1.CardTitle>
        {description ? <card_1.CardDescription>{description}</card_1.CardDescription> : null}
      </div>
      {action ? action : null}
    </card_1.Card>);
}
