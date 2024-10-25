import { ContentLayout } from "@/components/panel/content-layout";
import { SecondaryMenu } from "@/components/secondary-menu";
import { SignOut } from "@/components/sign-out";
import { getI18n } from "@/locales/server";
import { getUser } from "@v1/db/cached-queries";

export const metadata = {
  title: "Home",
};

export default async function Page() {
  const user = await getUser();
  const t = await getI18n();

  return (
    <ContentLayout title="Account">
      <div className="max-w-[800px] md:p-[2%]">
        <SecondaryMenu items={[{ path: "/account", label: "Account" }]} />

        <main className="mt-8">
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-start justify-start gap-4">
              <p>{t("welcome", { name: user?.data?.email })}</p>

              {/* Added center element */}
              <div className="text-2xl font-bold">Center</div>

              <SignOut mode="default" />
            </div>
          </div>
        </main>
      </div>
    </ContentLayout>
  );
}
