"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeToggle = ThemeToggle;
const button_1 = require("@/components/ui/button");
const lucide_react_1 = require("lucide-react");
const next_themes_1 = require("next-themes");
function ThemeToggle() {
    const { setTheme, theme } = (0, next_themes_1.useTheme)();
    // Don't show in production
    if (process.env.NODE_ENV === "production")
        return null;
    return (<button_1.Button variant="ghost" size="icon" className="fixed bottom-1 left-1 z-50" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <lucide_react_1.Sun className="h-[1.5rem] w-[1.3rem] dark:hidden"/>
      <lucide_react_1.Moon className="hidden h-5 w-5 dark:block"/>
      <span className="sr-only">Toggle theme</span>
    </button_1.Button>);
}
