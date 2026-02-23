import type { Metadata } from "next";
import {
  getConnectionsForUser,
  getPendingInvitations,
  getSuggestedConnections,
  getUserById,
} from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NetworkSidebar } from "@/components/network/network-sidebar";
import { InvitationCard } from "@/components/network/invitation-card";
import { SuggestionCard } from "@/components/network/suggestion-card";

export const metadata: Metadata = {
  title: "My Network",
};

export default function NetworkPage() {
  const userId = "1"; // Sarah
  const myConnections = getConnectionsForUser(userId);
  const pendingInvitations = getPendingInvitations(userId);
  const suggestedConnections = getSuggestedConnections(userId);

  const pendingUsers = pendingInvitations
    .map((inv) => getUserById(inv.fromUserId))
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-3xl py-6">
      <div className="grid gap-6 md:grid-cols-[240px_1fr]">
        <aside className="hidden md:block">
          <NetworkSidebar connectionCount={myConnections.length} />
        </aside>

        <div className="space-y-6">
          {pendingUsers.length > 0 && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">
                  Invitations ({pendingUsers.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {pendingUsers.map(
                  (user) =>
                    user && (
                      <InvitationCard key={user.id} user={user} />
                    )
                )}
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">People you may know</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {suggestedConnections.map((user) => (
                  <SuggestionCard key={user.id} user={user} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
