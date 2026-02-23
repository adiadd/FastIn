"use client";

import Image from "next/image";
import { MapPin, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Job } from "@/lib/types";

interface JobCardProps {
  job: Job;
  isSelected: boolean;
  onClick: () => void;
}

function formatRelativeTime(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  return `${Math.floor(diffDays / 30)}mo ago`;
}

export function JobCard({ job, isSelected, onClick }: JobCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full cursor-pointer rounded-lg border-2 border-transparent bg-card p-4 text-left transition-colors hover:bg-muted/50",
        isSelected && "border-primary bg-muted"
      )}
    >
      <div className="flex gap-3">
        <Image
          src={job.companyLogoUrl}
          alt={job.company}
          width={48}
          height={48}
          className="h-12 w-12 shrink-0 rounded"
        />
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold text-primary">{job.title}</h3>
          <p className="text-sm text-foreground">{job.company}</p>
          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 shrink-0" />
            <span className="truncate">{job.location}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <Badge variant="secondary">{job.type}</Badge>
        <Badge variant="outline">{job.level}</Badge>
        {job.isEasyApply && (
          <Badge className="bg-green-600 text-white hover:bg-green-700">
            Easy Apply
          </Badge>
        )}
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Users className="h-3 w-3" />
          {job.applicants} applicants
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {formatRelativeTime(job.postedAt)}
        </span>
      </div>
    </button>
  );
}
