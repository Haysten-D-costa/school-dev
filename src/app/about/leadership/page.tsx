import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { LEADERSHIP } from "@/data/leadership";
import type { LeadershipMember } from "@/data/leadership";
import { Quote, Mail } from "lucide-react";

export const metadata: Metadata = { title: "Leadership Desk" };

const GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(253,246,236,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(253,246,236,0.04) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
};

function LeaderCard({ member, flip }: { member: LeadershipMember; flip: boolean }) {
  const initials = member.name
    .split(" ")
    .filter((w) => w.length > 1)
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  const photoCol = (
    <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
      {/* Photo frame */}
      <div className="relative w-64 lg:w-full shrink-0">
        <div className="absolute -top-3 -left-3 w-full h-full border-2 border-primary/20 rounded-sm" />
        <div className="relative w-full aspect-3/4 bg-cream-dark rounded-sm overflow-hidden flex items-center justify-center">
          {member.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="text-center text-neutral/30">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="font-heading font-black text-3xl text-primary/40">{initials}</span>
              </div>
            </div>
          )}
        </div>
        <div className="absolute bottom-0 right-0 w-10 h-10 bg-primary" />
      </div>

      {/* Name plate */}
      <div className="mt-6 text-center lg:text-left">
        <p className="font-heading font-bold text-primary text-xl">{member.name}</p>
        <p className="font-body text-[12px] tracking-[0.12em] uppercase text-neutral/50 mt-1.5">
          {member.role}
        </p>
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-1.5 mt-3 font-body text-[12px] text-primary/50 hover:text-primary transition-colors duration-150"
          >
            <Mail size={12} />
            {member.email}
          </a>
        )}
      </div>

    </div>
  );

  const messageCol = (
    <div className="lg:col-span-8">
      {/* Pull quote */}
      <div className="mb-8">
        <Quote size={28} className="text-primary/20 fill-primary/20 mb-3" />
        <blockquote className="font-heading italic text-primary/75 text-lg sm:text-xl leading-relaxed pl-4 border-l-4 border-primary/25">
          {member.quote}
        </blockquote>
      </div>

      {/* Paragraphs */}
      <div className="space-y-5">
        {member.message.map((para, i) => (
          <p key={i} className="font-body text-neutral/70 text-base leading-relaxed">
            {para}
          </p>
        ))}
      </div>

    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
      {flip ? (
        <>
          {messageCol}
          {photoCol}
        </>
      ) : (
        <>
          {photoCol}
          {messageCol}
        </>
      )}
    </div>
  );
}

export default function LeadershipDeskPage() {
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
              Leadership Desk
            </h1>
            <p className="font-body text-cream/50 text-base md:text-lg max-w-xl leading-relaxed">
              Voices from those who guide and inspire our school community.
            </p>
          </div>
        </section>

        {/* ── Leadership members ────────────────────────────────────── */}
        {LEADERSHIP.map((member, i) => (
          <section
            key={member.name}
            className={`py-16 md:py-24 border-b border-primary/8 ${i % 2 === 0 ? "bg-cream" : "bg-white"}`}
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <LeaderCard member={member} flip={i % 2 !== 0} />
            </div>
          </section>
        ))}

      </main>
      <Footer />
    </>
  );
}
