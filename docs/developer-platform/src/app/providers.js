"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Providers = Providers;
const react_1 = require("react");
const next_themes_1 = require("next-themes");
function ThemeWatcher() {
  let { resolvedTheme, setTheme } = (0, next_themes_1.useTheme)();
  (0, react_1.useEffect)(() => {
    let media = window.matchMedia("(prefers-color-scheme: dark)");
    function onMediaChange() {
      let systemTheme = media.matches ? "dark" : "light";
      if (resolvedTheme === systemTheme) {
        setTheme("system");
      }
    }
    onMediaChange();
    media.addEventListener("change", onMediaChange);
    return () => {
      media.removeEventListener("change", onMediaChange);
    };
  }, [resolvedTheme, setTheme]);
  return null;
}
function Providers({ children }) {
  return (
    <next_themes_1.ThemeProvider attribute="class" disableTransitionOnChange>
      <ThemeWatcher />
      {children}
    </next_themes_1.ThemeProvider>
  );
}
