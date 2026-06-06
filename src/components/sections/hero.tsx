"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { TICKER_ITEMS } from "@/data/announcements";
import { HERO_IMAGE, HERO_BUTTONS, HERO_STATS, HERO_CARDS } from "@/data/hero";
import { siteConfig } from "@/config/site";

const TICKER_DOUBLED = [...TICKER_ITEMS, ...TICKER_ITEMS];

export default function Hero() {
  return (
    <section className="relative w-full lg:min-h-screen overflow-hidden" aria-label="Hero">

      {/* ── Full-width background image ──────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ── Left crimson overlay — diagonal right edge (desktop) ─────── */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background: "rgba(123,23,23,0.93)",
          clipPath: "polygon(0 0, 52% 0, 40% 100%, 0 100%)",
        }}
      />

      {/* ── Mobile: full crimson overlay ──────────────────────────────── */}
      <div className="absolute inset-0 bg-primary/90 lg:hidden" />

      {/* ── Subtle dot grid on right image area (desktop) ─────────────── */}
      <div
        className="absolute inset-0 opacity-10 hidden lg:block"
        style={{
          clipPath: "polygon(52% 0, 100% 0, 100% 100%, 40% 100%)",
          backgroundImage: "radial-gradient(circle, #FDF6EC 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative arc */}
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-40 border-cream/5 pointer-events-none" />

      {/* ── Content grid ─────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full pt-24 pb-28">

          {/* ── Left: text on crimson overlay ──────────────────────── */}
          <div className="flex flex-col justify-center max-w-lg lg:max-w-none">

            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="block w-6 h-0.5 bg-cream/40" />
              <span className="font-body text-[11px] tracking-[0.35em] uppercase text-cream/60">
                Est. {siteConfig.established}
              </span>
            </motion.div>

            <motion.h1
              className="font-heading font-black text-cream leading-tight mb-4 text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {siteConfig.name}
            </motion.h1>

            <motion.div
              className="flex items-center gap-3 mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="block w-10 h-0.5 bg-cream/50" />
              <p className="font-body italic text-cream/60 text-base tracking-wide">
                {siteConfig.motto}
              </p>
            </motion.div>

            <motion.p
              className="flex items-center gap-1.5 font-body text-sm text-cream/50 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <MapPin size={14} className="text-cream/40 shrink-0" />
              {siteConfig.location}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.72, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link
                href={HERO_BUTTONS.primary.href}
                className="inline-flex items-center gap-2.5 bg-cream hover:bg-cream-dark text-primary font-body font-bold text-[13px] tracking-[0.15em] uppercase px-8 py-3.5 transition-all duration-300 hover:gap-4 shadow-lg shadow-black/20"
              >
                {HERO_BUTTONS.primary.label} <ArrowRight size={15} />
              </Link>
              <Link
                href={HERO_BUTTONS.secondary.href}
                className="inline-flex items-center gap-2.5 border-2 border-cream/50 text-cream hover:bg-cream/10 font-body font-bold text-[13px] tracking-[0.15em] uppercase px-8 py-3.5 transition-all duration-300"
              >
                {HERO_BUTTONS.secondary.label}
              </Link>
            </motion.div>

            <motion.div
              className="flex gap-8 mt-12 pt-8 border-t border-cream/15"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading font-black text-2xl text-cream leading-none">
                    {stat.value}
                  </p>
                  <p className="font-body text-[11px] tracking-[0.15em] uppercase text-cream/45 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: clean image + floating cards ────────────────── */}
          <div className="hidden lg:flex flex-col items-center justify-center relative">

            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              <motion.div
                className="bg-cream rounded-xl px-5 py-3 shadow-xl border-l-4 border-primary"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.85 }}
              >
                <p className="font-heading font-bold text-primary text-sm">
                  {HERO_CARDS.achievement.title}
                </p>
                <p className="font-body text-[11px] text-neutral/55 mt-0.5">
                  {HERO_CARDS.achievement.subtitle}
                </p>
              </motion.div>

              <motion.div
                className="bg-cream rounded-xl px-5 py-3 shadow-xl border-l-4 border-accent"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.05 }}
              >
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-accent font-bold">
                  {HERO_CARDS.admissions.badge}
                </p>
                <p className="font-heading font-bold text-primary text-sm mt-0.5">
                  {HERO_CARDS.admissions.title}
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Announcement Ticker ──────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-primary/90 backdrop-blur-sm flex items-center overflow-hidden border-t border-cream/10">
        <div className="shrink-0 px-4 border-r border-cream/20 flex items-center h-full bg-primary">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-cream/70 whitespace-nowrap">
            Latest News
          </span>
        </div>
        <div className="flex-1 overflow-hidden relative">
          <div className="flex animate-ticker whitespace-nowrap">
            {TICKER_DOUBLED.map((item, i) => (
              <span key={i} className="inline-flex items-center font-body text-sm text-cream/80 px-8">
                {item}
                <span className="mx-8 text-cream/25">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
