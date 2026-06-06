import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { DEPARTMENTS } from "@/data/faculty";
import type { FacultyMember } from "@/data/faculty";

export const metadata: Metadata = { title: "Our Faculty" };

const GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(253,246,236,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(253,246,236,0.04) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
};

function MemberCard({ member }: { member: FacultyMember }) {
  const initials = member.name
    .split(" ")
    .filter((w) => w.length > 1)
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="bg-white rounded-xl border border-primary/8 shadow-sm overflow-hidden hover:shadow-md hover:border-primary/15 transition-all duration-200">
      {/* Photo / placeholder */}
      <div className="w-full aspect-square bg-cream-dark flex items-center justify-center relative overflow-hidden">
        {member.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <span className="font-heading font-black text-xl text-primary/35">{initials}</span>
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="font-heading font-bold text-primary text-sm leading-snug">{member.name}</p>
        <p className="font-body text-[11px] text-neutral/55 mt-0.5 leading-snug">{member.role}</p>
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-1.5 mt-2.5 font-body text-[11px] text-primary/50 hover:text-primary transition-colors duration-150"
          >
            <Mail size={11} />
            {member.email}
          </a>
        )}
      </div>
    </div>
  );
}

export default function FacultyPage() {
  const totalMembers = DEPARTMENTS.reduce((sum, d) => sum + d.members.length, 0);

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
              Our Faculty
            </h1>
            <p className="font-body text-cream/50 text-base md:text-lg max-w-xl leading-relaxed">
              Meet the dedicated educators and staff who make {siteConfig.name} what it is.
            </p>
          </div>
        </section>

        {/* ── Intro strip ───────────────────────────────────────────── */}
        <section className="bg-cream py-10 md:py-12 border-b border-primary/8">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="font-body text-neutral/60 text-base max-w-xl leading-relaxed">
              Our team of {totalMembers}+ educators brings passion, expertise, and a genuine love for teaching
              to every classroom. Together, they uphold the Auxilium tradition of nurturing the whole child.
            </p>
            <div className="shrink-0 text-center bg-white rounded-xl border border-primary/8 shadow-sm px-8 py-4">
              <p className="font-heading font-black text-primary text-3xl leading-none">{totalMembers}+</p>
              <p className="font-body text-[11px] tracking-[0.2em] uppercase text-neutral/45 mt-1">Faculty &amp; Staff</p>
            </div>
          </div>
        </section>

        {/* ── Department sections ───────────────────────────────────── */}
        {DEPARTMENTS.map((dept, i) => (
          <section
            key={dept.label}
            className={`py-12 md:py-16 border-b border-primary/8 ${i % 2 === 0 ? "bg-cream" : "bg-white"}`}
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

              {/* Department label */}
              <div className="flex items-center gap-4 mb-8">
                <span className="block w-1 h-8 bg-primary rounded-full shrink-0" />
                <h2 className="font-heading font-bold text-primary text-xl md:text-2xl">{dept.label}</h2>
                <span className="font-body text-[11px] text-neutral/35 tracking-wide">
                  {dept.members.length} {dept.members.length === 1 ? "member" : "members"}
                </span>
              </div>

              {/* Member cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                {dept.members.map((member) => (
                  <MemberCard key={member.name} member={member} />
                ))}
              </div>

            </div>
          </section>
        ))}

        {/* ── Join us CTA ───────────────────────────────────────────── */}
        <section className="relative bg-primary py-14 md:py-20 overflow-hidden">
          <div className="absolute inset-0" style={GRID_STYLE} />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <p className="font-body text-cream/45 text-[11px] tracking-[0.35em] uppercase mb-2">Join Our Team</p>
              <h2 className="font-heading text-cream font-bold text-2xl md:text-3xl mb-2">
                Passionate About Teaching?
              </h2>
              <p className="font-body text-cream/55 text-sm leading-relaxed max-w-md">
                We are always looking for dedicated educators who share our commitment to holistic, values-based education.
              </p>
            </div>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="shrink-0 inline-flex items-center gap-2 bg-cream hover:bg-cream-dark text-primary font-body font-bold text-[13px] tracking-[0.15em] uppercase px-8 py-4 rounded transition-all duration-200 shadow-lg shadow-black/20"
            >
              <Mail size={15} />
              Get in Touch
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
