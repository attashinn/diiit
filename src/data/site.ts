// Contact details and campus info — edit here to update the whole site.
export const site = {
  name: "Daffodil Institute of IT",
  shortName: "DIIT",
  tagline:
    "Daffodil Institute of IT (DIIT) is a premier institution dedicated to fostering innovation, excellence, and leadership in technology and engineering education.",
  phones: ["+880 1713-493287", "+880 1847-140188"],
  email: "admission@diit.edu.bd",
  campuses: [
    {
      label: "Main Campus",
      address: "Daffodil Plaza, 4/2 Sobhanbag (6th & 7th Floor) Mirpur Road, Dhanmondi, Dhaka-1207",
    },
    { label: "Permanent Campus", address: "Green Model Town, Mugda, Dhaka" },
  ],
  applyUrl: "https://diit.edu.bd/admission/online",
  prospectusUrl: "https://diit.edu.bd/prospectus",
  socials: {
    facebook: "https://www.facebook.com/DaffodilInstituteofIT/",
    linkedin: "https://www.linkedin.com/school/diit-nu/",
  },
} as const;

/** Pages that still live on the current diit.edu.bd site. */
export const diit = (path: string) => `https://diit.edu.bd${path}`;

export const telHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, "")}`;

/** Build a resized Cloudinary URL for DIIT's media library. */
export const cld = (path: string, width = 1200) =>
  `https://res.cloudinary.com/dtub7pte0/image/upload/c_limit,w_${width},f_auto,q_auto/${path}`;

export const stats = [
  { value: 5000, suffix: "+", label: "Students Enrolled", icon: "Users" },
  { value: 3500, suffix: "+", label: "Successful Graduates", icon: "GraduationCap" },
  { value: 110, suffix: "+", label: "Expert Faculty", icon: "BookOpenCheck" },
  { value: 150, suffix: "+", label: "Research Papers & Articles", icon: "FileText" },
] as const;

export const images = {
  hero: "v1792822761/programs/s7blsnc7ozy68quyyq6t.jpg",
  graduates: "v1771230108/programs/weagijc5eperxakdxah0.jpg",
  capsThrown: "v1771230066/programs/pvssdykysmjtpqd50fcv.jpg",
  classroom: "v1788838006/news/hwgag2n7ssy7s9wuq7rl.jpg",
  innovationFair: "v1789376638/news/vppoeg3rxv2zzneee9tf.jpg",
  partnership: "v1788672163/news/i03rdxyypoxieuwuuprz.jpg",
  strip: [
    { src: "v1786862593/news/yroiqqjcvnqnjwxb8xcn.jpg", alt: "CSE students wiring a digital circuit in the lab" },
    { src: "v1771229991/programs/cnkehepxs97a2nlforws.jpg", alt: "Students working in the DIIT computer lab" },
    { src: "v1787459063/news/gzd5xdax07qy8odz7hbc.jpg", alt: "BTHM students during a hospitality practical exam" },
    { src: "v1778750245/news/cwf8kqpmwx8iigxitm5x.jpg", alt: "DIIT students holding gold medals at WICE 2026" },
    { src: "v1776231289/news/fer1azwhtqhjf7rgsmza.jpg", alt: "Freshers' reception of the CSE batch" },
    { src: "v1787458751/news/snhgfg6sf4navwstkaui.jpg", alt: "Tourism Society students on the Beyond the Mangrove trip" },
  ],
} as const;
