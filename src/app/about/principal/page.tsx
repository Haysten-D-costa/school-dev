import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { PRINCIPAL_MESSAGE } from "@/data/principal-message";
import { Quote } from "lucide-react";

export const metadata: Metadata = { title: "Principal's Message" };

const GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(253,246,236,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(253,246,236,0.04) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
};

export default function PrincipalPage() {
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
              Principal&apos;s Message
            </h1>
            <p className="font-body text-cream/50 text-base md:text-lg max-w-xl leading-relaxed">
              A word from the desk of {PRINCIPAL_MESSAGE.name}.
            </p>
          </div>
        </section>

        {/* ── Main content ──────────────────────────────────────────── */}
        <section className="bg-cream py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

              {/* ── Photo + nameplate ─────────────────────────────── */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start">

                {/* Photo frame */}
                <div className="relative w-64 lg:w-full shrink-0">
                  <div className="absolute -top-3 -left-3 w-full h-full border-2 border-primary/20 rounded-sm" />
                  <div className="relative w-full aspect-3/4 bg-cream-dark rounded-sm overflow-hidden flex items-center justify-center">
                    {/* Replace this div with an <img> once you have the photo */}
                    <div className="text-center text-neutral/30">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <span className="font-heading font-black text-3xl text-primary/40">
                          {PRINCIPAL_MESSAGE.name.split(" ").map((w: string) => w[0]).slice(1, 3).join("")}
                        </span>
                      </div>
                      <p className="font-body text-xs tracking-wide">Principal&apos;s Photo</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 bg-primary" />
                </div>

                {/* Name plate */}
                <div className="mt-6 text-center lg:text-left">
                  <p className="font-heading font-bold text-primary text-xl">
                    {PRINCIPAL_MESSAGE.name}
                  </p>
                  <p className="font-body text-[12px] tracking-[0.12em] uppercase text-neutral/50 mt-1.5">
                    {PRINCIPAL_MESSAGE.designation}
                  </p>
                </div>

                {/* Pull quote sidebar — desktop */}
                <div className="hidden lg:block mt-10 border-t border-primary/10 pt-8">
                  <Quote size={28} className="text-primary/15 fill-primary/15 mb-3" />
                  <p className="font-heading italic text-primary/55 text-sm leading-relaxed">
                    &ldquo;{PRINCIPAL_MESSAGE.shortQuote}&rdquo;
                  </p>
                </div>

              </div>

              {/* ── Full message ──────────────────────────────────── */}
              <div className="lg:col-span-8">

                {/* Pull quote — mobile */}
                <div className="lg:hidden relative mb-8">
                  <Quote size={36} className="absolute -top-1 -left-1 text-primary/10 fill-primary/10" />
                  <blockquote className="font-heading italic text-primary/75 text-lg sm:text-xl leading-relaxed pl-4 border-l-4 border-primary/25">
                    &ldquo;{PRINCIPAL_MESSAGE.shortQuote}&rdquo;
                  </blockquote>
                </div>

                {/* Paragraphs */}
                <div className="space-y-5">
                  {PRINCIPAL_MESSAGE.message.map((para: string, i: number) => (
                    <p key={i} className="font-body text-neutral/70 text-base leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Signature */}
                <div className="mt-12 pt-8 border-t border-primary/10">
                  <p className="font-body text-neutral/40 text-sm mb-1">Warm regards,</p>
                  <p className="font-heading font-bold text-primary text-lg">
                    {PRINCIPAL_MESSAGE.name}
                  </p>
                  <p className="font-body text-[12px] tracking-[0.12em] uppercase text-neutral/45 mt-1">
                    {PRINCIPAL_MESSAGE.designation}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
