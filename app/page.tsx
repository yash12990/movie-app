import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <span className="mb-4 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
        Now booking
      </span>
      <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
        Book the movies you love.
      </h1>
      <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
        Discover the latest releases, pick your seats, and check out in seconds.
      </p>
      <div className="mt-8 flex gap-3">
        <Button size="lg">Browse movies</Button>
        <Button size="lg" variant="outline">
          How it works
        </Button>
      </div>
    </main>
  );
}
