"use client";

import { useState } from "react";
import Link from "next/link";
import { UserAvatar } from "@/components/shared/user-avatar";
import { Button } from "@/components/ui/button";
import type { User } from "@/lib/types";

interface InvitationCardProps {
  user: User;
}

export function InvitationCard({ user }: InvitationCardProps) {
  const [status, setStatus] = useState<"pending" | "accepted" | "ignored">(
    "pending"
  );

  if (status !== "pending") {
    return (
      <div className="flex items-center gap-3 rounded-lg border p-4">
        <UserAvatar
          src={user.avatarUrl}
          alt={`${user.firstName} ${user.lastName}`}
          size="lg"
        />
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">
            {status === "accepted"
              ? `You and ${user.firstName} are now connected!`
              : "Invitation ignored"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 rounded-lg border p-4">
      <Link href={`/profile/${user.slug}`}>
        <UserAvatar
          src={user.avatarUrl}
          alt={`${user.firstName} ${user.lastName}`}
          size="lg"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <Link
          href={`/profile/${user.slug}`}
          className="font-semibold hover:underline"
        >
          {user.firstName} {user.lastName}
        </Link>
        <p className="truncate text-sm text-muted-foreground">
          {user.headline}
        </p>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setStatus("ignored")}
        >
          Ignore
        </Button>
        <Button size="sm" onClick={() => setStatus("accepted")}>
          Accept
        </Button>
      </div>
    </div>
  );
}
