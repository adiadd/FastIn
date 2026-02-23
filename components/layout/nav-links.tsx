"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, BriefcaseBusiness, MessageSquare, Bell, User } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/network", label: "My Network", icon: Users },
  { href: "/jobs", label: "Jobs", icon: BriefcaseBusiness },
  { href: "/messaging", label: "Messaging", icon: MessageSquare },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/profile/sarah-chen", label: "Me", icon: User },
];

interface NavLinksProps {
  notificationCount?: number;
}

export function NavLinks({ notificationCount = 0 }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-0.5 sm:gap-1">
      {links.map(({ href, label, icon: Icon }) => {
        const isActive =
          href === "/"
            ? pathname === "/"
            : pathname.startsWith(href);
        const isNotification = label === "Notifications";

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "relative flex flex-col items-center px-2 py-1.5 text-[10px] transition-colors hover:text-foreground sm:px-3 sm:py-2 sm:text-xs",
              isActive
                ? "text-foreground border-b-2 border-foreground"
                : "text-muted-foreground"
            )}
          >
            <div className="relative">
              <Icon className="h-5 w-5" />
              {isNotification && notificationCount > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
                  {notificationCount > 9 ? "9+" : notificationCount}
                </span>
              )}
            </div>
            <span className="mt-0.5 hidden sm:block">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
