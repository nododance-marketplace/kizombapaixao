/**
 * Instructor bios for the "Sobre / About" section.
 * Edit freely — the layout will adapt. Image paths point to /public/assets.
 */
export type Instructor = {
  name: string;
  role: string;
  image: string;
  imageFilename: string;
  bio: string;
};

export const instructors: Instructor[] = [
  {
    name: "Brandon Bell",
    role: "Lead Instructor — Kizomba & Semba",
    image: "/assets/brandon.jpg",
    imageFilename: "brandon.jpg",
    bio: "Brandon teaches kizomba and semba as a conversation — technical foundations first, soulful connection always. Based in Charlotte, he guides dancers from their very first step through advanced musicality, with patience and a deep respect for the Angolan roots of the dance.",
  },
  {
    name: "Hazel Ami Okwaro",
    role: "Co-Instructor — Kizomba",
    image: "/assets/hazel.jpg",
    imageFilename: "hazel.jpg",
    bio: "Hazel brings warmth, precision, and a follower-forward perspective to every class. She helps beginners find their confidence and helps experienced dancers refine the details that make kizomba feel effortless — grounded, musical, and present.",
  },
];
