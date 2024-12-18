/* eslint-disable prettier/prettier */
"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import PageIllustration from "@/components/page-illustration";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <main className="grow">
        <PageIllustration />
        <div className="py-[10%]">{children}</div>
      </main>
    </>
  );
}
