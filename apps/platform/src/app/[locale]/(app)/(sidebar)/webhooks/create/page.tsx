import { Button } from "@v1/ui/button";
import { Input } from "@v1/ui/input";
import { Label } from "@v1/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@v1/ui/select";

export default function CreateWebhook() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-foreground">Create New Webhook</h1>
      <p className="text-lg text-muted-foreground">
        Set up a new webhook to receive notifications for specific transaction
        sync and API events.
      </p>
    </div>
  );
}
