import { Suspense } from "react";
import { MFAList, MFAListSkeleton } from "./mfa-list";

/**
 * UnenrollMFA component
 *
 * This component renders the MFA (Multi-Factor Authentication) list with a loading skeleton.
 * It uses React Suspense for handling the asynchronous loading state.
 *
 * @returns A React component that displays the MFA list or a loading skeleton
 */
export function UnenrollMFA() {
  return (
    <Suspense fallback={<MFAListSkeleton />}>
      <MFAList />
    </Suspense>
  );
}
