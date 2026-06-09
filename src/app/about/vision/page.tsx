import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { siteConfig } from "@/config/site";
import { Eye, Target, Heart, Star, Users, BookOpen, Quote } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  VISION_FIGURE,
  MISSION_FIGURE,
  VISION_PARAGRAPHS,
  MISSION,
  VALUES,
  SALESIAN_PILLARS,
} from "@/data/values";
import type { CoreValue } from "@/data/values";

export const metadata: Metadata = { title: "Vision & Mission" };

const VALUES_ICON_MAP: Record<string, LucideIcon> = {
  Eye, Target, Heart, Star, Users, BookOpen,
};

const GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(253,246,236,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(253,246,236,0.04) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
};

type Figure = { name: string; role: string; image: string; quote: string };

function PhotoCol({ figure }: { figure: Figure }) {
  return (
    <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
      <div className="relative w-64 lg:w-full shrink-0">
        <div className="absolute -top-3 -left-3 w-full h-full border-2 border-primary/20 rounded-sm" />
        <div className="relative w-full aspect-3/4 bg-cream-dark rounded-sm overflow-hidden flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={figure.image}
            alt={figure.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-10 h-10 bg-primary" />
      </div>
      <div className="mt-6 text-center lg:text-left">
        <p className="font-heading font-bold text-primary text-xl">{figure.name}</p>
        <p className="font-body text-[12px] tracking-[0.12em] uppercase text-neutral/50 mt-1.5">
          {figure.role}
        </p>
      </div>
    </div>
  );
}

function ContentCol({
  label,
  heading,
  quote,
  paragraphs,
}: {
  label: string;
  heading: string;
  quote: string;
  paragraphs: string[];
}) {
  return (
    <div className="lg:col-span-8">
      <p className="font-body text-[10px] font-bold tracking-[0.35em] uppercase text-primary/50 mb-2">
        {label}
      </p>
      <h2 className="font-heading font-bold text-primary text-3xl md:text-4xl mb-8">
        {heading}
      </h2>

      <div className="mb-8">
        <Quote size={28} className="text-primary/20 fill-primary/20 mb-3" />
        <blockquote className="font-heading italic text-primary/75 text-lg sm:text-xl leading-relaxed pl-4 border-l-4 border-primary/25">
          {quote}
        </blockquote>
      </div>

      <div className="space-y-5">
        {paragraphs.map((para, i) => (
          <p key={i} className="font-body text-neutral/70 text-base leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

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
            <p className="font-body text-cream/50 text-base md:text-lg max-w-2xl leading-relaxed">
              The educative community consisting of parents, teachers, pupils and management, work together
              for the holistic development of the pupil in a family atmosphere at {siteConfig.name}.
            </p>
          </div>
        </section>

        {/* ── Vision ────────────────────────────────────────────────── */}
        <section className="bg-cream py-16 md:py-24 border-b border-primary/8">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <PhotoCol figure={VISION_FIGURE} />
              <ContentCol
                label="Our Direction"
                heading="Our Vision"
                quote={VISION_FIGURE.quote}
                paragraphs={VISION_PARAGRAPHS}
              />
            </div>
          </div>
        </section>

        {/* ── Mission ───────────────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-24 border-b border-primary/8">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <ContentCol
                label="Our Purpose"
                heading="Our Mission"
                quote={MISSION_FIGURE.quote}
                paragraphs={[MISSION]}
              />
              <PhotoCol figure={MISSION_FIGURE} />
            </div>
          </div>
        </section>

        {/* ── Core Values ───────────────────────────────────────────── */}
        <section className="bg-cream py-14 md:py-20 border-b border-primary/8">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="mb-12">
              <p className="font-body text-[10px] font-bold tracking-[0.35em] uppercase text-primary/50 mb-2">
                What We Stand For
              </p>
              <h2 className="font-heading text-primary font-bold text-2xl md:text-3xl">
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map(({ icon, title, description }: CoreValue) => {
                const Icon = VALUES_ICON_MAP[icon];
                return (
                  <div
                    key={title}
                    className="group bg-white rounded-xl border border-primary/8 p-6 hover:border-primary/20 hover:shadow-md transition-all duration-200"
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

        {/* ── Salesian Pillars ──────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20 border-b border-primary/8">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

            <div className="mb-12">
              <p className="font-body text-[10px] font-bold tracking-[0.35em] uppercase text-primary/50 mb-2">
                The Salesian Method
              </p>
              <h2 className="font-heading text-primary font-bold text-2xl md:text-3xl">
                Three Pillars of Our Education
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-primary/10 rounded-xl overflow-hidden">
              {SALESIAN_PILLARS.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className={`relative p-8 md:p-10 flex flex-col gap-6 ${
                    i === 1
                      ? "bg-primary text-cream"
                      : "bg-white text-neutral"
                  } ${i < 2 ? "md:border-r border-primary/10" : ""} border-b md:border-b-0 border-primary/10 last:border-b-0`}
                >
                  {/* Roman numeral */}
                  <span
                    className={`font-heading font-black text-6xl leading-none select-none ${
                      i === 1 ? "text-cream/10" : "text-primary/8"
                    }`}
                  >
                    {pillar.numeral}
                  </span>

                  <div>
                    <p
                      className={`font-body text-[11px] tracking-[0.25em] uppercase mb-1 ${
                        i === 1 ? "text-cream/50" : "text-primary/45"
                      }`}
                    >
                      {pillar.subtitle}
                    </p>
                    <h3
                      className={`font-heading font-bold text-2xl ${
                        i === 1 ? "text-cream" : "text-primary"
                      }`}
                    >
                      {pillar.title}
                    </h3>
                  </div>

                  <p
                    className={`font-body text-sm leading-relaxed ${
                      i === 1 ? "text-cream/70" : "text-neutral/60"
                    }`}
                  >
                    {pillar.description}
                  </p>
                </div>
              ))}
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
