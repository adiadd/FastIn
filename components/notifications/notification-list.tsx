"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NotificationItem } from "./notification-item";
import type { Notification, User } from "@/lib/types";

interface NotificationGroup {
  label: string;
  notifications: Notification[];
}

function groupNotifications(
  items: Notification[]
): NotificationGroup[] {
  const now = new Date("2026-02-23T12:00:00Z");
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);

  const weekStart = new Date(now);
  weekStart.setDate(weekStart.getDate() - 7);

  const today: Notification[] = [];
  const thisWeek: Notification[] = [];
  const earlier: Notification[] = [];

  for (const n of items) {
    const date = new Date(n.createdAt);
    if (date >= todayStart) {
      today.push(n);
    } else if (date >= weekStart) {
      thisWeek.push(n);
    } else {
      earlier.push(n);
    }
  }

  const groups: NotificationGroup[] = [];
  if (today.length > 0) groups.push({ label: "Today", notifications: today });
  if (thisWeek.length > 0)
    groups.push({ label: "This Week", notifications: thisWeek });
  if (earlier.length > 0)
    groups.push({ label: "Earlier", notifications: earlier });

  return groups;
}

interface NotificationListProps {
  notifications: Notification[];
  actorMap: Record<string, User>;
}

export function NotificationList({
  notifications,
  actorMap,
}: NotificationListProps) {
  const [readIds, setReadIds] = useState<Set<string>>(
    () => new Set(notifications.filter((n) => n.read).map((n) => n.id))
  );

  const markAllRead = () => {
    setReadIds(new Set(notifications.map((n) => n.id)));
  };

  const groups = groupNotifications(notifications);

  return (
    <div>
      <div className="flex items-center justify-between border-b px-4 py-3">
        <h2 className="font-semibold">Notifications</h2>
        <Button variant="ghost" size="sm" onClick={markAllRead}>
          Mark all as read
        </Button>
      </div>
      <div className="divide-y">
        {groups.map((group) => (
          <div key={group.label}>
            <div className="px-4 py-2">
              <span className="text-xs font-medium text-muted-foreground">
                {group.label}
              </span>
            </div>
            {group.notifications.map((notification) => {
              const actor = actorMap[notification.actorId];
              if (!actor) return null;
              return (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  actor={actor}
                  isRead={readIds.has(notification.id)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
