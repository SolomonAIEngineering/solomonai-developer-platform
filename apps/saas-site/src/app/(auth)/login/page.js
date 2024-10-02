"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginForm;
const link_1 = __importDefault(require("next/link"));
const icons_1 = require("@/components/icons");
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const input_1 = require("@/components/ui/input");
const label_1 = require("@/components/ui/label");
function LoginForm() {
  return (
    <card_1.Card className="mx-auto max-w-sm">
      <card_1.CardHeader>
        <card_1.CardTitle className="text-2xl">Login</card_1.CardTitle>
        <card_1.CardDescription>
          Enter your email below to login to your account
        </card_1.CardDescription>
      </card_1.CardHeader>
      <card_1.CardContent>
        <div className="grid gap-4">
          <button_1.Button variant="outline" className="w-full">
            <icons_1.Icons.google className="w-4 h-4 mr-2" />
            Login with Google
          </button_1.Button>
          <button_1.Button variant="outline" className="w-full">
            <icons_1.Icons.github className="w-4 h-4 mr-2" />
            Login with GitHub
          </button_1.Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid gap-2">
            <label_1.Label htmlFor="email">Email</label_1.Label>
            <input_1.Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <label_1.Label htmlFor="password">Password</label_1.Label>
              <link_1.default
                href="#"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </link_1.default>
            </div>
            <input_1.Input id="password" type="password" required />
          </div>
          <button_1.Button type="submit" className="w-full">
            Login
          </button_1.Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <link_1.default href="/signup" className="underline">
            Sign up
          </link_1.default>
        </div>
      </card_1.CardContent>
    </card_1.Card>
  );
}
