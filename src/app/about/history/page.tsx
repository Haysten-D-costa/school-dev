import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { siteConfig } from "@/config/site";
import {
  HISTORY_INTRO,
  HISTORY_FOUNDER_STATS,
  HISTORY_ERAS,
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
            <p className="font-body text-cream/50 text-base md:text-lg max-w-full leading-relaxed">
              A journey of faith, education, and service spanning over six decades of excellence.
            </p>
          </div>
        </section>

        {/* ── Intro ─────────────────────────────────────────────────── */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

            <p className="font-body text-neutral/65 text-base md:text-lg leading-relaxed max-w-3xl mb-14">
              {HISTORY_INTRO}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {HISTORY_FOUNDER_STATS.map((item) => (
                <div key={item.label} className="bg-white rounded-xl border border-primary/8 shadow-sm px-6 py-5">
                  <p className="font-body text-[10px] font-bold tracking-[0.25em] uppercase text-neutral/40 mb-1.5">
                    {item.label}
                  </p>
                  <p className="font-heading font-bold text-primary text-xl leading-tight">
                    {item.value}
                  </p>
                  <p className="font-body text-sm text-neutral/50 mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Era Chapters ──────────────────────────────────────────── */}
        {HISTORY_ERAS.map((era, i) => (
          <section
            key={era.label}
            className={`py-14 md:py-20 border-t border-primary/8 ${i % 2 === 0 ? "bg-cream" : "bg-white"}`}
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16">

                {/* Left: label + decorative year */}
                <div className="lg:col-span-1">
                  <p className="font-body text-[10px] font-bold tracking-[0.3em] uppercase text-primary/50 mb-1">
                    {era.label}
                  </p>
                  <p className="font-body text-sm text-neutral/40 tracking-wide mb-6">
                    {era.period}
                  </p>
                  <span className="hidden lg:block font-heading font-black text-[5.5rem] text-primary/6 leading-none select-none">
                    {era.period.slice(0, 4)}
                  </span>
                </div>

                {/* Right: heading + text */}
                <div className="lg:col-span-3">
                  <h2 className="font-heading text-primary font-bold text-2xl md:text-3xl leading-snug mb-7">
                    {era.heading}
                  </h2>
                  <div className="space-y-4">
                    {era.paragraphs.map((p, j) => (
                      <p key={j} className="font-body text-neutral/65 text-base leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}

        {/* ── Closing ───────────────────────────────────────────────── */}
        <section className="bg-cream py-14 md:py-20 border-t border-primary/8">
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
        </section>

      </main>
      <Footer />
    </>
  );
}
