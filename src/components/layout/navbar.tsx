"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";

const ABOUT_LINKS = [
  { label: "Our History",        href: "/about/history" },
  { label: "Principal's Message", href: "/about/principal" },
  { label: "Vision & Mission",   href: "/about/vision" },
  { label: "Our Faculty",        href: "/about/faculty" },
];

const ACADEMICS_LINKS = [
  { label: "Primary School (Gr. I–V)",        href: "/academics/primary" },
  { label: "Secondary School (Gr. VI–X)",     href: "/academics/secondary" },
  { label: "Higher Secondary (Gr. XI–XII)",   href: "/academics/higher-secondary" },
  { label: "Co-Curricular Activities",        href: "/academics/activities" },
];

const LIFE_LINKS = [
  { label: "Gallery",      href: "/school-life/gallery" },
  { label: "Sports",       href: "/school-life/sports" },
  { label: "Clubs & Societies", href: "/school-life/clubs" },
  { label: "News & Events", href: "/school-life/news" },
];

const NAV_LINKS = [
  { label: "Admissions", href: "/admissions" },
  { label: "Contact",    href: "/contact" },
];

function NavDropdown({
  open,
  links,
  onClose,
}: {
  open: boolean;
  links: { label: string; href: string }[];
  onClose: () => void;
}) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-60 rounded-xl overflow-hidden shadow-2xl border border-cream-dark/60 transition-all duration-200 ${
        open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      style={{ background: "rgba(253, 246, 236, 0.98)", backdropFilter: "blur(20px)" }}
    >
      <div className="h-px bg-primary/20" />
      <ul className="py-1.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onClose}
              className="block font-body text-[13px] tracking-wide text-neutral/70 hover:text-primary hover:bg-primary/5 px-5 py-2.5 transition-all duration-150"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileAccordion({
  label,
  links,
  scrolled,
  onClose,
}: {
  label: string;
  links: { label: string; href: string }[];
  scrolled: boolean;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-primary/8">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`w-full flex items-center justify-between font-body text-[13px] tracking-[0.1em] uppercase py-3 transition-colors duration-200 ${
          scrolled ? "text-neutral/70 hover:text-primary" : "text-white/80 hover:text-cream"
        }`}
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180 text-primary" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-72" : "max-h-0"}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => { setOpen(false); onClose(); }}
            className="block font-body text-[12px] tracking-wider text-primary/60 hover:text-primary py-2 pl-3 border-b border-primary/5 last:border-0 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu,   setOpenMenu]   = useState<"about" | "academics" | "life" | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpenMenu(null); setMobileOpen(false); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const open  = (menu: "about" | "academics" | "life") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };
  const close = () => { closeTimer.current = setTimeout(() => setOpenMenu(null), 120); };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-lg shadow-sm border-b-2 border-primary/15"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4 h-20">

          {/* ── Logo ───────────────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-3.5 min-w-0 shrink-0 group">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 ${
                scrolled ? "bg-primary" : "bg-white/15 border border-white/30"
              }`}
            >
              <GraduationCap size={22} className={scrolled ? "text-cream" : "text-white"} />
            </div>
            <div className="min-w-0 flex flex-col leading-tight">
              <span
                className={`block font-heading font-bold text-sm sm:text-base tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-primary" : "text-white"
                }`}
              >
                St. Joseph&apos;s High School
              </span>
              <span
                className={`hidden sm:block font-body text-[11px] tracking-[0.25em] uppercase mt-0.5 transition-colors duration-300 ${
                  scrolled ? "text-primary/50" : "text-white/60"
                }`}
              >
                Mapusa, Goa
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ─────────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">

            {/* About */}
            <div className="relative" onMouseEnter={() => open("about")} onMouseLeave={close}>
              <button
                aria-haspopup="true"
                aria-expanded={openMenu === "about"}
                className={`relative flex items-center gap-1 font-body text-[13px] tracking-[0.1em] uppercase transition-colors duration-200 group ${
                  scrolled ? "text-neutral/70 hover:text-primary" : "text-white/85 hover:text-white"
                }`}
              >
                About Us
                <ChevronDown size={13} className={`mt-px transition-transform duration-200 ${openMenu === "about" ? "rotate-180 text-primary" : ""}`} />
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
              <NavDropdown open={openMenu === "about"} links={ABOUT_LINKS} onClose={() => setOpenMenu(null)} />
            </div>

            {/* Academics */}
            <div className="relative" onMouseEnter={() => open("academics")} onMouseLeave={close}>
              <button
                aria-haspopup="true"
                aria-expanded={openMenu === "academics"}
                className={`relative flex items-center gap-1 font-body text-[13px] tracking-[0.1em] uppercase transition-colors duration-200 group ${
                  scrolled ? "text-neutral/70 hover:text-primary" : "text-white/85 hover:text-white"
                }`}
              >
                Academics
                <ChevronDown size={13} className={`mt-px transition-transform duration-200 ${openMenu === "academics" ? "rotate-180 text-primary" : ""}`} />
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
              <NavDropdown open={openMenu === "academics"} links={ACADEMICS_LINKS} onClose={() => setOpenMenu(null)} />
            </div>

            {/* School Life */}
            <div className="relative" onMouseEnter={() => open("life")} onMouseLeave={close}>
              <button
                aria-haspopup="true"
                aria-expanded={openMenu === "life"}
                className={`relative flex items-center gap-1 font-body text-[13px] tracking-[0.1em] uppercase transition-colors duration-200 group ${
                  scrolled ? "text-neutral/70 hover:text-primary" : "text-white/85 hover:text-white"
                }`}
              >
                School Life
                <ChevronDown size={13} className={`mt-px transition-transform duration-200 ${openMenu === "life" ? "rotate-180 text-primary" : ""}`} />
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
              <NavDropdown open={openMenu === "life"} links={LIFE_LINKS} onClose={() => setOpenMenu(null)} />
            </div>

            {/* Plain links */}
            {NAV_LINKS.map((link) =>
              link.label === "Admissions" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-[13px] tracking-[0.12em] uppercase bg-primary hover:bg-primary-light text-cream px-5 py-2 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-body text-[13px] tracking-[0.1em] uppercase transition-colors duration-200 group ${
                    scrolled ? "text-neutral/70 hover:text-primary" : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </nav>

          {/* ── Mobile Hamburger ────────────────────────────────────── */}
          <button
            className={`lg:hidden shrink-0 p-2 transition-colors ${scrolled ? "text-primary/70 hover:text-primary" : "text-white/80 hover:text-white"}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ─────────────────────────────────────────────── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[600px] border-t border-primary/10" : "max-h-0"
        }`}
        style={{
          background: scrolled
            ? "rgba(253, 246, 236, 0.98)"
            : "rgba(123, 23, 23, 0.97)",
          backdropFilter: "blur(20px)",
        }}
      >
        <nav className="flex flex-col px-6 py-3" aria-label="Mobile navigation">
          <MobileAccordion label="About Us"    links={ABOUT_LINKS}    scrolled={scrolled} onClose={() => setMobileOpen(false)} />
          <MobileAccordion label="Academics"   links={ACADEMICS_LINKS} scrolled={scrolled} onClose={() => setMobileOpen(false)} />
          <MobileAccordion label="School Life" links={LIFE_LINKS}      scrolled={scrolled} onClose={() => setMobileOpen(false)} />
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-body text-[13px] tracking-[0.1em] uppercase py-3 border-b border-primary/8 last:border-0 transition-colors ${
                scrolled ? "text-neutral/70 hover:text-primary" : "text-white/80 hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
