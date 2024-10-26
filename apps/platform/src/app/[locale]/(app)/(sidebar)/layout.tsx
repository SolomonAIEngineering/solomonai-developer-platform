import { AI } from "@/actions/ai/chat";
import AccessibilityWidget from "@/components/accessibility-helper-widget";
import { ProTierDock } from "@/components/dock/dock";
import { Header } from "@/components/header";
import AnalyticsLayout from "@/components/panel/admin-panel-layout";
import { getUser, getUserSubscriptions } from "@v1/db/cached-queries";
import { setupAnalytics } from "@v1/events/server";
import { getCountryCode } from "@v1/location";
import { nanoid } from "ai";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  var user: any = null;
  try {
    user = await getUser();
    // Proceed with your logic for when a user is successfully retrieved
  } catch (error) {
    console.error("Error fetching user", error);
    redirect("/login");
  }

  // if no rows are returned (a user does not exist), redirect to the login page
  if (!user?.data || user?.error !== null) {
    redirect("/login");
  }

  const countryCode = getCountryCode();

  // get the current users subscriptions from the database and ensure that the cache is invalidated
  // this is to ensure that the user's subscription is always up to date
  const invalidateCache = true;
  const currentUserSubscription = await getUserSubscriptions(invalidateCache);

  // if there are no subscriptions, redirect to payment page
  if (
    !currentUserSubscription?.data?.length ||
    currentUserSubscription?.data[0]?.status === null
  ) {
    redirect("/payment");
  }

  // if the user does not have a team, redirect to the teams page
  if (!user?.data?.team) {
    redirect("/teams");
  }

  if (user) {
    await setupAnalytics({ userId: user.data.id });
  }

  return (
    <AI initialAIState={{ user: user.data, messages: [], chatId: nanoid() }}>
      <div className="w-screen min-h-screen overflow-y-auto scrollbar-hide">
        <AnalyticsLayout>
          <div className="p-4 w-full overflow-y-auto scroll-smooth scrollbar-hide">
            <div className="md:ml-[80px] md:mt-[1%] md:mr-[30px] h-full">
              {children}
              {/** Dock is placed here to facilitate quick access for the platform */}
            </div>
          </div>

          {/* This is used to make the header draggable on macOS */}
          <div className="hidden todesktop:block todesktop:[-webkit-app-region:drag] fixed top-0 w-full h-4 pointer-events-none" />
        </AnalyticsLayout>
      </div>
    </AI>
  );
}
