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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthSchema = void 0;
exports.UserAuthForm = UserAuthForm;
const button_1 = require("@/components/ui/button");
const form_1 = require("@/components/ui/form");
const input_1 = require("@/components/ui/input");
const utils_1 = require("@/lib/utils");
const zod_1 = require("@hookform/resolvers/zod");
const react_icons_1 = require("@radix-ui/react-icons");
const lucide_react_1 = require("lucide-react");
const React = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const sonner_1 = require("sonner");
const z = __importStar(require("zod"));
exports.userAuthSchema = z.object({
    email: z.string().email(),
    password: z.string().optional(),
});
function UserAuthForm({ className, ...props }) {
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(exports.userAuthSchema),
        defaultValues: {
            email: "",
        },
    });
    const [isLoading, setIsLoading] = React.useState(false);
    const [isGitHubLoading, setIsGitHubLoading] = React.useState(false);
    async function onSubmit(data) {
        setIsLoading(true);
        // TODO: Add signin using preferred provider
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const signInResult = { ok: true };
        setIsLoading(false);
        if (!signInResult?.ok) {
            return sonner_1.toast.error("Something went wrong.", {
                description: "Your sign in request failed. Please try again.",
            });
        }
        return sonner_1.toast.success("Check your email", {
            description: "We sent you a login link. Be sure to check your spam too.",
        });
    }
    async function onSignInGithub() {
        setIsGitHubLoading(true);
        // TODO: Add signin using preferred provider
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsGitHubLoading(false);
    }
    return (<div className={(0, utils_1.cn)("grid gap-6", className)} {...props}>
      <form_1.Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <form_1.FormField control={form.control} name="email" render={({ field }) => (<form_1.FormItem>
                  {/* <FormLabel>Email</FormLabel> */}
                  <form_1.FormControl>
                    <input_1.Input id="email" placeholder="name@example.com" type="email" autoCapitalize="none" autoComplete="email" autoCorrect="off" disabled={isLoading || isGitHubLoading} {...field}/>
                  </form_1.FormControl>
                  {/* <FormDescription>This is your email address.</FormDescription> */}
                  <form_1.FormMessage />
                </form_1.FormItem>)}/>

            <button type="submit" className={(0, utils_1.cn)((0, button_1.buttonVariants)())} disabled={isLoading || isGitHubLoading} onClick={() => {
            // onSignIn();
        }}>
              {isLoading && <lucide_react_1.Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
              Sign In with Email
            </button>
          </div>
        </form>
      </form_1.Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"/>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <button type="button" className={(0, utils_1.cn)((0, button_1.buttonVariants)({ variant: "outline" }))} onClick={() => {
            onSignInGithub();
        }} disabled={isLoading || isGitHubLoading}>
        {isGitHubLoading ? (<lucide_react_1.Loader2 className="mr-2 h-4 w-4 animate-spin"/>) : (<react_icons_1.GitHubLogoIcon className="mr-2 h-4 w-4"/>)}{" "}
        Github
      </button>
    </div>);
}
