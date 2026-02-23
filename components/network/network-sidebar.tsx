import { Users, UserPlus, Building2, Newspaper } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface NetworkSidebarProps {
  connectionCount: number;
}

const categories = [
  { label: "Connections", icon: Users },
  { label: "Following & Followers", icon: UserPlus },
  { label: "Companies", icon: Building2 },
  { label: "Newsletters", icon: Newspaper },
];

export function NetworkSidebar({ connectionCount }: NetworkSidebarProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Manage my network</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1 p-0 pb-2">
        {categories.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center justify-between px-6 py-2 text-sm text-muted-foreground hover:bg-muted/50"
          >
            <div className="flex items-center gap-3">
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </div>
            {label === "Connections" && (
              <span className="font-medium text-foreground">
                {connectionCount}
              </span>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
