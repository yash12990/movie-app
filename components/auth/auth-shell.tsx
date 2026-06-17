import Image from "next/image";
import { Ticket, BadgePercent, Sparkles } from "lucide-react";

import { SITE } from "@/lib/constants";
import { BrandLogo } from "@/components/layout/brand-logo";

const HIGHLIGHTS = [
  { icon: Ticket, text: "Book tickets in seconds with saved seats & cards" },
  { icon: BadgePercent, text: "Member-only offers and wallet cashback" },
  { icon: Sparkles, text: "Personalised picks across every language" },
];

/**
 * Two-panel auth layout: a cinematic brand panel (desktop only) beside the
 * focused form column. Reused by the sign-up and sign-in pages — pass the
 * heading copy and render the form (or any content) as children.
 */
export function AuthShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid flex-1 lg:grid-cols-2">
      {/* Brand / marketing panel */}
      <aside className="relative hidden overflow-hidden lg:block">
        <Image
          src="https://picsum.photos/seed/cineplex-auth/1200/1600"
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-brand/10 mix-blend-overlay" />
        <div className="relative flex h-full flex-col justify-end p-10 xl:p-14">
          <blockquote className="max-w-md">
            <p className="font-heading text-2xl font-semibold text-balance text-white drop-shadow xl:text-3xl">
              The best seats, the latest releases, and the whole show — one tap
              away.
            </p>
          </blockquote>
          <ul className="mt-8 space-y-3">
            {HIGHLIGHTS.map((h) => (
              <li key={h.text} className="flex items-center gap-3 text-white/90">
                <span className="bg-brand-gradient grid size-9 shrink-0 place-items-center rounded-xl text-brand-foreground shadow-lg shadow-brand/30">
                  <h.icon className="size-4" aria-hidden />
                </span>
                <span className="text-sm">{h.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Form column */}
      <main className="flex items-center justify-center px-4 py-20 sm:px-6">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex flex-col items-center text-center">
            <BrandLogo className="mb-6" />
            <h1 className="font-heading text-2xl font-semibold tracking-tight">
              {title}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          </div>
          {children}
          <p className="mt-8 text-center text-xs text-muted-foreground">
            By continuing you agree to {SITE.name}&rsquo;s Terms and acknowledge
            our Privacy Policy.
          </p>
        </div>
      </main>
    </div>
  );
}
