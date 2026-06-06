import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import ContactForm from "@/components/sections/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Contact Us" };

const INFO_CARDS = [
  {
    Icon: MapPin,
    label: "Address",
    lines: [siteConfig.contact.address],
  },
  {
    Icon: Phone,
    label: "Phone",
    lines: [siteConfig.contact.phone],
    href: `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`,
  },
  {
    Icon: Mail,
    label: "Email",
    lines: [siteConfig.contact.email],
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    Icon: Clock,
    label: "Office Hours",
    lines: ["Monday – Saturday", "9:00 AM – 4:00 PM"],
  },
];

const GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(253,246,236,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(253,246,236,0.04) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
};

const SOCIAL = [
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    node: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    node: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: siteConfig.social.youtube,
    node: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
];

export default function ContactPage() {
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
              <span className="font-body text-cream/55 text-[11px] tracking-[0.35em] uppercase">
                Get In Touch
              </span>
              <span className="block h-px w-8 bg-cream/30" />
            </div>
            <h1 className="font-heading text-cream font-black text-5xl sm:text-6xl lg:text-[4.5rem] leading-tight mb-5">
              Contact Us
            </h1>
            <p className="font-body text-cream/50 text-base md:text-lg max-w-xl leading-relaxed">
              Reach out with questions about admissions, academics, or school life.
              We&apos;re here to help.
            </p>
          </div>
        </section>

        {/* ── Info Cards ────────────────────────────────────────────── */}
        <section className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {INFO_CARDS.map(({ Icon, label, lines, href }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl border border-primary/8 shadow-sm p-6 transition-shadow duration-200 hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center mb-4">
                    <Icon size={17} className="text-primary" />
                  </div>
                  <p className="font-body text-[10px] font-bold tracking-[0.22em] uppercase text-neutral/40 mb-2">
                    {label}
                  </p>
                  {lines.map((line, i) =>
                    href && i === 0 ? (
                      <a
                        key={i}
                        href={href}
                        className="block font-body text-sm text-primary hover:text-accent transition-colors duration-150 leading-relaxed"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={i} className="font-body text-sm text-neutral/65 leading-relaxed">
                        {line}
                      </p>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Form + Sidebar ────────────────────────────────────────── */}
        <section className="bg-cream pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

              {/* ── Left — Form ──────────────────────────────────── */}
              <div className="lg:col-span-3 bg-white rounded-2xl border border-primary/8 shadow-sm p-8 md:p-10">
                <h2 className="font-heading text-primary font-bold text-2xl md:text-3xl mb-1.5">
                  Send Us a Message
                </h2>
                <p className="font-body text-neutral/50 text-sm mb-8">
                  We&apos;ll get back to you within 24–48 hours.
                </p>
                <ContactForm />
              </div>

              {/* ── Right — Sidebar ───────────────────────────── */}
              <div className="lg:col-span-2 space-y-7 lg:pt-1">

                {/* Response note */}
                <div className="bg-primary/5 rounded-xl border border-primary/10 p-6">
                  <p className="font-body text-[10px] font-bold tracking-[0.25em] uppercase text-primary/50 mb-2">
                    Response Time
                  </p>
                  <p className="font-body text-sm text-neutral/65 leading-relaxed">
                    Our office team typically responds within{" "}
                    <strong className="text-primary font-semibold">24–48 hours</strong>{" "}
                    on school days.
                  </p>
                </div>

                {/* Admissions note */}
                <div className="bg-primary rounded-xl p-6">
                  <p className="font-body text-[10px] font-bold tracking-[0.25em] uppercase text-cream/50 mb-2">
                    Admissions Open
                  </p>
                  <p className="font-body text-sm text-cream/75 leading-relaxed mb-4">
                    Enrolment for the upcoming academic year is now open. Reach out or visit
                    the admissions page for details.
                  </p>
                  <a
                    href="/admissions"
                    className="inline-block font-body text-[12px] font-bold tracking-[0.15em] uppercase text-primary bg-cream px-5 py-2.5 rounded hover:bg-cream-dark transition-colors duration-200"
                  >
                    Learn More
                  </a>
                </div>

                {/* Social */}
                <div className="pt-1">
                  <p className="font-body text-[10px] font-bold tracking-[0.25em] uppercase text-neutral/35 mb-4">
                    Follow the School
                  </p>
                  <div className="flex gap-2.5">
                    {SOCIAL.map(({ label, href, node }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-9 h-9 rounded-full border border-primary/15 flex items-center justify-center text-primary/40 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200"
                      >
                        {node}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Motto */}
                <div className="border-l-2 border-primary/20 pl-5 py-1">
                  <p className="font-heading italic text-primary/55 text-sm leading-relaxed">
                    &ldquo;{siteConfig.motto}&rdquo;
                  </p>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-neutral/30 mt-2">
                    — {siteConfig.shortName}, Est. {siteConfig.established}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Map ───────────────────────────────────────────────────── */}
        <section className="bg-cream-dark border-t border-primary/8 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="mb-8">
              <p className="font-body text-[10px] font-bold tracking-[0.35em] uppercase text-neutral/40 mb-1.5">
                Find Us
              </p>
              <h2 className="font-heading text-primary font-bold text-2xl">
                {siteConfig.location}
              </h2>
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-primary/10 shadow-md h-96 md:h-[460px]">
              {/* Replace the src below with your Google Maps embed URL */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d73.9!3d15.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQXV4aWxpdW0gUHJpbWFyeSBTY2hvb2w!5e0!3m2!1sen!2sin!4v1234567890"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Auxilium Primary School, Carona — Google Maps"
              />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
