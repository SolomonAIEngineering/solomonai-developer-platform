import { ContentLayout } from "@/components/panel/content-layout";
import { SecondaryMenu } from "@/components/secondary-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ContentLayout title="Webhooks">
      <div className="max-w-[800px] md:py-[2%]">
        <SecondaryMenu
          items={[
            { path: "/webhooks", label: "Overview" },
            { path: "/webhooks/create", label: "Create Webhook" },
            { path: "/webhooks/endpoints", label: "Endpoints" },
            { path: "/webhooks/activity", label: "Activity" },
            { path: "/webhooks/logs", label: "Webhook Logs" },
          ]}
        />

        <main className="mt-8">{children}</main>
      </div>
    </ContentLayout>
  );
}
