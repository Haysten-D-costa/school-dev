export type CollectionImage = {
  id:  string;
  src: string;
  alt: string;
};

export type Collection = {
  slug:        string;
  title:       string;
  displayDate: string;
  date:        string;
  album:       string;
  cover:       string;
  images:      CollectionImage[];
  cloudinaryFolder?: string;
};

export const ALBUMS = [
  { id: "all",       label: "All" },
  { id: "events",    label: "Events" },
  { id: "sports",    label: "Sports" },
  { id: "academics", label: "Academics" },
  { id: "clubs",     label: "Clubs & Activities" },
];

export const COLLECTIONS: Collection[] = [
  {
    slug:        "annual-day-2024",
    title:       "Annual Day 2024",
    displayDate: "December 2024",
    date:        "2024-12",
    album:       "events",
    cover:       "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&q=80",
    images: [
      { id: "ad1", src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",  alt: "Cultural performance on stage" },
      { id: "ad2", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",  alt: "Students gathering in the courtyard" },
      { id: "ad3", src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",  alt: "Prize distribution ceremony" },
      { id: "ad4", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",  alt: "Speech by the principal" },
      { id: "ad5", src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",    alt: "Dance performance" },
      { id: "ad6", src: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=800&q=80", alt: "Chief guest felicitation" },
    ],
  },
  {
    slug:        "sports-day-2024",
    title:       "Sports Day 2024",
    displayDate: "November 2024",
    date:        "2024-11",
    album:       "sports",
    cover:       "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=1200&q=80",
    images: [
      { id: "sd1", src: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=800&q=80", alt: "Track and field events" },
      { id: "sd2", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80", alt: "Relay race heats" },
      { id: "sd3", src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80", alt: "Long jump competition" },
      { id: "sd4", src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80", alt: "Medal ceremony" },
      { id: "sd5", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80", alt: "March past by students" },
    ],
  },
  {
    slug:        "science-exhibition-2024",
    title:       "Science Exhibition 2024",
    displayDate: "October 2024",
    date:        "2024-10",
    album:       "academics",
    cover:       "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&q=80",
    images: [
      { id: "se1", src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",   alt: "Students presenting their projects" },
      { id: "se2", src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80", alt: "Working model demonstration" },
      { id: "se3", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80", alt: "Judges evaluating exhibits" },
      { id: "se4", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80", alt: "Chemistry experiment display" },
      { id: "se5", src: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=800&q=80", alt: "Robotics project showcase" },
      { id: "se6", src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80", alt: "Award winning project" },
    ],
  },
  {
    slug:        "cultural-fest-2024",
    title:       "Cultural Fest 2024",
    displayDate: "September 2024",
    date:        "2024-09",
    album:       "events",
    cover:       "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
    images: [
      { id: "cf1", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",  alt: "Folk dance performance" },
      { id: "cf2", src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",  alt: "Music ensemble" },
      { id: "cf3", src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",    alt: "Art exhibition stall" },
      { id: "cf4", src: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=800&q=80", alt: "Drama presentation" },
    ],
  },
  {
    slug:        "library-week-2024",
    title:       "Library Week 2024",
    displayDate: "August 2024",
    date:        "2024-08",
    album:       "academics",
    cover:       "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
    images: [
      { id: "lw1", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",  alt: "Reading session in the library" },
      { id: "lw2", src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",  alt: "Book fair display" },
      { id: "lw3", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",  alt: "Story-telling activity" },
      { id: "lw4", src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",    alt: "Students browsing books" },
    ],
  },
  {
    slug:        "eco-club-plantation-2024",
    title:       "Eco Club Plantation Drive",
    displayDate: "July 2024",
    date:        "2024-07",
    album:       "clubs",
    cover:       "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80",
    images: [
      { id: "ec1", src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",  alt: "Tree plantation on school grounds" },
      { id: "ec2", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",  alt: "Students planting saplings" },
      { id: "ec3", src: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=800&q=80", alt: "Awareness rally by eco club" },
      { id: "ec4", src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",  alt: "Composting workshop" },
      { id: "ec5", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",  alt: "Nature walk activity" },
    ],
  },
];

export const COLLECTION_SLUGS = COLLECTIONS.map((c) => c.slug);

export const GALLERY_IMAGES = COLLECTIONS.slice(0, 6).map((c) => ({
  id:  c.slug,
  src: c.cover,
  alt: c.title,
}));
