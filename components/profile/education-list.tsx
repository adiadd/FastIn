import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Education } from "@/lib/types";

interface EducationListProps {
  education: Education[];
}

export function EducationList({ education }: EducationListProps) {
  if (education.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Education</CardTitle>
      </CardHeader>
      <CardContent className="space-y-0">
        {education.map((edu, index) => (
          <div key={edu.id}>
            {index > 0 && <Separator className="my-4" />}
            <div className="flex gap-3">
              <Image
                src={edu.logoUrl}
                alt={edu.school}
                width={40}
                height={40}
                className="size-10 rounded-md"
              />
              <div className="min-w-0 space-y-0.5">
                <p className="font-semibold">{edu.school}</p>
                <p className="text-sm">
                  {edu.degree}, {edu.field}
                </p>
                <p className="text-sm text-muted-foreground">
                  {edu.startYear} - {edu.endYear}
                </p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
