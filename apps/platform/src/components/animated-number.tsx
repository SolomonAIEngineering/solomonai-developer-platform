"use client";

import { useCurrentLocale } from "@/locales/client";
import MotionNumber from "motion-number";
import React from "react";

type Props = {
  value: number;
  currency: string;
};

export function AnimatedNumber({ value, currency }: Props) {
  const locale = useCurrentLocale();

  return (
    <MotionNumber
      value={value}
      format={{
        style: "currency",
        currency: currency ?? "USD",
      }}
      locales={locale}
    />
  );
}
