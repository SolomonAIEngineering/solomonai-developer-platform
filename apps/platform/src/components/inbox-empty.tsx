import config from "@/config";
import { getInboxEmail } from "@v1/inbox";
import { Icons } from "@v1/ui/icons";
import { CopyInput } from "./copy-input";

type Props = {
  inboxId: string;
};

export function InboxEmpty({ inboxId }: Props) {
  return (
    <div className="h-[calc(100vh-150px)] flex items-center justify-center">
      <div className="flex flex-col items-center max-w-[380px] w-full">
        <Icons.InboxEmpty className="mb-4 w-[35px] h-[35px]" />
        <div className="mb-6 space-y-2 text-center">
          <h2 className="text-lg font-medium">Magic Inbox</h2>
          <p className="text-[#606060] text-sm">
            Use the email to send receipts to {config.company}. We will extract
            and reconcile them against your transactions. Additionally, you can
            also upload receipts by simply dragging and dropping them here.
            <br />
          </p>
        </div>

        <CopyInput value={getInboxEmail(inboxId)} />
      </div>
    </div>
  );
}
