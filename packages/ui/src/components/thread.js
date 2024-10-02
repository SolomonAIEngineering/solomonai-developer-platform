"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thread = void 0;
const react_1 = require("@assistant-ui/react");
const react_tooltip_1 = require("@radix-ui/react-tooltip");
const lucide_react_1 = require("lucide-react");
const cn_1 = require("../utils/cn");
const avatar_1 = require("./avatar");
const button_1 = require("./button");
const markdown_text_1 = require("./markdown-text");
const tooltip_1 = require("./tooltip");
const Thread = () => {
    return (<react_tooltip_1.TooltipProvider>
      <react_1.ThreadPrimitive.Root className="flex h-full flex-col items-center pb-4">
        <react_1.ThreadPrimitive.Viewport className="flex w-full flex-grow flex-col items-center overflow-y-scroll scroll-smooth px-4 pt-12">
          <react_1.ThreadPrimitive.Empty>
            <ThreadEmpty />
          </react_1.ThreadPrimitive.Empty>

          <react_1.ThreadPrimitive.Messages components={{
            UserMessage,
            EditComposer,
            AssistantMessage,
        }}/>

          <ThreadScrollToBottom />
        </react_1.ThreadPrimitive.Viewport>

        <Composer />
      </react_1.ThreadPrimitive.Root>
    </react_tooltip_1.TooltipProvider>);
};
exports.Thread = Thread;
const ThreadEmpty = () => {
    return (<div className="flex flex-grow flex-col items-center justify-center">
      <avatar_1.Avatar>
        <avatar_1.AvatarFallback>C</avatar_1.AvatarFallback>
      </avatar_1.Avatar>
      <p className="mt-4 text-xl">How can I help you today?</p>
    </div>);
};
const ThreadScrollToBottom = () => {
    return (<div className="sticky bottom-0">
      <react_1.ThreadPrimitive.ScrollToBottom asChild>
        <IconButton tooltip="Scroll to bottom" variant="outline" className="absolute -top-10 rounded-full disabled:invisible">
          <lucide_react_1.ArrowDownIcon className="size-4"/>
        </IconButton>
      </react_1.ThreadPrimitive.ScrollToBottom>
    </div>);
};
const Composer = () => {
    return (<react_1.ComposerPrimitive.Root className="flex w-[calc(100%-32px)] max-w-[42rem] items-end rounded-lg border border-zinc-200 p-0.5 transition-shadow focus-within:shadow-sm dark:border-zinc-800">
      <react_1.ComposerPrimitive.Input autoFocus placeholder="Write a message..." className="h-12 max-h-40 flex-grow resize-none bg-transparent p-3.5 text-sm outline-none placeholder:text-zinc-950/50 dark:placeholder:text-zinc-50/50"/>
      <react_1.ThreadPrimitive.If running={false}>
        <react_1.ComposerPrimitive.Send className="m-2 flex h-8 w-8 items-center justify-center rounded-md bg-zinc-950 text-2xl font-bold shadow transition-opacity disabled:opacity-10 dark:bg-zinc-50">
          <lucide_react_1.SendHorizonalIcon className="size-4 text-foreground dark:text-zinc-950"/>
        </react_1.ComposerPrimitive.Send>
      </react_1.ThreadPrimitive.If>
      <react_1.ThreadPrimitive.If running>
        <react_1.ComposerPrimitive.Cancel className="m-3.5 flex size-5 items-center justify-center rounded-full border-2 border-zinc-950 dark:border-zinc-50">
          <div className="size-2 rounded-[1px] bg-zinc-950 dark:bg-zinc-50"/>
        </react_1.ComposerPrimitive.Cancel>
      </react_1.ThreadPrimitive.If>
    </react_1.ComposerPrimitive.Root>);
};
const UserMessage = () => {
    return (<react_1.MessagePrimitive.Root className="relative mb-6 flex w-full max-w-2xl flex-col items-end gap-2 pl-24">
      <div className="relative mr-1 flex items-start gap-3">
        <react_1.ActionBarPrimitive.Root hideWhenRunning autohide="not-last" className="mt-2">
          <react_1.ActionBarPrimitive.Edit asChild>
            <IconButton tooltip="Edit">
              <lucide_react_1.PencilIcon className="size-4"/>
            </IconButton>
          </react_1.ActionBarPrimitive.Edit>
        </react_1.ActionBarPrimitive.Root>

        <div className="max-w-xl break-words rounded-3xl bg-zinc-950/5 px-5 py-2.5 text-zinc-950 dark:bg-zinc-50/5 dark:text-zinc-50">
          <react_1.MessagePrimitive.Content />
        </div>
      </div>

      <BranchPicker />
    </react_1.MessagePrimitive.Root>);
};
const EditComposer = () => {
    return (<react_1.ComposerPrimitive.Root className="mb-4 flex w-full max-w-2xl flex-col gap-2 rounded-xl bg-zinc-950/5 dark:bg-zinc-50/5">
      <react_1.ComposerPrimitive.Input className="flex h-8 w-full resize-none bg-transparent p-5 pb-0 text-zinc-950 outline-none dark:text-zinc-50"/>

      <div className="mx-3 mb-3 flex items-center justify-center gap-2 self-end">
        <react_1.ComposerPrimitive.Cancel asChild>
          <button_1.Button variant="secondary" className="bg-transparent">
            Cancel
          </button_1.Button>
        </react_1.ComposerPrimitive.Cancel>
        <react_1.ComposerPrimitive.Send>
          <button_1.Button>Send</button_1.Button>
        </react_1.ComposerPrimitive.Send>
      </div>
    </react_1.ComposerPrimitive.Root>);
};
const AssistantMessage = () => {
    return (<react_1.MessagePrimitive.Root className="relative mb-6 flex w-full max-w-2xl gap-3">
      <avatar_1.Avatar>
        <avatar_1.AvatarFallback>A</avatar_1.AvatarFallback>
      </avatar_1.Avatar>

      <div className="mt-2 flex-grow">
        <react_1.MessagePrimitive.InProgress className="inline-block size-3 animate-pulse rounded-full bg-zinc-950 dark:bg-zinc-50"/>
        <div className="max-w-xl break-words text-zinc-950 dark:text-zinc-50">
          <react_1.MessagePrimitive.Content components={{ Text: markdown_text_1.MarkdownText }}/>
        </div>

        <div className="flex pt-2">
          <BranchPicker />

          <react_1.ActionBarPrimitive.Root hideWhenRunning autohide="not-last" autohideFloat="single-branch" className="z-50 flex items-center gap-1 rounded-lg data-[floating]:absolute data-[floating]:border data-[floating]:bg-white data-[floating]:p-1 dark:data-[floating]:bg-zinc-950">
            <react_1.ActionBarPrimitive.Copy asChild>
              <IconButton tooltip="Copy">
                <react_1.MessagePrimitive.If copied>
                  <lucide_react_1.CheckIcon className="size-4"/>
                </react_1.MessagePrimitive.If>
                <react_1.MessagePrimitive.If copied={false}>
                  <lucide_react_1.CopyIcon className="size-4"/>
                </react_1.MessagePrimitive.If>
              </IconButton>
            </react_1.ActionBarPrimitive.Copy>
            <react_1.ActionBarPrimitive.Reload asChild>
              <IconButton tooltip="Refresh">
                <lucide_react_1.RefreshCwIcon className="size-4"/>
              </IconButton>
            </react_1.ActionBarPrimitive.Reload>
          </react_1.ActionBarPrimitive.Root>
        </div>
      </div>
    </react_1.MessagePrimitive.Root>);
};
const BranchPicker = () => {
    return (<react_1.BranchPickerPrimitive.Root hideWhenSingleBranch className="inline-flex items-center text-xs text-zinc-950/60 dark:text-zinc-50/60">
      <react_1.BranchPickerPrimitive.Previous asChild>
        <IconButton tooltip="Previous">
          <lucide_react_1.ChevronLeftIcon className="size-4"/>
        </IconButton>
      </react_1.BranchPickerPrimitive.Previous>
      <react_1.BranchPickerPrimitive.Number /> / <react_1.BranchPickerPrimitive.Count />
      <react_1.BranchPickerPrimitive.Next asChild>
        <IconButton tooltip="Next">
          <lucide_react_1.ChevronRightIcon className="size-4"/>
        </IconButton>
      </react_1.BranchPickerPrimitive.Next>
    </react_1.BranchPickerPrimitive.Root>);
};
const IconButton = ({ children, tooltip, className, ...rest }) => {
    return (<tooltip_1.Tooltip>
      <tooltip_1.TooltipTrigger asChild>
        <button_1.Button variant="ghost" size="icon" className={(0, cn_1.cn)("size-auto p-1", className)} {...rest}>
          {children}
          <span className="sr-only">{tooltip}</span>
        </button_1.Button>
      </tooltip_1.TooltipTrigger>
      <tooltip_1.TooltipContent side="bottom">{tooltip}</tooltip_1.TooltipContent>
    </tooltip_1.Tooltip>);
};
