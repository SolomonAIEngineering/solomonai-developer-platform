import { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { userAgent } from "next/server";
import React from "react";

import { AnimatedText } from "@/components/animated-text";
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
import { Card } from "@v1/ui/card";
import { Icons } from "@v1/ui/icons";

export const metadata: Metadata = {
  title: `Login | ${config.company}`,
};

enum AuthProvider {
  Apple = "apple",
  Google = "google",
  Github = "github",
  Slack = "slack",
  OTP = "otp",
}

const authComponentMap: Record<AuthProvider, React.ReactElement> = {
  [AuthProvider.Apple]: <AppleSignIn />,
  [AuthProvider.Google]: <GoogleSignIn />,
  [AuthProvider.Github]: <GithubSignIn />,
  [AuthProvider.Slack]: <SlackSignIn />,
  [AuthProvider.OTP]: <OTPSignIn />,
};

interface PageProps {
  searchParams: { return_to: string };
}

export default async function LoginPage({ searchParams }: PageProps) {
  if (searchParams?.return_to === "desktop/command") {
    return <DesktopCommandMenuSignIn />;
  }

  const cookieStore = cookies();
  const userPreferredProvider = cookieStore.get(Cookies.PreferredSignInProvider)
    ?.value as AuthProvider | undefined;
  const isUserInEU = await isEU();
  const showTrackingConsent =
    isUserInEU && !cookieStore.has(Cookies.TrackingConsent);
  const { device } = userAgent({ headers: headers() });

  const enabledProviders = featureFlags.authProviders.filter((provider) =>
    Object.values(AuthProvider).includes(provider as AuthProvider),
  ) as AuthProvider[];

  const availableAuthComponents = enabledProviders.reduce(
    (components, provider) => {
      if (authComponentMap[provider]) {
        components[provider] = authComponentMap[provider];
      }
      return components;
    },
    {} as Record<AuthProvider, React.ReactElement>,
  );

  const availableProviders = Object.keys(
    availableAuthComponents,
  ) as AuthProvider[];

  const defaultProvider: AuthProvider =
    device?.vendor === "Apple" && enabledProviders.includes(AuthProvider.Apple)
      ? AuthProvider.Apple
      : enabledProviders.includes(AuthProvider.Google)
        ? AuthProvider.Google
        : availableProviders[0]!;

  const actualPreferredProvider = availableProviders.includes(
    userPreferredProvider!,
  )
    ? userPreferredProvider!
    : defaultProvider;

  const preferredSignInOption =
    availableAuthComponents[actualPreferredProvider];

  let moreSignInOptions = availableProviders
    .filter((provider) => provider !== actualPreferredProvider)
    .map((provider) => (
      <React.Fragment key={provider}>
        {availableAuthComponents[provider]}
      </React.Fragment>
    ));

  if (
    availableProviders.includes(AuthProvider.OTP) &&
    actualPreferredProvider !== AuthProvider.OTP
  ) {
    moreSignInOptions = moreSignInOptions.filter(
      (option) => option.key !== AuthProvider.OTP,
    );
    moreSignInOptions.push(
      <OTPSignIn
        key={AuthProvider.OTP}
        className="border-t-[1px] border-border pt-8"
      />,
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8"
      role="main"
    >
      <Icons.Logo
        className="h-16 w-16 md:h-24 md:w-24 mb-8"
        aria-label="Company Logo"
      />

      <div className="w-full max-w-6xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col text-center w-full max-w-2xl">
            <Card className="flex flex-col items-center order-1 w-full p-6 mx-auto pointer-events-auto md:p-8 md:order-2 border-4 border-black rounded-lg">
              <div className="w-full">{preferredSignInOption}</div>
              {moreSignInOptions.length > 0 && (
                <Accordion
                  type="single"
                  collapsible
                  className="mt-6 border-t-[1px] pt-2 w-full"
                >
                  <AccordionItem
                    value="additional-options"
                    className="border-0"
                  >
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
              )}
              <p className="text-xs text-[#878787] max-w-md mt-4 text-center">
                By clicking continue, you acknowledge that you have read and
                agree to {config.name}&apos;s{" "}
                <a href={`${config.webUrl}/terms`} className="underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href={`${config.webUrl}/policy`} className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
