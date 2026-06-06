export type SchoolEvent = {
  id: string;
  day: string;
  month: string;
  year: string;
  title: string;
  category: "academic" | "cultural" | "sports" | "exam" | "holiday";
  description: string;
  time?: string;
};

export const EVENTS: SchoolEvent[] = [
  {
    id: "e1",
    day: "13",
    month: "Apr",
    year: "2026",
    title: "Auxilium Summer Fiesta 2026",
    category: "cultural",
    description: "A fun-filled summer programme with creative activities, games, and workshops for children.",
  },
  {
    id: "e2",
    day: "18",
    month: "Mar",
    year: "2026",
    title: "Workers' Day",
    category: "cultural",
    description: "An event honouring the dignity of labour with student performances and tributes.",
  },
  {
    id: "e3",
    day: "15",
    month: "Mar",
    year: "2026",
    title: "Blood Donation Camp",
    category: "cultural",
    description: "A community blood donation drive organised in partnership with local health services.",
  },
  {
    id: "e4",
    day: "7",
    month: "Mar",
    year: "2026",
    title: "Provincial Visit",
    category: "academic",
    description: "A pastoral visit by the provincial leadership to the school community.",
  },
  {
    id: "e5",
    day: "28",
    month: "Feb",
    year: "2026",
    title: "Science Day",
    category: "academic",
    description: "An exhibition and demonstrations celebrating scientific inquiry and experiments.",
  },
  {
    id: "e6",
    day: "17",
    month: "Feb",
    year: "2026",
    title: "Gratitude Day",
    category: "cultural",
    description: "A programme to honour and thank members of the school community for their service.",
  },
];

export const CATEGORY_COLORS: Record<SchoolEvent["category"], string> = {
  academic: "bg-sky-100 text-sky-700",
  cultural:  "bg-purple-100 text-purple-700",
  sports:    "bg-emerald-100 text-emerald-700",
  exam:      "bg-amber-100 text-amber-700",
  holiday:   "bg-rose-100 text-rose-700",
};

export const CATEGORY_LABELS: Record<SchoolEvent["category"], string> = {
  academic: "Academic",
  cultural:  "Cultural",
  sports:    "Sports",
  exam:      "Exam",
  holiday:   "Holiday",
};
