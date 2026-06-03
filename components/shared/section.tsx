import { cn } from "@/lib/utils";

/** Shared horizontal gutter + max width for every page section. */
export const CONTAINER = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

interface SectionProps extends React.ComponentProps<"section"> {
  /** When true, drops the default vertical padding (e.g. for the hero). */
  flush?: boolean;
  /** Constrain children to the shared container width. */
  contained?: boolean;
}

/**
 * Semantic <section> with consistent vertical rhythm. Sections are the page's
 * landmark regions; pass `aria-labelledby` pointing at a SectionHeading id.
 */
export function Section({
  className,
  flush = false,
  contained = true,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(!flush && "py-12 sm:py-16", className)}
      {...props}
    >
      {contained ? <div className={CONTAINER}>{children}</div> : children}
    </section>
  );
}
