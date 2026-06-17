import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ThemeToggle } from "@/components/shared/theme-toggle";

/**
 * Chrome-free shell for authentication routes. No site header/footer — just a
 * lightweight top bar with a "back to home" affordance and the theme toggle so
 * the focus stays on the form.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-svh flex-col">
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-4 sm:p-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
        <ThemeToggle />
      </div>
      <main id="main" className="flex flex-1 flex-col">
        {children}
      </main>
    </div>
  );
}
