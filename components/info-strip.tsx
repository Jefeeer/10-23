import { site } from "@/content/site";

// Jeepney route signboard: the stops are what we serve.
const stops = ["Imus", "Kape", "Tapa", "Matcha", "Merienda", "Barkada", "Long tambay", "Malagasang"];

export function InfoStrip() {
  const items = [
    { k: "Weekdays", v: "10 AM – 11 PM" },
    { k: "Weekends", v: "7 AM – 11 PM · early breakfast" },
    { k: "Find us", v: "Imus Blvd., Malagasang II-C" },
    { k: "Beans", v: `${site.beans}` },
  ];

  return (
    <section aria-label="Quick info" className="bg-leaf text-cream">
      {/* Signboard marquee */}
      <div className="overflow-hidden border-y-4 border-espresso bg-mustard py-2.5 text-espresso" aria-hidden="true">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((n) => (
            <ul key={n} className="flex shrink-0 items-center">
              {stops.map((s) => (
                <li key={s} className="flex items-center gap-6 px-3 text-sm font-bold tracking-[0.2em] uppercase">
                  {s}
                  <svg width="12" height="12" viewBox="0 0 12 12" className="text-terracotta">
                    <path d="M6 0l1.6 4.4L12 6l-4.4 1.6L6 12 4.4 7.6 0 6l4.4-1.6z" fill="currentColor" />
                  </svg>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <dl className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-6 px-4 py-9 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.k} className="border-l-2 border-mustard/70 pl-4">
            <dt className="eyebrow text-mustard">{i.k}</dt>
            <dd className="mt-1 text-[17px] font-medium">{i.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
