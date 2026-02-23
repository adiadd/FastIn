import Link from "next/link";
import {
  ThumbsUp,
  MessageCircle,
  UserPlus,
  UserCheck,
  AtSign,
  Repeat2,
} from "lucide-react";
import { UserAvatar } from "@/components/shared/user-avatar";
import { cn } from "@/lib/utils";
import type { Notification, NotificationType, User } from "@/lib/types";

const iconMap: Record<NotificationType, typeof ThumbsUp> = {
  like: ThumbsUp,
  comment: MessageCircle,
  connection_request: UserPlus,
  connection_accepted: UserCheck,
  mention: AtSign,
  repost: Repeat2,
};

interface NotificationItemProps {
  notification: Notification;
  actor: User;
  isRead: boolean;
}

function timeAgo(dateStr: string): string {
  const now = new Date("2026-02-23T12:00:00Z");
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 60) return `${diffMins}m`;
  if (diffHours < 24) return `${diffHours}h`;
  if (diffDays < 7) return `${diffDays}d`;
  return `${Math.floor(diffDays / 7)}w`;
}

export function NotificationItem({
  notification,
  actor,
  isRead,
}: NotificationItemProps) {
  const Icon = iconMap[notification.type];
  const href = notification.postId
    ? "/"
    : `/profile/${actor.slug}`;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-start gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-muted/50",
        !isRead && "bg-primary/5"
      )}
    >
      <UserAvatar
        src={actor.avatarUrl}
        alt={`${actor.firstName} ${actor.lastName}`}
        size="md"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm">
          <span className="font-semibold">
            {actor.firstName} {actor.lastName}
          </span>{" "}
          {notification.message}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {timeAgo(notification.createdAt)}
        </p>
      </div>
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
    </Link>
  );
}
