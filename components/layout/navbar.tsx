import Link from "next/link";
import { Search } from "lucide-react";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";
import { getUnreadNotificationCount } from "@/lib/data";

export function Navbar() {
  const notificationCount = getUnreadNotificationCount("1");

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-xl font-bold">
            <span style={{ color: "#0A66C2" }}>Fast</span><span className="text-foreground">In</span>
          </Link>
          <Link
            href="/search"
            className="hidden w-72 items-center gap-2 rounded-md bg-muted px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/80 sm:flex"
          >
            <Search className="h-4 w-4 shrink-0" />
            <span>Search</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <NavLinks notificationCount={notificationCount} />
          <Link href="/search" className="p-2 text-muted-foreground sm:hidden">
            <Search className="h-5 w-5" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
