"use client";

import { useState } from "react";
import Link from "next/link";
import { UserPlus, Check } from "lucide-react";
import { UserAvatar } from "@/components/shared/user-avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { User } from "@/lib/types";

interface SuggestionCardProps {
  user: User;
}

export function SuggestionCard({ user }: SuggestionCardProps) {
  const [connected, setConnected] = useState(false);

  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-3 pt-6 text-center">
        <Link href={`/profile/${user.slug}`}>
          <UserAvatar
            src={user.avatarUrl}
            alt={`${user.firstName} ${user.lastName}`}
            size="lg"
          />
        </Link>
        <div className="min-w-0 w-full">
          <Link
            href={`/profile/${user.slug}`}
            className="font-semibold hover:underline"
          >
            {user.firstName} {user.lastName}
          </Link>
          <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
            {user.headline}
          </p>
        </div>
        <Button
          variant={connected ? "outline" : "default"}
          size="sm"
          className="w-full"
          onClick={() => setConnected(!connected)}
        >
          {connected ? (
            <>
              <Check className="mr-1.5 h-4 w-4" />
              Pending
            </>
          ) : (
            <>
              <UserPlus className="mr-1.5 h-4 w-4" />
              Connect
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
