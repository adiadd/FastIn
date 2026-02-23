"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { UserResultCard } from "@/components/search/user-result-card";
import { PostResultCard } from "@/components/search/post-result-card";
import type { User, Post } from "@/lib/types";

interface SearchTabsProps {
  users: User[];
  posts: (Post & { author: User })[];
}

export function SearchTabs({ users, posts }: SearchTabsProps) {
  const hasResults = users.length > 0 || posts.length > 0;

  if (!hasResults) {
    return (
      <div className="mt-8 text-center">
        <p className="text-muted-foreground text-lg">No results found</p>
        <p className="text-muted-foreground mt-1 text-sm">
          Try searching with different keywords
        </p>
      </div>
    );
  }

  return (
    <Tabs defaultValue="people" className="mt-6">
      <TabsList>
        <TabsTrigger value="people" className="gap-2">
          People
          <Badge variant="secondary" className="text-xs">
            {users.length}
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="posts" className="gap-2">
          Posts
          <Badge variant="secondary" className="text-xs">
            {posts.length}
          </Badge>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="people">
        <div className="flex flex-col gap-3">
          {users.map((user) => (
            <UserResultCard key={user.id} user={user} />
          ))}
          {users.length === 0 && (
            <p className="text-muted-foreground py-8 text-center text-sm">
              No people found
            </p>
          )}
        </div>
      </TabsContent>

      <TabsContent value="posts">
        <div className="flex flex-col gap-3">
          {posts.map((post) => (
            <PostResultCard key={post.id} post={post} />
          ))}
          {posts.length === 0 && (
            <p className="text-muted-foreground py-8 text-center text-sm">
              No posts found
            </p>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
}
