"use client";

import { updateUserAction } from "@/actions/user/update-user-action";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@v1/ui/card";
import { Switch } from "@v1/ui/switch";
import { useAction } from "next-safe-action/hooks";

type Props = {
  weekStartsOnMonday: boolean;
};

export function WeekSettings({ weekStartsOnMonday }: Props) {
  const action = useAction(updateUserAction);

  return (
    <Card className="flex justify-between items-center">
      <CardHeader>
        <CardTitle>Start week on Monday</CardTitle>
        <CardDescription>
          This will change how all calendars in your app look.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Switch
          checked={weekStartsOnMonday}
          disabled={action.status === "executing"}
          onCheckedChange={(week_starts_on_monday: boolean) => {
            action.execute({ week_starts_on_monday });
          }}
        />
      </CardContent>
    </Card>
  );
}
