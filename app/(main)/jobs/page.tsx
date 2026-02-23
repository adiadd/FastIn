import type { Metadata } from "next";
import { getJobs } from "@/lib/data";
import { JobsView } from "@/components/jobs/jobs-view";

export const metadata: Metadata = {
  title: "Jobs | FastIn",
};

export default function JobsPage() {
  const jobs = getJobs();
  return (
    <div className="mx-auto max-w-6xl py-6">
      <JobsView jobs={jobs} />
    </div>
  );
}
