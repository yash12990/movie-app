"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { PRIMARY_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CONTAINER } from "@/components/shared/section";
import { BrandLogo } from "@/components/layout/brand-logo";
import { SearchBar } from "@/components/layout/search-bar";
import { CitySelector } from "@/components/layout/city-selector";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "glass border-b border-border shadow-lg shadow-black/5"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <div className={cn(CONTAINER, "flex h-16 items-center gap-3 lg:gap-5")}>
        <BrandLogo compact />

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {PRIMARY_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-1 justify-center px-2 lg:flex">
          <SearchBar className="w-full max-w-xl" />
        </div>

        <div className="ml-auto flex items-center gap-1 sm:gap-2 lg:ml-0">
          <CitySelector className="hidden sm:block" />
          <ThemeToggle />
          <Button
            variant="outline"
            className="hidden h-9 sm:inline-flex"
            asChild
          >
            <Link href="/sign-in">
              <LogIn className="size-4" />
              <span className="hidden md:inline">Sign in</span>
              <span className="md:hidden">Login</span>
            </Link>
          </Button>
          <Button
            className="bg-brand-gradient hidden h-9 border-0 text-brand-foreground shadow-md shadow-brand/25 md:inline-flex"
            asChild
          >
            <Link href="/sign-up">Sign up</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
