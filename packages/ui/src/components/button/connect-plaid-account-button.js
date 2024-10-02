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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectPlaidAccountButton = void 0;
const react_1 = __importStar(require("react"));
const outline_1 = require("@heroicons/react/24/outline");
const client_typescript_sdk_1 = require("client-typescript-sdk");
const react_plaid_link_1 = require("react-plaid-link");
const zod_1 = require("zod");
const _1 = require(".");
const UserSchema = zod_1.z.object({
    userId: zod_1.z.string().min(1),
    userName: zod_1.z.string().min(1),
    lastName: zod_1.z.string().min(1),
    phoneNumber: zod_1.z.string(), // Might want to add regex validation for phone numbers.
    email: zod_1.z.string().email(),
    profileType: zod_1.z.nativeEnum(client_typescript_sdk_1.FinancialUserProfileType), // Using nativeEnum for TypeScript enums.
});
/**
 * ConnectPlaidAccountButton is a component that renders a ConnectPlaidAccount
 * button.
 *
 * @param {BackButtonProps} props - Props for the ConnectPlaidAccountButton
 *   component.
 * @returns {JSX.Element} - The rendered ConnectPlaidAccountButton component.
 */
const ConnectPlaidAccountButton = react_1.default.memo(({ className, token, onSuccess, onExit, onEvent, title, children }) => {
    const isOAuthRedirect = window.location.href.includes("?oauth_state_id=");
    const config = {
        token: token,
        onSuccess,
        onEvent,
        onExit,
        receivedRedirectUri: isOAuthRedirect ? window.location.href : undefined,
    };
    const { open, ready } = (0, react_plaid_link_1.usePlaidLink)(config);
    (0, react_1.useEffect)(() => {
        if (isOAuthRedirect && ready) {
            open();
        }
    }, [isOAuthRedirect, ready, open]);
    const handleOpen = (0, react_1.useCallback)(() => {
        open();
    }, [open]);
    return (<_1.Button variant={"default"} className={`my-3 flex flex-row gap-1 rounded-2xl text-foreground ${className}`} onClick={handleOpen}>
          <outline_1.SquaresPlusIcon className="h-5 w-5"/>
          {children}
          {title && <p className="text-md">{title}</p>}
        </_1.Button>);
});
exports.ConnectPlaidAccountButton = ConnectPlaidAccountButton;
