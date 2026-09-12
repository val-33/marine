import { featuredYachts } from "@/lib/fleet";
import YachtPlaceholder from "./YachtPlaceholder";

export default function FeaturedFleet() {
  return (
    <section id="fleet" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <div className="text-center mb-20">
          <p className="eyebrow text-neutral-500 text-[11px] mb-4">
            Curated Selection
          </p>
          <h2 className="tracked-heading text-neutral-800 text-xl md:text-2xl">
            Featured Yachts for Sale
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featuredYachts.map((y, i) => (
            <article key={y.name} className="group">
              <a href="#contact" className="block">
                <div className="relative overflow-hidden aspect-[4/3] bg-ink">
                  <div className="absolute inset-0 transition-transform duration-[900ms] group-hover:scale-105">
                    <YachtPlaceholder index={i} />
                  </div>
                  {y.location && (
                    <span className="absolute top-4 left-4 eyebrow text-[10px] text-white bg-black/40 backdrop-blur-sm px-3 py-1">
                      In {y.location}
                    </span>
                  )}
                </div>

                <div className="pt-6">
                  <h3 className="tracked-heading text-[14px] md:text-[15px] text-neutral-900">
                    {y.name}{" "}
                    <span className="text-neutral-500">{y.year}</span>
                  </h3>

                  <dl className="mt-6 grid grid-cols-4 gap-3 text-neutral-600">
                    <Spec label="Length" value={y.length} />
                    <Spec label="Beam" value={y.beam} />
                    <Spec label="Engine H." value={y.engineHours} />
                    <Spec label="Cabins" value={String(y.cabins)} />
                  </dl>

                  <p className="mt-6 font-display text-2xl text-neutral-900">
                    {y.price}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border-t border-b border-neutral-300 hover:border-neutral-900 px-10 py-5 transition-colors"
          >
            <span className="eyebrow text-[11px] text-neutral-800">
              View all yachts
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="eyebrow text-[9px] text-neutral-400 mb-1">{label}</dt>
      <dd className="text-[12px] tracking-wide text-neutral-800">{value}</dd>
    </div>
  );
}
