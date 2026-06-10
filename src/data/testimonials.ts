export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  image?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Auxilium has been a second home for my daughter. The teachers genuinely care about every child's growth — academically and as a person. We couldn't have chosen a better school.",
    name: "Mrs. Priya Fernandes",
    role: "Parent, Grade 3",
    initials: "PF",
    image: undefined,
  },
  {
    quote:
      "The values instilled here go far beyond textbooks. The Salesian spirit of reason, religion, and loving kindness shapes how students carry themselves long after they leave.",
    name: "Mr. Aaron D'Souza",
    role: "Alumni, Batch of 2018",
    initials: "AD",
    image: undefined,
  },
  {
    quote:
      "From the moment we visited, the warmth of the staff and the energy of the students told us everything. My son looks forward to school every single day.",
    name: "Mrs. Leena Rodrigues",
    role: "Parent, Grade 1",
    initials: "LR",
    image: undefined,
  },
  {
    quote:
      "The co-curricular programme here is outstanding. My children have grown in confidence, creativity, and character — Auxilium nurtures the whole child.",
    name: "Dr. Samuel Pinto",
    role: "Parent, Grade 2 & Grade 4",
    initials: "SP",
    image: undefined,
  },
];
