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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// NextJS 13 requires this. Remove if you are using NextJS 12 or lower
const react_1 = require("react");
const React = __importStar(require("react"));
const script_1 = __importDefault(require("next/script"));
const ChangelogWidget = () => {
    (0, react_1.useEffect)(() => {
        const win = window;
        if (typeof win.Featurebase !== "function") {
            win.Featurebase = function () {
                // eslint-disable-next-line prefer-rest-params
                (win.Featurebase.q = win.Featurebase.q || []).push(arguments);
            };
        }
        win.Featurebase("initialize_changelog_widget", {
            organization: "solomonai", // Replace this with your featurebase organization name
            placement: "right", // Choose between right, left, top, bottom placement (Optional if fullscreenPopup is enabled)
            theme: "light", // Choose between dark or light theme
            fullscreenPopup: true, // Optional - Open a fullscreen announcement of the new feature to the user
            usersName: "John", // Optional - Show the users name in the welcome message for the fullscreen popup
        });
    }, []);
    return (<>
      <script_1.default src="https://do.featurebase.app/js/sdk.js" id="featurebase-sdk"/>
      <div>
        <button data-featurebase-changelog>
          Open changelog <span id="fb-update-badge"></span>
        </button>
      </div>
    </>);
};
exports.default = ChangelogWidget;
