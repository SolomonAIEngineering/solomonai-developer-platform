import { Metadata } from "next";

import Hero from "@/components/hero";
import config from "@/config";

export const metadata: Metadata = {
  title: `Landing | ${config.company}`,
};

export default async function LandingPage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8"
      role="main"
    >
      <Hero />
    </div>
  );
}
