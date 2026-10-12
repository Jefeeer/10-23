"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { track } from "@vercel/analytics";
import { menu, pricesAsOf, formatPrice, type MenuItem } from "@/content/menu";
import { site } from "@/content/site";

const tabs = menu.filter((c) => c.featured);

const tagStyle: Record<NonNullable<MenuItem["tag"]>, string> = {
  Bestseller: "bg-mustard text-espresso",
  "Local pride": "bg-leaf text-cream",
  New: "bg-blush text-espresso",
};

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="py-4">
      <div className="flex items-baseline gap-3">
        <p className="text-[17px] font-semibold">{item.name}</p>
        {item.tag && (
          <span className={`hidden shrink-0 rounded-full px-2 sm:inline py-0.5 text-[10px] font-bold tracking-[0.12em] uppercase ${tagStyle[item.tag]}`}>
            {item.tag}
          </span>
        )}
        <span className="leader" aria-hidden="true" />
        <span className={`shrink-0 font-semibold tabular-nums ${item.price === null ? "text-sm text-espresso-soft" : ""}`}>
          {formatPrice(item)}
        </span>
      </div>
      <p className="mt-0.5 text-[15px] text-espresso-soft">{item.note}</p>
      {item.tag && (
        <span className={`mt-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold tracking-[0.12em] uppercase sm:hidden ${tagStyle[item.tag]}`}>
          {item.tag}
        </span>
      )}
    </li>
  );
}

export function MenuSection() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const dialog = useRef<HTMLDialogElement>(null);
  const id = useId();
  const cat = tabs[active];

  // Arrow-key navigation per the WAI-ARIA tabs pattern
  const onKey = (e: KeyboardEvent) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    const next = (active + delta + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="menu" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="reveal mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow text-terracotta">The menu</p>
          <h2 className="display mt-2 text-[2rem] sm:text-[2.5rem]">What people come back for</h2>
        </div>
        <p className="max-w-[40ch] text-[15px] text-espresso-soft">
          Bestsellers from our kitchen and bar, on beans by {site.beans}. Prices as of {pricesAsOf} — ask the counter for today&apos;s.
        </p>
      </div>

      <div role="tablist" aria-label="Menu categories" onKeyDown={onKey} className="reveal -mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            role="tab"
            id={`${id}-tab-${t.id}`}
            aria-selected={i === active}
            aria-controls={`${id}-panel`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`min-h-11 shrink-0 rounded-full border-2 px-5 text-[15px] font-semibold transition-colors ${
              i === active ? "border-espresso bg-espresso text-cream" : "border-espresso/20 hover:border-espresso"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${cat.id}`}
        className="grid gap-8 rounded-[2rem] border border-espresso/10 bg-paper p-4 sm:p-6 md:grid-cols-12 md:gap-10 lg:p-8"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-blush md:col-span-5 md:aspect-auto md:min-h-[26rem]">
          <Image key={cat.photo} src={cat.photo} alt={cat.photoAlt} fill sizes="(min-width: 768px) 40vw, 92vw" className="object-cover" />
          <span className="absolute bottom-3 left-3 rounded-full bg-paper/90 px-3 py-1.5 text-xs font-semibold backdrop-blur">
            {cat.label} · {cat.items.length} picks
          </span>
        </div>

        <div className="flex flex-col md:col-span-7">
          <ul className="divide-y divide-espresso/10">
            {cat.items.map((item) => (
              <ItemRow key={item.name} item={item} />
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
            <button
              type="button"
              onClick={() => {
                track("Menu", { href: "full-menu" });
                dialog.current?.showModal();
              }}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-terracotta px-5 font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              See the full menu
              <span aria-hidden="true">→</span>
            </button>
            {site.links.menuPdf && (
              <a href={site.links.menuPdf} className="min-h-11 px-2 py-2.5 font-semibold underline underline-offset-4">
                Download PDF
              </a>
            )}
          </div>
        </div>
      </div>

      <dialog
        ref={dialog}
        aria-labelledby={`${id}-full`}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
        className="m-auto max-h-[88dvh] w-[min(56rem,94vw)] max-w-none overflow-hidden rounded-[2rem] bg-paper p-0 text-espresso"
      >
        <div className="flex max-h-[88dvh] flex-col">
          <div className="flex items-center justify-between gap-4 border-b border-espresso/10 px-5 py-4 sm:px-8">
            <div>
              <h2 id={`${id}-full`} className="display text-2xl">Full menu</h2>
              <p className="text-xs text-espresso-soft">Prices as of {pricesAsOf}. Subject to change.</p>
            </div>
            <button type="button" onClick={() => dialog.current?.close()} className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-espresso/15" aria-label="Close full menu">
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="grid gap-x-10 gap-y-8 overflow-y-auto px-5 py-6 sm:px-8 md:grid-cols-2">
            {menu.map((c) => (
              <section key={c.id}>
                <h3 className="eyebrow text-terracotta">{c.label}</h3>
                <ul className="divide-y divide-espresso/10">
                  {c.items.map((item) => (
                    <ItemRow key={item.name} item={item} />
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </dialog>
    </section>
  );
}
