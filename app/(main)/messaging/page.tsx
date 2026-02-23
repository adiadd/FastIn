import type { Metadata } from "next";
import { MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Messaging",
};

export default function MessagingPage() {
  return (
    <div className="mx-auto max-w-3xl py-6">
      <Card>
        <CardContent className="flex flex-col items-center gap-4 py-16">
          <MessageSquare className="h-16 w-16 text-muted-foreground" />
          <h1 className="text-2xl font-bold">Messaging</h1>
          <p className="text-muted-foreground">
            Messaging is coming soon. Stay tuned!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
