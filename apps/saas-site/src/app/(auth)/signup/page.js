"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginForm;
const link_1 = __importDefault(require("next/link"));
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const input_1 = require("@/components/ui/input");
const label_1 = require("@/components/ui/label");
function LoginForm() {
    return (<card_1.Card className="mx-auto max-w-sm">
      <card_1.CardHeader>
        <card_1.CardTitle className="text-xl">Sign Up</card_1.CardTitle>
        <card_1.CardDescription>
          Enter your information to create an account
        </card_1.CardDescription>
      </card_1.CardHeader>
      <card_1.CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label_1.Label htmlFor="first-name">First name</label_1.Label>
              <input_1.Input id="first-name" placeholder="Max" required/>
            </div>
            <div className="grid gap-2">
              <label_1.Label htmlFor="last-name">Last name</label_1.Label>
              <input_1.Input id="last-name" placeholder="Robinson" required/>
            </div>
          </div>
          <div className="grid gap-2">
            <label_1.Label htmlFor="email">Email</label_1.Label>
            <input_1.Input id="email" type="email" placeholder="m@example.com" required/>
          </div>
          <div className="grid gap-2">
            <label_1.Label htmlFor="password">Password</label_1.Label>
            <input_1.Input id="password" type="password"/>
          </div>
          <button_1.Button type="submit" className="w-full">
            Create an account
          </button_1.Button>
          <button_1.Button variant="outline" className="w-full">
            Sign up with GitHub
          </button_1.Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <link_1.default href="/login" className="underline">
            Sign in
          </link_1.default>
        </div>
      </card_1.CardContent>
    </card_1.Card>);
}
