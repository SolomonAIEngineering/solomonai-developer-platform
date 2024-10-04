import { ContentLayout } from "@/components/panel/content-layout";
import { SecondaryMenu } from "@/components/secondary-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ContentLayout title="Api Keys">
      <div className="max-w-[800px] md:py-[2%]">
        <SecondaryMenu
          items={[
            { path: "/api-keys", label: "General" },
            { path: "/api-keys/language", label: "Language & region" },
            { path: "/api-keys/security", label: "Security" },
            { path: "/api-keys/assistant", label: "Assistant" },
            { path: "/api-keys/teams", label: "Teams" },
            { path: "/api-keys/support", label: "Support" },
          ]}
        />

        <main className="mt-8">{children}</main>
      </div>
    </ContentLayout>
  );
}
