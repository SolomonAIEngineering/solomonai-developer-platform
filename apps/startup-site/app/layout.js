"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
const theme_provider_1 = require("@/components/theme-provider");
const sonner_1 = require("@/components/ui/sonner");
const utils_1 = require("@/lib/utils");
const google_1 = require("next/font/google");
require("./globals.css");
const fontSans = (0, google_1.Inter)({
    subsets: ["latin"],
    variable: "--font-sans",
});
exports.metadata = {
    title: "Magic UI",
    description: "The startup template from Magic UI",
};
function RootLayout({ children, }) {
    return (<html lang="en" suppressHydrationWarning>
      <body className={(0, utils_1.cn)("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <theme_provider_1.ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {children}
          <sonner_1.Toaster />
        </theme_provider_1.ThemeProvider>
      </body>
    </html>);
}
