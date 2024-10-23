"use client";

import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/utils/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PricingSuccess() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard?checkout=success");
  };

  return (
    <section className="relative">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-32 pb-12 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="max-w-3xl pb-10 mx-auto text-2xl text-center md:pb-15 md:text-3xl lg:text-4xl">
            <h1 className="leading-tight h1">
              Thank you for subscribing to Solomon AI!
            </h1>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="flex items-center">
              <div
                className="mr-3 border-t border-gray-700 border-dotted grow"
                aria-hidden="true"
              ></div>
              <div className="text-center text-gray-700">
                We hope you enjoy using Pear. Feel free to send any suggestions
                our way at{" "}
                <Link
                  href={`mailto:{CONTACT_EMAIL}`}
                  className="font-medium text-gray-900 underline"
                >
                  {CONTACT_EMAIL}
                </Link>
                .
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
                  Go to dashboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
