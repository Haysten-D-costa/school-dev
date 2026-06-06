// ── Our History page content ──────────────────────────────────────────────────

export type Era = {
  label: string;
  period: string;
  heading: string;
  paragraphs: string[];
};

// Opening paragraph on the history page
export const HISTORY_INTRO =
  "Auxilium Convent, Carona was founded in 1960 by the Salesian Sisters of Don Bosco, inspired by the educational vision of St. John Bosco and St. Mary Mazzarello. What began as a small educational institution has grown into a beacon of academic excellence and character formation.";

// Three fact cards shown below the intro paragraph
export const HISTORY_FOUNDER_STATS = [
  { label: "Established", value: "1947",             sub: "Carona, Aldona, Goa" },
  { label: "Founded by",  value: "Salesian Sisters",  sub: "Daughters of Mary Help of Christians" },
  { label: "Motto",       value: "Knowledge",         sub: "Character · Excellence" },
];

// Chronological chapters — add new eras here as needed
export const HISTORY_ERAS: Era[] = [
  {
    label: "Founding",
    period: "1947",
    heading: "A Vision Born in Service",
    paragraphs: [
      "In 1947 — the year India gained independence, though Goa remained under Portuguese administration — the Daughters of Mary Help of Christians, a congregation of Salesian sisters inspired by the spirit of Don Bosco, established a school in the quiet village of Carona, in the Aldona region of North Goa.",
      "The name 'Auxilium', Latin for 'help', reflected the founding mission of the sisters: to extend a helping hand to the children of the community, regardless of background, and to provide them with a solid foundation of knowledge, character, and faith.",
      "Beginning with modest resources and an unwavering spirit, the school opened its doors to the children of Carona and the surrounding villages — becoming a beacon of learning in a region where quality education was a rare privilege.",
    ],
  },
  {
    label: "Liberation & Growth",
    period: "1961 – 1990s",
    heading: "A New Chapter for Goa",
    paragraphs: [
      "On December 19, 1961, Goa was liberated from Portuguese rule and integrated into the Indian Union. This historic moment brought sweeping changes to institutions across Goa — including its schools. Auxilium Primary School, under the steadfast guidance of the Salesian sisters, navigated the transition from a Portuguese-influenced curriculum to the Indian national education system with grace and resolve.",
      "Through the 1960s, 70s, and 80s, the school grew steadily. New classrooms were added, enrolment expanded, and a generation of Carona's children found in Auxilium not just an education, but a community. The sisters cultivated an environment where academic discipline and moral formation went hand in hand.",
      "By the close of the 20th century, Auxilium Primary School had cemented its place as one of the most trusted institutions in the Aldona region — a reputation built not on grandeur, but on decades of quiet, dedicated service.",
    ],
  },
  {
    label: "A New Century",
    period: "2000 – Present",
    heading: "Tradition Meets the Modern World",
    paragraphs: [
      "Entering the 21st century, Auxilium Primary School embraced modernisation while staying true to its founding values. Computer education was introduced, teaching methodologies were updated, and the curriculum was enriched to prepare students for a rapidly changing world.",
      "Today, the school is home to over 3,500 students and a faculty of dedicated educators who carry forward the Salesian tradition of reason, religion, and loving kindness. Academic achievements, sporting victories, and cultural programmes continue to reflect the all-round development that has always been at the heart of the Auxilium mission.",
      "As the school looks ahead, it does so with pride in its past and confidence in its students — young minds shaped by over seven decades of purposeful education in the heart of Carona, Goa.",
    ],
  },
];

// Closing "Looking Ahead" section
export const HISTORY_CLOSING = {
  eyebrow: "Looking Ahead",
  heading: "Seventy-Five Years and Counting",
  body:
    "As Auxilium Primary School enters its eighth decade of service, it carries forward the same spirit that inspired its founding — a commitment to education that shapes not just scholars, but citizens of character. The story of Auxilium is, at heart, the story of Carona itself: resilient, warm, and full of promise.",
};
