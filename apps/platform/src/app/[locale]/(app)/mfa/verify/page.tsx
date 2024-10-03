"use client";

import { VerifyMfa } from "@/components/verify-mfa";
import config from "@/config";
import { Icons } from "@v1/ui/icons";
import Link from "next/link";

/**
 * Verify component for Multi-Factor Authentication (MFA) verification page.
 *
 * This component renders the MFA verification page, which includes:
 * - A logo link in the top-left corner
 * - A centered container with the VerifyMfa component
 *
 * @returns {JSX.Element} The rendered Verify component
 */
export default function Verify(): JSX.Element {
  return (
    <div>
      <div className="absolute left-5 top-4 md:left-10 md:top-10">
        <Link href={config.webUrl}>
          <Icons.Logo />
        </Link>
      </div>

      <div className="flex items-center justify-center min-h-screen p-6 overflow-hidden md:p-0">
        <div className="relative z-20 m-auto flex w-full max-w-[380px] flex-col">
          <VerifyMfa />
        </div>
      </div>
    </div>
  );
}
