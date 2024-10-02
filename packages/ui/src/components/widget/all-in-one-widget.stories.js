"use strict";
// AllInOneWidget.stories.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithMetadata = exports.CustomInitialPage = exports.FullScreen = exports.LeftPlacement = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const all_in_one_widget_1 = __importDefault(require("./all-in-one-widget"));
exports.default = {
    component: all_in_one_widget_1.default,
    argTypes: {
        organization: { control: "text" },
        placement: {
            control: { type: "select", options: ["left", "right"] },
        },
        fullScreen: { control: "boolean" },
        initialPage: {
            control: {
                type: "select",
                options: [
                    "MainView",
                    "RoadmapView",
                    "CreatePost",
                    "PostsView",
                    "ChangelogView",
                ],
            },
        },
        metadata: { control: "object" },
    },
};
const Template = (args) => <all_in_one_widget_1.default {...args}/>;
exports.Default = Template.bind({});
exports.Default.args = {
    organization: "solomonai",
};
exports.LeftPlacement = Template.bind({});
exports.LeftPlacement.args = {
    organization: "solomonai",
    placement: "left",
};
exports.FullScreen = Template.bind({});
exports.FullScreen.args = {
    organization: "solomonai",
    fullScreen: true,
};
exports.CustomInitialPage = Template.bind({});
exports.CustomInitialPage.args = {
    organization: "solomonai",
    initialPage: "RoadmapView",
};
exports.WithMetadata = Template.bind({});
exports.WithMetadata.args = {
    organization: "solomonai",
    metadata: {
        userId: "12345",
        userRole: "admin",
    },
};
