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
  // const currentUserSubscription = await getUserSubscriptions(invalidateCache);

  // // if there are no subscriptions, redirect to payment page
  // if (
  //   !currentUserSubscription?.data?.length ||
  //   currentUserSubscription?.data[0]?.status === null
  // ) {
  //   redirect("/payment");
  // }

  // if the user does not have a team, redirect to the teams page
  if (!user?.data?.team) {
    redirect("/teams");
  }

  if (user) {
    await setupAnalytics({ userId: user.data.id });
  }

  return (
    <AI initialAIState={{ user: user.data, messages: [], chatId: nanoid() }}>
      <div className="h-screen w-screen overflow-hidden">
        <AnalyticsLayout>
          {/** Place Sidebar Here */}
          {/* <div className="mx-4 md:ml-[95px] md:mr-10 pb-8">
          <Header />
          {children}
          <AccessibilityWidget
            email={user.data.email as string}
            name={user.data.full_name as string}
            id={user.data.id as string}
            profilePicture={user.data.avatar_url as string}
          />
        </div> */}
          <div className="mx-4 pb-8 w-screen h-screen overflow-y-auto">
            <div className="md:ml-[35px] border-8 border-black rounded-lg md:mt-[1%]">
              {children}

              {/** Dock is placed here to facilitate quick access for the platform */}
            </div>
          </div>

          {/* This is used to make the header draggable on macOS */}
          <div className="hidden todesktop:block todesktop:[-webkit-app-region:drag] fixed top-0 w-full h-4 pointer-events-none" />
        </AnalyticsLayout>
        {/* <AccessibilityWidget
        email={user.data.email as string}
        name={user.data.full_name as string}
        id={user.data.id as string}
        profilePicture={user.data.avatar_url as string}
      /> */}
      </div>
    </AI>
  );
}
