import { ChangeLanguage } from "@/components/change-language";
import { ChangeTimezone } from "@/components/change-timezone";
import { WeekSettings } from "@/components/week-settings";
import config from "@/config";
import { getUser } from "@v1/db/cached-queries";
import { getTimezone, getTimezones } from "@v1/location";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Language & region | ${config.company}`,
};

export default async function Language() {
  const { data: userData } = await getUser();
  const timezone = userData?.timezone || getTimezone();
  const timezones = getTimezones();

  return (
    <div className="space-y-12">
      <ChangeLanguage />
      <ChangeTimezone value={timezone} timezones={timezones} />

      <WeekSettings weekStartsOnMonday={userData?.week_starts_on_monday} />
    </div>
  );
}
