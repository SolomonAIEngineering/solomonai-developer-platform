/**
 * Object containing all cookie keys used in the application.
 * Each key is a constant representing a specific cookie's name.
 */
export const CookieKeys = {
  PREFERRED_SIGN_IN_PROVIDER: "preferred-signin-provider",
  SPENDING_PERIOD: "spending-period",
  CHART_TYPE: "chart-type",
  TRANSACTIONS_PERIOD: "transactions-period",
  TRANSACTIONS_COLUMNS: "transactions-columns",
  MFA_SETUP_VISITED: "mfa-setup-visited",
  MENU_CONFIG: "menu-config-v2",
  INBOX_FILTER: "inbox-filter-v2",
  TRACKING_CONSENT: "tracking-consent",
  INBOX_ORDER: "inbox-order",
  HIDE_CONNECT_FLOW: "hide-connect-flow",
  REQUEST_ACCESS: "request-access",
} as const;

/**
 * Type representing the keys of the CookieKeys object.
 * This type can be used to ensure type safety when working with cookie keys.
 */
export type CookieKey = keyof typeof CookieKeys;

/**
 * Retrieves the value (cookie name) for a given cookie key.
 *
 * @param key - The cookie key to look up.
 * @returns The corresponding cookie name as a string.
 */
export const getCookieValue = (key: CookieKey): string => CookieKeys[key];

/**
 * Type guard function to check if a given string is a valid CookieKey.
 *
 * @param key - The string to check.
 * @returns A boolean indicating whether the input is a valid CookieKey.
 */
export const isCookieKey = (key: string): key is CookieKey =>
  Object.keys(CookieKeys).includes(key as CookieKey);
