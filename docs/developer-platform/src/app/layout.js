"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
const fast_glob_1 = __importDefault(require("fast-glob"));
const providers_1 = require("@/app/providers");
const intercom_script_1 = require("@/components/intercom-script");
const intercom_widget_1 = __importDefault(require("@/components/intercom-widget"));
const Layout_1 = require("@/components/Layout");
require("@v1/ui/globals.css");
exports.metadata = {
    title: {
        template: "%s - Solomon-AI API Reference",
        default: "Solomon-AI API Reference",
    },
};
/**
 * The root layout component for the application.
 *
 * This component is responsible for setting up the overall structure of the app,
 * including loading all MDX pages, setting up providers, and rendering the main layout.
 * @param props - The properties passed to the RootLayout component.
 * @param props.children - The child components to be rendered within the layout.
 * @returns A Promise that resolves to the JSX for the entire application layout.
 */
async function RootLayout({ children, }) {
    /**
     * Glob pattern to find all MDX files in the src/app directory.
     */
    const pages = await (0, fast_glob_1.default)("**/*.mdx", { cwd: "src/app" });
    /**
     * An array of tuples containing the route and sections for each MDX file.
     */
    const allSectionsEntries = (await Promise.all(pages.map(async (filename) => [
        "/" + filename.replace(/(?:^|\/)page\.mdx$/, ""),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        (await import(`./${filename}`)).sections,
    ])));
    /**
     * An object mapping routes to their corresponding sections.
     */
    const allSections = Object.fromEntries(allSectionsEntries);
    return (<html lang="en" className="h-full" suppressHydrationWarning>
      <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
        <providers_1.Providers>
          <div className="w-full">
            <Layout_1.Layout allSections={allSections}>
              {children}
              <intercom_widget_1.default appId={process.env["NEXT_PUBLIC_INTERCOM_APP_ID"] ?? "pezs7zbq"}/>
              <intercom_script_1.IntercomScript appId={process.env["NEXT_PUBLIC_INTERCOM_APP_ID"] ?? "pezs7zbq"}/>
            </Layout_1.Layout>
          </div>
        </providers_1.Providers>
      </body>
    </html>);
}
