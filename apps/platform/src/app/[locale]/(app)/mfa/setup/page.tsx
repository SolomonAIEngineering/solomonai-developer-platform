import { SetupMfa } from "@/components/mfa/setup-mfa";
import config from "@/config";
import type { Metadata } from "next";

/**
 * Metadata for the MFA setup page.
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: `Setup MFA | ${config.company}`,
};

/**
 * Setup component for Multi-Factor Authentication (MFA).
 * This component renders the MFA setup page.
 *
 * @returns {JSX.Element} The rendered SetupMfa component.
 */
export default function Setup(): JSX.Element {
  return <SetupMfa />;
}
