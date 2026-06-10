import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { siteConfig } from "@/config/site";
import { Quote } from "lucide-react";
import {
  HISTORY_INTRO,
  HISTORY_FOUNDER_STATS,
  TIMELINE,
  FOUNDERS,
  HISTORY_CLOSING,
} from "@/data/history";

export const metadata: Metadata = { title: "Our History" };

const GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(253,246,236,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(253,246,236,0.04) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
};

export default function HistoryPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="relative bg-primary overflow-hidden pt-36 pb-16">
          <div className="absolute inset-0" style={GRID_STYLE} />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 80% at 10% 60%, rgba(253,246,236,0.05) 0%, transparent 60%)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-cream/10" />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="block h-px w-8 bg-cream/30" />
              <span className="font-body text-cream/55 text-[11px] tracking-[0.35em] uppercase">About Us</span>
              <span className="block h-px w-8 bg-cream/30" />
            </div>
            <h1 className="font-heading text-cream font-black text-5xl sm:text-6xl lg:text-[4.5rem] leading-tight mb-5">
              Our History
            </h1>
            <p className="font-body text-cream/50 text-base md:text-lg max-w-2xl leading-relaxed">
              A journey of faith, education, and service spanning over six decades of excellence.
            </p>
          </div>
        </section>

        {/* ── Intro + Stats ─────────────────────────────────────────── */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

            <p className="font-body text-neutral/65 text-base md:text-lg leading-relaxed max-w-auto mb-14">
              {HISTORY_INTRO}
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {HISTORY_FOUNDER_STATS.map((stat) => (
                <div key={stat.label} className="bg-white border border-primary/8 rounded-xl px-6 py-5">
                  <p className="font-body text-[10px] font-bold tracking-[0.25em] uppercase text-neutral/40 mb-1.5">
                    {stat.label}
                  </p>
                  <p className="font-heading font-bold text-primary text-2xl leading-tight">
                    {stat.value}
                  </p>
                  {stat.sub && (
                    <p className="font-body text-sm text-neutral/50 mt-0.5">{stat.sub}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ──────────────────────────────────────────────── */}
        <section className="bg-white py-20 md:py-28 border-t border-primary/8">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

            {/* Section header */}
            <div className="mb-20">
              <p className="font-body text-[10px] font-bold tracking-[0.35em] uppercase text-primary/50 mb-2">
                Key Milestones
              </p>
              <h2 className="font-heading font-bold text-primary text-3xl md:text-4xl mb-4">
                Our Journey Through Time
              </h2>
              <p className="font-body text-neutral/55 text-base max-w-xl leading-relaxed">
                Key milestones and achievements that have shaped our school&apos;s history and legacy.
              </p>
            </div>

            {/* Timeline body */}
            <div className="relative max-w-4xl">

              {/* Continuous vertical line */}
              <div className="absolute left-2 sm:left-40 top-0 bottom-0 w-px bg-primary/15" />

              <div className="flex flex-col">
                {TIMELINE.map((item, i) => (
                  <div
                    key={i}
                    data-timeline-item
                    className={`relative flex items-start ${i < TIMELINE.length - 1 ? "pb-16 md:pb-20" : ""}`}
                  >
                    {/* Date label — right-aligned in fixed 10rem column, desktop only */}
                    <div className="w-40 shrink-0 pt-1 pr-7 text-right hidden sm:block">
                      <p className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-primary/60 leading-snug">
                        {item.date}
                      </p>
                    </div>

                    {/* Dot on the line */}
                    <div className="absolute left-2 sm:left-40 top-2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-2 border-white" />

                    {/* Content */}
                    <div className="flex-1 pl-7 sm:pl-10">
                      {/* Mobile: date above heading */}
                      <p className="sm:hidden font-body text-[11px] font-bold tracking-[0.2em] uppercase text-primary/55 mb-2">
                        {item.date}
                      </p>
                      <h3 className="font-heading font-bold text-primary text-xl md:text-2xl leading-snug mb-3">
                        {item.heading}
                      </h3>
                      <p className="font-body text-neutral/60 text-base leading-relaxed max-w-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── Our Founders ──────────────────────────────────────────── */}
        <section className="bg-cream py-16 md:py-24 border-t border-primary/8">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

            <div className="mb-14">
              <p className="font-body text-[10px] font-bold tracking-[0.35em] uppercase text-primary/50 mb-2">
                The Visionary Saints
              </p>
              <h2 className="font-heading font-bold text-primary text-3xl md:text-4xl">
                Our Founders
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-primary/10">
              {FOUNDERS.map((founder, i) => (
                <div
                  key={founder.name}
                  className={`flex flex-col gap-8 ${i === 0 ? "lg:pr-16 pb-14 lg:pb-0 border-b lg:border-b-0 border-primary/10" : "lg:pl-16"}`}
                >
                  {/* Framed photo */}
                  <div className="relative w-44 shrink-0">
                    <div className="absolute -top-3 -left-3 w-full h-full border-2 border-primary/20 rounded-sm" />
                    <div className="relative w-full aspect-square bg-cream-dark rounded-sm overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary" />
                  </div>

                  {/* Quote then identity */}
                  <div>
                    <Quote size={22} className="text-primary/15 fill-primary/15 mb-3" />
                    <blockquote className="font-heading italic text-primary/65 text-base leading-relaxed pl-4 border-l-4 border-primary/20 mb-6">
                      {founder.quote}
                    </blockquote>

                    <div className="w-10 h-px bg-primary/20 mb-5" />
                    <p className="font-heading font-bold text-primary text-2xl leading-snug mb-1">
                      {founder.name}
                    </p>
                    <p className="font-body text-[11px] tracking-[0.18em] uppercase text-neutral/45">
                      {founder.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Closing ───────────────────────────────────────────────── */}
        {/* <section className="bg-cream py-14 md:py-20 border-t border-primary/8">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <p className="font-body text-[10px] font-bold tracking-[0.35em] uppercase text-neutral/40 mb-3">
                {HISTORY_CLOSING.eyebrow}
              </p>
              <h2 className="font-heading text-primary font-bold text-2xl md:text-3xl leading-snug mb-5">
                {HISTORY_CLOSING.heading}
              </h2>
              <p className="font-body text-neutral/65 text-base leading-relaxed mb-8">
                {HISTORY_CLOSING.body}
              </p>
              <div className="border-l-2 border-primary/20 pl-5">
                <p className="font-heading italic text-primary/55 text-sm leading-relaxed">
                  &ldquo;{siteConfig.motto}&rdquo;
                </p>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-neutral/30 mt-2">
                  — {siteConfig.name}, Est. {siteConfig.established}
                </p>
              </div>
            </div>
          </div>
        </section> */}

      </main>
      <Footer />
    </>
  );
}
