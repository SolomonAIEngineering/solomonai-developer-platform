import { AppleSignIn } from "@/components/apple-sign-in";
import { DesktopCommandMenuSignIn } from "@/components/desktop-command-menu-sign-in";
import { GithubSignIn } from "@/components/github-sign-in";
import { GoogleSignIn } from "@/components/google-sign-in";
import { OTPSignIn } from "@/components/otp-sign-in";
import { SlackSignIn } from "@/components/slack-sign-in";
import config from "@/config";
import { Cookies } from "@/utils/constants";
import { featureFlags } from "@v1/env/platform";
import { isEU } from "@v1/location";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@v1/ui/accordion";
import { Metadata } from "next";
import { cookies, headers } from "next/headers";
import Image from "next/image";
import { userAgent } from "next/server";
import React from "react";

/**
 * Metadata for the login page.
 */
export const metadata: Metadata = {
  title: `Login | ${config.company}`,
};

/**
 * Represents the available authentication providers.
 */
type AuthProvider = "apple" | "google" | "github" | "slack" | "otp";

/**
 * Maps authentication providers to their respective React components.
 */
type AuthComponentsType = {
  [key in AuthProvider]: React.ReactElement | null;
};

/**
 * Renders the login page with various authentication options.
 *
 * This component handles the following:
 * - Checks for desktop command menu sign-in
 * - Determines enabled authentication providers
 * - Selects the preferred sign-in option based on user preferences and device
 * - Renders the preferred sign-in option and additional options in an accordion
 *
 * @param params - The page parameters
 * @param params.searchParams - The search parameters from the URL
 * @param params.searchParams.return_to - The return URL after successful authentication
 * @returns The rendered login page or desktop command menu sign-in component
 */
export default async function Page(params: {
  searchParams: { return_to: string };
}) {
  if (params?.searchParams?.return_to === "desktop/command") {
    return <DesktopCommandMenuSignIn />;
  }

  const cookieStore = cookies();
  const preferred = cookieStore.get(Cookies.PreferredSignInProvider);
  const showTrackingConsent =
    isEU() && !cookieStore.has(Cookies.TrackingConsent);
  const { device } = userAgent({ headers: headers() });

  // Check which auth providers are enabled
  const enabledProviders = featureFlags.authProviders;

  const authComponents: AuthComponentsType = {
    apple: enabledProviders.includes("apple") ? <AppleSignIn /> : null,
    google: enabledProviders.includes("google") ? <GoogleSignIn /> : null,
    github: enabledProviders.includes("github") ? <GithubSignIn /> : null,
    slack: enabledProviders.includes("slack") ? <SlackSignIn /> : null,
    otp: enabledProviders.includes("otp") ? <OTPSignIn /> : null,
  };

  const defaultProvider: AuthProvider =
    device?.vendor === "Apple" ? "apple" : "google";
  const preferredProvider =
    (preferred?.value as AuthProvider) || defaultProvider;

  /**
   * Determines the actual preferred provider based on availability.
   * Falls back to the first available provider if the preferred one is not available.
   */
  const availableProviders = Object.keys(authComponents).filter(
    (key) => authComponents[key as AuthProvider] !== null,
  ) as AuthProvider[];
  const actualPreferredProvider = availableProviders.includes(preferredProvider)
    ? preferredProvider
    : availableProviders[0];

  let preferredSignInOption =
    authComponents[actualPreferredProvider as AuthProvider];

  // Filter out the preferred provider and null components
  let moreSignInOptions = availableProviders
    .filter((provider) => provider !== actualPreferredProvider)
    .map((provider) => (
      <React.Fragment key={provider}>{authComponents[provider]}</React.Fragment>
    ));

  // If OTP is available and not the preferred option, ensure it's at the end of the list
  if (authComponents.otp && actualPreferredProvider !== "otp") {
    moreSignInOptions = moreSignInOptions.filter(
      (option) => option.key !== "otp",
    );
    moreSignInOptions.push(
      <OTPSignIn key="otp" className="border-t-[1px] border-border pt-8" />,
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center justify-center size-96">
        <Image src="/logo.png" alt="logo" width={350} height={350} />
        <div className="flex flex-col items-center mt-6 mb-6 pointer-events-auto">
          <div className="w-fit">{preferredSignInOption}</div>

          <Accordion
            type="single"
            collapsible
            className="mt-6 border-t-[1px] pt-2"
          >
            <AccordionItem value="item-1" className="border-0">
              <AccordionTrigger className="flex justify-center space-x-2 text-sm">
                <span>More options</span>
              </AccordionTrigger>
              <AccordionContent className="mt-4">
                <div className="flex flex-col space-y-4">
                  {moreSignInOptions}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="text-xs text-[#878787]">
            By clicking continue, you acknowledge that you have read and agree
            to {config.name}'s{" "}
            <a href={`${config.webUrl}/terms`} className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href={`${config.webUrl}/policy`} className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
