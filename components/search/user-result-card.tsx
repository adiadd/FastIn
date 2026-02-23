import Link from "next/link";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/shared/user-avatar";
import type { User } from "@/lib/types";

interface UserResultCardProps {
  user: User;
}

export function UserResultCard({ user }: UserResultCardProps) {
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-4">
        <Link href={`/profile/${user.slug}`} className="shrink-0">
          <UserAvatar src={user.avatarUrl} alt={fullName} size="lg" />
        </Link>
        <div className="min-w-0 flex-1">
          <Link
            href={`/profile/${user.slug}`}
            className="text-sm font-semibold hover:underline"
          >
            {fullName}
          </Link>
          <p className="text-muted-foreground truncate text-sm">
            {user.headline}
          </p>
          {user.location && (
            <p className="text-muted-foreground mt-1 flex items-center gap-1 text-xs">
              <MapPin className="size-3" />
              {user.location}
            </p>
          )}
        </div>
        <Button variant="outline" size="sm" className="shrink-0">
          Connect
        </Button>
      </CardContent>
    </Card>
  );
}
