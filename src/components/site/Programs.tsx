import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { programs } from "@/data/programs";
import { cld, images } from "@/data/site";
import { useLang } from "@/data/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "./icons";
import { SectionHeading } from "./SectionHeading";
import { Arrow, Reveal, Stagger, staggerItem } from "./motion";

const tabs = [
  { key: "Undergraduate", label: "Undergraduate" },
  { key: "Postgraduate", label: "Postgraduate" },
  { key: "Diploma", label: "PG Diploma" },
] as const;

function ProgramCard({ p }: { p: (typeof programs)[number] }) {
  const { t } = useLang();
  return (
    <motion.div variants={staggerItem} className="h-full">
      <Link
        to="/programs/$slug"
        params={{ slug: p.slug }}
        className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-border bg-card p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary hover:shadow-lift"
      >
        <div>
          <div className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon name={p.icon} className="size-6" />
          </div>
          <h3 className="mt-6 text-[17px] font-bold leading-snug tracking-tight text-ink">{p.short}</h3>
          <p className="mt-1.5 text-[13px] text-muted-foreground">
            {p.semesters} · {p.credits}
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          {t("joinNow")} <Arrow className="size-3.5" />
        </span>
      </Link>
    </motion.div>
  );
}

export function Programs() {
  const { t } = useLang();
  const [tab, setTab] = useState<(typeof tabs)[number]["key"]>("Undergraduate");
  const list = programs.filter((p) => p.level === tab);

  return (
    <section id="programs" className="container-site scroll-mt-24 py-24 md:py-32">
      <SectionHeading
        title={t("browse")}
        subtitle="National University-affiliated degrees in business, technology, and tourism — built around practical, industry-ready learning."
        action={
          <Button asChild variant="brand" size="pill">
            <a href="#all-programs">
              {t("allPrograms")} <Arrow />
            </a>
          </Button>
        }
      />

      <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
        {tabs.map((tb) => (
          <button
            key={tb.key}
            onClick={() => setTab(tb.key)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              tab === tb.key ? "text-primary-foreground" : "text-muted-foreground hover:text-ink",
            )}
          >
            {tab === tb.key && (
              <motion.span
                layoutId="program-tab"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{tb.label}</span>
          </button>
        ))}
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_380px]">
        <Stagger key={tab} className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((p) => (
            <ProgramCard key={p.slug} p={p} />
          ))}
        </Stagger>
        <Reveal delay={0.15} className="relative hidden overflow-hidden rounded-3xl lg:block">
          <motion.img
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            src={cld(images.graduates, 900)}
            alt="MBA graduates of DIIT in convocation gowns"
            className="absolute inset-0 h-full w-full object-cover object-[60%_50%]"
            loading="lazy"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-background/95 p-4 backdrop-blur">
            <p className="text-sm font-semibold text-ink">Affiliated with National University</p>
            <p className="mt-0.5 text-xs text-muted-foreground">10 programs · Dhanmondi, Dhaka</p>
          </div>
        </Reveal>
      </div>

      <div id="all-programs" className="mt-16 scroll-mt-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Every program at DIIT</p>
        </Reveal>
        <Stagger className="mt-5 grid grid-cols-1 border-t border-border sm:grid-cols-2">
          {programs.map((p, i) => (
            <motion.div key={p.slug} variants={staggerItem}>
              <Link
                to="/programs/$slug"
                params={{ slug: p.slug }}
                className={cn(
                  "group flex items-center gap-4 border-b border-border py-4 transition-colors hover:text-primary",
                  i % 2 === 0 && "sm:pr-8",
                  i % 2 === 1 && "sm:border-l sm:pl-8",
                )}
              >
                <Icon name={p.icon} className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                <span className="min-w-0 flex-1 truncate text-[15px] font-medium">{p.title}</span>
                <Arrow className="text-muted-foreground group-hover:text-primary" />
              </Link>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
