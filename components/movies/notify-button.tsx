"use client";

import * as React from "react";
import { Bell, BellRing } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

/**
 * Toggleable reminder opt-in for unreleased titles. Optimistically flips local
 * state and surfaces a toast; a real implementation would POST to a
 * notifications endpoint and reconcile on response.
 */
export function NotifyButton({
  title,
  defaultOn = false,
}: {
  title: string;
  defaultOn?: boolean;
}) {
  const [on, setOn] = React.useState(defaultOn);

  function toggle() {
    const next = !on;
    setOn(next);
    toast[next ? "success" : "message"](
      next ? `We'll remind you about ${title}` : `Reminder removed for ${title}`,
      {
        description: next
          ? "You'll get a notification when booking opens."
          : undefined,
      },
    );
  }

  return (
    <Button
      type="button"
      variant={on ? "secondary" : "outline"}
      size="sm"
      aria-pressed={on}
      onClick={toggle}
      className="w-full justify-center"
    >
      {on ? (
        <>
          <BellRing className="size-4 text-brand" />
          Reminder set
        </>
      ) : (
        <>
          <Bell className="size-4" />
          Notify Me
        </>
      )}
    </Button>
  );
}
