"use client";

import { resendConfirmationEmail } from "@/app/(auth)/actions";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Verification() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const email = searchParams?.get("email");

  const handleClick = () => {
    router.push("/signin");
  };

  const handleResendEmail = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    const response = await resendConfirmationEmail(email as string);
    if (response?.error) {
      toast.error(response.error);
    } else {
      toast.success("Email sent successfully");
    }
    setIsSubmitting(false);
  };

  return (
    <section className="relative">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-32 pb-12 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="max-w-3xl pb-10 mx-auto text-2xl text-center md:pb-15 md:text-3xl lg:text-4xl">
            <h1 className="leading-tight h1">
              We&apos;ve sent you an email for Confirmation
            </h1>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="flex items-center">
              <div
                className="mr-3 border-t border-gray-700 border-dotted grow"
                aria-hidden="true"
              ></div>
              <div className="text-gray-700">
                If you&apos;ve already confirmed your email, please sign in
                below
              </div>
              <div
                className="ml-3 border-t border-gray-700 border-dotted grow"
                aria-hidden="true"
              ></div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-11">
              <div className="w-full px-3 text-center">
                <Button
                  size={"lg"}
                  onClick={handleClick}
                  className="w-full bg-background text-foreground hover:bg-primary-800 hover:shadow-sm"
                >
                  Sign in
                </Button>
                <div className="mt-4 text-gray-400">
                  Make sure to check your spam folder if you don&apos;t see it!
                </div>
                {email && (
                  <div className="mt-2 text-gray-400">
                    Didn&apos;t receive an email?{" "}
                    <Button
                      onClick={() => handleResendEmail()}
                      variant={"link"}
                      className="p-0 text-gray-700 hover:text-primary-800"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Resending..." : "Resend email"}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
