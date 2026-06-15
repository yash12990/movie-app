"use client";

import { useEffect, useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { CITIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const STORAGE_KEY = "cineplex.city";

export function CitySelector({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("Mumbai");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved) setCity(saved);
  }, []);

  function select(name: string) {
    setCity(name);
    window.localStorage.setItem(STORAGE_KEY, name);
    setOpen(false);
  }

  const popular = CITIES.filter((c) => c.popular);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
          className,
        )}
      >
        <MapPin className="size-4 text-brand" />

        <span className="max-w-28 truncate">{city}</span>

        <ChevronDown
          className={cn(
            "size-4 text-muted-foreground transition-transform",
            open && "rotate-180",
          )}
        />
      </PopoverTrigger>

      <PopoverContent align="end" className="w-80 p-0">
        <Command>
          <CommandInput placeholder="Search for your city" />
          <CommandList>
            <CommandEmpty>No cities found.</CommandEmpty>
            <CommandGroup heading="Popular Cities">
              {popular.map((c) => (
                <CommandItem
                  key={c.id}
                  value={c.name}
                  data-checked={c.name === city}
                  onSelect={() => select(c.name)}
                >
                  {c.name}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="All Cities">
              {CITIES.map((c) => (
                <CommandItem
                  key={c.id}
                  value={c.name}
                  data-checked={c.name === city}
                  onSelect={() => select(c.name)}
                >
                  {c.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
