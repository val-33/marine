export default function Charter() {
  return (
    <section id="charter" className="relative">
      <div className="relative isolate">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=2400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 py-32 md:py-48 text-center text-white">
          <p className="eyebrow text-[11px] text-white/70 mb-6">
            Yacht Charter
          </p>
          <h2 className="tracked-heading text-white text-xl md:text-2xl lg:text-[26px] mb-8">
            A world of unmatched luxury
          </h2>
          <p className="mx-auto max-w-2xl text-white/85 font-light leading-relaxed">
            Embark on a voyage of indulgence and calm across the Mediterranean,
            the Caribbean, and beyond. Our chartered fleet is paired with
            hand-picked crews to deliver an experience defined only by the
            horizon.
          </p>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14 max-w-3xl mx-auto">
            <Stat number="120+" label="Yachts" />
            <Stat number="35" label="Destinations" />
            <Stat number="20" label="Years" />
            <Stat number="24/7" label="Concierge" />
          </div>

          <a
            href="#contact"
            className="mt-16 inline-flex items-center gap-3 border border-white/60 hover:border-white px-8 py-4 transition-colors"
          >
            <span className="eyebrow text-[11px]">Plan a Voyage</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl md:text-4xl text-white">{number}</p>
      <p className="eyebrow text-[10px] text-white/70 mt-2">{label}</p>
    </div>
  );
}
