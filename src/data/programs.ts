// Academic programmes shown in the homepage preview section.
// icon: must match a key exported from the PROGRAMS_ICON_MAP in academics-preview.tsx.
// Set href: null for programmes not yet active (shows "Details Coming Soon" instead of a link).

export type Program = {
  icon: "Sprout" | "BookOpen" | "FlaskConical" | "Trophy";
  label: string;
  grades: string;
  href: string | null;
  description: string;
  highlights: string[];
  featured?: boolean;
  comingSoon?: boolean;
};

export const PROGRAMS: Program[] = [
  {
    icon: "Sprout",
    label: "Early Years",
    grades: "Nursery - Grade 1",
    href: "/academics/primary",
    description:
      "A warm, play-based foundation that sparks curiosity, builds early literacy and numeracy, and nurtures every child's natural love for learning.",
    highlights: [
      "Play-based & activity learning",
      "Early literacy & numeracy",
      "Arts, music & movement",
    ],
    featured: true,
  },
  {
    icon: "BookOpen",
    label: "Primary Classes",
    grades: "Grades 2 - 4",
    href: null,
    description:
      "Expanding soon — a structured primary programme that builds on our Early Years foundation, developing confident and curious learners.",
    highlights: [
      "Structured academic curriculum",
      "STEM & language arts",
      "Continuous from Early Years",
    ],
    comingSoon: true,
  },
];
