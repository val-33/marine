const brands = [
  "Ferretti",
  "Azimut",
  "Sunseeker",
  "Princess",
  "Sanlorenzo",
  "Sirena",
  "Fairline",
  "Riva",
];

export default function Brands() {
  return (
    <section className="bg-stone-soft">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-24">
        <div className="text-center mb-14">
          <p className="eyebrow text-neutral-500 text-[11px] mb-4">
            Represented Shipyards
          </p>
          <h2 className="tracked-heading text-neutral-800 text-lg md:text-xl">
            The world&apos;s finest builders
          </h2>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-y-8">
          {brands.map((b) => (
            <li
              key={b}
              className="tracked-heading text-neutral-500 text-[11px] md:text-xs text-center hover:text-neutral-900 transition-colors"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
