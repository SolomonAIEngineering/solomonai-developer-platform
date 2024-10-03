import { Button } from "@v1/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@v1/ui/card";
import Link from "next/link";
import { UnenrollMFA } from "./unenroll-mfa";

/**
 * MfaSettingsList Component
 *
 * This component renders a card displaying multi-factor authentication (MFA) settings.
 * It includes a title, description, an option to unenroll from MFA, and a button to add a new device.
 *
 * @returns {JSX.Element} A Card component containing MFA settings and options
 */
export function MfaSettingsList(): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Multi-factor authentication</CardTitle>
        <CardDescription>
          Add an additional layer of security to your account by requiring more
          than just a password to sign in.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <UnenrollMFA />
      </CardContent>

      <CardFooter className="flex justify-between">
        <div />
        <Link href="?add=device">
          <Button>Add new device</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
