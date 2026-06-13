import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar, Footer } from "@/components/layout";
import CollectionView from "@/components/gallery/collection-view";
import { COLLECTIONS, COLLECTION_SLUGS, ALBUMS } from "@/data/gallery";
import { ArrowLeft, Images } from "lucide-react";

export function generateStaticParams() {
  return COLLECTION_SLUGS.map((slug) => ({ collection: slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ collection: string }> }
): Promise<Metadata> {
  const { collection: slug } = await props.params;
  const col = COLLECTIONS.find((c) => c.slug === slug);
  return { title: col ? `${col.title} | Gallery` : "Gallery" };
}

export default async function CollectionPage(
  props: { params: Promise<{ collection: string }> }
) {
  const { collection: slug } = await props.params;
  const col = COLLECTIONS.find((c) => c.slug === slug);

  if (!col) notFound();

  const images = col.images;
  const albumLabel = ALBUMS.find((a) => a.id === col.album)?.label ?? col.album;

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative bg-primary overflow-hidden pt-36 pb-14">
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: "linear-gradient(rgba(253,246,236,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(253,246,236,0.15) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-cream/20" />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <Link
              href="/school-life/gallery"
              className="inline-flex items-center gap-2 font-body text-white/40 text-xs tracking-wide hover:text-cream transition-colors duration-200 mb-6"
            >
              <ArrowLeft size={12} /> Back to Gallery
            </Link>

            <div className="mb-4">
              <span className="inline-block font-body text-cream/60 text-[10px] font-bold tracking-[0.3em] uppercase">
                {albumLabel}
              </span>
            </div>

            <h1 className="font-heading text-white font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl mb-4">
              {col.title}
            </h1>

            <div className="flex items-center gap-4">
              <span className="font-body text-white/40 text-sm">{col.displayDate}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-1.5 font-body text-white/40 text-sm">
                <Images size={13} className="text-cream/50" />
                {images.length} photos
              </span>
            </div>
          </div>
        </section>

        {/* ── Cover strip ──────────────────────────────────────────── */}
        <div className="w-full h-64 md:h-80 overflow-hidden bg-primary/10 relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={col.cover}
            alt={col.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-primary/60 via-transparent to-primary/60" />
        </div>

        {/* ── Image grid ───────────────────────────────────────────── */}
        <section className="bg-cream py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <CollectionView images={images} />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
