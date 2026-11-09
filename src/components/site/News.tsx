import { motion } from "motion/react";
import { news } from "@/data/content";
import { cld, diit } from "@/data/site";
import { useLang } from "@/data/i18n";
import { SectionHeading } from "./SectionHeading";
import { Arrow, Reveal, Stagger, staggerItem } from "./motion";

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

export function News() {
  const { t } = useLang();
  const [featured, ...rest] = news;
  if (!featured) return null;
  return (
    <section id="news" className="container-site scroll-mt-24 py-24 md:py-32">
      <SectionHeading
        center
        title={t("newsEvents")}
        subtitle="Stay updated with what's happening on campus — achievements, seminars and student-led innovation."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        <Reveal>
          <a href={diit("/news")} target="_blank" rel="noreferrer" className="group block">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl">
              <img
                src={cld(featured.image, 1400)}
                alt={featured.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="mt-6 flex items-center gap-3 text-[13px] font-medium text-muted-foreground">
              <span className="rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-semibold text-primary">
                {featured.category}
              </span>
              <span>{featured.author}</span>
              <span className="size-1 rounded-full bg-border-strong" />
              <span>{featured.readTime}</span>
            </div>
            <h3 className="mt-3 font-bangla text-2xl font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-primary md:text-[28px]">
              {featured.title}
            </h3>
            <p className="mt-3 line-clamp-2 font-bangla text-[15px] leading-relaxed text-muted-foreground">
              {featured.excerpt}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              {t("readMore")} <Arrow className="size-3.5" />
            </span>
          </a>
        </Reveal>

        <Stagger className="flex flex-col divide-y divide-border">
          {rest.map((n) => (
            <motion.a
              key={n.title}
              variants={staggerItem}
              href={diit("/news")}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-[120px_minmax(0,1fr)] items-center gap-5 py-6 first:pt-0 sm:grid-cols-[180px_minmax(0,1fr)]"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={cld(n.image, 500)}
                  alt={n.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <span className="truncate">{n.author}</span>
                  <span className="size-1 shrink-0 rounded-full bg-border-strong" />
                  <span className="shrink-0">{fmt(n.date)}</span>
                </div>
                <h4 className="mt-2 line-clamp-3 text-[16.5px] font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-primary">
                  {n.title}
                </h4>
              </div>
            </motion.a>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
