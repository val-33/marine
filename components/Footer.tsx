export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="font-display tracking-[0.4em] text-white text-lg">
            MARINE
          </p>
          <p className="mt-4 text-xs font-light leading-relaxed">
            Luxury yacht sale, charter, and crew placement across the
            Mediterranean and beyond.
          </p>
        </div>

        <FooterCol
          title="Navigate"
          links={[
            { label: "Fleet", href: "#fleet" },
            { label: "Charter", href: "#charter" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ]}
        />
        <FooterCol
          title="Services"
          links={[
            { label: "Brokerage", href: "#about" },
            { label: "Charter", href: "#charter" },
            { label: "Crew Agency", href: "#contact" },
            { label: "Management", href: "#contact" },
          ]}
        />
        <FooterCol
          title="Legal"
          links={[
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Cookies", href: "#" },
          ]}
        />
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="eyebrow text-[10px] text-white/50">
            © {new Date().getFullYear()} MARINE. All rights reserved.
          </p>
          <p className="eyebrow text-[10px] text-white/50">
            Designed with care · Sail responsibly
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="eyebrow text-[10px] text-white mb-4">{title}</p>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-xs font-light hover:text-white transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
