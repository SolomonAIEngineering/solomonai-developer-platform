"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.h2 =
  exports.pre =
  exports.CodeGroup =
  exports.code =
  exports.Button =
  exports.a =
    void 0;
exports.wrapper = wrapper;
exports.Note = Note;
exports.Row = Row;
exports.Col = Col;
exports.Properties = Properties;
exports.Property = Property;
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
const Feedback_1 = require("@/components/Feedback");
const Heading_1 = require("@/components/Heading");
const Prose_1 = require("@/components/Prose");
exports.a = link_1.default;
var Button_1 = require("@/components/Button");
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return Button_1.Button;
  },
});
var Code_1 = require("@/components/Code");
Object.defineProperty(exports, "code", {
  enumerable: true,
  get: function () {
    return Code_1.Code;
  },
});
Object.defineProperty(exports, "CodeGroup", {
  enumerable: true,
  get: function () {
    return Code_1.CodeGroup;
  },
});
Object.defineProperty(exports, "pre", {
  enumerable: true,
  get: function () {
    return Code_1.Pre;
  },
});
function wrapper({ children }) {
  return (
    <article className="flex h-full flex-col pb-10 pt-16">
      <Prose_1.Prose className="w-full max-w-7xl flex-auto">
        {children}
      </Prose_1.Prose>
      <footer className="mx-auto mt-16 w-full max-w-2xl lg:max-w-5xl">
        <Feedback_1.Feedback />
      </footer>
    </article>
  );
}
const h2 = function H2(props) {
  return <Heading_1.Heading level={2} {...props} />;
};
exports.h2 = h2;
function InfoIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <circle cx="8" cy="8" r="8" strokeWidth="0" />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.75 7.75h1.5v3.5"
      />
      <circle cx="8" cy="4" r=".5" fill="none" />
    </svg>
  );
}
function Note({ children }) {
  return (
    <div className="my-6 flex gap-2.5 rounded-2xl border border-blue-500/20 bg-blue-50/50 p-4 leading-6 text-blue-900 dark:border-blue-500/30 dark:bg-blue-500/5 dark:text-blue-200 dark:[--tw-prose-links-hover:theme(colors.blue.300)] dark:[--tw-prose-links:theme(colors.white)]">
      <InfoIcon className="mt-1 h-4 w-4 flex-none fill-blue-500 stroke-white dark:fill-blue-200/20 dark:stroke-blue-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
function Row({ children }) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
      {children}
    </div>
  );
}
function Col({ children, sticky = false }) {
  return (
    <div
      className={(0, clsx_1.default)(
        "[&>:first-child]:mt-0 [&>:last-child]:mb-0",
        sticky && "xl:sticky xl:top-24",
      )}
    >
      {children}
    </div>
  );
}
function Properties({ children }) {
  return (
    <div className="my-6">
      <ul
        role="list"
        className="m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5"
      >
        {children}
      </ul>
    </div>
  );
}
function Property({ name, children, type }) {
  return (
    <li className="m-0 px-0 py-4 first:pt-0 last:pb-0">
      <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd>
          <code>{name}</code>
        </dd>
        {type && (
          <>
            <dt className="sr-only">Type</dt>
            <dd className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              {type}
            </dd>
          </>
        )}
        <dt className="sr-only">Description</dt>
        <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </dd>
      </dl>
    </li>
  );
}
