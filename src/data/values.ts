// ── Vision & Mission page content ────────────────────────────────────────────

export const VISION_FIGURE = {
  name: "St. John Bosco",
  role: "Founder of the Salesian Family",
  image: "/images/sections/about/st-john-bosco.webp",
  quote: "Education is a matter of the heart, of which God alone is the master.",
};

export const MISSION_FIGURE = {
  name: "St. Mary Mazzarello",
  role: "Co-Foundress, Salesian Sisters",
  image: "/images/sections/about/st-mary-mazzarello.jpg",
  quote:
    "We will open a needle work class for the young girls of the village and we will teach them to sew, but our principle aim will be to teach them to know God, to make them good, and save them from many dangers. From this moment, our every stitch be an act of Love for God.",
};

export const VISION_PARAGRAPHS = [
  "The School follows the educative system of Don Bosco based on reason, religion, and loving-kindness, where the pupil is the protagonist of her/his own formation.",
  "It is committed to the development of the whole person, since in Christ, the perfect person, all human values and their fulfillment and unity. Herein lies specifically the character of the school. Its duty to cultivate human values is its legitimate right in accordance with its particular mission to serve all people.",
];

export const MISSION =
  "We envisage our pupils to become intellectually enlightened, morally upright, spiritually oriented, emotionally balanced, socially committed, patriotic and accomplished – in a word integrally developed young women and men who will be agents of social transformation in today's India for a better tomorrow.";

export type CoreValue = {
  icon: "BookOpen" | "Heart" | "Star" | "Users" | "Eye" | "Target";
  title: string;
  description: string;
};

export const VALUES: CoreValue[] = [
  {
    icon: "BookOpen",
    title: "Excellence",
    description:
      "We hold high expectations for every student and foster a love of learning that extends beyond the classroom.",
  },
  {
    icon: "Heart",
    title: "Compassion",
    description:
      "We nurture a culture of empathy where every child feels seen, valued, and supported in their growth.",
  },
  {
    icon: "Star",
    title: "Integrity",
    description:
      "We instil strong moral values and a sense of personal responsibility that guides our students throughout life.",
  },
  {
    icon: "Users",
    title: "Community",
    description:
      "We believe education is a shared journey — one built on the partnership between students, families, educators, and the wider community.",
  },
];

export const SALESIAN_PILLARS = [
  {
    numeral: "I",
    title: "Reason",
    subtitle: "Ragione",
    description:
      "Every rule and decision is explained, never imposed. Students are treated as rational beings capable of understanding why things are asked of them — building trust, responsibility, and a lifelong love of learning.",
  },
  {
    numeral: "II",
    title: "Religion",
    subtitle: "Religione",
    description:
      "Faith is woven into daily life — not as doctrine alone, but as a moral compass that shapes character. Students are guided to discover meaning, purpose, and a sense of the transcendent in everything they do.",
  },
  {
    numeral: "III",
    title: "Loving Kindness",
    subtitle: "Amorevolezza",
    description:
      "Don Bosco believed it is not enough to love the young — they must know they are loved. Our school is a family, warm and welcoming, where every child feels seen, valued, and safe to grow.",
  },
];
