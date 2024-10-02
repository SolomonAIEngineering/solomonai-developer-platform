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
exports.AssistantChatGPT = void 0;
const react_1 = require("@assistant-ui/react");
const Avatar = __importStar(require("@radix-ui/react-avatar"));
const react_icons_1 = require("@radix-ui/react-icons");
const cn_1 = require("@v1/ui/cn");
const button_1 = require("../button");
const tooltip_1 = require("../tooltip");
const AssistantChatGPT = () => {
    return (<react_1.ThreadPrimitive.Root className="dark flex h-full flex-col items-stretch bg-[#212121] px-4 text-foreground">
      <react_1.ThreadPrimitive.Viewport className="flex flex-grow flex-col gap-8 overflow-y-scroll pt-16">
        <react_1.ThreadPrimitive.Empty>
          <div className="flex flex-grow flex-col items-center justify-center">
            <Avatar.Root className="flex h-12 w-12 items-center justify-center rounded-[24px] border border-white/15 shadow">
              <Avatar.AvatarFallback>C</Avatar.AvatarFallback>
            </Avatar.Root>
            <p className="mt-4 text-xl text-foreground">
              How can I help you today?
            </p>
          </div>
        </react_1.ThreadPrimitive.Empty>

        <react_1.ThreadPrimitive.Messages components={{
            UserMessage,
            EditComposer,
            AssistantMessage,
        }}/>
      </react_1.ThreadPrimitive.Viewport>

      <react_1.ComposerPrimitive.Root className="mx-auto flex w-full max-w-screen-md items-end rounded-3xl bg-white/5 pl-2">
        <react_1.ComposerPrimitive.Input placeholder="Message Solomon AI" className="h-12 max-h-40 flex-grow resize-none bg-transparent p-3.5 text-sm text-foreground outline-none placeholder:text-foreground/50"/>
        <react_1.ThreadPrimitive.If running={false}>
          <react_1.ComposerPrimitive.Send className="m-2 flex size-8 items-center justify-center rounded-full bg-white transition-opacity disabled:opacity-10">
            <react_icons_1.ArrowUpIcon className="size-5 text-background [&_path]:stroke-black [&_path]:stroke-[1]"/>
          </react_1.ComposerPrimitive.Send>
        </react_1.ThreadPrimitive.If>
        <react_1.ThreadPrimitive.If running>
          <react_1.ComposerPrimitive.Cancel className="m-2 flex size-8 items-center justify-center rounded-full bg-white">
            <div className="size-2.5 bg-background"/>
          </react_1.ComposerPrimitive.Cancel>
        </react_1.ThreadPrimitive.If>
      </react_1.ComposerPrimitive.Root>
      <p className="p-2 text-center text-xs text-[#cdcdcd]">
        Solomon AI can make mistakes. Check important info.
      </p>
    </react_1.ThreadPrimitive.Root>);
};
exports.AssistantChatGPT = AssistantChatGPT;
const UserMessage = () => {
    return (<react_1.MessagePrimitive.Root className="relative mx-auto flex w-full max-w-screen-md flex-col items-end gap-1">
      <div className="flex items-start gap-4">
        <react_1.ActionBarPrimitive.Root hideWhenRunning autohide="not-last" autohideFloat="single-branch" className="mt-2">
          <react_1.ActionBarPrimitive.Edit asChild>
            <ActionButton tooltip="Edit">
              <react_icons_1.Pencil1Icon />
            </ActionButton>
          </react_1.ActionBarPrimitive.Edit>
        </react_1.ActionBarPrimitive.Root>

        <div className="rounded-3xl bg-white/5 px-5 py-2 text-[#eee]">
          <react_1.MessagePrimitive.Content />
        </div>
      </div>

      <BranchPicker className="mr-3 mt-2"/>
    </react_1.MessagePrimitive.Root>);
};
const EditComposer = () => {
    return (<react_1.ComposerPrimitive.Root className="mx-auto flex w-full max-w-screen-md flex-col justify-end gap-1 rounded-3xl bg-white/15">
      <react_1.ComposerPrimitive.Input className="flex h-8 w-full resize-none bg-transparent p-5 pb-0 text-foreground outline-none"/>

      <div className="m-3 mt-2 flex items-center justify-center gap-2 self-end">
        <react_1.ComposerPrimitive.Cancel className="rounded-full bg-zinc-900 px-3 py-2 text-sm font-semibold text-foreground hover:bg-zinc-800">
          Cancel
        </react_1.ComposerPrimitive.Cancel>
        <react_1.ComposerPrimitive.Send className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-background hover:bg-white/90">
          Send
        </react_1.ComposerPrimitive.Send>
      </div>
    </react_1.ComposerPrimitive.Root>);
};
const AssistantMessage = () => {
    return (<react_1.MessagePrimitive.Root className="relative mx-auto flex w-full max-w-screen-md gap-3">
      <Avatar.Root className="flex size-8 flex-shrink-0 items-center justify-center rounded-[24px] border border-white/15 shadow">
        <Avatar.AvatarFallback className="text-xs text-foreground">
          C
        </Avatar.AvatarFallback>
      </Avatar.Root>

      <div className="pt-1">
        <div className="text-[#eee]">
          <react_1.MessagePrimitive.Content />
        </div>

        <div className="flex pt-2">
          <BranchPicker />

          <react_1.ActionBarPrimitive.Root hideWhenRunning autohide="not-last" autohideFloat="single-branch" className="flex items-center gap-1 rounded-lg data-[floating]:absolute data-[floating]:border-2 data-[floating]:p-1">
            <react_1.ActionBarPrimitive.Reload asChild>
              <ActionButton tooltip="Reload">
                <react_icons_1.ReloadIcon />
              </ActionButton>
            </react_1.ActionBarPrimitive.Reload>
            <react_1.ActionBarPrimitive.Copy asChild>
              <ActionButton tooltip="Copy">
                <react_1.MessagePrimitive.If copied>
                  <react_icons_1.CheckIcon />
                </react_1.MessagePrimitive.If>
                <react_1.MessagePrimitive.If copied={false}>
                  <react_icons_1.CopyIcon />
                </react_1.MessagePrimitive.If>
              </ActionButton>
            </react_1.ActionBarPrimitive.Copy>
          </react_1.ActionBarPrimitive.Root>
        </div>
      </div>
    </react_1.MessagePrimitive.Root>);
};
const BranchPicker = ({ className }) => {
    return (<react_1.BranchPickerPrimitive.Root hideWhenSingleBranch className={(0, cn_1.cn)("inline-flex items-center text-sm font-semibold text-[#b4b4b4]", className)}>
      <react_1.BranchPickerPrimitive.Previous asChild>
        <ActionButton tooltip="Previous">
          <react_icons_1.ChevronLeftIcon />
        </ActionButton>
      </react_1.BranchPickerPrimitive.Previous>
      <react_1.BranchPickerPrimitive.Number />/<react_1.BranchPickerPrimitive.Count />
      <react_1.BranchPickerPrimitive.Next asChild>
        <ActionButton tooltip="Next">
          <react_icons_1.ChevronRightIcon />
        </ActionButton>
      </react_1.BranchPickerPrimitive.Next>
    </react_1.BranchPickerPrimitive.Root>);
};
const ActionButton = ({ tooltip, className, children, ...rest }) => {
    return (<tooltip_1.Tooltip>
      <tooltip_1.TooltipTrigger asChild>
        <button_1.Button variant="ghost" size="icon" className={(0, cn_1.cn)("size-auto p-1 text-[#b4b4b4]", className)} {...rest}>
          {children}
          <span className="sr-only">{tooltip}</span>
        </button_1.Button>
      </tooltip_1.TooltipTrigger>
      <tooltip_1.TooltipContent side="bottom">{tooltip}</tooltip_1.TooltipContent>
    </tooltip_1.Tooltip>);
};
