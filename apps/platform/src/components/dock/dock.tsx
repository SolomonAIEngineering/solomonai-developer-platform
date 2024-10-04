import {
  BarChartIcon,
  BrainCircuitIcon,
  CloudIcon,
  CodeIcon,
  DatabaseIcon,
  GitBranchIcon,
  LineChartIcon,
  MessageSquareIcon,
  PackageIcon,
  ServerIcon,
  SettingsIcon,
  ShieldIcon,
  TerminalIcon,
  TrendingUpIcon,
  WebhookIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

import { buttonVariants } from "@v1/ui/button";
import { cn } from "@v1/ui/cn";
import { Dock, DockIcon } from "@v1/ui/magicui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@v1/ui/tooltip";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  features: [
    { href: "#", icon: BarChartIcon, label: "Financial Modelling" },
    { href: "#", icon: TrendingUpIcon, label: "Stress Testing" },
    { href: "#", icon: LineChartIcon, label: "Forecasting" },
    { href: "#", icon: BrainCircuitIcon, label: "Insights" },
    { href: "#", icon: MessageSquareIcon, label: "Advanced Chat" },
    { href: "#", icon: CodeIcon, label: "Code Editor" },
    { href: "#", icon: WebhookIcon, label: "API Management" },
    { href: "#", icon: DatabaseIcon, label: "Database Tools" },
    { href: "#", icon: ServerIcon, label: "Server Management" },
    { href: "#", icon: CloudIcon, label: "Cloud Services" },
    { href: "#", icon: ShieldIcon, label: "Security Tools" },
    { href: "#", icon: TerminalIcon, label: "CLI Tools" },
    { href: "#", icon: GitBranchIcon, label: "Version Control" },
    { href: "#", icon: PackageIcon, label: "Package Manager" },
    { href: "#", icon: SettingsIcon, label: "Dev Environment" },
  ],
};

export function ProTierDock() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <TooltipProvider>
        <Dock direction="middle" className="bg-background">
          {DATA.features.map((item, index) => (
            <React.Fragment key={item.label}>
              <DockIcon>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full",
                      )}
                    >
                      <item.icon className="h-6 w-6 font-black" strokeWidth={0.5} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="bg-background text-foreground rounded-2xl py-2"
                  >
                    <p className="text-md">{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
              {(index + 1) % 3 === 0 && index !== DATA.features.length - 1 && (
                <div className="w-px h-8 bg-gray-300 mx-2" />
              )}
            </React.Fragment>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
