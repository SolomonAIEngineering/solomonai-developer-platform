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
const FeatureBaseWidget = () => {
    (0, react_1.useEffect)(() => {
        const win = window;
        if (typeof win.Featurebase !== "function") {
            win.Featurebase = function () {
                // eslint-disable-next-line prefer-rest-params
                (win.Featurebase.q = win.Featurebase.q || []).push(arguments);
            };
        }
        win.Featurebase("embed", {
            /* Required */
            organization: "solomonai",
            /* Optional */
            basePath: null, // Sync urls between your website & our embed. Example: '/feedback'. Refer to the url synchronizing section below to learn more.
            // Aesthetic or Display
            theme: "light", // options: light [default], dark. Remove for auto.
            initialPage: "Board", // options: Board [default], Changelog, Roadmap
            hideMenu: false, // Hides the top navigation bar
            hideLogo: false, // Hides the logo in the top navigation bar & leaves the Sign In button visible.
            filters: null, // Default filters to apply to the board view. Copy the filters from the URL when you have the filters you want selected. Example: 'b=63f827df2d62cb301468aac4&sortBy=upvotes:desc'
            jwtToken: null, // Automatically sign in a user with a JWT token. See the JWT section below.
            metadata: null, // Attach session-specific metadata to feedback. Refer to the advanced section for the details: https://developers.featurebase.app/install/advanced#metadata
        });
    }, []);
    return (<>
      <script_1.default src="https://do.featurebase.app/js/sdk.js" id="featurebase-sdk"/>
      <div data-featurebase-embed></div>
    </>);
};
exports.default = FeatureBaseWidget;
