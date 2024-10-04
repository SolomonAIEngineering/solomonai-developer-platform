import { ChangeTheme } from "@/components/change-theme";
import { DeleteAccount } from "@/components/delete-account";
import { DisplayName } from "@/components/display-name";
import { UserAvatar } from "@/components/user-avatar";
import { getUser } from "@v1/db/cached-queries";
import { userData } from "@v1/ui/types";

export default async function AccountsPortal() {
  const userData = await getUser();

  if (!userData) {
    return <div>User data not available</div>;
  }

  const userId = userData.data?.id as string;
  const fullName = userData.data?.full_name as string;
  const avatarUrl = userData.data?.avatar_url as string;

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-primary">Accounts Portal</h1>
      <p className="text-lg text-muted-foreground">
        Manage your account settings and preferences.
      </p>
      <div className="py-12 flex flex-col gap-3">
        <UserAvatar userId={userId} fullName={fullName} avatarUrl={avatarUrl} />
        <DisplayName fullName={fullName} />
        <ChangeTheme />
        <DeleteAccount />
      </div>
    </div>
  );
}
