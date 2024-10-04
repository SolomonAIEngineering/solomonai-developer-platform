import { ContentLayout } from "@/components/panel/content-layout";
import { SecondaryMenu } from "@/components/secondary-menu";
import path from "path";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ContentLayout title="Account">
      <div className="max-w-[800px] md:py-[2%]">
        <SecondaryMenu
          items={[
            { path: "/account-portal", label: "Account" },
            { path: "/account-portal/assistant", label: "Assistant" },
            { path: "/account-portal/language", label: "Language" },
            { path: "/account-portal/security", label: "Security" },
            { path: "/account-portal/support", label: "Support" },
            { path: "/account-portal/teams", label: "Teams" },
          ]}
        />

        <main className="mt-8">{children}</main>
      </div>
    </ContentLayout>
  );
}
