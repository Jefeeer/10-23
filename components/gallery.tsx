import Image, { type StaticImageData } from "next/image";
import canopy from "@/public/photos/garden-canopy.jpg";
import treehouse from "@/public/photos/treehouse.jpg";
import lounge from "@/public/photos/upstairs-lounge.jpg";
import lawn from "@/public/photos/anniversary-lawn.jpg";
import sodas from "@/public/photos/sodas.jpg";
import counter from "@/public/photos/pastry-counter.jpg";
import { TrackedLink } from "./tracked-link";
import { site } from "@/content/site";

// TODO(owner): swap in your own favourite Instagram shots (same filenames, or edit this list).
const shots: { src: StaticImageData; alt: string; span: string }[] = [
  { src: treehouse, alt: "The two-storey wooden café framed by tropical trees", span: "col-span-2 row-span-2" },
  { src: sodas, alt: "Two iced sodas on a terrazzo table", span: "row-span-2" },
  { src: lounge, alt: "The upstairs lounge with a teal arch and curved sofa", span: "" },
  { src: canopy, alt: "The café roofline seen through the garden canopy", span: "" },
  { src: counter, alt: "The pastry counter and coffee bar", span: "col-span-2 sm:col-span-1" },
  { src: lawn, alt: "The garden lawn set up for the first-anniversary pop-up", span: "col-span-2 sm:col-span-3" },
];

export function Gallery() {
  return (
    <section id="space" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="reveal mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow text-terracotta">The space</p>
          <h2 className="display mt-2 text-[2rem] sm:text-[2.5rem]">Made for long tambay</h2>
          <p className="mt-3 max-w-[48ch] text-[15px] text-espresso-soft">
            A garden under old trees, a treehouse-style second floor, a gallery room and a jeepney in the middle of it all.
          </p>
        </div>
        <TrackedLink
          event="Instagram"
          href={site.links.instagram}
          className="inline-flex min-h-11 items-center gap-2 self-start rounded-full border-2 border-espresso px-5 font-semibold transition-colors hover:bg-espresso hover:text-cream md:self-auto"
        >
          <InstagramIcon /> Follow @ten.twentythree
        </TrackedLink>
      </div>

      <div className="grid auto-rows-[8.5rem] grid-cols-2 gap-3 sm:auto-rows-[11rem] sm:grid-cols-3 sm:gap-4 lg:auto-rows-[13rem] lg:grid-cols-4">
        {shots.map((s) => (
          <figure key={s.alt} className={`reveal group relative overflow-hidden rounded-3xl bg-blush ${s.span}`}>
            <Image
              src={s.src}
              alt={s.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8.1v3h2.5V21h2.9Z" />
    </svg>
  );
}
