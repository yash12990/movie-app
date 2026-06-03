import { Skeleton } from "@/components/ui/skeleton";

/** Loading placeholder matching the MovieCard footprint to avoid layout shift. */
export function MovieCardSkeleton() {
  return (
    <div className="flex flex-col">
      <Skeleton className="aspect-[2/3] w-full rounded-xl" />
      <div className="mt-3 flex flex-col gap-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-3 w-2/3" />
      </div>
    </div>
  );
}

/** A responsive grid of skeleton cards, e.g. for Suspense fallbacks. */
export function MovieGridSkeleton({ count = 10 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {Array.from({ length: count }).map((_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  );
}
