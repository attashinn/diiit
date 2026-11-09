export type NewsItem = {
  title: string;
  date: string; // ISO
  category: string;
  image: string;
  excerpt: string;
  author: string;
  readTime: string;
};

export const news: NewsItem[] = [
  {
    title: "বাংলাদেশ ইনোভেশন ফেয়ার ২০২৬-এ DIIT-এর উদ্ভাবনী প্রজেক্টে দর্শনার্থীদের ব্যাপক সাড়া",
    date: "2026-09-14",
    category: "Event",
    image: "v1789376638/news/vppoeg3rxv2zzneee9tf.jpg",
    excerpt:
      "বাংলাদেশ ইনোভেশন ফেয়ার ২০২৬-এর প্রথম দিনেই দর্শনার্থীদের ব্যাপক সাড়া পেয়েছে Daffodil Institute of IT (DIIT)। জাতীয় বিশ্ববিদ্যালয়ের গর্বিত প্রতিনিধি হিসেবে উদ্ভাবন ও প্রযুক্তিনির্ভর বিভিন্ন প্রজেক্ট নিয়ে মেলায় অংশগ্রহণ করেছে DIIT।",
    author: "DIIT Media Cell",
    readTime: "4 min read",
  },
  {
    title: "DIIT Celebrates the Top Achievers of BBA 21st Batch, 7th Semester",
    date: "2026-10-10",
    category: "Academic",
    image: "v1791622212/news/kuljs6v2hdycbyfikojr.jpg",
    excerpt:
      "Daffodil Institute of IT (DIIT) proudly congratulates the Top Achievers of the BBA 21st Batch, 7th Semester on their outstanding academic performance.",
    author: "DIIT Media Cell",
    readTime: "2 min read",
  },
  {
    title: "World Tourism Day 2026: DIIT Hosts Career Insight Seminar on Travel & Hospitality Industry",
    date: "2026-10-05",
    category: "Seminar",
    image: "v1791185825/news/ku5kkilitgfp6b8seo6w.jpg",
    excerpt:
      "To mark World Tourism Day 2026, the Tourism Society of DIIT (TSD) organized an insightful seminar titled “Career Insight: Travel & Hospitality Industry”.",
    author: "Tourism Society of DIIT",
    readTime: "3 min read",
  },
  {
    title: "DIIT Hosts Seminar on “From Classroom to Career: Navigating the Future of Hospitality Industry”",
    date: "2026-09-08",
    category: "Seminar",
    image: "v1788838006/news/hwgag2n7ssy7s9wuq7rl.jpg",
    excerpt:
      "The Department of Tourism and Hospitality Management organized a seminar connecting academic learning with real-world professional practice.",
    author: "Dept. of THM",
    readTime: "3 min read",
  },
];

export const notices = [
  {
    title: "DIIT-এর স্থায়ী ক্যাম্পাসের ভিত্তিপ্রস্তর স্থাপন উপলক্ষে বিশেষ ভর্তি অফার — Admission Fee-এ সর্বোচ্চ ৪০% ছাড়",
    date: "2026-06-24",
    image: "v1782276577/news/zf9wo0guh9bixsm6baps.jpg",
  },
  {
    title: "DIIT Celebrates the Top Achievers of BBA 21st Batch, 7th Semester",
    date: "2026-10-10",
    image: "v1791622212/news/kuljs6v2hdycbyfikojr.jpg",
  },
  {
    title: "DIIT Launches Touchless Vending Machine and Job Placement Initiative",
    date: "2026-01-17",
    image: "v1768729056/news/bkks2g1brddztrkclruz.jpg",
  },
  {
    title: "MoU with Tour Operators Association of Bangladesh (TOAB)",
    date: "2025-10-09",
    image: "v1768729185/news/k7qjrie4zby7jdm0s9xh.jpg",
  },
];

export const events = [
  {
    title: "DIIT IT Club Hosts Seminar on Fully Funded Scholarships Abroad",
    date: "2026-09-06",
    time: "11:00 AM",
    place: "Main Campus, Dhanmondi",
    image: "v1788672163/news/i03rdxyypoxieuwuuprz.jpg",
    description:
      "Students learned how to find, prepare for and win fully funded scholarships at universities abroad, straight from people who did it.",
  },
  {
    title: "Beyond the Mangrove: A Two-Day Expedition by DIIT Tourism Society",
    date: "2026-08-23",
    time: "6:00 AM",
    place: "Sundarbans, Khulna",
    image: "v1787458751/news/snhgfg6sf4navwstkaui.jpg",
    description:
      "A field trip into the world's largest mangrove forest — real exposure to eco-tourism, tour operations and teamwork.",
  },
  {
    title: "CSE 24th Batch Explores Digital System Design Through Hands-On Learning",
    date: "2026-08-16",
    time: "10:00 AM",
    place: "Digital Electronics Lab",
    image: "v1786862593/news/yroiqqjcvnqnjwxb8xcn.jpg",
    description:
      "Breadboards, logic gates and live circuits — the 24th batch turned classroom theory into working digital systems.",
  },
];

export const testimonials = [
  {
    name: "Mrinal Roy",
    program: "CSE · AI Engineer at Kirkland & Ellis",
    image: "v1768650091/testimonials/xqlnqve1qlqi1voaxcqb.jpg",
    quote:
      "My journey at DIIT laid the foundation for everything I have achieved today. The strong academic grounding in Computer Science, combined with practical exposure and supportive faculty, helped me develop critical thinking and problem-solving skills that proved invaluable in my career. After graduating, I pursued my Master's in Computer Science at Northern Illinois University as a fully funded Research Assistant, and worked as a Graduate Research Aide at Argonne National Laboratory. Today, as an AI Engineer at Kirkland & Ellis, I am part of a pioneering team reshaping the legal industry through responsible artificial intelligence.",
  },
  {
    name: "Md. Firoz Ahmed",
    program: "BBA · Batch 9th",
    image: "v1768650146/testimonials/oustbsr5p4gzgoooptrh.jpg",
    quote:
      "My journey at DIIT was a turning point in both my professional and personal development. DIIT provided me with a strong academic foundation, practical exposure, and the confidence to explore opportunities beyond traditional career paths. Today, as a Top Rated+ freelance Digital Marketing Executive, I work with global brands in SEO, performance marketing, and online business growth. To current students — success does not come overnight. Stay patient, remain committed, and never stop learning.",
  },
  {
    name: "Fahmida Akter",
    program: "BBA · Major in Finance, 7th Batch",
    image: "v1768649992/testimonials/eiotsq00rc7eln4hq5h5.png",
    quote:
      "Choosing DIIT for my higher education remains one of the most fulfilling decisions of my life. Every success is built on a strong foundation, and DIIT provided me with exactly that — reliable, nurturing, and empowering. Throughout my BBA journey, I continuously reinvented myself under the guidance of inspiring and dedicated teachers who helped shape my academic excellence, professional mindset, and personal values.",
  },
  {
    name: "Lakkhan Chandra Robidas",
    program: "Assistant Professor and Head, BBA Program",
    image: "v1768650345/testimonials/hopu3rowhhyejj6q9s0j.png",
    quote:
      "A proud graduate of the BBA program (Major in Finance) from the 7th Batch of DIIT. DIIT equipped me with the knowledge, confidence, and discipline needed to compete in an increasingly competitive world. In 2015, I returned to DIIT as a faculty member, driven by the belief that teaching is one of the most important professions in the world. Through quality education under the National University framework, we shape future leaders and professionals.",
  },
];

export const videos = [
  {
    id: "X9IUWoHlIzw",
    title: "DIIT-এর স্থায়ী ক্যাম্পাসের ভিত্তিপ্রস্তর স্থাপন",
    caption: "Foundation stone ceremony",
  },
  {
    id: "Tt90KQ3mZI8",
    title: "প্রথম ব্যাচের অ্যালামনাই Shakib Arafat এর সফলতার গল্প",
    caption: "Alumni success story",
  },
  {
    id: "GvPQPQb2G-A",
    title: "Bazardor — যে অ্যাপ বদলে দিতে পারে বাজারের চিত্র",
    caption: "The Financial Express",
  },
];

export const collaborations = [
  {
    tag: "Academic & Research",
    title: "Karabuk University, Türkiye",
    description:
      "A gateway to European-standard education through Erasmus+ and Mevlana mobility, joint research in Engineering and Business, and pathways to Turkish government scholarships.",
  },
  {
    tag: "Professional Training",
    title: "Daffodil International Professional Training Institute",
    description:
      "A pioneer in professional training since 2004 — a complete career ecosystem for skill development, job placement, and global opportunities.",
  },
  {
    tag: "Student Exchange",
    title: "Jagran Lakecity University, India",
    description:
      "Joint initiatives in digital innovation, research collaborations, and student development through global exchange programs.",
  },
];

export const partners = [
  { name: "IBMR Business School", logo: "v1769241236/partners/fjh2z5nisjvb0cjjphjs.png" },
  { name: "Sias University", logo: "v1769240971/partners/lcu1thjybcpu1tysazjv.png" },
  { name: "Karabuk University", logo: "v1769241100/partners/grwngkwf9u6nwoig0v4f.png" },
  { name: "SRM Institute of Science and Technology", logo: "v1769240652/partners/kaad6rqyk8cutivwhk1m.png" },
  { name: "Bataan Peninsula State University", logo: "v1769236092/partners/knmfadus3aaalqwa6ztz.png" },
  { name: "KCG College of Technology", logo: "v1769235908/partners/whmf1wklpf61b8fzgz5i.png" },
  { name: "University of Southern Mindanao", logo: "v1769240411/partners/uelh3vlucdjgdi1dlemt.png" },
  { name: "Tarlac Agricultural University", logo: "v1769240853/partners/v1fzaxywpq0p4c0mxozz.png" },
  { name: "Daegu Health College", logo: "v1769240718/partners/e4cmcffybchrvuoqmzha.png" },
  { name: "St. Dominic College of Asia", logo: "v1769240516/partners/gzht97ltzj2cs8xqbw9j.png" },
  { name: "University of Saint Joseph", logo: "v1769235737/partners/cqlnjgi5nrvssgascpf1.png" },
  { name: "IIC University of Technology", logo: "v1769235480/partners/xcrgdn6ge9rvuokbqqyd.png" },
  { name: "University of Applied Sciences Upper Austria", logo: "v1769235244/partners/ylhkajzbzcnftgfem9lp.png" },
  { name: "Mountain Province State Polytechnic College", logo: "v1769236244/partners/baxe0tmeui4q8pwzcvhl.png" },
  { name: "Camarines Sur Polytechnic Colleges", logo: "v1768647798/partners/cvqm2x08aiootziuvth2.png" },
  { name: "Jagran Lakecity University", logo: "v1768647585/partners/vkfpzttlhsd9xdncqrrz.webp" },
  { name: "Tour Operators Association of Bangladesh (TOAB)", logo: "v1768647759/partners/xjilr9gd4libohzwllh7.png" },
];

export const quickLinks = [
  { label: "Scholarships", icon: "Award", text: "Merit and need-based waivers" },
  { label: "Innovation Labs", icon: "FlaskConical", text: "Build, test and ship ideas" },
  { label: "Alumni", icon: "Users", text: "A network across the globe" },
  { label: "Student Life", icon: "PartyPopper", text: "Clubs, tours and festivals" },
  { label: "Faculty Members", icon: "UserSquare", text: "Meet the people who teach" },
  { label: "Tuition Fees", icon: "Wallet", text: "Clear, semester-wise costs" },
] as const;
