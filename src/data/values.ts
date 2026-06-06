// ── Vision & Mission page content ────────────────────────────────────────────
// icon: must match a key in the VALUES_ICON_MAP in vision/page.tsx.

export const VISION =
  "To be a centre of holistic excellence that empowers every child with the knowledge, character, and confidence to lead a purposeful life — rooted in values, open to the world.";

export const MISSION =
  "Auxilium Primary School is committed to providing quality education in a nurturing and inclusive environment. Guided by the Salesian tradition of reason, religion, and loving kindness, we strive to develop the intellectual, moral, spiritual, and creative potential of every student — preparing them to be compassionate, responsible, and contributing members of society.";

export type CoreValue = {
  icon: "BookOpen" | "Heart" | "Star" | "Users" | "Eye" | "Target";
  title: string;
  description: string;
};

export const VALUES: CoreValue[] = [
  {
    icon: "BookOpen",
    title: "Academic Excellence",
    description:
      "We hold high expectations for every student and foster a love of learning that extends beyond the classroom.",
  },
  {
    icon: "Heart",
    title: "Compassion & Care",
    description:
      "We nurture a culture of empathy where every child feels seen, valued, and supported in their growth.",
  },
  {
    icon: "Star",
    title: "Character & Integrity",
    description:
      "We instil strong moral values and a sense of personal responsibility that guides our students throughout life.",
  },
  {
    icon: "Users",
    title: "Community",
    description:
      "We believe education is a shared journey — one built on the partnership between students, families, educators, and the wider community.",
  },
  {
    icon: "Eye",
    title: "Inclusivity",
    description:
      "We celebrate the uniqueness of every individual and create an environment where all children can thrive.",
  },
  {
    icon: "Target",
    title: "Purpose",
    description:
      "We guide students toward discovering their own sense of purpose — equipping them to make a meaningful difference in the world.",
  },
];

export const COMMITMENTS: string[] = [
  "Deliver a curriculum that is rigorous, relevant, and responsive to the needs of every learner.",
  "Foster a safe, inclusive, and stimulating environment where curiosity and creativity are celebrated.",
  "Build strong partnerships with families and the community to support the whole child.",
  "Develop educators who are dedicated, reflective, and committed to continuous growth.",
  "Uphold the Salesian values of reason, religion, and loving kindness in all that we do.",
];
