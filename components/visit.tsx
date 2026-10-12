import { MapFacade } from "./map-facade";
import { TrackedLink } from "./tracked-link";
import { FacebookIcon } from "./gallery";
import { PinIcon } from "./site-header";
import { site } from "@/content/site";
import { hoursRows } from "@/lib/schema";

export function Visit() {
  const { parking, wifi, pets } = site.amenities;
  const amenities = [
    parking !== "TODO" && `Parking: ${parking}`,
    wifi !== "TODO" && `Wi-Fi: ${wifi}`,
    pets !== "TODO" && `Pets: ${pets}`,
  ].filter(Boolean);

  return (
    <section id="visit" className="border-t border-espresso/10 bg-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:py-28">
        <div className="reveal flex flex-col gap-7 lg:col-span-5">
          <div>
            <p className="eyebrow text-terracotta">Visit</p>
            <h2 className="display mt-2 text-[2rem] sm:text-[2.5rem]">See you at 10/23</h2>
          </div>

          <address className="text-[17px] not-italic">
            {site.address.street},
            <br />
            {site.address.city}, {site.address.province}
          </address>

          <table className="w-full max-w-sm text-[15px]">
            <caption className="sr-only">Opening hours</caption>
            <tbody>
              {hoursRows().map((r) => (
                <tr key={r.label} className="border-b border-dashed border-espresso/20">
                  <th scope="row" className="py-2.5 text-left font-semibold">
                    {r.label}
                  </th>
                  <td className="py-2.5 text-right tabular-nums">{r.time}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-wrap gap-3">
            <TrackedLink event="Directions" href={site.links.maps} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-terracotta px-6 font-semibold text-paper transition-transform hover:-translate-y-0.5">
              <PinIcon /> Open in Google Maps
            </TrackedLink>
            <TrackedLink event="Messenger" href={site.links.messenger} className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-espresso px-6 font-semibold transition-colors hover:bg-espresso hover:text-cream">
              <FacebookIcon /> Message us
            </TrackedLink>
          </div>

          {amenities.length > 0 && <p className="text-sm text-espresso-soft">{amenities.join(" · ")}</p>}
        </div>

        <div className="reveal lg:col-span-7">
          <MapFacade />
        </div>
      </div>
    </section>
  );
}
