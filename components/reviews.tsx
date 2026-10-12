import { press } from "@/content/site";
import { googleRating, reviews, socialProof } from "@/content/reviews";

export function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="relative bg-mustard py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Worth the drive</p>
            <h2 id="reviews-title" className="display mt-2 text-[2rem] sm:text-[2.5rem]">
              What they&apos;re saying
            </h2>
          </div>
          <dl className="flex flex-wrap gap-x-8 gap-y-3">
            {googleRating && (
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest">Google</dt>
                <dd className="text-xl font-bold">★ {googleRating.rating.toFixed(1)} · {googleRating.count.toLocaleString()} reviews</dd>
              </div>
            )}
            {socialProof.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="text-xs font-semibold">{s.label}</dt>
                <dd className="text-xl font-bold tabular-nums">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {reviews.length > 0 && (
          <div className="mb-5 grid gap-5 md:grid-cols-2">
            {reviews.map((r) => (
              <figure key={r.quote} className="reveal rounded-3xl border-2 border-espresso bg-paper p-6">
                <blockquote className="text-lg font-medium">“{r.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-espresso-soft">— {r.author}, {r.source}</figcaption>
              </figure>
            ))}
          </div>
        )}

        {/* Press headlines as clippings */}
        <ul className="stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {press.map((p, i) => (
            <li key={p.outlet} className={`reveal ${i % 2 ? "lg:translate-y-6" : ""}`}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col justify-between gap-6 rounded-3xl border-2 border-espresso p-6 transition-transform hover:-translate-y-1 ${
                  i === 1 ? "bg-espresso text-cream" : "bg-paper"
                }`}
              >
                <p className="text-[17px] leading-snug font-medium">“{p.headline}”</p>
                <p className="flex items-center justify-between text-sm font-bold tracking-wide">
                  {p.outlet}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
