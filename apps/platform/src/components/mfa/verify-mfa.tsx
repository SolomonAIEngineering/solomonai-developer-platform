import { createClient } from "@v1/db/client";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@v1/ui/input-otp";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

/**
 * VerifyMfa component for handling Multi-Factor Authentication verification.
 *
 * This component renders a form for users to enter their MFA code and handles the verification process.
 * It uses Supabase for authentication and Next.js for routing.
 *
 * @returns {JSX.Element} The rendered VerifyMfa component
 */
export const VerifyMfa = () => {
  const [isValidating, setValidating] = useState(false);
  const [error, setError] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  /**
   * Handles the completion of the MFA code input and initiates the verification process.
   *
   * This function performs the following steps:
   * 1. Resets the error state and sets validating state
   * 2. Lists MFA factors for the user
   * 3. Challenges the TOTP factor
   * 4. Verifies the provided code
   * 5. Redirects to the home page on success or sets an error on failure
   *
   * @param {string} code - The MFA code entered by the user
   * @returns {Promise<void>}
   */
  const onComplete = async (code: string) => {
    setError(false);

    if (!isValidating) {
      setValidating(true);

      const factors = await supabase.auth.mfa.listFactors();

      if (factors.error) {
        setValidating(false);
        setError(true);
      }

      if (!factors.data) {
        setValidating(false);
        setError(true);
        return;
      }

      const totpFactor = factors.data.totp[0];

      if (!totpFactor) {
        setValidating(false);
        setError(true);
        return;
      }

      const factorId = totpFactor.id;

      const challenge = await supabase.auth.mfa.challenge({ factorId });

      if (challenge.error) {
        setValidating(false);
        setError(true);
        return;
      }

      const challengeId = challenge.data.id;

      const verify = await supabase.auth.mfa.verify({
        factorId,
        challengeId,
        code,
      });

      if (verify.error) {
        setValidating(false);
        setError(true);
        return;
      }

      router.replace("/");
    }
  };

  return (
    <>
      <div className="pb-4 bg-gradient-to-r from-primary dark:via-primary dark:to-[#848484] to-[#000] inline-block text-transparent bg-clip-text">
        <h1 className="font-medium pb-1 text-3xl">Verify your identity.</h1>
      </div>

      <div className="mb-8">
        <p className="font-medium pb-1 text-2xl text-[#606060]">
          Please enter the code from your authenticator app.
        </p>
      </div>

      <div className="flex w-full mb-6">
        <InputOTP
          onComplete={onComplete}
          maxLength={6}
          autoFocus
          className={error ? "invalid" : undefined}
          disabled={isValidating}
          render={({ slots }) => (
            <InputOTPGroup>
              {slots.map((slot, index) => (
                <InputOTPSlot key={index.toString()} {...slot} />
              ))}
            </InputOTPGroup>
          )}
        />
      </div>

      <p className="text-xs text-[#878787]">
        Open your authenticator apps like 1Password, Authy, etc. to verify your
        identity.
      </p>
    </>
  );
}
