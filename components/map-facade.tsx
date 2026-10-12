"use client";

import Image from "next/image";
import { useState } from "react";
import facade from "@/public/photos/treehouse.jpg";
import { site } from "@/content/site";

/** Click-to-load Google Map so the embed never costs anything at page load. */
export function MapFacade() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-2 border-espresso bg-sage sm:aspect-[16/11]">
      {loaded ? (
        <iframe
          src={site.links.mapEmbed}
          title="Map showing Café 10/23 on Imus Boulevard"
          className="absolute inset-0 size-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <button type="button" onClick={() => setLoaded(true)} className="group absolute inset-0 size-full">
          <Image src={facade} alt="" fill placeholder="blur" sizes="(min-width: 1024px) 50vw, 92vw" className="object-cover brightness-[0.7] transition duration-500 group-hover:scale-105" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="flex flex-col items-center gap-3">
              <span className="relative grid size-16 place-items-center rounded-full bg-terracotta text-paper shadow-xl">
                <span className="absolute inset-0 animate-ping rounded-full bg-terracotta/50 motion-reduce:hidden" />
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="relative">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                </svg>
              </span>
              <span className="rounded-full bg-paper px-4 py-2 text-sm font-semibold text-espresso">Load the map</span>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
