"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/shared/user-avatar";
import { useFeed } from "@/components/feed/feed-provider";
import { getUsers } from "@/lib/data";

export function CreatePostBox() {
  const currentUser = getUsers()[0];
  const { addPost } = useFeed();
  const [expanded, setExpanded] = useState(false);
  const [content, setContent] = useState("");

  function handleSubmit() {
    const trimmed = content.trim();
    if (!trimmed) return;
    addPost(trimmed);
    setContent("");
    setExpanded(false);
  }

  function handleCancel() {
    setContent("");
    setExpanded(false);
  }

  return (
    <Card className="gap-0 py-3 px-4">
      <div className="flex items-center gap-3">
        <UserAvatar
          src={currentUser.avatarUrl}
          alt={`${currentUser.firstName} ${currentUser.lastName}`}
          size="md"
        />
        {!expanded ? (
          <button
            onClick={() => setExpanded(true)}
            className="flex-1 cursor-pointer rounded-full border border-border px-4 py-2.5 text-left text-sm text-muted-foreground hover:bg-muted transition-colors"
          >
            Start a post
          </button>
        ) : (
          <div className="flex-1" />
        )}
      </div>

      {expanded && (
        <div className="mt-3">
          <textarea
            autoFocus
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What do you want to talk about?"
            className="w-full resize-none rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring min-h-[100px]"
          />
          <div className="flex items-center justify-end gap-2 mt-2">
            <Button variant="ghost" size="sm" onClick={handleCancel}>
              Cancel
            </Button>
            <Button size="sm" onClick={handleSubmit} disabled={!content.trim()}>
              Post
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
