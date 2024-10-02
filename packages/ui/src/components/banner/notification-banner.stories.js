"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullScreenCenteredBanner = exports.FullScreenTopPositionBanner = exports.FullScreenBottomPositionBanner = exports.WithSaveAndRejectButtons = exports.WithMessage = exports.LeftMarginBanner = exports.FullScreenBanner = exports.CenteredBanner = exports.BottomPositionBanner = exports.TopPositionBanner = exports.Default = void 0;
const notification_banner_1 = __importDefault(require("./notification-banner"));
const meta = {
    component: notification_banner_1.default,
    argTypes: {
        position: {
            control: {
                type: "select",
                options: ["bottom", "top"],
            },
            defaultValue: "bottom", // Default value
        },
        centered: {
            control: "boolean",
            defaultValue: false, // Default value
        },
        fullScreen: {
            control: "boolean",
            defaultValue: false, // Default value
        },
        marginLeft: {
            control: "boolean",
            defaultValue: false, // Default value
        },
        message: {
            control: "text",
            defaultValue: "", // Default value
        },
    },
};
exports.default = meta;
exports.Default = {};
exports.TopPositionBanner = {
    args: {
        position: "top",
    },
};
exports.BottomPositionBanner = {
    args: {
        position: "bottom",
    },
};
exports.CenteredBanner = {
    args: {
        centered: true,
    },
};
exports.FullScreenBanner = {
    args: {
        fullScreen: true,
    },
};
exports.LeftMarginBanner = {
    args: {
        marginLeft: true,
    },
};
exports.WithMessage = {
    args: {
        message: "This is a notification banner.",
    },
};
exports.WithSaveAndRejectButtons = {
    args: {
        message: "This is a notification banner with save and reject buttons.",
        onSave: () => {
            alert("Save button clicked!");
        },
        onReject: () => {
            alert("Reject button clicked!");
        },
    },
};
exports.FullScreenBottomPositionBanner = {
    args: {
        fullScreen: true,
        position: "bottom",
        message: "This is a full screen banner",
    },
};
exports.FullScreenTopPositionBanner = {
    args: {
        fullScreen: true,
        position: "top",
        message: "This is a full screen banner",
    },
};
exports.FullScreenCenteredBanner = {
    args: {
        fullScreen: true,
        centered: true,
        message: "This is a full screen banner",
    },
};
