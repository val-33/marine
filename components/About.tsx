export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-stone-soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80"
              alt="Superyacht at anchor"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="eyebrow text-neutral-500 text-[11px] mb-4">
              About Us
            </p>
            <h2 className="tracked-heading text-neutral-900 text-xl md:text-2xl mb-8">
              A global brokerage,
              <br />
              built by seafarers
            </h2>
            <p className="text-neutral-600 leading-relaxed font-light mb-6">
              MARINE is a global brokerage specialising in the sale and charter
              of luxury yachts. Our reputation is built on a simple principle:
              deliver the best service, always. From first survey to final
              handover, we advocate for the client and for the sea.
            </p>
            <p className="text-neutral-600 leading-relaxed font-light">
              With offices across the Mediterranean and long-standing
              relationships with the world&apos;s finest shipyards, we help our
              clients navigate every step of ownership and passage.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <Pillar title="Brokerage" text="Sale & purchase of yachts from 15m to 90m." />
              <Pillar title="Charter" text="Curated voyages with hand-picked crew." />
              <Pillar title="Crew" text="Global crew placement & management." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillar({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-t border-neutral-300 pt-4">
      <p className="eyebrow text-[10px] text-neutral-900 mb-2">{title}</p>
      <p className="text-[13px] text-neutral-600 leading-relaxed font-light">
        {text}
      </p>
    </div>
  );
}
