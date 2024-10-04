import config from "@/config";
import { getUser } from "@v1/db/cached-queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Plan & Billing | ${config.company}`,
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
      <h1 className="text-3xl font-bold text-primary mb-4">Plan & Billing</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Manage your plan and billing information
      </p>
    </div>
  );
}
