"use client";

import Link from "next/link";
import { ArrowUp, MapPin, Phone, Mail, ExternalLink, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

const QUICK_LINKS = [
  { label: "Home",       href: "/" },
  { label: "About Us",  href: "/about/history" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery",   href: "/school-life/gallery" },
  { label: "Contact",   href: "/contact" },
];

const SCHOOL_LIFE_LINKS = [
  { label: "News & Events",   href: "/school-life/news" },
  { label: "Sports",          href: "/school-life/sports" },
  { label: "Clubs & Societies", href: "/school-life/clubs" },
  { label: "Academic Results", href: "/academics/results" },
];

const SOCIAL = [
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: siteConfig.social.youtube,
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
];

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h4 className="font-heading font-semibold text-cream text-sm tracking-[0.15em] uppercase mb-2.5">
        {children}
      </h4>
      <span className="block w-8 h-0.5 bg-cream/30" />
    </div>
  );
}

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="bg-primary text-cream border-t-4 border-cream/10">

        {/* ── Main grid ───────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14 md:py-18">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Col 1 — Branding (2/5) */}
            <div className="sm:col-span-2 lg:col-span-2 lg:border-r lg:border-cream/8 lg:pr-10">

              {/* Logo + name */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-cream/12 border border-cream/20 flex items-center justify-center shrink-0">
                  <GraduationCap size={24} className="text-cream" />
                </div>
                <div>
                  <p className="font-heading font-bold text-cream text-base leading-tight tracking-wide">
                    ST. JOSEPH&apos;S HIGH SCHOOL
                  </p>
                  <p className="font-body text-cream/40 text-xs tracking-widest mt-0.5">
                    {siteConfig.location}
                  </p>
                </div>
              </div>

              <p className="font-body text-cream/45 text-sm leading-relaxed mb-6 max-w-xs italic">
                &ldquo;{siteConfig.motto}&rdquo;
              </p>
              <p className="font-body text-cream/40 text-sm leading-relaxed mb-6 max-w-xs">
                {siteConfig.description}
              </p>

              {/* Contact snippets */}
              <ul className="space-y-2.5 mb-6">
                <li className="flex items-start gap-2.5 text-cream/40 text-xs font-body">
                  <MapPin size={13} className="mt-0.5 shrink-0 text-cream/40" />
                  {siteConfig.contact.address}
                </li>
                <li className="flex items-center gap-2.5 text-cream/40 text-xs font-body">
                  <Phone size={13} className="shrink-0 text-cream/40" />
                  {siteConfig.contact.phone}
                </li>
                <li className="flex items-center gap-2.5 text-cream/40 text-xs font-body">
                  <Mail size={13} className="shrink-0 text-cream/40" />
                  {siteConfig.contact.email}
                </li>
              </ul>

              {/* Developer credit */}
              <div className="pt-4 border-t border-cream/8">
                <p className="font-body text-cream/30 text-[11px] mb-1">Designed &amp; Developed by</p>
                <a
                  href="https://haysten-dev.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-body text-cream/60 text-xs font-semibold underline underline-offset-2 decoration-cream/20 hover:text-cream hover:decoration-cream/50 transition-colors duration-200"
                >
                  Haysten D&apos;costa
                  <ExternalLink size={11} className="shrink-0" />
                </a>
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div className="lg:col-span-1">
              <ColHeading>Quick Links</ColHeading>
              <ul className="space-y-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-cream/50 text-sm hover:text-cream transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — School Life */}
            <div className="lg:col-span-1">
              <ColHeading>School Life</ColHeading>
              <ul className="space-y-2.5">
                {SCHOOL_LIFE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-cream/50 text-sm hover:text-cream transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Follow Us */}
            <div className="lg:col-span-1">
              <ColHeading>Follow Us</ColHeading>
              <div className="flex gap-3">
                {SOCIAL.map(({ svg, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-cream/15 flex items-center justify-center text-cream/50 hover:bg-cream hover:border-cream hover:text-primary transition-all duration-200 hover:scale-105"
                  >
                    {svg}
                  </a>
                ))}
              </div>

              {/* Admissions CTA */}
              <div className="mt-8 p-4 border border-cream/15 rounded-sm">
                <p className="font-body text-cream/60 text-xs mb-2">Admissions now open for</p>
                <p className="font-heading font-bold text-cream text-sm mb-3">2025 – 2026</p>
                <Link
                  href="/admissions"
                  className="inline-block font-body text-[11px] tracking-[0.15em] uppercase bg-cream text-primary font-bold px-4 py-2 hover:bg-cream-dark transition-colors duration-200"
                >
                  Apply Now
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────────────── */}
        <div className="border-t border-cream/8">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-1.5">
            <p className="font-body text-cream/30 text-xs text-center sm:text-left">
              &copy; {new Date().getFullYear()} St. Joseph&apos;s High School, Mapusa, Goa. All rights reserved.
            </p>
            <p className="font-body text-cream/20 text-xs italic">
              Designed by{" "}
              <a
                href="https://haysten-dev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 underline underline-offset-2 hover:text-cream/70 transition-colors"
              >
                Haysten D&apos;costa
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* ── Scroll-to-top ────────────────────────────────────────────── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-primary text-cream flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-primary-light hover:scale-110 ${
          showTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <ArrowUp size={17} />
      </button>
    </>
  );
}
