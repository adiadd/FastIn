import { Connection } from "../types";

export const connections: Connection[] = [
  // Sarah (1) connected to Marcus (2), Elena (3), Alex (6), Nina (7)
  {
    id: "conn1",
    fromUserId: "1",
    toUserId: "2",
    status: "accepted",
    createdAt: "2025-06-15T10:00:00Z",
  },
  {
    id: "conn2",
    fromUserId: "1",
    toUserId: "3",
    status: "accepted",
    createdAt: "2025-08-20T14:00:00Z",
  },
  {
    id: "conn3",
    fromUserId: "1",
    toUserId: "6",
    status: "accepted",
    createdAt: "2025-09-10T09:00:00Z",
  },
  {
    id: "conn4",
    fromUserId: "1",
    toUserId: "7",
    status: "accepted",
    createdAt: "2025-10-05T11:00:00Z",
  },
  // Pending requests to Sarah from James (4) and Priya (5)
  {
    id: "conn5",
    fromUserId: "4",
    toUserId: "1",
    status: "pending",
    createdAt: "2026-02-22T18:00:00Z",
  },
  {
    id: "conn6",
    fromUserId: "5",
    toUserId: "1",
    status: "pending",
    createdAt: "2026-02-22T14:30:00Z",
  },
  // Cross-connections between other users
  {
    id: "conn7",
    fromUserId: "2",
    toUserId: "6",
    status: "accepted",
    createdAt: "2025-07-01T08:00:00Z",
  },
  {
    id: "conn8",
    fromUserId: "3",
    toUserId: "7",
    status: "accepted",
    createdAt: "2025-11-12T16:00:00Z",
  },
];
