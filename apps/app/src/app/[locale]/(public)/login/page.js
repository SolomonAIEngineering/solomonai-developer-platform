"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = Page;
const google_signin_1 = require("@/components/google-signin");
const image_1 = __importDefault(require("next/image"));
exports.metadata = {
    title: "Login",
};
function Page() {
    return (<div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center size-96">
        <image_1.default src="/logo.png" alt="logo" width={350} height={350}/>
        <google_signin_1.GoogleSignin />
      </div>
    </div>);
}
