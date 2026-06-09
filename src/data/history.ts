// ── Our History page content ──────────────────────────────────────────────────

export const HISTORY_INTRO =
  "Auxilium Convent, Carona was established in 1976 by the Daughters of Mary Help of Christians — a congregation of Salesian sisters inspired by the educational vision of St. John Bosco and St. Mary Mazzarello. What began as a humble kindergarten and oratory has grown into a beacon of academic excellence and character formation for the children of North Goa.";

export const HISTORY_INTRO_SECOND =
  "Over the decades, our school has remained steadfast in its commitment to the Salesian educational system based on reason, religion, and loving-kindness. We have nurtured thousands of students, preparing them not just for academic success, but for life itself.";

export const FOUNDING_PRINCIPLES = [
  "Education based on Christian values and Salesian spirituality",
  "Holistic development of mind, body, and spirit",
  "Family atmosphere fostering love and care",
  "Commitment to social transformation through education",
];

export const LEGACY_STATS = [
  { value: "1947",    label: "Established",       sub: "Carona, Aldona, Goa" },
  { value: "10,000+", label: "Students Educated",  sub: "Over 75 years" },
  { value: "75+",     label: "Years of Service",   sub: "" },
  { value: "3+",      label: "Generations Served", sub: "" },
];

export type Milestone = {
  date: string;
  heading: string;
  description: string;
};

export const TIMELINE: Milestone[] = [
  {
    date: "June 9, 1976",
    heading: "Auxilium Villa Especiosa Opens: Kindergarten and Oratory Established",
    description:
      "The Auxilium Convent (also known as Auxilium Villa Especiosa) was officially opened. On the very same day, the Sisters inaugurated a kindergarten school (Nursery & KG) and an oratory as the initial foundation of their educational mission.",
  },
  {
    date: "June 24, 1976",
    heading: "First Mass in the Oratory",
    description:
      "The first Mass in the selected chapel took place on June 24, 1976.",
  },
  {
    date: "1976",
    heading: "Auxilium Primary School, Carona, is Recorded as a Private Aided Rural School",
    description:
      "According to external educational listings, Auxilium Primary School, Carona, is recorded as being established in 1976 and is recognized as a private aided rural school in the Bardez block of North Goa.",
  },
  {
    date: "1978",
    heading: "Primary School Begins: First Class I with 58 Students",
    description:
      "The primary school (Class I) began its operations with an initial enrollment of 58 students in Standard I.",
  },
];

export const FOUNDERS = [
  {
    name: "St. John Bosco",
    role: "Founder of the Salesian Society",
    image: "/images/sections/about/st-john-bosco.webp",
    quote:
      "Education is a matter of the heart, of which God alone is the master. Don Bosco's system based on reason, religion, and loving-kindness continues to inspire our approach to education.",
  },
  {
    name: "St. Mary Mazzarello",
    role: "Co-Foundress of the Salesian Sisters",
    image: "/images/sections/about/st-mary-mazzarello.jpg",
    quote:
      "We will open a needle work class for the young girls of the village and we will teach them to sew, but our principle aim will be to teach them to know God, to make them good, and save them from many dangers.",
  },
];

export const HISTORY_FOUNDER_STATS = [
  { label: "Established",       value: "1976",    sub: "Carona, Aldona, Goa" },
  { label: "Students Educated", value: "10,000+", sub: "Over 50 years" },
  { label: "Years of Service",  value: "50+",     sub: "And counting" },
  { label: "Generations Served",value: "3+",      sub: "Families trust Auxilium" },
];

export type Era = {
  label: string;
  period: string;
  heading: string;
  paragraphs: string[];
};

export const HISTORY_ERAS: Era[] = [
  {
    label: "The Opening",
    period: "June 1976",
    heading: "Auxilium Villa Especiosa Opens",
    paragraphs: [
      "On June 9, 1976, the Auxilium Convent — also known as Auxilium Villa Especiosa — was officially opened by the Daughters of Mary Help of Christians in the quiet village of Carona, in the Aldona region of North Goa.",
      "On the very same day, the Sisters inaugurated a kindergarten school (Nursery & KG) and an oratory as the initial foundation of their educational mission — a mission rooted in the Salesian spirit of reason, religion, and loving-kindness.",
      "Just weeks later, on June 24, 1976, the first Mass was celebrated in the school's chapel, marking the spiritual cornerstone of the Auxilium community and deepening the bond between faith and education that defines the school to this day.",
    ],
  },
  {
    label: "Recognition & Growth",
    period: "1976 – 1978",
    heading: "A School Takes Root",
    paragraphs: [
      "Auxilium Primary School, Carona was officially recorded as a Private Aided Rural School in the Bardez block of North Goa — a formal recognition of the quality of education and community service the sisters had established in such a short time.",
      "In 1978, the primary school formally opened Class I with its first batch of 58 students in Standard I, laying the foundation for a full primary curriculum and beginning decades of academic service to the children of Carona and the surrounding villages.",
      "The school's recognition as a private aided institution secured its place in Goa's educational landscape and opened the doors of quality Salesian education to generations of children from rural North Goa.",
    ],
  },
  {
    label: "A New Century",
    period: "2000 – Present",
    heading: "Tradition Meets the Modern World",
    paragraphs: [
      "Entering the 21st century, Auxilium Primary School embraced modernisation while staying true to its founding values. Computer education was introduced, teaching methodologies were updated, and the curriculum was enriched to prepare students for a rapidly changing world.",
      "Today, the school is home to over 3,500 students and a faculty of dedicated educators who carry forward the Salesian tradition of reason, religion, and loving kindness. Academic achievements, sporting victories, and cultural programmes continue to reflect the all-round development at the heart of the Auxilium mission.",
      "As the school looks ahead, it does so with pride in its past and confidence in its students — young minds shaped by nearly five decades of purposeful education in the heart of Carona, Goa.",
    ],
  },
];

export const HISTORY_CLOSING = {
  eyebrow: "Our Legacy Continues",
  heading: "Rooted in the Past, Growing into the Future",
  body:
    "As we look back on our rich history, we remain committed to the values and principles that have guided Auxilium for over seven decades. The story of our school is the story of Carona itself — resilient, warm, and full of promise. We carry this legacy forward with every student we nurture and every life we shape.",
};
