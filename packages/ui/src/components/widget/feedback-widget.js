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
const FeedbackWidget = () => {
    (0, react_1.useEffect)(() => {
        const win = window;
        if (typeof win.Featurebase !== "function") {
            win.Featurebase = function () {
                // eslint-disable-next-line prefer-rest-params
                (win.Featurebase.q = win.Featurebase.q || []).push(arguments);
            };
        }
        win.Featurebase("initialize_feedback_widget", {
            organization: "solomonai",
            theme: "light",
            placement: "right", // optional - remove to hide the floating button
            email: "youruser@example.com", // optional
            defaultBoard: "yourboardname", // optional - preselect a board
            metadata: null, // Attach session-specific metadata to feedback. Refer to the advanced section for the details: https://developers.featurebase.app/install/advanced#metadata
        });
    }, []);
    return (<>
      <script_1.default src="https://do.featurebase.app/js/sdk.js" id="featurebase-sdk"/>
      <div>
        {/*If you wish to open the widget using your own button you can do so here.
           To get rid of our floating button, remove 'placement' from the Featurebase('initialize_feedback_widget') call above.
          */}
        <button data-featurebase-feedback>Open Widget</button>
      </div>
    </>);
};
exports.default = FeedbackWidget;
