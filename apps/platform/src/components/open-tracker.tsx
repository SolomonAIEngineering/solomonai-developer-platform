"use client";

import { Button } from "@v1/ui/button";
import { Icons } from "@v1/ui/icons";
import { useQueryState } from "nuqs";

export function OpenTracker() {
  const [_, setOpen] = useQueryState("create");

  return (
    <div>
      <Button variant="outline" size="icon" onClick={() => setOpen("project")}>
        <Icons.Add />
      </Button>
    </div>
  );
}
