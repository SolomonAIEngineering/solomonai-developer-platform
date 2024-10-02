import glob from "fast-glob";
import { type Metadata } from "next";

import { Providers } from "@/app/providers";
import { IntercomScript } from "@/components/intercom-script";
import IntercomWidget from "@/components/intercom-widget";
import { Layout } from "@/components/Layout";
import { type Section } from "@/components/SectionProvider";
import "@v1/ui/globals.css";

export const metadata: Metadata = {
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
export default async function RootLayout({
  children,
}: {
  /** The child components to be rendered within the layout. */
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-deprecated
}): Promise<JSX.Element> {
  /**
   * Glob pattern to find all MDX files in the src/app directory.
   */
  const pages = await glob("**/*.mdx", { cwd: "src/app" });

  /**
   * An array of tuples containing the route and sections for each MDX file.
   */
  const allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      "/" + filename.replace(/(?:^|\/)page\.mdx$/, ""),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      (
        await import(`./${filename}`)
      ).sections,
    ]),
  )) as [string, Section[]][];

  /**
   * An object mapping routes to their corresponding sections.
   */
  const allSections = Object.fromEntries(allSectionsEntries);

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
        <Providers>
          <div className="w-full">
            <Layout allSections={allSections}>
              {children}
              <IntercomWidget
                appId={process.env["NEXT_PUBLIC_INTERCOM_APP_ID"] ?? "pezs7zbq"}
              />
              <IntercomScript
                appId={process.env["NEXT_PUBLIC_INTERCOM_APP_ID"] ?? "pezs7zbq"}
              />
            </Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
