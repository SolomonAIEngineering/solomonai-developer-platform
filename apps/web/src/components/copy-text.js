"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyText = CopyText;
const icons_1 = require("@v1/ui/icons");
const react_1 = require("react");
const usehooks_ts_1 = require("usehooks-ts");
function CopyText({ value }) {
    const [_, copy] = (0, usehooks_ts_1.useCopyToClipboard)();
    const [copied, setCopied] = (0, react_1.useState)(false);
    const handleCopy = () => {
        copy(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (<button onClick={handleCopy} type="button" className="font-mono text-[#878787] text-xs md:text-sm p-4 rounded-full border border-border transition-colors flex items-center gap-2 bg-background">
      <span>{value}</span>
      {copied ? (<icons_1.Icons.Check className="size-3.5"/>) : (<icons_1.Icons.Copy className="size-3.5"/>)}
    </button>);
}
