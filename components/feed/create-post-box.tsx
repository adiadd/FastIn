import { Card } from "@/components/ui/card";
import { UserAvatar } from "@/components/shared/user-avatar";
import { getUsers } from "@/lib/data";

export function CreatePostBox() {
  const currentUser = getUsers()[0];

  return (
    <Card className="gap-0 py-3 px-4">
      <div className="flex items-center gap-3">
        <UserAvatar
          src={currentUser.avatarUrl}
          alt={`${currentUser.firstName} ${currentUser.lastName}`}
          size="md"
        />
        <div className="flex-1 cursor-pointer rounded-full border border-border px-4 py-2.5 text-sm text-muted-foreground hover:bg-muted transition-colors">
          Start a post
        </div>
      </div>
    </Card>
  );
}
