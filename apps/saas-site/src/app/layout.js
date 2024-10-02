"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewport = exports.metadata = void 0;
exports.default = RootLayout;
const tailwind_indicator_1 = require("@/components/tailwind-indicator");
const theme_provider_1 = require("@/components/theme-provider");
const theme_toggle_1 = require("@/components/theme-toggle");
const utils_1 = require("@/lib/utils");
const google_1 = require("next/font/google");
require("./globals.css");
const inter = (0, google_1.Inter)({ subsets: ["latin"] });
exports.metadata = (0, utils_1.constructMetadata)({});
exports.viewport = {
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={(0, utils_1.cn)(
          "min-h-screen bg-background font-sans antialiased w-full mx-auto scroll-smooth",
          inter.className,
        )}
      >
        <theme_provider_1.ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
          <theme_toggle_1.ThemeToggle />
          <tailwind_indicator_1.TailwindIndicator />
        </theme_provider_1.ThemeProvider>
      </body>
    </html>
  );
}
