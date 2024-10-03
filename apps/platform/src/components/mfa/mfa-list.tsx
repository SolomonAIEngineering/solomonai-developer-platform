import { getI18n } from "@/locales/server";
import { createClient } from "@v1/db/server";
import { Skeleton } from "@v1/ui/skeleton";
import { format } from "date-fns";
import { RemoveMFAButton } from "./remove-mfa-button";

/**
 * MFAListSkeleton component
 *
 * This component renders a skeleton loader for the MFA list.
 * It displays a placeholder while the actual MFA list is being loaded.
 *
 * @returns {JSX.Element} A skeleton loader for the MFA list
 */
export function MFAListSkeleton(): JSX.Element {
  return (
    <div className="flex justify-between items-center h-[36px]">
      <Skeleton className="h-4 w-[200px]" />
    </div>
  );
}

/**
 * MFAList component
 *
 * This asynchronous component fetches and displays a list of MFA (Multi-Factor Authentication) factors
 * associated with the current user. It sorts the factors by status and renders them with additional
 * information such as creation date and a remove button.
 *
 * @returns {Promise<JSX.Element[] | undefined>} A promise that resolves to an array of JSX elements
 *          representing the MFA factors, or undefined if no factors are found
 */
export async function MFAList(): Promise<JSX.Element[] | undefined> {
  const supabase = createClient();

  // Fetch MFA factors from Supabase
  const { data } = await supabase.auth.mfa.listFactors();
  const t = await getI18n();

  return data?.all
    ?.sort((a) => (a.status === "verified" ? -1 : 1))
    .map((factor) => {
      return (
        <div
          key={factor.id}
          className="flex justify-between items-center space-y-4"
        >
          <div>
            <p className="text-sm">
              Added on {format(new Date(factor.created_at), "pppp")}
            </p>

            <p className="text-xs text-[#606060] mt-0.5">
              {t(`mfa_status.${factor.status}` as any, {
                name: factor.status
              })}
            </p>
          </div>

          <RemoveMFAButton factorId={factor.id} />
        </div>
      );
    });
}
