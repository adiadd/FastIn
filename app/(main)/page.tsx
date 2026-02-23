import type { Metadata } from "next";
import { getPosts, getUserById } from "@/lib/data";
import { FeedSidebar } from "@/components/feed/feed-sidebar";
import { CreatePostBox } from "@/components/feed/create-post-box";
import { PostCard } from "@/components/feed/post-card";

export const metadata: Metadata = {
  title: "Feed | FastIn",
};

export default function FeedPage() {
  const posts = getPosts();

  return (
    <div className="flex gap-6 items-start">
      <FeedSidebar />

      <div className="flex-1 min-w-0 flex flex-col gap-4">
        <CreatePostBox />

        {posts.map((post) => {
          const author = getUserById(post.authorId);
          if (!author) return null;

          return <PostCard key={post.id} post={post} author={author} />;
        })}
      </div>
    </div>
  );
}
