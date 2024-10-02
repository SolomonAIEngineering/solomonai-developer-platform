"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = LoginPage;
const button_1 = require("@/components/ui/button");
const user_auth_form_1 = require("@/components/user-auth-form");
const utils_1 = require("@/lib/utils");
const lucide_react_1 = require("lucide-react");
const link_1 = __importDefault(require("next/link"));
exports.metadata = {
    title: "Login | Magic UI",
    description: "Login to your account",
};
function LoginPage() {
    return (<div className="container flex h-screen w-screen flex-col items-center justify-center">
      <link_1.default href="/" className={(0, utils_1.cn)((0, button_1.buttonVariants)({ variant: "ghost" }), "absolute left-4 top-4 md:left-8 md:top-8")}>
        <>
          <lucide_react_1.ChevronLeft className="mr-2 h-4 w-4"/>
          Back
        </>
      </link_1.default>
      <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]">
        <div className="flex flex-col gap-2 text-center">
          {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">Login to your account</p>
        </div>
        <user_auth_form_1.UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <link_1.default href="/signup" className="hover:text-brand underline underline-offset-4">
            Don&apos;t have an account? Sign Up
          </link_1.default>
        </p>
      </div>
    </div>);
}
