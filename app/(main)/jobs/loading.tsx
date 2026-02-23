import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

function JobCardSkeleton() {
  return (
    <Card>
      <CardContent className="flex gap-4 pt-6">
        <Skeleton className="h-12 w-12 rounded-md shrink-0" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-3 w-24" />
          <div className="flex gap-2 pt-1">
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl py-6 space-y-4">
      <Skeleton className="h-10 w-full rounded-md" />
      <JobCardSkeleton />
      <JobCardSkeleton />
      <JobCardSkeleton />
      <JobCardSkeleton />
      <JobCardSkeleton />
    </div>
  );
}
