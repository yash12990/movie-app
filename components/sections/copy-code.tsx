"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

/** Click-to-copy promo code chip with transient "copied" feedback + toast. */
export function CopyCode({ code }: { code: string }) {
  const [copied, setCopied] = React.useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success(`Code ${code} copied`);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please copy manually.");
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy promo code ${code}`}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-dashed border-border bg-background/60 px-2.5 py-1 font-mono text-xs font-semibold tracking-wide transition-colors hover:border-brand/60 hover:text-brand focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
      )}
    >
      {code}
      {copied ? (
        <Check className="size-3.5 text-emerald-500" aria-hidden />
      ) : (
        <Copy className="size-3.5 opacity-70" aria-hidden />
      )}
    </button>
  );
}
