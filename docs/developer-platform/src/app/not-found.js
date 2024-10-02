"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NotFound;
const Button_1 = require("@/components/Button");
const HeroPattern_1 = require("@/components/HeroPattern");
function NotFound() {
    return (<>
      <HeroPattern_1.HeroPattern />
      <div className="mx-auto flex h-full max-w-xl flex-col items-center justify-center py-16 text-center">
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">
          404
        </p>
        <h1 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">
          Page not found
        </h1>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button_1.Button href="/" arrow="right" className="mt-8">
          Back to docs
        </Button_1.Button>
      </div>
    </>);
}
