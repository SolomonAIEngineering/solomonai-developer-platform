"use client";

import { signOutAction } from "@/actions/sign-out-action";
import { Button } from "@v1/ui/button";
import { Icons } from "@v1/ui/icons";
import { useState } from "react";

/**
 * SignOut component for handling user sign-out functionality.
 *
 * This component renders a button that, when clicked, triggers the sign-out process.
 * It uses the `signOutAction` to perform the actual sign-out operation and manages
 * a loading state to provide visual feedback during the process.
 *
 * @example
 * ```tsx
 * <SignOut />
 * ```
 *
 * @returns A React functional component that renders a sign-out button.
 */
export function SignOut() {
  /**
   * State to manage the loading status of the sign-out process.
   */
  const [isLoading, setLoading] = useState(false);

  /**
   * Handles the sign-out process when the button is clicked.
   * Sets the loading state to true and calls the signOutAction.
   *
   * @async
   */
  const handleSignOut = async () => {
    setLoading(true);
    signOutAction();
  };

  return (
    <Button
      onClick={handleSignOut}
      variant="outline"
      className="font-mono gap-2 flex items-center"
    >
      <Icons.SignOut className="size-4" />
      <span>Sign out</span>
    </Button>
  );
}
