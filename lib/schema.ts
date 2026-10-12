import { site } from "@/content/site";
import { formatTime } from "@/lib/hours";

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const to24 = (m: number) => `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;

export function cafeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: site.name,
    slogan: site.tagline,
    url: site.url,
    image: `${site.url}/opengraph-image.jpg`,
    logo: `${site.url}/brand/logo.jpg`,
    priceRange: "₱₱",
    servesCuisine: ["Coffee", "Filipino"],
    menu: `${site.url}/#menu`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: site.hours.map((h, i) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${DAY_NAMES[i]}`,
      opens: to24(h.open),
      closes: to24(h.close),
    })),
    sameAs: [site.links.facebook, site.links.instagram],
  };
}

/** "Mon–Fri" style groups for display, built from the hours array. */
export function hoursRows() {
  const order = [1, 2, 3, 4, 5, 6, 0];
  const short = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const rows: { days: number[]; label: string; time: string }[] = [];
  for (const d of order) {
    const h = site.hours[d];
    const time = `${formatTime(h.open)} – ${formatTime(h.close)}`;
    const last = rows.at(-1);
    if (last && last.time === time) last.days.push(d);
    else rows.push({ days: [d], label: "", time });
  }
  for (const r of rows) {
    r.label = r.days.length > 1 ? `${short[r.days[0]]}–${short[r.days.at(-1)!]}` : short[r.days[0]];
  }
  return rows;
}
