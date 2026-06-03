import { CITIES } from "@/lib/constants";
import { COMING_SOON, NOW_SHOWING, THEATRES } from "@/lib/data";

export type SearchCategory = "Movies" | "Theatres" | "Events" | "Cities";

export interface SearchResult {
  id: string;
  label: string;
  /** Secondary descriptor shown under the label. */
  sublabel: string;
  category: SearchCategory;
  href: string;
}

/** A few standalone events so the "Search events" requirement is real. */
const EVENTS = [
  { id: "ev-1", name: "Sunburn Arena ft. Live DJ", venue: "Mumbai" },
  { id: "ev-2", name: "Zakir Khan: Standup Special", venue: "Delhi-NCR" },
  { id: "ev-3", name: "Broadway: The Lion King", venue: "Bengaluru" },
  { id: "ev-4", name: "Indie Music Festival 2026", venue: "Pune" },
];

/**
 * A flat, pre-built index across every searchable entity. Built once at module
 * load (cheap for mock data); a real app would query a search service instead.
 */
const INDEX: SearchResult[] = [
  ...NOW_SHOWING.map((m) => ({
    id: `movie-${m.id}`,
    label: m.title,
    sublabel: `${m.genres.join(", ")} · ${m.languages.join(", ")}`,
    category: "Movies" as const,
    href: `/movies/${m.slug}`,
  })),
  ...COMING_SOON.map((m) => ({
    id: `movie-${m.id}`,
    label: m.title,
    sublabel: `Coming soon · ${m.genres.join(", ")}`,
    category: "Movies" as const,
    href: `/movies/${m.slug}`,
  })),
  ...THEATRES.map((t) => ({
    id: `theatre-${t.id}`,
    label: t.name,
    sublabel: `${t.locality}, ${t.city}`,
    category: "Theatres" as const,
    href: `/theatres/${t.id}`,
  })),
  ...EVENTS.map((e) => ({
    id: `event-${e.id}`,
    label: e.name,
    sublabel: `Event · ${e.venue}`,
    category: "Events" as const,
    href: `/events/${e.id}`,
  })),
  ...CITIES.map((c) => ({
    id: `city-${c.id}`,
    label: c.name,
    sublabel: "City",
    category: "Cities" as const,
    href: `/?city=${c.id}`,
  })),
];

/** Case-insensitive substring search, capped to keep the dropdown tidy. */
export function searchCatalog(query: string, limit = 8): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return INDEX.filter(
    (r) =>
      r.label.toLowerCase().includes(q) ||
      r.sublabel.toLowerCase().includes(q),
  ).slice(0, limit);
}
