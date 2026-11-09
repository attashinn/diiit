import { motion } from "motion/react";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { events } from "@/data/content";
import { cld, diit } from "@/data/site";
import { useLang } from "@/data/i18n";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { Arrow, Stagger, staggerItem } from "./motion";

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });

export function Events() {
  const { t } = useLang();
  return (
    <section className="container-site py-24 md:py-32">
      <SectionHeading
        title={t("events")}
        subtitle="Seminars, field trips and lab days — a look at what DIIT students have been up to this term."
        action={
          <Button asChild variant="brand" size="pill">
            <a href={diit("/campus-activities")} target="_blank" rel="noreferrer">
              {t("exploreAll")} <Arrow />
            </a>
          </Button>
        }
      />
      <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
        {events.map((e) => (
          <motion.article
            key={e.title}
            variants={staggerItem}
            className="group flex flex-col rounded-2xl border border-border bg-card p-3 transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-lift"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={cld(e.image, 800)}
                alt={e.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-3 pt-5">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarDays strokeWidth={1.5} className="size-3.5" /> {fmt(e.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock strokeWidth={1.5} className="size-3.5" /> {e.time}
                </span>
              </div>
              <h3 className="mt-3 text-[18px] font-bold leading-snug tracking-tight text-ink">{e.title}</h3>
              <p className="mt-2 line-clamp-2 text-[14.5px] leading-relaxed text-muted-foreground">{e.description}</p>
              <div className="mt-auto flex items-center justify-between pt-6">
                <span className="flex min-w-0 items-center gap-1.5 truncate text-xs text-muted-foreground">
                  <MapPin strokeWidth={1.5} className="size-3.5 shrink-0" /> {e.place}
                </span>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary">
                  {t("readMore")} <Arrow className="size-3.5" />
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </Stagger>
    </section>
  );
}
