import type { Metadata } from "next";
import { getPosts, getUsers, getComments } from "@/lib/data";
import { FeedSidebar } from "@/components/feed/feed-sidebar";
import { FeedProvider } from "@/components/feed/feed-provider";
import { FeedContent } from "@/components/feed/feed-content";

export const metadata: Metadata = {
  title: "Feed | FastIn",
};

export default function FeedPage() {
  const posts = getPosts();
  const users = getUsers();
  const comments = getComments();

  return (
    <div className="flex gap-6 items-start">
      <FeedSidebar />

      <FeedProvider initialPosts={posts} initialComments={comments}>
        <FeedContent users={users} />
      </FeedProvider>
    </div>
  );
}
