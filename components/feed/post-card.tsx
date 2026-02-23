import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { UserAvatar } from "@/components/shared/user-avatar";
import { PostActions } from "@/components/feed/post-actions";
import type { Post, User } from "@/lib/types";

interface PostCardProps {
  post: Post;
  author: User;
}

function formatRelativeTime(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);

  if (diffMinutes < 1) return "just now";
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffWeeks < 5) return `${diffWeeks}w ago`;
  return `${diffMonths}mo ago`;
}

export function PostCard({ post, author }: PostCardProps) {
  return (
    <Card className="gap-0 py-0">
      {/* Author header */}
      <div className="flex items-start gap-3 px-4 pt-4">
        <Link href={`/profile/${author.slug}`} className="shrink-0">
          <UserAvatar
            src={author.avatarUrl}
            alt={`${author.firstName} ${author.lastName}`}
            size="md"
          />
        </Link>
        <div className="min-w-0 flex-1">
          <Link
            href={`/profile/${author.slug}`}
            className="text-sm font-semibold hover:text-primary hover:underline"
          >
            {author.firstName} {author.lastName}
          </Link>
          <p className="text-xs text-muted-foreground leading-snug line-clamp-1">
            {author.headline}
          </p>
          <p className="text-xs text-muted-foreground">
            {formatRelativeTime(post.createdAt)}
          </p>
        </div>
      </div>

      {/* Post content */}
      <CardContent className="px-4 pt-3 pb-0">
        <p className="text-sm whitespace-pre-line leading-relaxed">
          {post.content}
        </p>
      </CardContent>

      {/* Stats row */}
      <div className="flex items-center gap-3 px-4 py-2 text-xs text-muted-foreground">
        {post.likes > 0 && <span>{post.likes} likes</span>}
        {post.comments > 0 && <span>{post.comments} comments</span>}
        {post.reposts > 0 && <span>{post.reposts} reposts</span>}
      </div>

      <Separator />

      {/* Actions */}
      <div className="px-2 py-1">
        <PostActions initialLikes={post.likes} />
      </div>
    </Card>
  );
}
