export type Program = {
  slug: string;
  title: string;
  short: string;
  level: "Undergraduate" | "Postgraduate" | "Diploma";
  icon:
    | "Briefcase"
    | "Code2"
    | "Plane"
    | "GraduationCap"
    | "Globe"
    | "Network"
    | "Truck"
    | "ShieldCheck"
    | "Megaphone"
    | "MapPin";
  image: string;
  semesters: string;
  credits: string;
  head: { name: string; role: string };
  description: string;
};

export const programs: Program[] = [
  {
    slug: "bba",
    title: "Bachelor of Business Administration (BBA)",
    short: "BBA",
    level: "Undergraduate",
    icon: "Briefcase",
    image: "v1771229913/programs/naztm0kdxrjoxpnj3pk8.jpg",
    semesters: "8 Semesters",
    credits: "126 Credits",
    head: { name: "Lakkhan Chandra Robidas", role: "Assistant Professor & Head of the Department" },
    description:
      "Build a strong foundation in business, leadership, and entrepreneurship with our Bachelor of Business Administration (BBA) program. Gain practical knowledge through case studies, presentations, and industry exposure.",
  },
  {
    slug: "bsc-cse",
    title: "B.Sc. in Computer Science & Engineering (CSE)",
    short: "B.Sc. in CSE",
    level: "Undergraduate",
    icon: "Code2",
    image: "v1771229991/programs/cnkehepxs97a2nlforws.jpg",
    semesters: "8 Semesters",
    credits: "138 Credits",
    head: { name: "Imran Hossain", role: "Head of Department, CSE" },
    description:
      "Develop cutting-edge technical skills through our Bachelor of Science in Computer Science & Engineering (CSE). Learn programming, software development, and system design with hands-on projects.",
  },
  {
    slug: "bthm",
    title: "BBA in Tourism & Hospitality Management (BTHM)",
    short: "BTHM",
    level: "Undergraduate",
    icon: "Plane",
    image: "v1771230066/programs/pvssdykysmjtpqd50fcv.jpg",
    semesters: "8 Semesters",
    credits: "120 Credits",
    head: { name: "Tanjila Afroz Mou", role: "Head of the Department" },
    description:
      "Prepare for a global career in tourism and hospitality with practical training, industry exposure, and professional development opportunities.",
  },
  {
    slug: "mba",
    title: "Master of Business Administration (MBA)",
    short: "MBA",
    level: "Postgraduate",
    icon: "GraduationCap",
    image: "v1771230108/programs/weagijc5eperxakdxah0.jpg",
    semesters: "2 Semesters",
    credits: "36 Credits",
    head: { name: "Md. Omar Faruk", role: "Assistant Professor" },
    description:
      "A master of business administration (MBA) is a graduate degree that provides theoretical and practical training for business or investment management. It is designed to help graduates gain a better understanding of general business management functions, international business, and corporate accountability.",
  },
  {
    slug: "mthm",
    title: "MBA in Tourism and Hospitality Management (MTHM)",
    short: "MTHM",
    level: "Postgraduate",
    icon: "Globe",
    image: "v1771230190/programs/ipwmhajhjcddilyu8jtw.jpg",
    semesters: "2 Semesters",
    credits: "36 Credits",
    head: { name: "Tanjila Afroz Mou", role: "Head of the Department" },
    description:
      "The MBA in Tourism and Hospitality Management is designed to develop advanced leadership, strategic, and operational skills for the global hospitality industry — preparing graduates for high-level roles in tourism, hotels, resorts, and service organizations.",
  },
  {
    slug: "msc-cse",
    title: "MSc in Computer Science & Engineering",
    short: "MSc in CSE",
    level: "Postgraduate",
    icon: "Network",
    image: "v1792822761/programs/s7blsnc7ozy68quyyq6t.jpg",
    semesters: "2 Semesters",
    credits: "36 Credits",
    head: { name: "Imran Hossain", role: "Head of Department, CSE" },
    description:
      "Advance technological frontiers and conduct high-impact research with a Master of Science (MSc) in Computer Science & Engineering.",
  },
  {
    slug: "pgd-supply-chain-management",
    title: "PGD in Supply Chain Management",
    short: "PGD in SCM",
    level: "Diploma",
    icon: "Truck",
    image: "v1793687646/programs/wikxykq3hvh4wv0wc2az.jpg",
    semesters: "2 Semesters",
    credits: "40 Credits",
    head: { name: "Md. Omar Faruk", role: "Assistant Professor" },
    description:
      "The Post Graduate Diploma (PGD) in Supply Chain Management provides an advanced, 40-credit academic framework designed to counter evolving global supply chain, logistics, and operational landscapes.",
  },
  {
    slug: "pgd-cyber-security",
    title: "PGD in Cyber Security",
    short: "PGD in Cyber Security",
    level: "Diploma",
    icon: "ShieldCheck",
    image: "v1793687649/programs/yxmnkgpanwlkzjrlihhu.jpg",
    semesters: "2 Semesters",
    credits: "40 Credits",
    head: { name: "Imran Hossain", role: "Head of Department, CSE" },
    description:
      "Unlock a high-demand career in digital defense with a Post Graduate Diploma (PGD) in Cyber Security.",
  },
  {
    slug: "pgd-digital-marketing",
    title: "PGD in Digital Marketing",
    short: "PGD in Digital Marketing",
    level: "Diploma",
    icon: "Megaphone",
    image: "v1793687652/programs/alljwil1hn7iovygxuv4.jpg",
    semesters: "2 Semesters",
    credits: "40 Credits",
    head: { name: "Md. Omar Faruk", role: "Assistant Professor" },
    description:
      "Drive business growth and master the modern marketplace with a Post Graduate Diploma (PGD) in Digital Marketing.",
  },
  {
    slug: "pgd-tourism-travel-management",
    title: "PGD in Tourism & Travel Management",
    short: "PGD in Tourism & Travel",
    level: "Diploma",
    icon: "MapPin",
    image: "v1793687648/programs/k6vdhf0nom02oeohbtmc.jpg",
    semesters: "2 Semesters",
    credits: "40 Credits",
    head: { name: "Tanjila Afroz Mou", role: "Head of the Department" },
    description:
      "The Post Graduate Diploma (PGD) in Tourism & Travel Management provides an advanced, 40-credit academic framework designed to counter evolving global tourism, travel, and hospitality landscapes.",
  },
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);
