"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandaloneAssistant = void 0;
const link_1 = __importDefault(require("next/link"));
const react_1 = require("@assistant-ui/react");
const lucide_react_1 = require("lucide-react");
const cn_1 = require("@v1/ui/cn");
const button_1 = require("../button");
const sheet_1 = require("../sheet");
const thread_1 = require("../thread");
const tooltip_1 = require("../tooltip");
const model_picker_1 = require("./model-picker");
const ButtonWithTooltip = ({ children, tooltip, side = "top", ...rest }) => {
    return (<tooltip_1.Tooltip>
      <tooltip_1.TooltipTrigger asChild>
        <button_1.Button {...rest}>
          {children}
          <span className="sr-only">{tooltip}</span>
        </button_1.Button>
      </tooltip_1.TooltipTrigger>
      <tooltip_1.TooltipContent side={side}>{tooltip}</tooltip_1.TooltipContent>
    </tooltip_1.Tooltip>);
};
const TopLeft = () => {
    const switchToNewThread = (0, react_1.useSwitchToNewThread)();
    return (<ButtonWithTooltip onClick={switchToNewThread} variant="ghost" className="flex w-full justify-between px-3" tooltip="New Chat" side="right">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <lucide_react_1.RocketIcon className="inline size-4"/>
        <span>assistant-ui</span>
      </div>

      <lucide_react_1.EditIcon className="size-4"/>
    </ButtonWithTooltip>);
};
const MainLeft = () => {
    return (<nav className="flex flex-col items-stretch gap-1 text-sm font-medium">
      <link_1.default href="#" className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary">
        New Chat
        <ButtonWithTooltip variant={"ghost"} className="ml-auto h-auto p-0 hover:text-foreground/60" tooltip="Archive">
          <lucide_react_1.ArchiveIcon className="size-4"/>
        </ButtonWithTooltip>
      </link_1.default>
    </nav>);
};
const LeftBarSheet = () => {
    return (<sheet_1.Sheet>
      <sheet_1.SheetTrigger asChild>
        <button_1.Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <lucide_react_1.MenuIcon className="size-4"/>
          <span className="sr-only">Toggle navigation menu</span>
        </button_1.Button>
      </sheet_1.SheetTrigger>
      <sheet_1.SheetContent side="left" className="flex flex-col">
        <div className="mt-6 flex flex-col gap-1">
          <TopLeft />
          <MainLeft />
        </div>
      </sheet_1.SheetContent>
    </sheet_1.Sheet>);
};
const Header = () => {
    return (<header className="flex gap-2">
      <LeftBarSheet />
      <model_picker_1.ModelPicker />
      <ButtonWithTooltip variant="outline" size="icon" tooltip="Share" side="bottom" className="ml-auto shrink-0">
        <lucide_react_1.ShareIcon className="size-4"/>
      </ButtonWithTooltip>
    </header>);
};
const StandaloneAssistant = () => {
    const sideStyle = "bg-muted/40 px-3 py-2";
    const topStyle = "border-b";
    const leftStyle = "border-r hidden md:block";
    return (<div className="grid h-full w-full grid-flow-col grid-rows-[auto_1fr] md:grid-cols-[250px_1fr]">
      <div className={(0, cn_1.cn)(sideStyle, leftStyle, topStyle)}>
        <TopLeft />
      </div>
      <div className={(0, cn_1.cn)(sideStyle, leftStyle)}>
        <MainLeft />
      </div>
      <div className={(0, cn_1.cn)(sideStyle, topStyle)}>
        <Header />
      </div>
      <div className="overflow-hidden">
        <thread_1.Thread />
      </div>
    </div>);
};
exports.StandaloneAssistant = StandaloneAssistant;
