import { users } from "./users";
import { posts } from "./posts";
import { comments } from "./comments";
import { notifications } from "./notifications";
import { connections } from "./connections";
import { jobs } from "./jobs";
import { User, Post, Comment, Notification, Connection, Job } from "../types";

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

export function getComments(): Comment[] {
  return comments;
}

export function getCommentsByPost(postId: string): Comment[] {
  return comments.filter((c) => c.postId === postId);
}

// Notification queries

export function getNotificationsForUser(userId: string): Notification[] {
  return notifications
    .filter((n) => n.recipientId === userId)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}

export function getUnreadNotificationCount(userId: string): number {
  return notifications.filter(
    (n) => n.recipientId === userId && !n.read
  ).length;
}

// Connection queries

export function getConnectionsForUser(userId: string): Connection[] {
  return connections.filter(
    (c) =>
      c.status === "accepted" &&
      (c.fromUserId === userId || c.toUserId === userId)
  );
}

export function getPendingInvitations(userId: string): Connection[] {
  return connections.filter(
    (c) => c.status === "pending" && c.toUserId === userId
  );
}

export function getSuggestedConnections(userId: string): User[] {
  const connectedIds = new Set<string>();
  connectedIds.add(userId);

  connections.forEach((c) => {
    if (c.fromUserId === userId || c.toUserId === userId) {
      connectedIds.add(c.fromUserId);
      connectedIds.add(c.toUserId);
    }
  });

  return users.filter((u) => !connectedIds.has(u.id));
}

export function areConnected(userId1: string, userId2: string): boolean {
  return connections.some(
    (c) =>
      c.status === "accepted" &&
      ((c.fromUserId === userId1 && c.toUserId === userId2) ||
        (c.fromUserId === userId2 && c.toUserId === userId1))
  );
}

// Job queries

export function getJobs(): Job[] {
  return jobs;
}

export function getJobById(id: string): Job | undefined {
  return jobs.find((j) => j.id === id);
}

export function searchJobs(query: string): Job[] {
  const q = query.toLowerCase();
  return jobs.filter(
    (j) =>
      j.title.toLowerCase().includes(q) ||
      j.company.toLowerCase().includes(q) ||
      j.description.toLowerCase().includes(q)
  );
}
