"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownText = void 0;
const react_1 = require("react");
const react_markdown_1 = require("@assistant-ui/react-markdown");
const rehype_katex_1 = __importDefault(require("rehype-katex"));
const remark_gfm_1 = __importDefault(require("remark-gfm"));
const remark_math_1 = __importDefault(require("remark-math"));
const cn_1 = require("../utils/cn");
require("katex/dist/katex.min.css");
const MarkdownTextImpl = () => {
    return (<react_markdown_1.MarkdownTextPrimitive remarkPlugins={[remark_gfm_1.default, remark_math_1.default]} rehypePlugins={[rehype_katex_1.default]} components={{
            h1: ({ node, className, ...props }) => (<h1 className={(0, cn_1.cn)("mb-8 scroll-m-20 text-4xl font-extrabold tracking-tight last:mb-0", className)} {...props}/>),
            h2: ({ node, className, ...props }) => (<h2 className={(0, cn_1.cn)("mb-4 mt-8 scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 last:mb-0", className)} {...props}/>),
            h3: ({ node, className, ...props }) => (<h3 className={(0, cn_1.cn)("mb-4 mt-6 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0 last:mb-0", className)} {...props}/>),
            h4: ({ node, className, ...props }) => (<h4 className={(0, cn_1.cn)("mb-4 mt-6 scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 last:mb-0", className)} {...props}/>),
            h5: ({ node, className, ...props }) => (<h5 className={(0, cn_1.cn)("my-4 text-lg font-semibold first:mt-0 last:mb-0", className)} {...props}/>),
            h6: ({ node, className, ...props }) => (<h6 className={(0, cn_1.cn)("my-4 font-semibold first:mt-0 last:mb-0", className)} {...props}/>),
            p: ({ node, className, ...props }) => (<p className={(0, cn_1.cn)("mb-5 mt-5 leading-7 first:mt-0 last:mb-0", className)} {...props}/>),
            a: ({ node, ...props }) => (<a target="_blank" className={(0, cn_1.cn)("font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-50", props.className)} {...props}/>),
            blockquote: ({ node, ...props }) => (<blockquote className={(0, cn_1.cn)("border-l-2 pl-6 italic", props.className)} {...props}/>),
            ul: ({ node, ...props }) => (<ul className={(0, cn_1.cn)("my-5 ml-6 list-disc [&>li]:mt-2", props.className)} {...props}/>),
            ol: ({ node, ...props }) => (<ol className={(0, cn_1.cn)("my-5 ml-6 list-decimal [&>li]:mt-2", props.className)} {...props}/>),
            hr: ({ node, ...props }) => (<hr className={(0, cn_1.cn)("my-5 border-b", props.className)} {...props}/>),
            table: ({ node, ...props }) => (<table className={(0, cn_1.cn)("my-5 w-full border-separate border-spacing-0 overflow-y-auto", props.className)} {...props}/>),
            th: ({ node, ...props }) => (<th className={(0, cn_1.cn)("bg-zinc-100 px-4 py-2 text-left font-bold first:rounded-tl-lg last:rounded-tr-lg dark:bg-zinc-800 [&[align=center]]:text-center [&[align=right]]:text-right", props.className)} {...props}/>),
            td: ({ node, ...props }) => (<td className={(0, cn_1.cn)("border-b border-l px-4 py-2 text-left last:border-r [&[align=center]]:text-center [&[align=right]]:text-right", props.className)} {...props}/>),
            tr: ({ node, ...props }) => (<tr className={(0, cn_1.cn)("m-0 border-b p-0 first:border-t [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg", props.className)} {...props}/>),
            sup: ({ node, ...props }) => (<sup className={(0, cn_1.cn)("[&>a]:text-xs [&>a]:no-underline", props.className)} {...props}/>),
            code(props) {
                const { children, className, node, ref, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "")?.[1];
                return (<>
              <div className="rounded-t-lg bg-zinc-100 px-4 py-2 font-mono text-xs dark:bg-zinc-800">
                <p>{match}</p>
              </div>
              <code {...rest} className={(0, cn_1.cn)("overflow-x-auto rounded-b-lg bg-background p-4 text-foreground", className)}>
                {children}
              </code>
            </>);
            },
        }}/>);
};
exports.MarkdownText = (0, react_1.memo)(MarkdownTextImpl);
