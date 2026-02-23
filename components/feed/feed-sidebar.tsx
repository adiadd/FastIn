import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { UserAvatar } from "@/components/shared/user-avatar";
import { getUsers } from "@/lib/data";

const trendingTopics = [
  "AI in the Workplace",
  "Remote Work Trends 2026",
  "Tech Layoffs Recovery",
  "Leadership & Management",
  "Startup Funding News",
];

export function FeedSidebar() {
  const currentUser = getUsers()[0];

  return (
    <aside className="hidden lg:block w-[300px] shrink-0">
      <Card className="gap-0 py-0 overflow-hidden">
        {/* Mini profile */}
        <div className="flex flex-col items-center pt-6 pb-4 px-4">
          <Link href={`/profile/${currentUser.slug}`}>
            <UserAvatar
              src={currentUser.avatarUrl}
              alt={`${currentUser.firstName} ${currentUser.lastName}`}
              size="lg"
            />
          </Link>
          <Link
            href={`/profile/${currentUser.slug}`}
            className="mt-2 text-sm font-semibold hover:text-primary hover:underline"
          >
            {currentUser.firstName} {currentUser.lastName}
          </Link>
          <p className="text-xs text-muted-foreground text-center mt-0.5 line-clamp-2 px-2">
            {currentUser.headline}
          </p>
        </div>

        <Separator />

        <div className="px-4 py-3 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Connections</span>
            <span className="font-semibold text-primary">
              {currentUser.connections}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Followers</span>
            <span className="font-semibold text-primary">
              {currentUser.followers}
            </span>
          </div>
        </div>

        <Separator />

        {/* Trending */}
        <div className="px-4 py-3">
          <h3 className="text-xs font-semibold mb-2">Trending</h3>
          <ul className="space-y-1.5">
            {trendingTopics.map((topic) => (
              <li key={topic}>
                <span className="text-xs text-muted-foreground hover:text-primary hover:underline cursor-pointer">
                  # {topic}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </aside>
  );
}
