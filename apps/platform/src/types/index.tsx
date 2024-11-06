/**
 * Represents a submenu item in the navigation structure.
 * @interface Submenu
 */
type Submenu = {
  /** The URL or path that this submenu item links to. */
  href: string;
  /** The display text for the submenu item. */
  label: string;
  /** Indicates whether this submenu item is currently active. */
  active: boolean;
  /** Optional icon for the submenu item. Can be any valid icon type. */
  icon?: any;
};

/**
 * Represents a main menu item in the navigation structure.
 * @interface Menu
 */
type Menu = {
  /** The URL or path that this menu item links to. */
  href: string;
  /** The display text for the menu item. */
  label: string;
  /** Indicates whether this menu item is currently active. */
  active: boolean;
  /** Icon for the menu item. Can be any valid icon type. */
  icon: any;
  /** An array of submenu items associated with this menu item. */
  submenus: Submenu[];
};

/**
 * Represents a group of menu items in the navigation structure.
 * @interface Group
 */
type Group = {
  /** The label or title for this group of menu items. */
  groupLabel: string;
  /** An array of menu items contained within this group. */
  menus: Menu[];
};

/* Site Meta contains type definitions for the meta data */
export type SiteMeta = {
  title: string;
  templateTitle: string;
  description: string;
  url: string;
  links: {
    twitter: string;
    github: string;
  };
};

/* Nav Item contains type definitions for the nav bar items */
export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  transitionDelay?: string;
};

export type NavBarType = NavItem[];

/* Footer Link contains type definitions for the footer links */
export type FooterLink = {
  name: string;
  href: string;
  notActive?: boolean;
};

export type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
};

export type FooterLinks = FooterLinkGroup[];

// Friend contains type definitions for the oss friends list
export type Friend = {
  name: string;
  href: string;
  description: string;
};

export type Friends = Friend[];

export type { Group, Menu, Submenu };
