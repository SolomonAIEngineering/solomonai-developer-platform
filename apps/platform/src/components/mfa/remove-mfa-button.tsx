"use client";

import { unenrollMfaAction } from "@/actions/verification/unenroll-mfa-action";
import { Button } from "@v1/ui/button";
import { useToast } from "@v1/ui/use-toast";
import { useAction } from "next-safe-action/hooks";

/**
 * Props for the RemoveMFAButton component.
 */
interface RemoveMFAButtonProps {
  /** The unique identifier of the MFA factor to be removed. */
  factorId: string;
}

/**
 * RemoveMFAButton component allows users to remove a specific MFA factor.
 *
 * @component
 * @example
 * ```tsx
 * <RemoveMFAButton factorId="123456" />
 * ```
 */
export function RemoveMFAButton({ factorId }: RemoveMFAButtonProps): JSX.Element {
  const { toast } = useToast();

  const { execute: unenrollMfa, hasSucceeded, isExecuting } = useAction(unenrollMfaAction, {
    onSuccess: () => {
      toast({
        duration: 3500,
        variant: "success",
        title: "MFA factor successfully removed.",
      });
    },
    onError: (error) => {
      console.error("Failed to remove MFA factor:", error);
      toast({
        duration: 3500,
        variant: "error",
        title: "Failed to remove MFA factor. Please try again.",
      });
    },
  });

  /**
   * Handles the button click event to remove the MFA factor.
   */
  const handleRemoveMfa = async () => {
    await unenrollMfa({ factorId });
  };

  const hasCompleted = hasSucceeded && !isExecuting;

  return (
    <Button
      variant="outline"
      onClick={handleRemoveMfa}
      disabled={!hasCompleted}
    >
      {!hasCompleted ? "Removing..." : "Remove"}
    </Button>
  );
}
