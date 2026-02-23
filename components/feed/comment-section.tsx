"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/shared/user-avatar";
import { useFeed } from "@/components/feed/feed-provider";
import type { User } from "@/lib/types";

interface CommentSectionProps {
  postId: string;
  users: User[];
}

export function CommentSection({ postId, users }: CommentSectionProps) {
  const { getCommentsForPost, addComment } = useFeed();
  const [input, setInput] = useState("");

  const comments = getCommentsForPost(postId);
  const usersById = new Map(users.map((u) => [u.id, u]));
  const currentUser = users[0];

  function handleSubmit() {
    const trimmed = input.trim();
    if (!trimmed) return;
    addComment(postId, trimmed);
    setInput("");
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div className="px-4 pt-3 pb-3 space-y-3">
      {comments.map((comment) => {
        const author = usersById.get(comment.authorId);
        if (!author) return null;

        return (
          <div key={comment.id} className="flex gap-2">
            <Link href={`/profile/${author.slug}`} className="shrink-0">
              <UserAvatar
                src={author.avatarUrl}
                alt={`${author.firstName} ${author.lastName}`}
                size="sm"
              />
            </Link>
            <div className="flex-1 min-w-0 rounded-lg bg-muted px-3 py-2">
              <Link
                href={`/profile/${author.slug}`}
                className="text-xs font-semibold hover:text-primary hover:underline"
              >
                {author.firstName} {author.lastName}
              </Link>
              <p className="text-sm leading-relaxed">{comment.content}</p>
            </div>
          </div>
        );
      })}

      {/* Comment input */}
      <div className="flex gap-2 items-center">
        <UserAvatar
          src={currentUser.avatarUrl}
          alt={`${currentUser.firstName} ${currentUser.lastName}`}
          size="sm"
        />
        <div className="flex-1 flex items-center gap-1 rounded-full border border-border px-3 py-1.5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a comment..."
            className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
          />
          <Button
            variant="ghost"
            size="icon"
            className="size-7 text-muted-foreground"
            onClick={handleSubmit}
            disabled={!input.trim()}
          >
            <Send className="size-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
