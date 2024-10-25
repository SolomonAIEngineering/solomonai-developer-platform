import { ContentLayout } from "@/components/panel/content-layout";
import { Button } from "@v1/ui/button";
import Link from "next/link";

export default function WebhookEndpoints() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-foreground">Endpoints</h1>
      <p className="text-lg text-muted-foreground">
        View webhook endpoints in your account
      </p>
    </div>
  );
}
