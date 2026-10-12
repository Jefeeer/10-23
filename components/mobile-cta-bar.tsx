import { TrackedLink } from "./tracked-link";
import { PinIcon } from "./site-header";
import { site } from "@/content/site";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-espresso/10 bg-cream/95 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2.5">
        <TrackedLink event="Directions" href={site.links.directions} className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-terracotta font-semibold text-paper">
          <PinIcon /> Directions
        </TrackedLink>
        <TrackedLink event="Menu" href="#menu" className="flex min-h-12 items-center justify-center rounded-full bg-espresso font-semibold text-cream">
          Menu
        </TrackedLink>
      </div>
    </div>
  );
}
