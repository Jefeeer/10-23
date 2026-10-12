import { Logo } from "./logo";
import { TrackedLink } from "./tracked-link";
import { FacebookIcon, InstagramIcon } from "./gallery";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-espresso pb-24 text-cream md:pb-0">
      <div aria-hidden="true" className="breeze h-6 [--bz-hole:var(--color-espresso)]" />
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-5">
          <Logo size={72} />
          <p className="display max-w-[16ch] text-[1.75rem] sm:max-w-none text-blush">{site.tagline}</p>
          <p className="text-sm text-cream/70">Proudly Caviteño since 2023.</p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <div className="flex gap-3">
            <TrackedLink event="Facebook" href={site.links.facebook} aria-label="Café 10/23 on Facebook" className="grid size-12 place-items-center rounded-full border-2 border-cream/30 transition-colors hover:bg-cream hover:text-espresso">
              <FacebookIcon />
            </TrackedLink>
            <TrackedLink event="Instagram" href={site.links.instagram} aria-label="Café 10/23 on Instagram" className="grid size-12 place-items-center rounded-full border-2 border-cream/30 transition-colors hover:bg-cream hover:text-espresso">
              <InstagramIcon />
            </TrackedLink>
          </div>
          <p className="text-sm text-cream/70">
            {site.address.street}, {site.address.city}, {site.address.province}
          </p>
          <p className="text-xs text-cream/60">© <Year /> Café 10/23. All rights reserved.</p>
        </div>
      </div>
      <p className="border-t border-cream/10 px-4 py-5 text-center text-xs tracking-wide text-cream/60">
        Powered by <span className="font-semibold text-cream/85">Aurevixa</span>
      </p>
    </footer>
  );
}

// Cached so the static page can be prerendered; refreshes with the cache (at least yearly).
async function Year() {
  "use cache";
  return new Date().getFullYear();
}
