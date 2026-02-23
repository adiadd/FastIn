import type { Metadata } from "next";
import { getNotificationsForUser, getUserById } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { NotificationList } from "@/components/notifications/notification-list";
import type { User } from "@/lib/types";

export const metadata: Metadata = {
  title: "Notifications",
};

export default function NotificationsPage() {
  const userId = "1"; // Sarah
  const notifications = getNotificationsForUser(userId);

  // Build actor map for client component
  const actorMap: Record<string, User> = {};
  for (const n of notifications) {
    if (!actorMap[n.actorId]) {
      const user = getUserById(n.actorId);
      if (user) actorMap[n.actorId] = user;
    }
  }

  return (
    <div className="mx-auto max-w-3xl py-6">
      <Card className="overflow-hidden">
        <NotificationList
          notifications={notifications}
          actorMap={actorMap}
        />
      </Card>
    </div>
  );
}
