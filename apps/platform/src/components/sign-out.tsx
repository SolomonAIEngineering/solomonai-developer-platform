"use client";

import { signOutAction } from "@/actions/sign-out-action";
import { CaretLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@v1/ui/button";
import { DropdownMenuItem } from "@v1/ui/dropdown-menu";
import React, { useState } from "react";

interface SignOutProps {
  mode: "default" | "dropdown";
}

export const SignOut: React.FC<SignOutProps> = ({ mode = "dropdown" }) => {
  const [isLoading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    signOutAction();
  };

  if (mode === "default") {
    return (
      <Button onClick={handleSignOut}>
        {isLoading ? "Loading..." : <CaretLeftIcon className="w-5 h-5" />}
      </Button>
    );
  }

  return (
    <DropdownMenuItem onClick={handleSignOut}>
      {isLoading ? "Loading..." : "Sign out"}
    </DropdownMenuItem>
  );
};
