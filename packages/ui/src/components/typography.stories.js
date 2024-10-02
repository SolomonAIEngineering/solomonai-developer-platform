"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Muted = exports.Small = exports.Large = exports.Lead = exports.Code = exports.Ol = exports.Ul = exports.Blockquote = exports.P = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;
const test_1 = require("@storybook/test");
const _1 = require(".");
const meta = {
    component: _1.Typography,
    args: {
        variant: "p",
        children: "The big brown fox jumps over the lazy dog.",
    },
    argTypes: {
        className: {
            control: { disable: true },
        },
        as: {
            control: { disable: true },
        },
    },
    play: async ({ canvasElement }) => {
        const canvas = (0, test_1.within)(canvasElement);
        await (0, test_1.expect)(canvas.getByText("The big brown fox jumps over the lazy dog.")).toBeInTheDocument();
    },
};
exports.default = meta;
exports.H1 = {
    name: "Heading1",
    args: {
        variant: "h1",
    },
};
exports.H2 = {
    name: "Heading2",
    args: {
        variant: "h2",
    },
};
exports.H3 = {
    name: "Heading3",
    args: {
        variant: "h3",
    },
};
exports.H4 = {
    name: "Heading4",
    args: {
        variant: "h4",
    },
};
exports.P = {
    args: {
        variant: "p",
    },
};
exports.Blockquote = {
    args: {
        variant: "blockquote",
    },
};
exports.Ul = {
    args: {
        variant: "ul",
        children: (<>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </>),
    },
    play: async ({ canvasElement }) => {
        const canvas = (0, test_1.within)(canvasElement);
        await (0, test_1.expect)(canvas.getByText("One")).toBeInTheDocument();
    },
};
exports.Ol = {
    args: {
        variant: "ol",
        children: (<>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </>),
    },
    play: async ({ canvasElement }) => {
        const canvas = (0, test_1.within)(canvasElement);
        await (0, test_1.expect)(canvas.getByText("One")).toBeInTheDocument();
    },
};
exports.Code = {
    args: {
        variant: "code",
        children: 'console.log("Hello, World!");',
    },
    play: async ({ canvasElement }) => {
        const canvas = (0, test_1.within)(canvasElement);
        await (0, test_1.expect)(canvas.getByText('console.log("Hello, World!");')).toBeInTheDocument();
    },
};
exports.Lead = {
    args: {
        variant: "lead",
    },
};
exports.Large = {
    args: {
        variant: "large",
    },
};
exports.Small = {
    args: {
        variant: "small",
    },
};
exports.Muted = {
    args: {
        variant: "muted",
    },
};
