import { users } from "./users";
import { posts } from "./posts";
import { User, Post } from "../types";

export function getUsers(): User[] {
  return users;
}

export function getUserBySlug(slug: string): User | undefined {
  return users.find((u) => u.slug === slug);
}

export function getUserById(id: string): User | undefined {
  return users.find((u) => u.id === id);
}

export function getPosts(): Post[] {
  return posts;
}

export function getPostsByUser(userId: string): Post[] {
  return posts.filter((p) => p.authorId === userId);
}

export function searchUsers(query: string): User[] {
  const q = query.toLowerCase();
  return users.filter(
    (u) =>
      u.firstName.toLowerCase().includes(q) ||
      u.lastName.toLowerCase().includes(q) ||
      u.headline.toLowerCase().includes(q)
  );
}

export function searchPosts(query: string): Post[] {
  const q = query.toLowerCase();
  return posts.filter((p) => p.content.toLowerCase().includes(q));
}
