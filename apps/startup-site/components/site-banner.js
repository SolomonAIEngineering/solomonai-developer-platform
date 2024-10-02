"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteBanner = SiteBanner;
const link_1 = __importDefault(require("next/link"));
function SiteBanner() {
    return (<div className="relative top-0 bg-[#ff6154] text-background py-3 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <link_1.default href="https://www.producthunt.com/posts/chat-collect?utm_source=banner-featured&utm_medium=banner&utm_souce=banner-chat&#0045;collect" target="_blank" className="text-center text-sm leading-loose text-muted-background">
          ✨
          <span className="font-bold"> We&apos;re live on ProductHunt! - </span>{" "}
          Come check us out and leave a review! ✨
        </link_1.default>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30"/>
    </div>);
}
