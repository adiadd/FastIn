import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProfileAboutProps {
  about: string;
}

export function ProfileAbout({ about }: ProfileAboutProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">About</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed whitespace-pre-line">{about}</p>
      </CardContent>
    </Card>
  );
}
