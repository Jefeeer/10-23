import Image from "next/image";
import gallery from "@/public/photos/gallery-wall.jpg";
import facade from "@/public/photos/facade-sign.jpg";
import mirror from "@/public/photos/rooted-mirror.jpg";

const birthdays = [
  { name: "Ony Cantimbuhan", role: "Imus City Board Member", tilt: "-rotate-3" },
  { name: "Rosalinda Gonzaga", role: "Our late lola", tilt: "rotate-2" },
];

const timeline = [
  { when: "'60s – '80s", what: "The family builds passenger jeeps. One of them now sits inside the café." },
  { when: "2023", what: "LA Gonzaga Cantimbuhan and her cousins open 10/23 on Imus Boulevard." },
  { when: "Oct 2024", what: "First birthday, celebrated with a Secret Fresh collab and Trinkets jewelry." },
  { when: "Today", what: "From 120 seats to about 300, and over a thousand guests every weekend." },
];

function CalendarLeaf({ name, role, tilt }: (typeof birthdays)[number]) {
  return (
    <figure className={`w-full max-w-[13rem] ${tilt} overflow-hidden rounded-2xl border-2 border-espresso bg-paper shadow-[6px_6px_0_var(--color-espresso)]`}>
      <div className="flex justify-between bg-terracotta px-4 py-2 text-paper">
        <span className="eyebrow">October</span>
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="size-2 rounded-full bg-paper/80" />
          <i className="size-2 rounded-full bg-paper/80" />
        </span>
      </div>
      <p className="display py-3 text-center text-[4rem] leading-none text-espresso" aria-label="23">
        23
      </p>
      <figcaption className="border-t border-dashed border-espresso/30 px-4 py-3 text-center">
        <span className="block text-sm font-semibold">{name}</span>
        <span className="block text-xs text-espresso-soft">{role}</span>
      </figcaption>
    </figure>
  );
}

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-8 lg:col-span-6">
          <div className="reveal">
            <p className="eyebrow text-terracotta">Our story · Why 10/23</p>
            <h2 className="display mt-2 text-[2rem] sm:text-[2.5rem]">
              Two birthdays.
              <br />
              One family. One town.
            </h2>
          </div>

          <div className="reveal flex justify-center gap-4 py-2 sm:justify-start sm:gap-8">
            {birthdays.map((b) => (
              <CalendarLeaf key={b.name} {...b} />
            ))}
          </div>

          <div className="reveal flex flex-col gap-4 text-[17px] text-espresso-soft">
            <p>
              Our name honours two birthdays that share a date — Board Member Ony Cantimbuhan&apos;s and our late
              grandmother Rosalinda Gonzaga&apos;s. Founder LA Cantimbuhan and her cousins opened 10/23 as a love letter
              to Imus.
            </p>
            <p>
              Our family built passenger jeeps from the &apos;60s to the &apos;80s, and one of them now sits in the middle of
              the café. A chair from lola&apos;s house was restored for the dining room, most tables and chairs were made by
              local artisans, and the art wall belongs to Imus artist Christian Tamondong.
            </p>
          </div>

          <ol className="reveal relative ml-2 border-l-2 border-dashed border-terracotta/40">
            {timeline.map((t) => (
              <li key={t.when} className="relative pb-6 pl-6 last:pb-0">
                <span className="absolute top-1.5 -left-[7px] size-3 rounded-full border-2 border-paper bg-terracotta" />
                <p className="text-sm font-bold tracking-wide">{t.when}</p>
                <p className="text-[15px] text-espresso-soft">{t.what}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Collage */}
        <div className="grid auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] sm:gap-4 lg:col-span-6 lg:auto-rows-[11rem] lg:self-center">
          <figure className="reveal relative col-span-2 row-span-2 overflow-hidden rounded-3xl">
            <Image src={gallery} alt="A bright dining room lined with colourful paintings by local artists" fill placeholder="blur" sizes="(min-width: 1024px) 46vw, 92vw" className="object-cover" />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-paper/90 px-3 py-1 text-xs font-semibold">The gallery room</figcaption>
          </figure>
          <figure className="reveal arch relative row-span-2 overflow-hidden">
            <Image src={mirror} alt="Two guests posing at the mirror reading 'Rooted in love, rooted in legacy' in the garden" fill placeholder="blur" sizes="(min-width: 1024px) 23vw, 46vw" className="object-cover" />
          </figure>
          <figure className="reveal relative row-span-2 overflow-hidden rounded-3xl">
            <Image src={facade} alt="The sage-green Café 10/23 sign beside the terracotta breeze-block wall" fill placeholder="blur" sizes="(min-width: 1024px) 23vw, 46vw" className="object-cover" />
          </figure>
        </div>
      </div>
    </section>
  );
}
