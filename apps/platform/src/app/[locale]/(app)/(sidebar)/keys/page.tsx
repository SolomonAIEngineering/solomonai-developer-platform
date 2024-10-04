import { ChangeTheme } from "@/components/change-theme";
import { DeleteAccount } from "@/components/delete-account";
import { DisplayName } from "@/components/display-name";
import { UserAvatar } from "@/components/user-avatar";
import config from "@/config";
import { getUser } from "@v1/db/cached-queries";
import { Button } from "@v1/ui/button";
import { u } from "framer-motion/client";
import { PlusCircleIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Api Keys | ${config.company}`,
};

export default async function Webhooks() {
  const userData = await getUser();

  if (!userData) {
    return <div>User data not available</div>;
  }

  const userId = userData.data?.id as string;
  const fullName = userData.data?.full_name as string;
  const avatarUrl = userData.data?.avatar_url as string;

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-4">Api Keys</h1>
      <p className="text-xl text-muted-foreground mb-6">
        Configure api keys for your account.
      </p>
    </div>
  );
}
