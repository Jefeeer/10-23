import Image from "next/image";
import crowd from "@/public/photos/anniversary-crowd.jpg";
import { EventsForm } from "./events-form";

const occasions = ["Birthdays", "Despedidas", "Bridal showers", "Team meetups", "Barkada reunions"];

export function Events() {
  return (
    <section id="events" className="px-3 pb-20 sm:px-6 lg:pb-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-leaf text-cream sm:rounded-[2.5rem]">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col gap-6 p-6 sm:p-10 lg:p-14">
            <div className="reveal">
              <p className="eyebrow text-mustard">Private events</p>
              <h2 className="display mt-2 text-[2rem] sm:text-[2.5rem]">Host it under the trees.</h2>
            </div>
            <p className="reveal max-w-[44ch] text-[17px] text-cream/80">
              Tell us the date and headcount and we&apos;ll get back with packages. From intimate tables upstairs to the whole
              garden lawn.
            </p>
            <ul className="reveal flex flex-wrap gap-2" aria-label="Occasions we host">
              {occasions.map((o) => (
                <li key={o} className="rounded-full border border-cream/25 px-3 py-1 text-[13px] font-medium">
                  {o}
                </li>
              ))}
            </ul>
            <div className="reveal relative mt-2 hidden aspect-[16/10] overflow-hidden rounded-3xl lg:block">
              <Image src={crowd} alt="Guests gathered on the garden lawn during the café's first anniversary" fill placeholder="blur" sizes="40vw" className="object-cover" />
            </div>
          </div>

          <div className="border-t border-cream/10 bg-leaf-soft/40 p-6 sm:p-10 lg:border-t-0 lg:border-l lg:p-14">
            <EventsForm />
          </div>
        </div>
      </div>
    </section>
  );
}
