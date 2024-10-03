import { SetupForm } from "@/components/setup-form";
import config from "@/config";
import { getUser } from "@v1/db/cached-queries";
import { Icons } from "@v1/ui/icons";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

/**
 * Metadata for the Setup page.
 */
export const metadata: Metadata = {
  title: `Setup account | ${config.company}`,
};

/**
 * The Setup page component.
 *
 * This component renders a page where users can update their account information,
 * including their name and avatar.
 *
 * @returns {Promise<JSX.Element|null>} The rendered page or a redirect.
 * @throws {Error} If there's an issue fetching user data.
 */
export default async function Page(): Promise<JSX.Element | null> {
  const res = await getUser();

  // Redirect to the homepage if the user is not logged in
  if (!res || !res.data || !res.data?.id) {
    return redirect("/");
  }

  const userId = res.data.id;
  const avatarUrl = res.data.avatar_url || "";
  const fullName = res.data.full_name || "";

  return (
    <div>
      {/* Logo link in the top-left corner */}
      <div className="absolute left-5 top-4 md:left-10 md:top-10">
        <Link href="/">
          <Icons.Logo />
        </Link>
      </div>

      {/* Main content container */}
      <div className="flex min-h-screen justify-center items-center overflow-hidden p-6 md:p-0">
        <div className="relative z-20 m-auto flex w-full max-w-[380px] flex-col">
          <h1 className="text-2xl font-medium pb-4">Update your account</h1>
          <p className="text-sm text-[#878787] mb-8">
            Add your name and an optional avatar.
          </p>

          {/* Setup form component */}
          <SetupForm
            userId={userId}
            avatarUrl={avatarUrl}
            fullName={fullName}
          />
        </div>
      </div>
    </div>
  );
}
