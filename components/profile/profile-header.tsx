import { Card, CardContent } from "@/components/ui/card";
import { UserAvatar } from "@/components/shared/user-avatar";
import { ConnectButton } from "@/components/profile/connect-button";
import { MapPin } from "lucide-react";
import type { User } from "@/lib/types";

interface ProfileHeaderProps {
  user: User;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <Card className="overflow-hidden py-0">
      {/* Banner */}
      <div className="h-36 bg-gradient-to-r from-primary/80 to-primary/40" />

      <CardContent className="relative pt-0 pb-6">
        {/* Avatar overlapping banner */}
        <div className="-mt-14 mb-4">
          <UserAvatar
            src={user.avatarUrl}
            alt={fullName}
            size="xl"
            className="ring-4 ring-background"
          />
        </div>

        {/* User info */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">{fullName}</h1>
          <p className="text-muted-foreground">{user.headline}</p>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            <span>{user.location}</span>
          </div>

          <p className="text-sm text-muted-foreground">
            {user.connections.toLocaleString()} connections &middot;{" "}
            {user.followers.toLocaleString()} followers
          </p>

          <div className="pt-2">
            <ConnectButton />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
