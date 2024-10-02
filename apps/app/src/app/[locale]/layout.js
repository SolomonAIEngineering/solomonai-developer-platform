"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewport = exports.metadata = void 0;
exports.default = RootLayout;
require("@v1/ui/globals.css");
const footer_1 = require("@/components/footer");
const cn_1 = require("@v1/ui/cn");
const mono_1 = require("geist/font/mono");
const sans_1 = require("geist/font/sans");
const next_themes_1 = require("next-themes");
exports.metadata = {
    title: "Create v1",
    description: "Production ready Next.js app",
};
exports.viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)" },
        { media: "(prefers-color-scheme: dark)" },
    ],
};
function RootLayout({ children, }) {
    return (<html lang="en" suppressHydrationWarning>
      <body className={(0, cn_1.cn)(`${sans_1.GeistSans.variable} ${mono_1.GeistMono.variable}`, "antialiased")}>
        <next_themes_1.ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}

          <footer_1.Footer />
        </next_themes_1.ThemeProvider>
      </body>
    </html>);
}
