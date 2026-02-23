"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface JobSearchBarProps {
  query: string;
  onSearch: (query: string) => void;
}

export function JobSearchBar({ query, onSearch }: JobSearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="Search jobs by title, company, or keyword..."
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        className="pl-9"
      />
    </div>
  );
}
