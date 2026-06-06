import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { siteConfig } from "@/config/site";
import { Eye, Target, Heart, Star, Users, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { VISION, MISSION, VALUES, COMMITMENTS } from "@/data/values";

export const metadata: Metadata = { title: "Vision & Mission" };

const VALUES_ICON_MAP: Record<string, LucideIcon> = {
  Eye, Target, Heart, Star, Users, BookOpen,
};

const GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(253,246,236,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(253,246,236,0.04) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
};

export default function VisionPage() {
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
              Vision &amp; Mission
            </h1>
            <p className="font-body text-cream/50 text-base md:text-lg max-w-full leading-relaxed">
              The educative community consisting of parents, teachers, pupils and management, work together for the ‘holistic’ development of the pupil in a family atmosphere at {siteConfig.name}.
            </p>
          </div>
        </section>

        {/* ── Vision & Mission ──────────────────────────────────────── */}
        <section className="bg-cream py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Vision */}
              <div className="bg-primary rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center shrink-0">
                    <Eye size={18} className="text-cream" />
                  </div>
                  <div>
                    <p className="font-body text-[10px] font-bold tracking-[0.3em] uppercase text-cream/40">Our</p>
                    <p className="font-heading font-bold text-cream text-lg leading-none">Vision</p>
                  </div>
                </div>
                <p className="font-heading italic text-cream/80 text-lg md:text-xl leading-relaxed">
                  &ldquo;{VISION}&rdquo;
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-2xl border border-primary/8 shadow-sm p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center shrink-0">
                    <Target size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-[10px] font-bold tracking-[0.3em] uppercase text-neutral/40">Our</p>
                    <p className="font-heading font-bold text-primary text-lg leading-none">Mission</p>
                  </div>
                </div>
                <p className="font-body text-neutral/65 text-base leading-relaxed">
                  {MISSION}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── Core Values ───────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20 border-t border-primary/8">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

            <div className="mb-12">
              <p className="font-body text-[10px] font-bold tracking-[0.35em] uppercase text-primary/50 mb-2">
                What We Stand For
              </p>
              <h2 className="font-heading text-primary font-bold text-2xl md:text-3xl">
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VALUES.map(({ icon, title, description }) => {
                const Icon = VALUES_ICON_MAP[icon];
                return (
                  <div
                    key={title}
                    className="group bg-cream rounded-xl border border-primary/8 p-6 hover:border-primary/20 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/12 transition-colors duration-200">
                      <Icon size={17} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-primary text-base mb-2">{title}</h3>
                    <p className="font-body text-neutral/60 text-sm leading-relaxed">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Our Commitments ───────────────────────────────────────── */}
        <section className="bg-cream py-14 md:py-20 border-t border-primary/8">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

              {/* Left */}
              <div>
                <p className="font-body text-[10px] font-bold tracking-[0.35em] uppercase text-primary/50 mb-2">
                  How We Live Our Mission
                </p>
                <h2 className="font-heading text-primary font-bold text-2xl md:text-3xl mb-4">
                  Our Commitments
                </h2>
                <p className="font-body text-neutral/60 text-base leading-relaxed">
                  Our vision and mission are not simply words — they are lived out daily in our classrooms,
                  our corridors, and our community. These are the commitments that shape everything we do.
                </p>
              </div>

              {/* Right: commitment list */}
              <div className="space-y-4">
                {COMMITMENTS.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="font-heading font-black text-primary/15 text-2xl leading-none shrink-0 w-7 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-body text-neutral/65 text-sm leading-relaxed pt-1">{item}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── Motto closing ─────────────────────────────────────────── */}
        <section className="relative bg-primary py-14 md:py-20 overflow-hidden">
          <div className="absolute inset-0" style={GRID_STYLE} />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <p className="font-body text-cream/40 text-[11px] tracking-[0.35em] uppercase mb-4">Our Motto</p>
            <p className="font-heading font-black text-cream text-3xl md:text-5xl tracking-wide mb-4">
              {siteConfig.motto}
            </p>
            <p className="font-body text-cream/45 text-sm tracking-[0.15em]">
              {siteConfig.name} &nbsp;·&nbsp; Est. {siteConfig.established}
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
