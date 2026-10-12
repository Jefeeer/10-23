"use client";

import { useRef } from "react";
import { Logo } from "./logo";
import { TrackedLink } from "./tracked-link";
import { site } from "@/content/site";

const nav = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our story" },
  { href: "#space", label: "The space" },
  { href: "#events", label: "Events" },
];

export function SiteHeader() {
  const sheet = useRef<HTMLDialogElement>(null);
  const close = () => sheet.current?.close();

  return (
    <header className="sticky top-0 z-40 border-b border-espresso/10 bg-cream/90 backdrop-blur-md">
      <div aria-hidden="true" className="scroll-progress absolute inset-x-0 -bottom-px h-0.5 bg-terracotta" />
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        <a href="#top" className="flex items-center gap-3 rounded-full">
          <Logo size={44} />
          <span className="hidden text-[15px] font-semibold tracking-tight min-[380px]:inline">Café 10/23</span>
        </a>

        <div className="hidden items-center gap-1 text-[15px] font-medium md:flex">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-4 py-2.5 transition-colors hover:bg-blush/60">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <TrackedLink
            event="Directions"
            href={site.links.directions}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-terracotta px-4 text-[14px] font-semibold text-paper transition-transform hover:-translate-y-0.5 sm:px-5"
          >
            <PinIcon /> Get directions
          </TrackedLink>
          <button
            type="button"
            onClick={() => sheet.current?.showModal()}
            className="grid size-11 place-items-center rounded-full border-2 border-espresso/15 md:hidden"
            aria-label="Open menu"
            aria-haspopup="dialog"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M2 5h14M2 9h14M2 13h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile sheet: native <dialog> gives focus trap + Esc for free */}
      <dialog
        ref={sheet}
        aria-label="Site navigation"
        onClick={(e) => e.target === sheet.current && close()}
        className="m-0 ml-auto h-dvh max-h-none w-[min(22rem,88vw)] max-w-none bg-cream p-0 text-espresso"
      >
        <div className="flex h-full flex-col gap-8 p-6">
          <div className="flex items-center justify-between">
            <Logo size={52} />
            <button type="button" onClick={close} className="grid size-11 place-items-center rounded-full border-2 border-espresso/15" aria-label="Close menu">
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col">
            {nav.map((l, i) => (
              <li key={l.href} className="border-b border-espresso/10">
                <a href={l.href} onClick={close} className="flex items-baseline gap-4 py-4 text-xl font-semibold">
                  <span className="text-xs font-medium text-espresso-soft tabular-nums">0{i + 1}</span>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="border-b border-espresso/10">
              <a href="#visit" onClick={close} className="flex items-baseline gap-4 py-4 text-xl font-semibold">
                <span className="text-xs font-medium text-espresso-soft tabular-nums">05</span>
                Visit
              </a>
            </li>
          </ul>
          <p className="mt-auto text-sm text-espresso-soft">{site.tagline}</p>
        </div>
      </dialog>
    </header>
  );
}

export function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}
