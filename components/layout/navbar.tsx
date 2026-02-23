import Link from "next/link";
import { Search } from "lucide-react";
import { NavLinks } from "./nav-links";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-xl font-bold text-primary">
            Fast<span className="text-foreground">In</span>
          </Link>
          <Link
            href="/search"
            className="hidden items-center gap-2 rounded-md bg-muted px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/80 sm:flex"
          >
            <Search className="h-4 w-4" />
            <span>Search</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <NavLinks />
          <Link href="/search" className="p-2 text-muted-foreground sm:hidden">
            <Search className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
