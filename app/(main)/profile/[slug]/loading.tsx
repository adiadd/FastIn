import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

function SectionSkeleton() {
  return (
    <Card>
      <CardContent className="space-y-3 pt-6">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </CardContent>
    </Card>
  );
}

export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl space-y-4 py-6">
      <Card className="overflow-hidden">
        <Skeleton className="h-32 w-full rounded-none" />
        <CardContent className="space-y-3 pt-0">
          <Skeleton className="-mt-12 h-24 w-24 rounded-full border-4 border-background" />
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-64" />
          <Skeleton className="h-4 w-32" />
        </CardContent>
      </Card>

      <SectionSkeleton />
      <SectionSkeleton />
      <SectionSkeleton />
    </div>
  );
}
