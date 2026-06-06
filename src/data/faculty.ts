// ── Faculty & Staff ───────────────────────────────────────────────────────────
// To add a member: append to the relevant department's members array.
// To add a department: add a new object to DEPARTMENTS.
// photo: path relative to /public, e.g. "/images/faculty/angela-fernandes.jpg"

export type FacultyMember = {
  name: string;
  role: string;
  email?: string;
  photo?: string;
};

export type Department = {
  label: string;
  members: FacultyMember[];
};

export const DEPARTMENTS: Department[] = [
  {
    label: "Leadership",
    members: [
      { name: "Sr. Lavita Sequira", role: "Principal", email: "principal@auxiliumcarona.edu.in", photo: "/images/sections/about/faculty/principal.png" },
      { name: "Sr. Antonette Desouza", role: "Manager", email: "vp@auxiliumcarona.edu.in", photo: "/images/sections/about/faculty/manager.png" },
      { name: "Sr. Meenakshi D'Silva", role: "Provincial", email: "vp@auxiliumcarona.edu.in", photo: "/images/sections/about/faculty/provincial.png" },
      { name: "Mother Chiara Cazzuola", role: "Mother General", email: "vp@auxiliumcarona.edu.in", photo: "/images/sections/about/faculty/mother-general.png" },
    ],
  },
  {
    label: "Primary Section",
    members: [
      { name: "Mrs. Priya Naik",   role: "Class Teacher — Gr. I" },
      { name: "Mr. Ravi Kamat",    role: "Class Teacher — Gr. II" },
      { name: "Mrs. Fatima Pinto", role: "Class Teacher — Gr. III" },
      { name: "Mrs. Seema Gawas",  role: "Class Teacher — Gr. IV" },
      { name: "Mr. Ashwin Dessai", role: "Class Teacher — Gr. V" },
    ],
  },
  {
    label: "Languages",
    members: [
      { name: "Mrs. Lina Rodrigues",  role: "English" },
      { name: "Mr. Deepak Vernekar",  role: "Konkani & Marathi" },
      { name: "Mrs. Sonal Chodankar", role: "Hindi" },
      { name: "Mr. Carlos Pereira",   role: "Portuguese" },
    ],
  },
  {
    label: "Mathematics & Science",
    members: [
      { name: "Mr. Nilesh Sawardekar", role: "Mathematics" },
      { name: "Mrs. Anita Parsekar",   role: "General Science" },
      { name: "Mr. Suresh Kerkar",     role: "Environmental Studies" },
    ],
  },
  {
    label: "Arts, Sports & Co-Curricular",
    members: [
      { name: "Mrs. Rekha Naik",    role: "Art & Craft" },
      { name: "Mr. Joel Fernandes", role: "Physical Education" },
      { name: "Mrs. Divya Shet",    role: "Music" },
    ],
  },
  {
    label: "Support Staff",
    members: [
      { name: "Mrs. Usha Gaonkar", role: "Librarian" },
      { name: "Mr. Prakash Naik",  role: "Computer Lab In-charge" },
      { name: "Mrs. Clara Colaco", role: "Administrative Staff" },
    ],
  },
];
