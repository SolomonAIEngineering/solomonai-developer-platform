"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeGroup = CodeGroup;
exports.Code = Code;
exports.Pre = Pre;
const react_1 = require("@headlessui/react");
const clsx_1 = __importDefault(require("clsx"));
const react_2 = require("react");
const zustand_1 = require("zustand");
const Tag_1 = require("@/components/Tag");
const languageNames = {
    js: "JavaScript",
    ts: "TypeScript",
    javascript: "JavaScript",
    typescript: "TypeScript",
    php: "PHP",
    python: "Python",
    ruby: "Ruby",
    go: "Go",
};
function getPanelTitle({ title, language, }) {
    if (title) {
        return title;
    }
    if (language && language in languageNames) {
        return languageNames[language];
    }
    return "Code";
}
function ClipboardIcon(props) {
    return (<svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path strokeWidth="0" d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"/>
      <path fill="none" strokeLinejoin="round" d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"/>
    </svg>);
}
function CopyButton({ code }) {
    let [copyCount, setCopyCount] = (0, react_2.useState)(0);
    let copied = copyCount > 0;
    (0, react_2.useEffect)(() => {
        if (copyCount > 0) {
            let timeout = setTimeout(() => setCopyCount(0), 1000);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [copyCount]);
    return (<button type="button" className={(0, clsx_1.default)("group/button text-2xs absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100", copied
            ? "bg-blue-400/10 ring-1 ring-inset ring-blue-400/20"
            : "hover:bg-white/7.5 dark:bg-white/2.5 bg-white/5 dark:hover:bg-white/5")} onClick={() => {
            window.navigator.clipboard.writeText(code).then(() => {
                setCopyCount((count) => count + 1);
            });
        }}>
      <span aria-hidden={copied} className={(0, clsx_1.default)("pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300", copied && "-translate-y-1.5 opacity-0")}>
        <ClipboardIcon className="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400"/>
        Copy
      </span>
      <span aria-hidden={!copied} className={(0, clsx_1.default)("pointer-events-none absolute inset-0 flex items-center justify-center text-blue-400 transition duration-300", !copied && "translate-y-1.5 opacity-0")}>
        Copied!
      </span>
    </button>);
}
function CodePanelHeader({ tag, label }) {
    if (!tag && !label) {
        return null;
    }
    return (<div className="border-b-white/7.5 bg-white/2.5 dark:bg-white/1 flex h-9 items-center gap-2 border-y border-t-transparent bg-zinc-900 px-4 dark:border-b-white/5">
      {tag && (<div className="dark flex">
          <Tag_1.Tag variant="small">{tag}</Tag_1.Tag>
        </div>)}
      {tag && label && (<span className="h-0.5 w-0.5 rounded-full bg-zinc-500"/>)}
      {label && (<span className="font-mono text-xs text-zinc-400">{label}</span>)}
    </div>);
}
function CodePanel({ children, tag, label, code, }) {
    let child = react_2.Children.only(children);
    if ((0, react_2.isValidElement)(child)) {
        tag = child.props.tag ?? tag;
        label = child.props.label ?? label;
        code = child.props.code ?? code;
    }
    if (!code) {
        throw new Error("`CodePanel` requires a `code` prop, or a child with a `code` prop.");
    }
    return (<div className="dark:bg-white/2.5 group">
      <CodePanelHeader tag={tag} label={label}/>
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-xs text-white">{children}</pre>
        <CopyButton code={code}/>
      </div>
    </div>);
}
function CodeGroupHeader({ title, children, selectedIndex, }) {
    let hasTabs = react_2.Children.count(children) > 1;
    if (!title && !hasTabs) {
        return null;
    }
    return (<div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
      {title && (<h3 className="mr-auto pt-3 text-xs font-semibold text-white">
          {title}
        </h3>)}
      {hasTabs && (<react_1.TabList className="-mb-px flex gap-4 text-xs font-medium">
          {react_2.Children.map(children, (child, childIndex) => (<react_1.Tab className={(0, clsx_1.default)("border-b py-3 transition ui-not-focus-visible:outline-none", childIndex === selectedIndex
                    ? "border-blue-500 text-blue-400"
                    : "border-transparent text-zinc-400 hover:text-zinc-300")}>
              {getPanelTitle((0, react_2.isValidElement)(child) ? child.props : {})}
            </react_1.Tab>))}
        </react_1.TabList>)}
    </div>);
}
function CodeGroupPanels({ children, ...props }) {
    let hasTabs = react_2.Children.count(children) > 1;
    if (hasTabs) {
        return (<react_1.TabPanels>
        {react_2.Children.map(children, (child) => (<react_1.TabPanel>
            <CodePanel {...props}>{child}</CodePanel>
          </react_1.TabPanel>))}
      </react_1.TabPanels>);
    }
    return <CodePanel {...props}>{children}</CodePanel>;
}
function usePreventLayoutShift() {
    let positionRef = (0, react_2.useRef)(null);
    let rafRef = (0, react_2.useRef)();
    (0, react_2.useEffect)(() => {
        return () => {
            if (typeof rafRef.current !== "undefined") {
                window.cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);
    return {
        positionRef,
        preventLayoutShift(callback) {
            if (!positionRef.current) {
                return;
            }
            let initialTop = positionRef.current.getBoundingClientRect().top;
            callback();
            rafRef.current = window.requestAnimationFrame(() => {
                let newTop = positionRef.current?.getBoundingClientRect().top ?? initialTop;
                window.scrollBy(0, newTop - initialTop);
            });
        },
    };
}
const usePreferredLanguageStore = (0, zustand_1.create)()((set) => ({
    preferredLanguages: [],
    addPreferredLanguage: (language) => set((state) => ({
        preferredLanguages: [
            ...state.preferredLanguages.filter((preferredLanguage) => preferredLanguage !== language),
            language,
        ],
    })),
}));
function useTabGroupProps(availableLanguages) {
    let { preferredLanguages, addPreferredLanguage } = usePreferredLanguageStore();
    let [selectedIndex, setSelectedIndex] = (0, react_2.useState)(0);
    let activeLanguage = [...availableLanguages].sort((a, z) => preferredLanguages.indexOf(z) - preferredLanguages.indexOf(a))[0];
    let languageIndex = availableLanguages.indexOf(activeLanguage);
    let newSelectedIndex = languageIndex === -1 ? selectedIndex : languageIndex;
    if (newSelectedIndex !== selectedIndex) {
        setSelectedIndex(newSelectedIndex);
    }
    let { positionRef, preventLayoutShift } = usePreventLayoutShift();
    return {
        as: "div",
        ref: positionRef,
        selectedIndex,
        onChange: (newSelectedIndex) => {
            preventLayoutShift(() => addPreferredLanguage(availableLanguages[newSelectedIndex]));
        },
    };
}
const CodeGroupContext = (0, react_2.createContext)(false);
function CodeGroup({ children, title, ...props }) {
    let languages = react_2.Children.map(children, (child) => getPanelTitle((0, react_2.isValidElement)(child) ? child.props : {})) ?? [];
    let tabGroupProps = useTabGroupProps(languages);
    let hasTabs = react_2.Children.count(children) > 1;
    let containerClassName = "my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10";
    let header = (<CodeGroupHeader title={title} selectedIndex={tabGroupProps.selectedIndex}>
      {children}
    </CodeGroupHeader>);
    let panels = <CodeGroupPanels {...props}>{children}</CodeGroupPanels>;
    return (<CodeGroupContext.Provider value={true}>
      {hasTabs ? (<react_1.TabGroup {...tabGroupProps} className={containerClassName}>
          <div className="not-prose">
            {header}
            {panels}
          </div>
        </react_1.TabGroup>) : (<div className={containerClassName}>
          <div className="not-prose">
            {header}
            {panels}
          </div>
        </div>)}
    </CodeGroupContext.Provider>);
}
function Code({ children, ...props }) {
    let isGrouped = (0, react_2.useContext)(CodeGroupContext);
    if (isGrouped) {
        if (typeof children !== "string") {
            throw new Error("`Code` children must be a string when nested inside a `CodeGroup`.");
        }
        return <code {...props} dangerouslySetInnerHTML={{ __html: children }}/>;
    }
    return <code {...props}>{children}</code>;
}
function Pre({ children, ...props }) {
    let isGrouped = (0, react_2.useContext)(CodeGroupContext);
    if (isGrouped) {
        return children;
    }
    return <CodeGroup {...props}>{children}</CodeGroup>;
}
