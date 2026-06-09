export type NavLink = { label: string; href: string };

// ── Navbar dropdowns ──────────────────────────────────────────────────────────

export const ABOUT_LINKS: NavLink[] = [
  { label: "Our History",     href: "/about/history" },
  { label: "Leadership Desk", href: "/about/leadership" },
  { label: "Vision & Mission", href: "/about/vision" },
  { label: "Our Faculty",     href: "/about/faculty" },
];

// Reflects current school: Nursery–Gr. 1 active, Gr. 2–4 coming soon.
// Update this list as new classes are added.
export const ACADEMICS_LINKS: NavLink[] = [
  { label: "Early Years (Nursery – Gr. 1)", href: "/academics/primary" },
  { label: "Co-Curricular Activities",      href: "/academics/activities" },
];

export const LIFE_LINKS: NavLink[] = [
  { label: "Gallery",            href: "/school-life/gallery" },
  { label: "News & Events",      href: "/school-life/news" },
];

// Top-level links (no dropdown)
export const NAV_LINKS: NavLink[] = [
  { label: "Admissions", href: "/admissions" },
  { label: "Contact",    href: "/contact" },
];

// ── Footer columns ────────────────────────────────────────────────────────────

export const QUICK_LINKS: NavLink[] = [
  { label: "Home",       href: "/" },
  { label: "About Us",   href: "/about/history" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery",    href: "/school-life/gallery" },
  { label: "Contact",    href: "/contact" },
];

export const SCHOOL_LIFE_LINKS: NavLink[] = [
  { label: "News & Events",     href: "/school-life/news" },
  { label: "Sports",            href: "/school-life/sports" },
  { label: "Clubs & Societies", href: "/school-life/clubs" },
  { label: "Academic Results",  href: "/academics/results" },
];

// Academic year shown in footer admissions CTA — update each year
export const ADMISSIONS_YEAR = "2025 – 2026";
