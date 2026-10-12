"use client";

import { useEffect } from "react";

/** Fades .reveal elements in as they enter the viewport. Works in every browser; skipped for reduced motion. */
export function ScrollReveal() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    const pending = new Set(document.querySelectorAll(".reveal"));
    let raf = 0;

    // Reveals anything whose top has crossed 92% of the viewport — including elements
    // jumped past via End key or anchor links, which an IntersectionObserver can miss.
    const check = () => {
      raf = 0;
      const line = innerHeight * 0.92;
      for (const el of pending) {
        if (el.getBoundingClientRect().top < line) {
          el.classList.add("in");
          pending.delete(el);
        }
      }
      if (!pending.size) removeEventListener("scroll", onScroll);
    };
    const onScroll = () => {
      raf ||= requestAnimationFrame(check);
    };

    // Whatever is already on screen stays visible; only content below gets the entrance.
    pending.forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight) {
        el.classList.add("in");
        pending.delete(el);
      }
    });
    root.classList.add("motion");
    addEventListener("scroll", onScroll, { passive: true });
    // Turn transitions on a frame later so hiding is instant, not a visible fade-out.
    const ready = requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add("motion-ready")));

    return () => {
      cancelAnimationFrame(ready);
      cancelAnimationFrame(raf);
      removeEventListener("scroll", onScroll);
      root.classList.remove("motion", "motion-ready");
    };
  }, []);

  return null;
}
