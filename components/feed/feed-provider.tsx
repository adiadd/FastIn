"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { Post, Comment } from "@/lib/types";

interface FeedContextValue {
  posts: Post[];
  comments: Comment[];
  addPost: (content: string) => void;
  addComment: (postId: string, content: string) => void;
  getCommentsForPost: (postId: string) => Comment[];
}

const FeedContext = createContext<FeedContextValue | null>(null);

const CURRENT_USER_ID = "1";

interface FeedProviderProps {
  initialPosts: Post[];
  initialComments: Comment[];
  children: React.ReactNode;
}

export function FeedProvider({
  initialPosts,
  initialComments,
  children,
}: FeedProviderProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [comments, setComments] = useState(initialComments);

  const addPost = useCallback((content: string) => {
    const newPost: Post = {
      id: `p-${Date.now()}`,
      authorId: CURRENT_USER_ID,
      content,
      likes: 0,
      comments: 0,
      reposts: 0,
      createdAt: new Date().toISOString(),
    };
    setPosts((prev) => [newPost, ...prev]);
  }, []);

  const addComment = useCallback((postId: string, content: string) => {
    const newComment: Comment = {
      id: `c-${Date.now()}`,
      postId,
      authorId: CURRENT_USER_ID,
      content,
      createdAt: new Date().toISOString(),
    };
    setComments((prev) => [...prev, newComment]);
  }, []);

  const getCommentsForPost = useCallback(
    (postId: string) => {
      return comments.filter((c) => c.postId === postId);
    },
    [comments]
  );

  return (
    <FeedContext value={{ posts, comments, addPost, addComment, getCommentsForPost }}>
      {children}
    </FeedContext>
  );
}

export function useFeed() {
  const context = useContext(FeedContext);
  if (!context) {
    throw new Error("useFeed must be used within a FeedProvider");
  }
  return context;
}
