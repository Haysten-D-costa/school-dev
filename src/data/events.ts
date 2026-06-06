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
    day: "15",
    month: "Jun",
    year: "2025",
    title: "Annual Sports Day",
    category: "sports",
    description: "Inter-house athletic meet with field events, track races, and prize distribution.",
    time: "8:00 AM onwards",
  },
  {
    id: "e2",
    day: "21",
    month: "Jun",
    year: "2025",
    title: "International Yoga Day",
    category: "cultural",
    description: "School-wide yoga session and wellness workshop for students and staff.",
    time: "7:00 AM",
  },
  {
    id: "e3",
    day: "28",
    month: "Jun",
    year: "2025",
    title: "SSC Result Celebration",
    category: "academic",
    description: "Felicitation ceremony for the SSC 2025 toppers and meritorious students.",
    time: "10:00 AM",
  },
  {
    id: "e4",
    day: "10",
    month: "Jul",
    year: "2025",
    title: "Unit Test — I",
    category: "exam",
    description: "First unit test for Grades VI to X. Timetable to be issued separately.",
  },
  {
    id: "e5",
    day: "26",
    month: "Jul",
    year: "2025",
    title: "Kargil Vijay Diwas",
    category: "cultural",
    description: "Flag hoisting and tribute programme for fallen heroes of the Kargil War.",
    time: "9:00 AM",
  },
  {
    id: "e6",
    day: "15",
    month: "Aug",
    year: "2025",
    title: "Independence Day",
    category: "holiday",
    description: "National flag hoisting, cultural programme, and address by the Principal.",
    time: "8:30 AM",
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
