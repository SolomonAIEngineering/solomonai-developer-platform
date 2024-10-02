"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
const footer_1 = require("@/components/footer");
const header_1 = require("@/components/header");
const client_1 = require("@v1/analytics/client");
const cn_1 = require("@v1/ui/cn");
require("@v1/ui/globals.css");
const mono_1 = require("geist/font/mono");
const sans_1 = require("geist/font/sans");
const local_1 = __importDefault(require("next/font/local"));
const DepartureMono = (0, local_1.default)({
    src: "../fonts/DepartureMono-Regular.woff2",
    variable: "--font-departure-mono",
});
exports.metadata = {
    metadataBase: new URL("https://v1.run"),
    title: "Create v1",
    description: "A free, open-source starter kit for your next project, built with insights from Midday.",
};
function RootLayout({ children, }) {
    return (<html lang="en" suppressHydrationWarning>
      <body className={(0, cn_1.cn)(`${DepartureMono.variable} ${sans_1.GeistSans.variable} ${mono_1.GeistMono.variable}`, "antialiased dark")}>
        <header_1.Header />
        {children}
        <footer_1.Footer />

        <client_1.Provider />
      </body>
    </html>);
}
