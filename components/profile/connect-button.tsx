"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserPlus, MessageSquare, UserCheck } from "lucide-react";

export function ConnectButton() {
  const [connected, setConnected] = useState(false);

  return (
    <div className="flex gap-2">
      <Button
        variant={connected ? "secondary" : "default"}
        onClick={() => setConnected(!connected)}
      >
        {connected ? (
          <>
            <UserCheck />
            Connected
          </>
        ) : (
          <>
            <UserPlus />
            Connect
          </>
        )}
      </Button>
      <Button variant="outline">
        <MessageSquare />
        Message
      </Button>
    </div>
  );
}
