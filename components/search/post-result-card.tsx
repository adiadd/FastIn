import Link from "next/link";
import { ThumbsUp, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { UserAvatar } from "@/components/shared/user-avatar";
import type { Post, User } from "@/lib/types";

interface PostResultCardProps {
  post: Post & { author: User };
}

export function PostResultCard({ post }: PostResultCardProps) {
  const { author } = post;
  const fullName = `${author.firstName} ${author.lastName}`;
  const truncatedContent =
    post.content.length > 200
      ? post.content.slice(0, 200) + "..."
      : post.content;

  return (
    <Card>
      <CardContent className="space-y-3 p-4">
        <div className="flex items-center gap-3">
          <Link href={`/profile/${author.slug}`} className="shrink-0">
            <UserAvatar src={author.avatarUrl} alt={fullName} size="sm" />
          </Link>
          <div className="min-w-0">
            <Link
              href={`/profile/${author.slug}`}
              className="text-sm font-semibold hover:underline"
            >
              {fullName}
            </Link>
            <p className="text-muted-foreground truncate text-xs">
              {author.headline}
            </p>
          </div>
        </div>
        <p className="text-sm whitespace-pre-line">{truncatedContent}</p>
        <div className="text-muted-foreground flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1">
            <ThumbsUp className="size-3" />
            {post.likes}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="size-3" />
            {post.comments}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
