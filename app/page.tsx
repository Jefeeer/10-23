import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { InfoStrip } from "@/components/info-strip";
import { MenuSection } from "@/components/menu-section";
import { Story } from "@/components/story";
import { Reviews } from "@/components/reviews";
import { Gallery } from "@/components/gallery";
import { Events } from "@/components/events";
import { Visit } from "@/components/visit";
import { SiteFooter } from "@/components/site-footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { cafeSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cafeSchema()).replace(/</g, "\\u003c") }}
      />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-espresso focus:px-4 focus:py-2 focus:text-cream">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <InfoStrip />
        <MenuSection />
        <Story />
        <Reviews />
        <Gallery />
        <Events />
        <Visit />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}
