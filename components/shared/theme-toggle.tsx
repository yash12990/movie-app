"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

/**
 * Light/dark toggle. Renders a stable placeholder until mounted to avoid a
 * hydration mismatch between the server (theme unknown) and client.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Flip to mounted on the client so we render the real icon only after
  // hydration — the standard next-themes guard against SSR mismatch.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  React.useEffect(() => setMounted(true), []);

  // Treat as light until mounted so the server render and first client render
  // agree (resolvedTheme is undefined on the server). Avoids a hydration
  // mismatch on the aria-label and icon.
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-[1.1rem]" />
        ) : (
          <Moon className="size-[1.1rem]" />
        )
      ) : (
        <Sun className="size-[1.1rem] opacity-0" />
      )}
    </Button>
  );
}
