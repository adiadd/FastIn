import type { Metadata } from "next";
import { BriefcaseBusiness } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Jobs | FastIn",
};

export default function JobsPage() {
  return (
    <div className="mx-auto max-w-3xl py-6">
      <Card>
        <CardContent className="flex flex-col items-center gap-4 py-16">
          <BriefcaseBusiness className="h-16 w-16 text-muted-foreground" />
          <h1 className="text-2xl font-bold">Jobs</h1>
          <p className="text-muted-foreground">
            Job listings are coming soon. Stay tuned!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
