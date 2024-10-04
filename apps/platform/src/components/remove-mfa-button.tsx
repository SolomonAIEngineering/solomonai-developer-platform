"use client";

import { unenrollMfaAction } from "@/actions/sso-mfa/unenroll-mfa-action";
import { Button } from "@v1/ui/button";
import { useToast } from "@v1/ui/use-toast";
import { useAction } from "next-safe-action/hooks";

type Props = {
  factorId: string;
};

export function RemoveMFAButton({ factorId }: Props) {
  const { toast } = useToast();

  const unenroll = useAction(unenrollMfaAction, {
    onError: () => {
      toast({
        duration: 3500,
        variant: "error",
        title: "Something went wrong please try again.",
      });
    },
  });

  return (
    <Button variant="outline" onClick={() => unenroll.execute({ factorId })}>
      Remove
    </Button>
  );
}
