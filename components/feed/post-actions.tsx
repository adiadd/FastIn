"use client";

import { useState } from "react";
import { ThumbsUp, MessageCircle, Repeat2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PostActionsProps {
  initialLikes: number;
}

export function PostActions({ initialLikes }: PostActionsProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);

  function handleLike() {
    if (liked) {
      setLikeCount((c) => c - 1);
    } else {
      setLikeCount((c) => c + 1);
    }
    setLiked(!liked);
  }

  return (
    <div className="flex items-center justify-between">
      <Button
        variant="ghost"
        size="sm"
        className={`flex-1 gap-1.5 ${liked ? "text-primary" : "text-muted-foreground"}`}
        onClick={handleLike}
      >
        <ThumbsUp className={`size-4 ${liked ? "fill-current" : ""}`} />
        <span className="text-xs font-medium">
          {liked ? "Liked" : "Like"} ({likeCount})
        </span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="flex-1 gap-1.5 text-muted-foreground"
      >
        <MessageCircle className="size-4" />
        <span className="text-xs font-medium">Comment</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="flex-1 gap-1.5 text-muted-foreground"
      >
        <Repeat2 className="size-4" />
        <span className="text-xs font-medium">Repost</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="flex-1 gap-1.5 text-muted-foreground"
      >
        <Send className="size-4" />
        <span className="text-xs font-medium">Send</span>
      </Button>
    </div>
  );
}
