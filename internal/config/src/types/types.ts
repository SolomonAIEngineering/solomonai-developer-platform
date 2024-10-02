import { Metadata } from "next";

/**
 * Represents a navigation item in the site's menu.
 * @interface
 */
type NavItem = {
  /** The display text for the navigation item */
  title: string;
  /** The URL or path that the navigation item links to */
  href: string;
  /** Optional flag to indicate if the item should only be shown when authenticated */
  showOnAuth?: boolean;
};

/**
 * Contains URLs for various social media and documentation links.
 * @interface
 */
type Links = {
  /** URL for the Twitter profile */
  twitter: string;
  /** URL for the GitHub repository */
  github: string;
  /** URL for the documentation site */
  docs: string;
  /** URL for the YouTube channel */
  youtube: string;
};

/**
 * Contains information related to payment subscriptions.
 * @interface
 */
type Payments = {
  /** URL for the subscription management page */
  subscriptionLink: string;
};

/**
 * Contains information related to billing management.
 * @interface
 */
type Billings = {
  /** URL for the customer billing portal */
  customerBillingPortalLink: string;
};

/**
 * Represents metadata specific to Twitter cards.
 * @interface
 */
type TwitterMetadata = {
  /** The title of the Twitter card */
  title: string;
  /** A brief description for the Twitter card */
  description: string;
  /** An array of images to be used in the Twitter card */
  images: Array<{
    /** The URL of the image */
    url: string;
    /** The width of the image in pixels */
    width: number;
    /** The height of the image in pixels */
    height: number;
  }>;
};

/**
 * Represents metadata for Open Graph protocol, extending TwitterMetadata.
 * @interface
 */
type OpenGraphMetadata = TwitterMetadata & {
  /** The canonical URL of the page */
  url: string;
  /** The name of the overall site */
  siteName: string;
  /** The locale of the resource */
  locale: string;
  /** The type of content (e.g., 'website', 'article') */
  type: string;
};

/**
 * Represents the site's metadata, extending Next.js Metadata.
 * @interface
 */
type SiteMetadata = Omit<Metadata, "twitter" | "openGraph"> & {
  /** The base URL for all relative URLs in the metadata */
  metadataBase: URL;
  /** Twitter-specific metadata */
  twitter: TwitterMetadata;
  /** Open Graph metadata */
  openGraph: OpenGraphMetadata;
};

/**
 * Represents the viewport configuration for the site.
 * @interface
 */
type Viewport = {
  /** The width of the viewport */
  width: string;
  /** The initial scale of the viewport */
  initialScale: number;
  /** The maximum scale allowed for the viewport */
  maximumScale: number;
  /** Whether the user can scale the viewport */
  userScalable: boolean;
  /** An array of theme color configurations */
  themeColor: Array<{
    /** The media query for when this theme color should be applied */
    media: string;
  }>;
};

/**
 * Represents a pricing plan for the service.
 * @interface
 */
interface PricingPlan {
  /** Unique identifier for the plan */
  id: string;
  /** Name of the pricing plan */
  name: string;
  /** Brief description of the plan */
  description: string;
  /** Array of features included in the plan */
  features: string[];
  /** Monthly price of the plan */
  monthlyPrice: number;
  /** Yearly price of the plan */
  yearlyPrice: number;
  /** Flag indicating if this is the most popular plan */
  isMostPopular: boolean;
}

/**
 * Configuration for the financial engine integration.
 * @interface
 */
interface FinancialEngineConfig {
  /** Base URL for the production environment */
  baseUrlProd: string;
  /** Base URL for the development environment */
  baseUrlDev: string;
  /** Bearer token for authentication with the financial engine */
  bearerToken: string;
}

/**
 * Comprehensive configuration for the site.
 * @interface
 */
type SiteConfig = {
  /** The host of the platform */
  platformHost: string;
  /** The company name */
  company: string;
  /** The name of the site or application */
  name: string;
  /** Email configuration */
  email: { from: string };
  /** The title of the site */
  title: string;
  /** A brief description of the site */
  description: string;
  /** URL of the platform */
  platformUrl: string;
  /** URL of the web application */
  webUrl: string;
  /** URL of the desktop application */
  desktopUrl: string;
  /** Slug for the Dub project */
  dubProjectSlug: string;
  /** Issuer for Multi-Factor Authentication */
  mfaIssuer: string;
  /** URL for the uptime status page */
  uptimeUrl: string;
  /** Array of main navigation items */
  mainNav: NavItem[];
  /** Social and documentation links */
  links: Links;
  /** Email address for support */
  supportEmail: string;
  /** URL for the help/support page */
  helpUrl: string;
  /** Intercom app ID for customer support integration */
  intercomAppId: string;
  /** Payment-related configuration */
  payments: Payments;
  /** Billing-related configuration */
  billings: Billings;
  /** Site metadata */
  metadata: Metadata;
  /** Viewport configuration */
  viewport: Viewport;
  /** Array of pricing plans */
  pricing: PricingPlan[];
  /** Financial engine configuration */
  financialEngine: FinancialEngineConfig;
};

export type {
  Billings,
  Links,
  NavItem,
  OpenGraphMetadata,
  Payments,
  PricingPlan,
  SiteConfig,
  SiteMetadata,
  TwitterMetadata,
  Viewport,
};
