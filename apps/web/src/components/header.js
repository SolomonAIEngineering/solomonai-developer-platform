"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = Header;
const dialog_1 = require("@v1/ui/dialog");
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const subscribe_form_1 = require("./subscribe-form");
function Header() {
    return (<header className="absolute top-0 w-full flex items-center justify-between p-4 z-10">
      <span className="hidden md:block text-sm font-medium">v1.run</span>

      <link_1.default href="/">
        <image_1.default src="/logo.png" alt="V1 logo" width={60} quality={100} height={60} className="md:absolute md:left-1/2 md:top-5 md:-translate-x-1/2"/>
      </link_1.default>

      <nav className="md:mt-2">
        <ul className="flex items-center gap-4">
          <li>
            <a href="https://github.com/midday-ai/v1" className="text-sm px-4 py-2 bg-primary text-secondary rounded-full font-medium">
              Github
            </a>
          </li>
          <li>
            <dialog_1.Dialog>
              <dialog_1.DialogTrigger className="text-sm px-4 py-2 bg-secondary text-primary rounded-full font-medium cursor-pointer" asChild>
                <span>Get updates</span>
              </dialog_1.DialogTrigger>
              <dialog_1.DialogContent>
                <dialog_1.DialogHeader>
                  <dialog_1.DialogTitle>Stay updated</dialog_1.DialogTitle>
                  <dialog_1.DialogDescription>
                    Subscribe to our newsletter to get the latest news and
                    updates.
                  </dialog_1.DialogDescription>
                </dialog_1.DialogHeader>

                <div className="flex flex-col gap-4">
                  <subscribe_form_1.SubscribeForm group="v1-newsletter" placeholder="Email address"/>
                </div>
              </dialog_1.DialogContent>
            </dialog_1.Dialog>
          </li>
        </ul>
      </nav>
    </header>);
}
