"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { NEWS_EVENTS, CATEGORY_COLORS, CATEGORY_LABELS } from "@/data/events";
import type { NewsEvent } from "@/data/events";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(253,246,236,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(253,246,236,0.04) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
};

type Filter = "all" | "news" | "event";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all",   label: "All" },
  { key: "news",  label: "News" },
  { key: "event", label: "Events" },
];

/* ── Type badge ──────────────────────────────────────────────────────────── */
function TypeBadge({ type }: { type: NewsEvent["type"] }) {
  return type === "event" ? (
    <span className="inline-flex items-center gap-1.5 bg-primary text-white font-body font-bold text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full">
      <Calendar size={9} />
      Event
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 bg-cream text-primary font-body font-bold text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border border-primary/20">
      News
    </span>
  );
}

/* ── Featured card ───────────────────────────────────────────────────────── */
function FeaturedCard({ item }: { item: NewsEvent }) {
  return (
    <Link href={`/school-life/news/${item.slug}`} className="group block">
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl aspect-video bg-primary/10 mb-5 shadow-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/40 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <TypeBadge type={item.type} />
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span className={`font-body text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-0.5 rounded-full ${CATEGORY_COLORS[item.category]}`}>
          {CATEGORY_LABELS[item.category]}
        </span>
        <span className="flex items-center gap-1.5 font-body text-neutral/50 text-xs">
          <Calendar size={11} className="text-primary/40" />
          {item.displayDate}
        </span>
        {item.time && (
          <span className="flex items-center gap-1.5 font-body text-neutral/50 text-xs">
            <Clock size={11} className="text-primary/40" />
            {item.time}
          </span>
        )}
        {item.location && (
          <span className="flex items-center gap-1.5 font-body text-neutral/50 text-xs">
            <MapPin size={11} className="text-primary/40" />
            {item.location}
          </span>
        )}
      </div>

      <h2 className="font-heading text-primary font-bold text-2xl md:text-3xl leading-snug mb-3 group-hover:text-accent transition-colors duration-200">
        {item.title}
      </h2>
      <p className="font-body text-neutral/65 text-sm leading-relaxed mb-4 line-clamp-3">
        {item.excerpt}
      </p>
      <span className="inline-flex items-center gap-2 font-body text-primary text-sm font-bold group-hover:gap-3 transition-all duration-200">
        Read More <ArrowRight size={14} />
      </span>
    </Link>
  );
}

/* ── Regular card ────────────────────────────────────────────────────────── */
function RegularCard({ item }: { item: NewsEvent }) {
  return (
    <Link
      href={`/school-life/news/${item.slug}`}
      className="group flex flex-col h-full bg-white rounded-xl border border-primary/10 overflow-hidden hover:shadow-lg hover:border-primary/25 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video bg-primary/5 shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <TypeBadge type={item.type} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`font-body text-[10px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-full ${CATEGORY_COLORS[item.category]}`}>
            {CATEGORY_LABELS[item.category]}
          </span>
          <span className="flex items-center gap-1 font-body text-neutral/45 text-[11px]">
            <Calendar size={10} className="text-primary/35" />
            {item.displayDate}
          </span>
          {item.location && (
            <span className="flex items-center gap-1 font-body text-neutral/45 text-[11px]">
              <MapPin size={10} className="text-primary/35" />
              {item.location}
            </span>
          )}
        </div>

        <h3 className="font-heading text-primary font-bold text-base leading-snug mb-2 group-hover:text-accent transition-colors duration-200 line-clamp-2">
          {item.title}
        </h3>
        <p className="font-body text-neutral/60 text-sm leading-relaxed line-clamp-2 flex-1">
          {item.excerpt}
        </p>

        <div className="mt-4 pt-4 border-t border-primary/8">
          <span className="inline-flex items-center gap-1.5 font-body text-primary text-xs font-bold group-hover:gap-2.5 transition-all duration-200">
            Read More <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function NewsEventsPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const sorted   = [...NEWS_EVENTS].sort((a, b) => b.date.localeCompare(a.date));
  const filtered = filter === "all" ? sorted : sorted.filter((i) => i.type === filter);

  const featured = filtered[0];
  const rest     = filtered.slice(1);

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────── */}
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
              <span className="font-body text-cream/55 text-[11px] tracking-[0.35em] uppercase">School Life</span>
              <span className="block h-px w-8 bg-cream/30" />
            </div>
            <h1 className="font-heading text-cream font-black text-5xl sm:text-6xl lg:text-[4.5rem] leading-tight mb-5">
              News &amp; Events
            </h1>
            <p className="font-body text-cream/50 text-base md:text-lg max-w-xl leading-relaxed">
              Stay up to date with everything happening across the school — events, activities, and announcements.
            </p>
          </div>
        </section>

        {/* ── Filter + Content ─────────────────────────────────────── */}
        <section className="bg-cream py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

            {/* Filter pills */}
            <div className="flex gap-2 mb-12">
              {FILTERS.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`font-body text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full border transition-all duration-200 ${
                    filter === key
                      ? "bg-primary text-white border-primary"
                      : "bg-transparent text-neutral/60 border-neutral/20 hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-body text-neutral/30 text-sm">No items found.</p>
              </div>
            ) : (
              <div className="space-y-10">

                {/* Featured + first side card */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div
                    className="lg:col-span-2"
                    style={{ animation: "fadeSlideUp 0.45s ease", animationFillMode: "both" }}
                  >
                    <FeaturedCard item={featured} />
                  </div>
                  {rest[0] && (
                    <div style={{ animation: "fadeSlideUp 0.45s ease 0.1s", animationFillMode: "both" }}>
                      <RegularCard item={rest[0]} />
                    </div>
                  )}
                </div>

                {/* Remaining grid */}
                {rest.length > 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {rest.slice(1).map((item, i) => (
                      <div
                        key={item.slug}
                        className="h-full"
                        style={{
                          animation: "fadeSlideUp 0.45s ease",
                          animationDelay: `${i * 80}ms`,
                          animationFillMode: "both",
                        }}
                      >
                        <RegularCard item={item} />
                      </div>
                    ))}
                  </div>
                )}

              </div>
            )}

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
