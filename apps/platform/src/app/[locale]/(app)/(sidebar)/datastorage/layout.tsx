import { ContentLayout } from "@/components/panel/content-layout";
import { SecondaryMenu } from "@/components/secondary-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ContentLayout title="Data Storage">
      <div className="max-w-[800px] md:py-[2%]">
        <SecondaryMenu
          items={[{ path: "/datastorage", label: "Data Storage" }]}
        />

        <main className="mt-8">{children}</main>
      </div>
    </ContentLayout>
  );
}
