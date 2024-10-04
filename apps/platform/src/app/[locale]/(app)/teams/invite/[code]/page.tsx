import { UserMenu } from "@/components/user-menu";
import config from "@/config";
import { joinTeamByInviteCode } from "@v1/db/mutations";
import { createClient } from "@v1/db/server";
import { Client } from "@v1/db/types";
import { Button } from "@v1/ui/button";
import { Icons } from "@v1/ui/icons";
import type { Metadata } from "next";
import { revalidateTag } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `Join team | ${config.company}`,
};

export default async function InviteCode({
  params,
}: {
  params: { code: string };
}) {
  const supabase = createClient() as unknown as Client;
  const { code } = params;

  if (code) {
    const user = await joinTeamByInviteCode(supabase, code);

    if (user) {
      revalidateTag(`user_${user.id}`);
      revalidateTag(`teams_${user.id}`);

      if (!user.full_name) {
        redirect("/setup");
      }

      redirect("/");
    }
  }

  return (
    <div>
      <header className="w-full absolute left-0 right-0 flex justify-between items-center">
        <div className="ml-5 mt-4 md:ml-10 md:mt-10">
          <Link href="/">
            <Icons.Logo />
          </Link>
        </div>

        <div className="mr-5 mt-4 md:mr-10 md:mt-10">
          <Suspense>
            <UserMenu onlySignOut />
          </Suspense>
        </div>
      </header>

      <div className="flex min-h-screen justify-center items-center overflow-hidden p-6 md:p-0">
        <div className="relative z-20 m-auto flex w-full max-w-[380px] flex-col">
          <div className="flex w-full flex-col relative">
            <div className="pb-4">
              <h1 className="font-medium pb-1 text-3xl">
                Invite link has expired
              </h1>
            </div>

            <p className="font-medium pb-1 text-2xl text-[#606060]">
              Notify the sender for a new one.
            </p>

            <div className="pointer-events-auto mt-6 flex flex-col mb-4">
              <Link href="/teams" className="w-full">
                <Button className="w-full">Go to teams</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}