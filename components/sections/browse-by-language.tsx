import Link from "next/link";

import { LANGUAGES } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

/** Language quick-filter chips. Server-rendered; each chip links to a filter. */
export function BrowseByLanguage() {
  return (
    <Section aria-labelledby="language-heading" className="py-10 sm:py-12">
      <SectionHeading
        id="language-heading"
        eyebrow="Watch in your language"
        title="Browse by language"
      />
      <ul className="flex flex-wrap gap-2.5">
        {LANGUAGES.map((lang) => (
          <li key={lang.id}>
            <Badge
              asChild
              variant="outline"
              className="group h-auto gap-2 bg-card px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:bg-brand/5"
            >
              <Link href={`/movies?lang=${lang.id}`}>
                {lang.name}
                <span className="text-muted-foreground transition-colors group-hover:text-brand">
                  {lang.native}
                </span>
              </Link>
            </Badge>
          </li>
        ))}
      </ul>
    </Section>
  );
}
