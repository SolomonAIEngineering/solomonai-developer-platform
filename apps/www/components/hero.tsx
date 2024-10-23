"use client";

import PearDarkHeroLogo from "@/components/ui/PearDarkHeroLogo.svg";
import PearHeroLogo from "@/components/ui/PearHeroLogo.svg";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";

const HeroTitle = ({ theme }: { theme: string }) => (
  <>
    <div className="items-start hidden sm:inline-block">
      {theme === "dark" ? (
        <PearDarkHeroLogo
          width="26"
          alt="Solomon AI Logo"
          className="inline-flex mb-4 mr-2"
        />
      ) : (
        <PearHeroLogo
          width="26"
          alt="Solomon AI Logo"
          className="inline-flex mb-4 mr-2"
        />
      )}
      The Open Source financial workspace purpose-built for the unique demands
      of cyclical businesses
    </div>

    <div className="items-start block sm:hidden">
      <div>
        {theme === "dark" ? (
          <PearDarkHeroLogo
            width="20"
            alt="Solomon AI Logo"
            className="inline-flex mb-3 mr-2"
          />
        ) : (
          <PearHeroLogo
            width="20"
            alt="Solomon AI Logo"
            className="inline-flex mb-3 mr-2"
          />
        )}
        <span className="text-foreground">Solomon AI </span>
      </div>
      <span className="flex flex-col text-3xl">
        <span>The Open Source</span> <span>Financial Workspace</span>
      </span>
    </div>
  </>
);

const HeroDescription = () => (
  <div className="max-w-lg mt-6">
    <p
      className="mb-2 text-sm text-gray-500 sm:text-lg"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      The right tools for the often-overlooked needs of brick-and-mortar
      businesses and seasonal operations.
    </p>
    <p
      className="mb-4 text-sm text-gray-500 sm:text-lg"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Solomon AI is built on the innovations of Midday
    </p>
  </div>
);
const HeroButtons = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-sm mx-auto sm:max-w-none">
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="flex flex-col items-center"
      >
        <Button asChild size="lg">
          <Link href="/desktop-download">Download For Free</Link>
        </Button>
      </div>
    </div>
  );
};
export default function Hero() {
  const { theme } = useTheme();

  return (
    <section>
      <div className="relative max-w-6xl px-4 mx-auto mt-24 sm:px-6">
        <div className="relative pt-24 pb-10">
          <div className="flex flex-col items-center max-w-5xl gap-4 pb-12 mx-auto text-center md:pb-16">
            <div className="text-4xl font-semibold text-gray-900 sm:text-5xl">
              <HeroTitle theme={theme!} />
            </div>
            <HeroDescription />
            <HeroButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
