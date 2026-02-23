import Link from "next/link";
import { ThumbsUp, MessageCircle, Repeat2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Post } from "@/lib/types";

interface ProfileActivityProps {
  posts: Post[];
  firstName: string;
}

export function ProfileActivity({ posts, firstName }: ProfileActivityProps) {
  if (posts.length === 0) return null;

  const recentPosts = posts.slice(0, 3);

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Activity</CardTitle>
        <p className="text-sm text-muted-foreground">
          {firstName}&apos;s recent posts
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentPosts.map((post) => (
          <Link
            key={post.id}
            href="/"
            className="block rounded-lg border p-3 transition-colors hover:bg-muted/50"
          >
            <p className="line-clamp-3 text-sm">{post.content}</p>
            <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <ThumbsUp className="h-3 w-3" />
                {post.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="h-3 w-3" />
                {post.comments}
              </span>
              <span className="flex items-center gap-1">
                <Repeat2 className="h-3 w-3" />
                {post.reposts}
              </span>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
