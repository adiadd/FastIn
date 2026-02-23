import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

function ResultSkeleton() {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 pt-6">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-3 w-60" />
        </div>
      </CardContent>
    </Card>
  );
}

export default function Loading() {
  return (
    <div>
      <Skeleton className="h-10 w-full rounded-md" />

      <div className="mt-4 flex gap-2">
        <Skeleton className="h-8 w-20 rounded-md" />
        <Skeleton className="h-8 w-20 rounded-md" />
      </div>

      <div className="mt-4 space-y-3">
        <ResultSkeleton />
        <ResultSkeleton />
        <ResultSkeleton />
        <ResultSkeleton />
      </div>
    </div>
  );
}
