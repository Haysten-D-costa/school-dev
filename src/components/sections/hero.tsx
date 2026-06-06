"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { TICKER_ITEMS } from "@/data/announcements";
import { siteConfig } from "@/config/site";

const TICKER_DOUBLED = [...TICKER_ITEMS, ...TICKER_ITEMS];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden" aria-label="Hero">

      {/* ── Background ──────────────────────────────────────────────── */}
      {/* Left cream panel */}
      <div className="absolute inset-0 bg-cream" />

      {/* Right crimson panel — diagonal clip */}
      <div
        className="absolute inset-0 bg-primary"
        style={{ clipPath: "polygon(52% 0, 100% 0, 100% 100%, 40% 100%)" }}
      />

      {/* Subtle dot grid on red panel */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          clipPath: "polygon(52% 0, 100% 0, 100% 100%, 40% 100%)",
          backgroundImage:
            "radial-gradient(circle, #FDF6EC 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative crimson arc on left side */}
      <div
        className="absolute -left-24 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-[40px] border-primary/8 pointer-events-none"
      />

      {/* ── Content grid ────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full pt-24 pb-28">

          {/* ── Left: School intro ─────────────────────────────────── */}
          <div className="flex flex-col justify-center">

            {/* Established badge */}
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="block w-6 h-0.5 bg-primary/40" />
              <span className="font-body text-[11px] tracking-[0.35em] uppercase text-primary/60">
                Est. {siteConfig.established}
              </span>
            </motion.div>

            {/* School name */}
            <motion.h1
              className="font-heading font-black text-primary leading-tight mb-4 text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              St. Joseph&apos;s
              <br />
              <span className="text-primary/70">High School</span>
            </motion.h1>

            {/* Divider + motto */}
            <motion.div
              className="flex items-center gap-3 mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="block w-10 h-0.5 bg-primary" />
              <p className="font-body italic text-primary/60 text-base tracking-wide">
                {siteConfig.motto}
              </p>
            </motion.div>

            {/* Location */}
            <motion.p
              className="flex items-center gap-1.5 font-body text-sm text-neutral/60 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <MapPin size={14} className="text-primary/50 shrink-0" />
              {siteConfig.location}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.72, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link
                href="/school-life/gallery"
                className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary-light text-cream font-body font-bold text-[13px] tracking-[0.15em] uppercase px-8 py-3.5 transition-all duration-300 hover:gap-4 shadow-lg shadow-primary/25"
              >
                Explore School <ArrowRight size={15} />
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-cream font-body font-bold text-[13px] tracking-[0.15em] uppercase px-8 py-3.5 transition-all duration-300"
              >
                Admissions 2025
              </Link>
            </motion.div>

            {/* Quick stats row */}
            <motion.div
              className="flex gap-8 mt-12 pt-8 border-t border-primary/12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {[
                { value: "75+",    label: "Years" },
                { value: "3,500+", label: "Students" },
                { value: "98%",    label: "Pass Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading font-black text-2xl text-primary leading-none">
                    {stat.value}
                  </p>
                  <p className="font-body text-[11px] tracking-[0.15em] uppercase text-neutral/55 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Red panel with floating cards ───────────────── */}
          <div className="hidden lg:flex flex-col items-center justify-center relative">

            {/* Large school monogram */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="font-heading font-black text-[200px] text-cream/6 leading-none">
                SJ
              </span>
            </motion.div>

            {/* Achievement badge — top left */}
            <motion.div
              className="absolute top-12 left-0 bg-cream rounded-xl px-5 py-3 shadow-xl border-l-4 border-primary"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              <p className="font-heading font-bold text-primary text-sm">🏆 State Rank #1</p>
              <p className="font-body text-[11px] text-neutral/55 mt-0.5">Science Olympiad 2024</p>
            </motion.div>

            {/* Admissions badge — bottom right */}
            <motion.div
              className="absolute bottom-16 right-0 bg-cream rounded-xl px-5 py-3 shadow-xl border-l-4 border-accent"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.05 }}
            >
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-accent font-bold">
                Now Open
              </p>
              <p className="font-heading font-bold text-primary text-sm mt-0.5">
                Admissions 2025–26
              </p>
            </motion.div>

            {/* Central crest circle */}
            <motion.div
              className="w-52 h-52 rounded-full border-4 border-cream/20 flex items-center justify-center relative z-10"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div className="w-44 h-44 rounded-full bg-cream/10 border border-cream/15 flex items-center justify-center">
                <div className="text-center text-cream">
                  <p className="font-heading font-black text-5xl leading-none">SJ</p>
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase mt-1 opacity-70">
                    Since 1947
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Announcement Ticker ──────────────────────────────────────── */}
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
