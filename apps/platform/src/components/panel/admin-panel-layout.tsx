"use client";

import { SidebarState, useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { useStore } from "@/hooks/use-store";
import { cn } from "@v1/ui/cn";
import React, { useMemo } from "react";

import { ProTierDock } from "../dock/dock";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";

/**
 * Props for the AnalyticsLayout component.
 */
interface AnalyticsLayoutProps {
  /** The content to be rendered inside the layout */
  children: React.ReactNode;
}

/**
 * Generates class names for main content and footer based on sidebar state.
 * @param isOpen - Whether the sidebar is open
 * @returns Object containing class names for main and footer
 */
const useLayoutClasses = (isOpen: boolean) => {
  return useMemo(
    () => ({
      wrapper: cn(
        "flex flex-col h-screen",
        isOpen ? "lg:ml-72" : "lg:ml-[90px]",
        "transition-[margin-left] ease-in-out duration-300",
      ),
      main: cn(
        "flex-1 bg-zinc-50 dark:bg-zinc-900 overflow-y-auto scroll-smooth scrollbar-hide",
        "relative",
      ),
      footer: cn(
        "flex-shrink-0 bg-zinc-50 dark:bg-zinc-900",
        "transition-[margin-left] ease-in-out duration-300",
      ),
      dockWrapper:
        "fixed inset-x-0 bottom-0 flex justify-center items-center mb-[2.5%] z-50",
    }),
    [isOpen],
  );
};

/**
 * AnalyticsLayout component that provides a layout structure for admin panels.
 * It includes a sidebar, main content area, and footer.
 *
 * @param {AnalyticsLayoutProps} props - The component props
 * @returns {React.ReactElement | null} The rendered component or null if sidebar state is not available
 */
const AnalyticsLayout: React.FC<AnalyticsLayoutProps> = ({ children }) => {
  const sidebar = useStore(useSidebarToggle, (state: SidebarState) => state);
  const classes = useLayoutClasses(sidebar?.isOpen ?? false);

  return (
    <>
      <Sidebar />
      <div className={classes.wrapper}>
        <main className={classes.main}>
          {children}
          {/* Centered dock at the bottom */}
          {/* <div className={classes.dockWrapper}>
            <ProTierDock />
          </div> */}
        </main>
        {/* <footer className={classes.footer}>
          <Footer />
        </footer> */}
      </div>
    </>
  );
};

export default React.memo(AnalyticsLayout);
