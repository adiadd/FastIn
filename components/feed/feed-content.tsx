"use client";

import { useFeed } from "@/components/feed/feed-provider";
import { CreatePostBox } from "@/components/feed/create-post-box";
import { PostCard } from "@/components/feed/post-card";
import type { User } from "@/lib/types";

interface FeedContentProps {
  users: User[];
}

export function FeedContent({ users }: FeedContentProps) {
  const { posts } = useFeed();

  const usersById = new Map(users.map((u) => [u.id, u]));

  return (
    <div className="flex-1 min-w-0 flex flex-col gap-4">
      <CreatePostBox />

      {posts.map((post) => {
        const author = usersById.get(post.authorId);
        if (!author) return null;

        return <PostCard key={post.id} post={post} author={author} users={users} />;
      })}
    </div>
  );
}
