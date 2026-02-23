import { Search } from "lucide-react";
import { searchUsers, searchPosts, getUserById } from "@/lib/data";
import { SearchInput } from "@/components/search/search-input";
import { SearchTabs } from "@/components/search/search-tabs";
import type { Post, User } from "@/lib/types";

export const metadata = {
  title: "Search",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  let users: User[] = [];
  let enrichedPosts: (Post & { author: User })[] = [];

  if (q) {
    users = searchUsers(q);
    const posts = searchPosts(q);
    enrichedPosts = posts
      .map((post) => {
        const author = getUserById(post.authorId);
        if (!author) return null;
        return { ...post, author };
      })
      .filter((post): post is Post & { author: User } => post !== null);
  }

  return (
    <div>
      <SearchInput defaultQuery={q} />

      {q ? (
        <SearchTabs users={users} posts={enrichedPosts} />
      ) : (
        <div className="mt-16 text-center">
          <Search className="text-muted-foreground mx-auto size-12" />
          <p className="text-muted-foreground mt-4 text-lg">
            Search for people and posts
          </p>
          <p className="text-muted-foreground mt-1 text-sm">
            Enter a query above to get started
          </p>
        </div>
      )}
    </div>
  );
}
