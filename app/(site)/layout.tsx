import Link from "next/link";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

/**
 * Marketing/site shell — the global header, footer and skip link live here so
 * routes outside this group (e.g. the auth pages) can present a focused,
 * chrome-free layout.
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Skip link for keyboard / screen-reader users */}
      <Link
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-lg focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:ring-3 focus:ring-ring/50"
      >
        Skip to content
      </Link>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
