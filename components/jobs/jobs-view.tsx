"use client";

import { useState, useMemo } from "react";
import { ArrowLeft, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Job } from "@/lib/types";
import { JobSearchBar } from "./job-search-bar";
import { JobCard } from "./job-card";
import { JobDetailPanel } from "./job-detail-panel";

interface JobsViewProps {
  jobs: Job[];
}

export function JobsView({ jobs }: JobsViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJobId, setSelectedJobId] = useState<string | null>(
    jobs[0]?.id ?? null
  );
  const [showDetail, setShowDetail] = useState(false);

  const filteredJobs = useMemo(() => {
    if (!searchQuery) return jobs;
    const q = searchQuery.toLowerCase();
    return jobs.filter(
      (j) =>
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.description.toLowerCase().includes(q)
    );
  }, [jobs, searchQuery]);

  const selectedJob = filteredJobs.find((j) => j.id === selectedJobId) ?? filteredJobs[0] ?? null;

  function handleSelectJob(id: string) {
    setSelectedJobId(id);
    setShowDetail(true);
  }

  return (
    <div className="space-y-4">
      <JobSearchBar query={searchQuery} onSearch={setSearchQuery} />

      {filteredJobs.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-16 text-center">
          <Briefcase className="h-12 w-12 text-muted-foreground" />
          <p className="text-muted-foreground">No jobs found matching your search.</p>
        </div>
      ) : (
        <>
          {/* Desktop: two-column layout */}
          <div className="hidden lg:flex lg:gap-4">
            <div className="flex w-[420px] shrink-0 flex-col gap-2 overflow-y-auto" style={{ maxHeight: "calc(100vh - 14rem)" }}>
              {filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  isSelected={selectedJob?.id === job.id}
                  onClick={() => setSelectedJobId(job.id)}
                />
              ))}
            </div>
            <div className="flex-1 overflow-y-auto rounded-lg border bg-card p-6" style={{ maxHeight: "calc(100vh - 14rem)" }}>
              {selectedJob && <JobDetailPanel job={selectedJob} />}
            </div>
          </div>

          {/* Mobile: list or detail */}
          <div className="lg:hidden">
            {showDetail && selectedJob ? (
              <div className="space-y-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDetail(false)}
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to jobs
                </Button>
                <div className="rounded-lg border bg-card p-4">
                  <JobDetailPanel job={selectedJob} />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {filteredJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    isSelected={false}
                    onClick={() => handleSelectJob(job.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
