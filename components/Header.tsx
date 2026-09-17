"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Fleet", href: "#fleet" },
  { label: "Charter", href: "#charter" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between">
        <Link
          href="/"
          className="tracked-heading text-white text-[13px] md:text-sm select-none"
          aria-label="MARINE home"
        >
          <span className="font-display italic text-lg md:text-xl not-italic tracking-[0.4em]">
            MARINE
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-white/90">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="eyebrow text-[11px] hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#favorites"
            className="eyebrow text-[11px] inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <BookmarkIcon />
            Favorites
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden eyebrow text-white text-[11px] inline-flex items-center gap-2"
          aria-label="Toggle menu"
        >
          <span className="block w-6">
            <span
              className={`block h-px w-full bg-white transition-transform origin-center ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-white mt-[6px] transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-white mt-[6px] transition-transform origin-center ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink/95 backdrop-blur-md">
          <nav className="px-6 py-6 flex flex-col gap-4 text-white">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="eyebrow text-sm py-2 border-b border-white/10"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function BookmarkIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="w-3 h-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M3 1.5v13l5-3 5 3v-13z" />
    </svg>
  );
}
