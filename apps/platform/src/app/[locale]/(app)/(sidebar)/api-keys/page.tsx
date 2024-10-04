import { ChangeTheme } from "@/components/change-theme";
import { DeleteAccount } from "@/components/delete-account";
import { DisplayName } from "@/components/display-name";
import { UserAvatar } from "@/components/user-avatar";
import config from "@/config";
import { getUser } from "@v1/db/cached-queries";
import { u } from "framer-motion/client";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: `Api Keys | ${config.company}`,
};

export default async function Account() {
  const userData = await getUser();

  if (!userData) {
    // Handle the case when user data is not available
    return <div>User data not available</div>;
  }

  const userId = userData.data?.id as string;
  const fullName = userData.data?.full_name as string;
  const avatarUrl = userData.data?.avatar_url as string;


  return (
    <div className="space-y-12">
      <UserAvatar
        userId={userId}
        fullName={fullName}
        avatarUrl={avatarUrl}
      />
      <DisplayName fullName={fullName} />
      <ChangeTheme />
      <DeleteAccount />
    </div>
  );
}
