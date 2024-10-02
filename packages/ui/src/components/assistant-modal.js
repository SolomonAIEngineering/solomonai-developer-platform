"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssistantModal = void 0;
const react_1 = require("react");
const react_2 = require("@assistant-ui/react");
const react_tooltip_1 = require("@radix-ui/react-tooltip");
const lucide_react_1 = require("lucide-react");
const cn_1 = require("../utils/cn");
const button_1 = require("./button");
const thread_1 = require("./thread");
const tooltip_1 = require("./tooltip");
const AssistantModal = ({ className }) => {
    return (<react_2.AssistantModalPrimitive.Root>
      <react_2.AssistantModalPrimitive.Anchor className={(0, cn_1.cn)("fixed bottom-4 right-4 size-12", className)}>
        <react_2.AssistantModalPrimitive.Trigger asChild>
          <FloatingAssistantButton />
        </react_2.AssistantModalPrimitive.Trigger>
      </react_2.AssistantModalPrimitive.Anchor>
      <react_2.AssistantModalPrimitive.Content sideOffset={16} className={"z-50 h-[500px] w-[400px] rounded-xl border border-zinc-200 bg-white p-0 text-zinc-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out data-[state=open]:zoom-in data-[state=closed]:slide-out-to-bottom-1/2 data-[state=closed]:slide-out-to-right-1/2 data-[state=open]:slide-in-from-bottom-1/2 data-[state=open]:slide-in-from-right-1/2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50"}>
        <thread_1.Thread />
      </react_2.AssistantModalPrimitive.Content>
    </react_2.AssistantModalPrimitive.Root>);
};
exports.AssistantModal = AssistantModal;
const FloatingAssistantButton = (0, react_1.forwardRef)(({ "data-state": state, ...rest }, ref) => {
    const tooltip = state === "open" ? "Close Assistant" : "Open Assistant";
    return (<react_tooltip_1.TooltipProvider>
      <tooltip_1.Tooltip>
        <tooltip_1.TooltipTrigger asChild>
          <button_1.Button variant="default" size="icon" {...rest} className="size-full rounded-full shadow transition-transform hover:scale-110 active:scale-90" ref={ref}>
            <lucide_react_1.BotIcon className={(0, cn_1.cn)("absolute size-6 transition-all", state === "open" && "rotate-90 scale-0", state === "closed" && "rotate-0 scale-100")}/>

            <lucide_react_1.ChevronDownIcon className={(0, cn_1.cn)("absolute size-6 transition-all", state === "open" && "rotate-0 scale-100", state === "closed" && "-rotate-90 scale-0")}/>
            <span className="sr-only">{tooltip}</span>
          </button_1.Button>
        </tooltip_1.TooltipTrigger>
        <tooltip_1.TooltipContent side="left">{tooltip}</tooltip_1.TooltipContent>
      </tooltip_1.Tooltip>
    </react_tooltip_1.TooltipProvider>);
});
FloatingAssistantButton.displayName = "FloatingAssistantButton";
