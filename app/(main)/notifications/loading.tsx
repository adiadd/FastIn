import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

function NotificationSkeleton() {
  return (
    <div className="flex items-start gap-3 p-4 border-b last:border-b-0">
      <Skeleton className="h-10 w-10 rounded-full shrink-0" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3 w-3/4" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl py-6">
      <Card className="overflow-hidden">
        <NotificationSkeleton />
        <NotificationSkeleton />
        <NotificationSkeleton />
        <NotificationSkeleton />
        <NotificationSkeleton />
        <NotificationSkeleton />
      </Card>
    </div>
  );
}
