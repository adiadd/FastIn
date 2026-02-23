"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 transition-transform scale-100 dark:scale-0" />
      <Moon className="absolute top-2 left-2 h-5 w-5 transition-transform scale-0 dark:scale-100" />
    </button>
  );
}
