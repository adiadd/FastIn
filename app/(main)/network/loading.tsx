import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function SuggestionSkeleton() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-3 pt-6">
        <Skeleton className="h-16 w-16 rounded-full" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-32" />
        <Skeleton className="h-8 w-full rounded-md" />
      </CardContent>
    </Card>
  );
}

export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl py-6">
      <div className="grid gap-6 md:grid-cols-[240px_1fr]">
        <aside className="hidden md:block">
          <Card>
            <CardContent className="space-y-3 pt-6">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-3/4" />
            </CardContent>
          </Card>
        </aside>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <Skeleton className="h-5 w-28" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-48" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <Skeleton className="h-5 w-40" />
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <SuggestionSkeleton />
                <SuggestionSkeleton />
                <SuggestionSkeleton />
                <SuggestionSkeleton />
                <SuggestionSkeleton />
                <SuggestionSkeleton />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
