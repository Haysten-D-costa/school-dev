"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ABOUT_LINKS, ACADEMICS_LINKS, LIFE_LINKS, NAV_LINKS } from "@/data/navigation";

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
  onClose,
}: {
  label: string;
  links: { label: string; href: string }[];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-primary/8">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between font-body text-[13px] tracking-widest uppercase py-3 transition-colors duration-200 text-neutral/70 hover:text-primary"
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
  const [logoOpen,   setLogoOpen]   = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpenMenu(null); setMobileOpen(false); setLogoOpen(false); }
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
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-lg shadow-sm border-b-2 border-primary/15"
          : "bg-cream/90 backdrop-blur-md border-b border-primary/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4 h-20">

          {/* ── Logo ───────────────────────────────────────────────── */}
          <div className="flex items-center gap-3.5 min-w-0 shrink-0">
            <button
              onClick={() => setLogoOpen(true)}
              aria-label="View school crest"
              className="shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              <GraduationCap size={22} className="text-cream" />
            </button>
            <Link href="/" className="min-w-0 flex flex-col leading-tight group">
              <span className="block font-heading font-bold text-sm sm:text-base tracking-wide text-primary transition-colors duration-200 group-hover:text-primary-light">
                {siteConfig.name}
              </span>
              <span className="hidden sm:block font-body text-[11px] tracking-[0.25em] uppercase mt-0.5 text-primary/50">
                {siteConfig.location}
              </span>
            </Link>
          </div>

          {/* ── Desktop Nav ─────────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">

            {/* About */}
            <div className="relative" onMouseEnter={() => open("about")} onMouseLeave={close}>
              <button
                aria-haspopup="true"
                aria-expanded={openMenu === "about"}
                className="relative flex items-center gap-1 font-body text-[13px] tracking-widest uppercase transition-colors duration-200 group text-neutral/70 hover:text-primary"
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
                className="relative flex items-center gap-1 font-body text-[13px] tracking-widest uppercase transition-colors duration-200 group text-neutral/70 hover:text-primary"
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
                className="relative flex items-center gap-1 font-body text-[13px] tracking-widest uppercase transition-colors duration-200 group text-neutral/70 hover:text-primary"
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
                  className="relative font-body text-[13px] tracking-widest uppercase transition-colors duration-200 group text-neutral/70 hover:text-primary"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </nav>

          {/* ── Mobile Hamburger ────────────────────────────────────── */}
          <button
            className="lg:hidden shrink-0 p-2 transition-colors text-primary/70 hover:text-primary"
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
          mobileOpen ? "max-h-150 border-t border-primary/10" : "max-h-0"
        }`}
        style={{ background: "rgba(253, 246, 236, 0.98)", backdropFilter: "blur(20px)" }}
      >
        <nav className="flex flex-col px-6 py-3" aria-label="Mobile navigation">
          <MobileAccordion label="About Us"    links={ABOUT_LINKS}     onClose={() => setMobileOpen(false)} />
          <MobileAccordion label="Academics"   links={ACADEMICS_LINKS} onClose={() => setMobileOpen(false)} />
          <MobileAccordion label="School Life" links={LIFE_LINKS}      onClose={() => setMobileOpen(false)} />
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-body text-[13px] tracking-widest uppercase py-3 border-b border-primary/8 last:border-0 transition-colors text-neutral/70 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>

      {/* ── Crest Lightbox ──────────────────────────────────────────── */}
      {logoOpen && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center"
          style={{ background: "rgba(74, 55, 40, 0.92)", backdropFilter: "blur(14px)" }}
          onClick={() => setLogoOpen(false)}
        >
          <button
            onClick={() => setLogoOpen(false)}
            aria-label="Close"
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/50 transition-all duration-200"
          >
            <X size={18} />
          </button>

          <div
            className="flex flex-col items-center gap-8 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full border border-cream/10 animate-pulse" />
              <div className="absolute -inset-2 rounded-full border border-cream/20" />
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/40">
                <GraduationCap size={90} className="text-cream md:hidden" />
                <GraduationCap size={120} className="text-cream hidden md:block" />
              </div>
            </div>

            <div className="text-center">
              <p className="font-heading text-cream font-bold text-2xl md:text-4xl tracking-wide drop-shadow-lg">
                {siteConfig.name}
              </p>
              <div className="flex items-center justify-center gap-3 mt-2">
                <span className="block h-px w-8 bg-cream/25" />
                <p className="font-body text-cream/50 text-xs tracking-[0.35em] uppercase">
                  {siteConfig.location}
                </p>
                <span className="block h-px w-8 bg-cream/25" />
              </div>
              <p className="font-body text-cream/30 text-[11px] tracking-[0.2em] uppercase mt-3">
                Est. {siteConfig.established}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
