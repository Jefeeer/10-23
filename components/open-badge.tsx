"use client";

import { useSyncExternalStore } from "react";
import { openStatus } from "@/lib/hours";
import { site } from "@/content/site";

const subscribe = (cb: () => void) => {
  const id = setInterval(cb, 30_000);
  return () => clearInterval(id);
};
// Snapshot is a primitive string so React can compare it cheaply.
const snapshot = () => {
  const s = openStatus(new Date(), site.hours);
  return `${s.open ? 1 : 0}|${s.label}`;
};

export function OpenBadge({ tone = "light" }: { tone?: "light" | "dark" }) {
  const value = useSyncExternalStore(subscribe, snapshot, () => null);
  const [open, label] = value ? [value[0] === "1", value.slice(2)] : [null, "Open daily · until 11 PM"];

  return (
    <span
      role="status"
      className={`inline-flex min-h-9 items-center gap-2 rounded-full border px-3.5 text-[13px] font-semibold ${
        tone === "light" ? "border-espresso/15 bg-paper" : "border-cream/20 bg-cream/10 text-cream"
      }`}
    >
      <span className="relative flex size-2.5">
        {open && <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/70" />}
        <span className={`relative size-2.5 rounded-full ${open === false ? "bg-terracotta" : "bg-emerald-600"}`} />
      </span>
      {label}
    </span>
  );
}
