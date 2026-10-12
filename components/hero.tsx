import Image from "next/image";
import patio from "@/public/photos/garden-patio.jpg";
import latte from "@/public/photos/layered-latte.jpg";
import { OpenBadge } from "./open-badge";
import { Logo } from "./logo";
import { TrackedLink } from "./tracked-link";
import { PinIcon } from "./site-header";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-8 pb-14 sm:px-6 sm:pt-12 lg:grid-cols-12 lg:gap-8 lg:pt-16 lg:pb-24">
        {/* Copy */}
        <div className="flex flex-col gap-6 lg:col-span-6 lg:pr-6">
          <div className="self-start">
            <OpenBadge />
          </div>

          <h1 className="max-w-[22ch] text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.02em] text-balance sm:text-[2.25rem] lg:text-[2.6rem]">
            Coffee, comfort food &amp; a little bit of{" "}
            <span className="relative whitespace-nowrap text-terracotta">
              Imus
              <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 7c18-5 40-6 96-2" fill="none" stroke="var(--color-mustard)" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            in every cup.
          </h1>

          <p className="max-w-[46ch] text-[17px] text-espresso-soft max-sm:order-1">
            A family-run café on Imus Boulevard, built around a jeepney our family made, our lola&apos;s chair, and art from
            Caviteño hands. Pull up a seat — there are {site.seats} of them.
          </p>

          <div className="flex flex-wrap gap-3 max-sm:order-1">
            <TrackedLink
              event="Menu"
              href="#menu"
              className="inline-flex min-h-12 items-center rounded-full bg-espresso px-6 font-semibold text-cream transition-transform hover:-translate-y-0.5"
            >
              See the menu
            </TrackedLink>
            <a
              href="#visit"
              className="inline-flex min-h-12 items-center rounded-full border-2 border-espresso px-6 font-semibold transition-colors hover:bg-espresso hover:text-cream"
            >
              Plan your visit
            </a>
          </div>

          {/* Quick facts: hours + address stay above the fold on mobile */}
          <dl className="grid sm:mt-2 grid-cols-2 gap-px overflow-hidden rounded-2xl border border-espresso/10 bg-espresso/10 text-sm sm:grid-cols-3">
            <div className="bg-paper p-4">
              <dt className="eyebrow text-espresso-soft">Mon–Fri</dt>
              <dd className="mt-1 font-semibold">10 AM – 11 PM</dd>
            </div>
            <div className="bg-paper p-4">
              <dt className="eyebrow text-espresso-soft">Sat–Sun</dt>
              <dd className="mt-1 font-semibold">7 AM – 11 PM</dd>
            </div>
            <div className="col-span-2 bg-paper p-4 sm:col-span-1">
              <dt className="eyebrow text-espresso-soft">Find us</dt>
              <dd className="mt-1 font-semibold">
                <TrackedLink event="Directions" href={site.links.directions} className="-my-2.5 inline-flex min-h-11 items-center gap-1.5 underline decoration-terracotta decoration-2 underline-offset-4">
                  <PinIcon /> Imus Blvd., Imus
                </TrackedLink>
              </dd>
            </div>
          </dl>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-[34rem] lg:col-span-6 lg:max-w-none">
          <div aria-hidden="true" className="breeze absolute -top-4 -right-4 h-2/3 w-2/3 rounded-[2rem] opacity-90 sm:-top-6 sm:-right-6" />
          <div aria-hidden="true" className="absolute -bottom-6 -left-10 size-56 rounded-full bg-sage/70 blur-0" />

          <div className="arch relative aspect-[4/5] overflow-hidden border-[6px] border-paper shadow-[0_30px_60px_-30px_rgb(74_39_29/0.55)] lg:aspect-square">
            <Image
              src={patio}
              alt="The garden patio at Café 10/23 — umbrellas, green chairs and the two-storey wooden café under the trees"
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1024px) 560px, (min-width: 640px) 34rem, 92vw"
              className="object-cover"
            />
          </div>

          {/* Inset drink photo */}
          <div className="absolute -bottom-8 -left-2 w-[36%] rotate-[-4deg] overflow-hidden rounded-2xl border-[5px] border-paper shadow-xl sm:-left-8">
            <Image src={latte} alt="A layered iced drink" placeholder="blur" sizes="200px" className="aspect-[4/5] object-cover" />
          </div>

          {/* Sticker */}
          <div className="absolute right-3 bottom-10 rotate-[5deg] rounded-xl border-2 border-espresso bg-mustard px-3.5 py-2.5 shadow-[4px_4px_0_var(--color-espresso)] sm:right-[-0.75rem]">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase">Every weekend</p>
            <p className="text-lg leading-tight font-bold">{site.weekendGuests} guests</p>
          </div>

          {/* Spinning tagline seal */}
          <div className="absolute top-4 left-2 grid size-24 place-items-center sm:-left-6 sm:size-28">
            <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 size-full" aria-hidden="true">
              <defs>
                <path id="seal" d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1-76 0" />
              </defs>
              <circle cx="50" cy="50" r="49" fill="var(--color-paper)" />
              <text fontSize="9.4" fontWeight="600" letterSpacing="2.1" fill="var(--color-espresso)">
                <textPath href="#seal" textLength="236" lengthAdjust="spacing">ROOTED IN LOVE · ROOTED IN LEGACY ·</textPath>
              </text>
            </svg>
            <Logo size={44} className="relative" />
          </div>
        </div>
      </div>
    </section>
  );
}
