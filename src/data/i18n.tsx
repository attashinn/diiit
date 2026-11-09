import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "bn";

const dict = {
  announcement: {
    en: "Special admission offer on the foundation stone laying of DIIT's permanent campus — up to 40% off admission fee for a limited time.",
    bn: "DIIT-এর স্থায়ী ক্যাম্পাসের ভিত্তিপ্রস্তর স্থাপন উপলক্ষে বিশেষ ভর্তি অফার! সীমিত সময়ের জন্য Admission Fee-এ সর্বোচ্চ ৪০% পর্যন্ত ছাড়।",
  },
  home: { en: "Home", bn: "হোম" },
  admissions: { en: "Admissions", bn: "ভর্তি" },
  academics: { en: "Academics", bn: "একাডেমিক" },
  programs: { en: "Programs", bn: "প্রোগ্রাম" },
  media: { en: "Media Center", bn: "মিডিয়া সেন্টার" },
  about: { en: "About", bn: "আমাদের সম্পর্কে" },
  contact: { en: "Contact", bn: "যোগাযোগ" },
  apply: { en: "Apply Now", bn: "আবেদন করুন" },
  heroTitle: { en: "Welcome to Daffodil Institute of IT.", bn: "ড্যাফোডিল ইনস্টিটিউট অব আইটি-তে স্বাগতম।" },
  heroText: {
    en: "Empowering students with superior education in technology and business.",
    bn: "প্রযুক্তি ও ব্যবসায় উন্নত শিক্ষার মাধ্যমে শিক্ষার্থীদের ক্ষমতায়ন।",
  },
  noticeTitle: { en: "Read the Notice Board.", bn: "নোটিশ বোর্ড পড়ুন।" },
  seeNotices: { en: "See All Notices", bn: "সব নোটিশ" },
  browse: { en: "Browse programs by.", bn: "প্রোগ্রাম খুঁজুন।" },
  allPrograms: { en: "All Programs", bn: "সব প্রোগ্রাম" },
  joinNow: { en: "Join Now", bn: "যোগ দিন" },
  knowledge: { en: "Where Knowledge Meets Innovation.", bn: "যেখানে জ্ঞান মেলে উদ্ভাবনের সাথে।" },
  knowMore: { en: "Know More About Us", bn: "আমাদের সম্পর্কে জানুন" },
  numbers: { en: "Excellence in numbers.", bn: "সংখ্যায় আমাদের অর্জন।" },
  events: { en: "Events & seminars.", bn: "ইভেন্ট ও সেমিনার।" },
  exploreAll: { en: "Explore All", bn: "সব দেখুন" },
  watchTitle: { en: "Watch what a day at DIIT is like.", bn: "দেখুন DIIT-তে একটি দিন কেমন।" },
  watchNow: { en: "Watch Now", bn: "এখনই দেখুন" },
  studentsSay: { en: "What our students say.", bn: "শিক্ষার্থীরা যা বলেন।" },
  partnerships: { en: "Global Partnerships.", bn: "বৈশ্বিক অংশীদারিত্ব।" },
  exploreMous: { en: "Explore MoUs", bn: "সমঝোতা স্মারক দেখুন" },
  findWay: { en: "Find your way.", bn: "আপনার পথ খুঁজুন।" },
  newsEvents: { en: "News & events.", bn: "খবর ও ইভেন্ট।" },
  readMore: { en: "Read More", bn: "আরও পড়ুন" },
  ctaTitle: { en: "We're here to help you shape the future.", bn: "ভবিষ্যৎ গড়তে আমরা আছি আপনার পাশে।" },
  prospectus: { en: "Download Prospectus", bn: "প্রসপেক্টাস ডাউনলোড" },
  admissionsOpen: { en: "Admissions Open 2026", bn: "ভর্তি চলছে ২০২৬" },
  explorePrograms: { en: "Explore Programs", bn: "প্রোগ্রামসমূহ দেখুন" },
  nuAffiliated: { en: "National University Affiliated • Code 6488", bn: "জাতীয় বিশ্ববিদ্যালয় অধিভুক্ত • কোড ৬৪৮৮" },
  yearsExcellence: { en: "27+ Years of Excellence", bn: "২৭+ বছরের সাফল্য" },
  placementSupport: { en: "100% Placement Assistance", bn: "১০০% কর্মসংস্থান সহায়তা" },
} as const;

export type DictKey = keyof typeof dict;

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("diit-lang");
    if (saved === "bn" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("diit-lang", lang);
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  const t = (key: DictKey) => dict[key][lang];
  return { lang, setLang, t };
}
