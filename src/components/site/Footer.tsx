import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/diit-logo.png";
import whiteLogo from "@/assets/diit-logo-white.png";
import { news } from "@/data/content";
import { cld, diit, site, telHref } from "@/data/site";
import { FacebookIcon, LinkedinIcon, YoutubeIcon } from "./icons";
import { Reveal } from "./motion";

const quick = [
  { label: "About DIIT", href: diit("/about") },
  { label: "Programs", href: "/#programs" },
  { label: "Faculty Members", href: diit("/faculty") },
  { label: "Academic Calendar", href: diit("/academics/calendar") },
  { label: "Contact Us", href: diit("/contact") },
];
const admissions = [
  { label: "Admission Overview", href: diit("/admission/online") },
  { label: "How to Apply", href: diit("/admission/online") },
  { label: "Tuition Fees", href: diit("/admission/fees") },
  { label: "Scholarships", href: diit("/admission/scholarships") },
  { label: "Brochure", href: diit("/brochure") },
];

const ext = (href: string) => (href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {});

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

function Col({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-sm font-bold text-ink">{title}</p>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} {...ext(i.href)} className="text-[14.5px] text-muted-foreground transition-colors hover:text-primary">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const socials = [
    { label: "Facebook", href: site.socials.facebook, Icon: FacebookIcon },
    { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedinIcon },
    { label: "YouTube", href: "https://www.youtube.com/watch?v=X9IUWoHlIzw", Icon: YoutubeIcon },
  ];

  return (
    <footer id="contact" className="scroll-mt-24 bg-surface pt-16 md:pt-20">
      <div className="container-site">
        <Reveal className="rounded-3xl border border-border bg-card p-6 sm:p-10 md:p-12">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.2fr_1.2fr]">
            <div>
              <Link to="/" aria-label="DIIT home">
                <img src={logo} alt="Daffodil Institute of IT" className="h-12 w-auto" />
              </Link>
              <p className="mt-6 max-w-xs text-[14.5px] leading-relaxed text-muted-foreground">{site.tagline}</p>
              <div className="mt-6 flex gap-2">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-full border border-border text-ink transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
            <Col title="Quick Links" items={quick} />
            <Col title="Admissions" items={admissions} />
            <div>
              <p className="text-sm font-bold text-ink">Latest News</p>
              <div className="mt-5 space-y-5">
                {news.slice(1, 3).map((n) => (
                  <a key={n.title} href={diit("/news")} target="_blank" rel="noreferrer" className="group flex gap-3">
                    <img src={cld(n.image, 200)} alt="" loading="lazy" className="size-16 shrink-0 rounded-lg object-cover" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{fmt(n.date)}</p>
                      <p className="mt-1 line-clamp-2 text-[13.5px] font-semibold leading-snug text-ink group-hover:text-primary">
                        {n.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-ink">Contact Us</p>
              <ul className="mt-5 space-y-4 text-[14px] text-muted-foreground">
                {site.phones.map((p) => (
                  <li key={p}>
                    <a href={telHref(p)} className="flex items-center gap-3 hover:text-primary">
                      <Phone strokeWidth={1.5} className="size-4 shrink-0 text-primary" /> {p}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-primary">
                    <Mail strokeWidth={1.5} className="size-4 shrink-0 text-primary" /> {site.email}
                  </a>
                </li>
                {site.campuses.map((c) => (
                  <li key={c.label} className="flex gap-3">
                    <MapPin strokeWidth={1.5} className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>
                      <span className="font-semibold text-ink">{c.label}:</span> {c.address}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="mt-12 bg-primary text-primary-foreground">
        <div className="container-site flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <div className="flex items-center gap-4">
            <img src={whiteLogo} alt="" className="h-8 w-auto" />
            <p className="text-[13px] text-primary-foreground/80">© 2026 Daffodil Institute of IT. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-[13px] text-primary-foreground/80">
            <a href={diit("/privacy")} target="_blank" rel="noreferrer" className="hover:text-primary-foreground">Privacy</a>
            <a href={diit("/terms")} target="_blank" rel="noreferrer" className="hover:text-primary-foreground">Terms</a>
            <a href={diit("/sitemap")} target="_blank" rel="noreferrer" className="hover:text-primary-foreground">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
