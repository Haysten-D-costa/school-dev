// ── Hero section content ──────────────────────────────────────────────────────
// Use the actual hero photo asset from public/images.

export const HERO_IMAGE = "/images/sections/school-images/hero-school.png";

export const HERO_BUTTONS = {
  primary:   { label: "Explore School",  href: "/school-life/gallery" },
  secondary: { label: "Admissions 2025", href: "/admissions" },
};

// Quick stats displayed below the hero headline
export const HERO_STATS = [
  { value: "75+",    label: "Years" },
  { value: "3,500+", label: "Students" },
  { value: "98%",    label: "Pass Rate" },
];

// Floating info cards shown on the right panel (desktop only)
export const HERO_CARDS = {
  achievement: {
    title:    "🏆 State Rank #1",
    subtitle: "Science Olympiad 2024",
  },
  admissions: {
    badge: "Now Open",
    title: "Admissions 2025–26",
  },
};
