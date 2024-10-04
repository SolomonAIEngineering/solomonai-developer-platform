import { ContentLayout } from "@/components/panel/content-layout";
import { SecondaryMenu } from "@/components/secondary-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ContentLayout title="Api Keys">
      <div className="max-w-[800px] md:py-[2%]">
        <SecondaryMenu
          items={[
            { path: "/keys", label: "Overview" },
            { path: "/keys/create", label: "Add Keys" },
          ]}
        />

        <main className="mt-8">{children}</main>
      </div>
    </ContentLayout>
  );
}
