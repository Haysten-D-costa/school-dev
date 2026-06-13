/* ─────────────────────────────────────────────────────────────────────────
   NEWS & EVENTS DATA

   HOW TO ADD A NEW ITEM:
   1. Copy the template below, paste at the TOP of NEWS_EVENTS (newest first)
   2. Give it a unique kebab-case slug ("annual-day-2025")
   3. Add an image to /public/images/sections/news-events/ and set the path,
      or use a Cloudinary URL when you connect it later
   ───────────────────────────────────────────────────────────────────────── */

export type NewsEvent = {
  slug:         string;
  type:         "news" | "event";
  title:        string;
  date:         string;          // ISO "2026-04-13" — used for sorting
  displayDate:  string;          // "April 13, 2026"
  category:     "academic" | "cultural" | "sports" | "exam" | "holiday";
  time?:        string;
  location?:    string;
  excerpt:      string;
  content:      string[];
  image:        string;
  imageCaption?: string;
};

export const NEWS_EVENTS: NewsEvent[] = [
  {
    slug:        "auxilium-summer-fiesta-2026",
    type:        "event",
    title:       "Auxilium Summer Fiesta 2026",
    date:        "2026-04-13",
    displayDate: "April 13, 2026",
    category:    "cultural",
    time:        "9:00 AM Onward",
    location:    "School Grounds",
    excerpt:     "A fun-filled summer programme with creative activities, games, and workshops for children of all ages.",
    content: [
      "The Auxilium Summer Fiesta 2026 is set to be a highlight of the school calendar — a day brimming with energy, creativity, and joy. Open to children of all ages, the fiesta brings together students, parents, and staff for a shared celebration of the summer season.",
      "The day's programme includes a wide range of activities: art and craft workshops, outdoor games, cultural performances, a fun run, and an exciting array of food stalls. There will be something for every child — from the very young to our senior students.",
      "We invite all families to join us on the school grounds from 9:00 AM. Do come dressed for fun, and let us make this Summer Fiesta a day to remember!",
    ],
    image:        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
    imageCaption: "Students enjoying the Summer Fiesta on school grounds",
  },
  {
    slug:        "workers-day-2026",
    type:        "event",
    title:       "Workers' Day 2026",
    date:        "2026-03-18",
    displayDate: "March 18, 2026",
    category:    "cultural",
    excerpt:     "An event honouring the dignity of labour with heartfelt student performances and tributes to the school's non-teaching staff.",
    content: [
      "Workers' Day at Auxilium School is a cherished tradition — a day when students pause to recognise and honour the often-unseen labour that keeps our school running. From the dedicated support staff and gardeners to the kitchen team and security personnel, every worker is celebrated with gratitude and warmth.",
      "This year's programme features student-led performances, messages of appreciation, and a special felicitation ceremony. The event is a beautiful reminder to our students that every form of honest work carries dignity and deserves respect.",
      "All are welcome to join in this meaningful celebration.",
    ],
    image:        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&q=80",
    imageCaption: "Students presenting a tribute performance for Workers' Day",
  },
  {
    slug:        "blood-donation-camp-2026",
    type:        "event",
    title:       "Blood Donation Camp",
    date:        "2026-03-15",
    displayDate: "March 15, 2026",
    category:    "cultural",
    time:        "10:00 AM – 2:00 PM",
    location:    "School Hall",
    excerpt:     "A community blood donation drive organised in partnership with local health services — a small act with a lifesaving impact.",
    content: [
      "In the spirit of community service and social responsibility, Auxilium School is proud to host a Blood Donation Camp in partnership with local health services. Open to staff, parents, and the wider community, the camp aims to collect donations that will benefit patients in urgent need across the region.",
      "Participants aged 18 and above who meet the eligibility criteria are encouraged to register and donate. All donors will receive refreshments and a certificate of appreciation.",
      "This initiative reflects our school's deep commitment to nurturing not just academic excellence, but also compassion and service in our students and community.",
    ],
    image:        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80",
    imageCaption: "Blood donation camp at the school hall",
  },
  {
    slug:        "science-day-2026",
    type:        "event",
    title:       "Science Day 2026",
    date:        "2026-02-28",
    displayDate: "February 28, 2026",
    category:    "academic",
    location:    "Science Block & School Grounds",
    excerpt:     "Celebrating National Science Day with exhibitions, demonstrations, and hands-on experiments that bring curiosity to life.",
    content: [
      "National Science Day is one of the most eagerly awaited events on the Auxilium academic calendar. Celebrated on February 28 — the anniversary of Sir C.V. Raman's Nobel Prize-winning discovery — the day is dedicated to igniting a love for science in every student.",
      "This year's theme is 'Science for Sustainable Future.' Students from all classes will present working models, experiments, and posters exploring topics from renewable energy and water conservation to biotechnology and space exploration.",
      "Judges from local colleges and research institutions will evaluate projects, and prizes will be awarded in three categories: Innovation, Presentation, and Social Relevance. Parents and guests are warmly invited to visit the exhibitions.",
    ],
    image:        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&q=80",
    imageCaption: "Students demonstrating their science projects",
  },
  {
    slug:        "gratitude-day-2026",
    type:        "event",
    title:       "Gratitude Day 2026",
    date:        "2026-02-17",
    displayDate: "February 17, 2026",
    category:    "cultural",
    excerpt:     "A heartfelt programme to honour and thank members of the school community for their tireless service and dedication.",
    content: [
      "Gratitude Day is a truly special occasion at Auxilium School — a time to step back from the busyness of school life and sincerely thank those who make it all possible. Teachers, support staff, parents, and community members are all recognised for their invaluable contributions.",
      "The programme includes student-led speeches, musical performances, and personal thank-you messages. Each honouree receives a token of appreciation from the school community.",
      "It is a day that reminds us all of the importance of gratitude — and of the many quiet acts of love and service that sustain our school every day.",
    ],
    image:        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
    imageCaption: "Students expressing gratitude to school staff",
  },
  {
    slug:        "provincial-visit-2026",
    type:        "news",
    title:       "Provincial Visit — March 2026",
    date:        "2026-03-07",
    displayDate: "March 7, 2026",
    category:    "academic",
    excerpt:     "Sr. Meenakshi D'Silva, our Provincial, visited the school community — a moment of inspiration and encouragement for all.",
    content: [
      "The school community was blessed with a visit from Sr. Meenakshi D'Silva, Provincial of the Mumbai Province of the Salesian Sisters of Don Bosco, on March 7, 2026. Her presence was a source of great joy and encouragement for students, staff, and management alike.",
      "Sr. Meenakshi addressed students with warmth and wisdom, sharing her vision for holistic education rooted in the Salesian tradition of love, reason, and religion. She encouraged students to discover God in everyday life and to pursue their studies with joy and purpose.",
      "The visit was a powerful reminder of the rich spiritual and educational heritage that guides Auxilium School — and a beautiful affirmation of the work being done by our dedicated staff and students.",
    ],
    image:        "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=1200&q=80",
    imageCaption: "Sr. Meenakshi D'Silva with students and staff during the provincial visit",
  },
];

export const NEWS_EVENT_SLUGS = NEWS_EVENTS.map((n) => n.slug);

export const CATEGORY_COLORS: Record<NewsEvent["category"], string> = {
  academic: "bg-sky-100 text-sky-700",
  cultural: "bg-purple-100 text-purple-700",
  sports:   "bg-emerald-100 text-emerald-700",
  exam:     "bg-amber-100 text-amber-700",
  holiday:  "bg-rose-100 text-rose-700",
};

export const CATEGORY_LABELS: Record<NewsEvent["category"], string> = {
  academic: "Academic",
  cultural: "Cultural",
  sports:   "Sports",
  exam:     "Exam",
  holiday:  "Holiday",
};
