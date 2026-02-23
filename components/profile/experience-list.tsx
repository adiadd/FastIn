import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Experience } from "@/lib/types";

interface ExperienceListProps {
  experience: Experience[];
}

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function formatDateRange(startDate: string, endDate: string | null): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "Present";
  return `${start} - ${end}`;
}

export function ExperienceList({ experience }: ExperienceListProps) {
  if (experience.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-0">
        {experience.map((exp, index) => (
          <div key={exp.id}>
            {index > 0 && <Separator className="my-4" />}
            <div className="flex gap-3">
              <Image
                src={exp.companyLogoUrl}
                alt={exp.company}
                width={40}
                height={40}
                className="size-10 rounded-md"
              />
              <div className="min-w-0 space-y-0.5">
                <p className="font-semibold">{exp.title}</p>
                <p className="text-sm">{exp.company}</p>
                <p className="text-sm text-muted-foreground">
                  {formatDateRange(exp.startDate, exp.endDate)}
                </p>
                <p className="text-sm text-muted-foreground">{exp.location}</p>
                {exp.description && (
                  <p className="pt-1 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
