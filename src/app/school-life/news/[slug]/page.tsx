import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar, Footer } from "@/components/layout";
import { NEWS_EVENTS, NEWS_EVENT_SLUGS, CATEGORY_COLORS, CATEGORY_LABELS } from "@/data/events";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";

const GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(253,246,236,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(253,246,236,0.04) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
};

export function generateStaticParams() {
  return NEWS_EVENT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const item = NEWS_EVENTS.find((n) => n.slug === slug);
  return { title: item ? `${item.title} | News & Events` : "News & Events" };
}

export default async function NewsDetailPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const item = NEWS_EVENTS.find((n) => n.slug === slug);

  if (!item) notFound();

  const others = NEWS_EVENTS.filter((n) => n.slug !== slug).slice(0, 4);

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative bg-primary overflow-hidden pt-36 pb-14">
          <div className="absolute inset-0" style={GRID_STYLE} />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 80% at 10% 60%, rgba(253,246,236,0.05) 0%, transparent 60%)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-cream/10" />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <Link
              href="/school-life/news"
              className="inline-flex items-center gap-2 font-body text-cream/40 text-xs tracking-wide hover:text-cream/70 transition-colors duration-200 mb-6"
            >
              <ArrowLeft size={12} /> Back to News &amp; Events
            </Link>

            {/* Badges */}
            <div className="flex items-center gap-2 mb-5">
              <span className={`font-body text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full ${CATEGORY_COLORS[item.category]}`}>
                {CATEGORY_LABELS[item.category]}
              </span>
              {item.type === "event" && (
                <span className="inline-flex items-center gap-1.5 bg-cream/10 text-cream/80 font-body font-bold text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border border-cream/20">
                  <Calendar size={9} /> Event
                </span>
              )}
            </div>

            <h1 className="font-heading text-cream font-black text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight mb-6 max-w-4xl">
              {item.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5">
              <span className="flex items-center gap-1.5 font-body text-cream/45 text-sm">
                <Calendar size={13} className="text-cream/40" />
                {item.displayDate}
              </span>
              {item.time && (
                <span className="flex items-center gap-1.5 font-body text-cream/45 text-sm">
                  <Clock size={13} className="text-cream/40" />
                  {item.time}
                </span>
              )}
              {item.location && (
                <span className="flex items-center gap-1.5 font-body text-cream/45 text-sm">
                  <MapPin size={13} className="text-cream/40" />
                  {item.location}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* ── Article body ─────────────────────────────────────────── */}
        <section className="bg-cream py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

              {/* Main content */}
              <div className="flex-1 min-w-0">

                {/* Cover image */}
                <div className="relative overflow-hidden rounded-xl aspect-video bg-primary/8 mb-10 shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {item.imageCaption && (
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-primary/70">
                      <p className="font-body text-white/70 text-[11px] italic">{item.imageCaption}</p>
                    </div>
                  )}
                </div>

                {/* Paragraphs */}
                <div className="space-y-5">
                  {item.content.map((para, i) => (
                    <p key={i} className="font-body text-neutral/75 text-base md:text-lg leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-primary/10">
                  <Link
                    href="/school-life/news"
                    className="inline-flex items-center gap-2 font-body text-primary text-sm font-bold hover:gap-3 transition-all duration-200"
                  >
                    <ArrowLeft size={14} /> Back to News &amp; Events
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              {others.length > 0 && (
                <aside className="w-full lg:w-72 shrink-0">
                  <p className="font-body text-[10px] font-bold tracking-[0.25em] uppercase text-neutral/35 mb-5">
                    More from the School
                  </p>
                  <div className="space-y-5">
                    {others.map((other) => (
                      <Link
                        key={other.slug}
                        href={`/school-life/news/${other.slug}`}
                        className="group flex gap-4 items-start"
                      >
                        <div className="w-20 h-16 rounded-lg overflow-hidden bg-primary/8 shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={other.image}
                            alt={other.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className={`font-body text-[10px] font-bold tracking-[0.12em] uppercase px-1.5 py-0.5 rounded ${CATEGORY_COLORS[other.category]}`}>
                            {CATEGORY_LABELS[other.category]}
                          </span>
                          <p className="font-heading text-primary text-sm font-semibold leading-snug mt-1 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                            {other.title}
                          </p>
                          <p className="font-body text-neutral/40 text-[11px] mt-0.5">{other.displayDate}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </aside>
              )}

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
