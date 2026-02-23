import Image from "next/image";
import { MapPin, Users, Briefcase, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Job } from "@/lib/types";

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

interface JobDetailPanelProps {
  job: Job;
}

export function JobDetailPanel({ job }: JobDetailPanelProps) {
  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <Image
          src={job.companyLogoUrl}
          alt={job.company}
          width={64}
          height={64}
          className="h-16 w-16 shrink-0 rounded-lg"
        />
        <div>
          <h2 className="text-xl font-bold">{job.title}</h2>
          <p className="text-base text-foreground">{job.company}</p>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span>{job.location}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary">{job.type}</Badge>
        <Badge variant="outline">{job.level}</Badge>
        {job.isEasyApply && (
          <Badge className="bg-green-600 text-white hover:bg-green-700">
            Easy Apply
          </Badge>
        )}
      </div>

      {job.salary && (
        <div className="flex items-center gap-2 text-sm">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">{job.salary}</span>
        </div>
      )}

      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Users className="h-4 w-4" />
          {job.applicants} applicants
        </span>
        <span className="flex items-center gap-1.5">
          <Briefcase className="h-4 w-4" />
          Posted {formatRelativeTime(job.postedAt)}
        </span>
      </div>

      <div className="flex gap-3">
        {job.isEasyApply ? (
          <Button className="bg-green-600 text-white hover:bg-green-700">
            Easy Apply
          </Button>
        ) : (
          <Button>Apply</Button>
        )}
        <Button variant="outline">Save</Button>
      </div>

      <Separator />

      <div>
        <h3 className="mb-3 text-lg font-semibold">About the role</h3>
        <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
          {job.description}
        </p>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold">Requirements</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {job.requirements.map((req, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
              {req}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
