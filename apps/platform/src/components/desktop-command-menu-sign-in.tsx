"use client";

import config from "@/config";
import { Button } from "@v1/ui/button";
import { Icons } from "@v1/ui/icons";

export function DesktopCommandMenuSignIn() {
  return (
    <div className="flex flex-col h-full">
      <Icons.Logo className="absolute top-8 left-8" />

      <div className="flex items-center justify-center w-full h-full">
        <a href={config.desktopUrl}>
          <Button variant="outline">Login to {config.company}</Button>
        </a>
      </div>
    </div>
  );
}