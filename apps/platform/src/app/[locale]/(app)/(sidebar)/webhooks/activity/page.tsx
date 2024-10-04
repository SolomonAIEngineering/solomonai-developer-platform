type WebhookLog = {
  id: string;
  timestamp: string;
  event: string;
  status: string;
};

export default function WebhookActivity() {
  const logs: WebhookLog[] = [];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-primary">Webhook Activity</h1>
      <p className="text-lg text-muted-foreground">
        View webhook activty in your account
      </p>
    </div>
  );
}
