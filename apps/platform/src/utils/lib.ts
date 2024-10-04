import { Group } from "@/types/index";
import {
  BarChart,
  CreditCard,
  Database,
  FileText,
  Key,
  LayoutGrid,
  Puzzle,
  Settings,
  Users,
  Webhook,
} from "lucide-react";

export const menuConfig: Group[] = [
  {
    groupLabel: "Dashboard",
    menus: [
      {
        href: "/",
        label: "Overview",
        icon: LayoutGrid,
        submenus: [],
        active: false,
      },
    ],
  },
  {
    groupLabel: "Developer Tools",
    menus: [
      {
        href: "/api-keys",
        label: "API Key Management",
        icon: Key,
        submenus: [],
        active: false,
      },
      {
        href: "/webhooks",
        label: "Webhooks",
        icon: Webhook,
        submenus: [],
        active: false,
      },
      {
        href: "/integrations",
        label: "Integrations",
        icon: Puzzle,
        submenus: [],
        active: false,
      },
    ],
  },
  {
    groupLabel: "Account",
    menus: [
      {
        href: "/account-portal",
        label: "Account Portal",
        icon: Users,
        submenus: [],
        active: false,
      },
      {
        href: "/plan-billing",
        label: "Plan & Billing",
        icon: CreditCard,
        submenus: [],
        active: false,
      },
    ],
  },
  {
    groupLabel: "Data Management",
    menus: [
      {
        href: "/data-storage",
        label: "Data Storage",
        icon: Database,
        submenus: [],
        active: false,
      },
    ],
  },
  {
    groupLabel: "Analytics",
    menus: [
      {
        href: "/analytics",
        label: "Usage Analytics",
        icon: BarChart,
        submenus: [],
        active: false,
      },
    ],
  },
  {
    groupLabel: "Documentation",
    menus: [
      {
        href: "/docs",
        label: "API Documentation",
        icon: FileText,
        submenus: [],
        active: false,
      },
    ],
  },
  {
    groupLabel: "Settings",
    menus: [
      {
        href: "/settings",
        label: "Settings",
        icon: Settings,
        submenus: [
          { href: "/settings/profile", label: "Profile", active: false },
          { href: "/settings/security", label: "Security", active: false },
          { href: "/settings/notifications", label: "Notifications", active: false },
        ],
        active: false,
      },
    ],
  },
];

export function getMenuList(
  pathname: string,
  config: Group[] = menuConfig,
): Group[] {
  return config.map((group) => ({
    ...group,
    menus: group.menus.map((menu) => ({
      ...menu,
      active: pathname.includes(menu.href),
      submenus: menu.submenus.map((submenu) => ({
        ...submenu,
        active: pathname === submenu.href,
      })),
    })),
  }));
}