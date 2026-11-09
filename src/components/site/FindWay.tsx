import { motion } from "motion/react";
import { quickLinks } from "@/data/content";
import { diit } from "@/data/site";
import { useLang } from "@/data/i18n";
import { Icon } from "./icons";
import { SectionHeading } from "./SectionHeading";
import { Arrow, Stagger, staggerItem } from "./motion";

const hrefs: Record<string, string> = {
  Scholarships: "/admission/scholarships",
  "Innovation Labs": "/campus/facilities",
  Alumni: "/alumni",
  "Student Life": "/campus-activities",
  "Faculty Members": "/faculty",
  "Tuition Fees": "/admission/fees",
};

export function FindWay() {
  const { t } = useLang();
  return (
    <section className="container-site py-24 md:py-32">
      <SectionHeading title={t("findWay")} subtitle="Explore the countless paths and opportunities that DIIT has to offer." />
      <Stagger className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {quickLinks.map((q) => (
          <motion.a
            key={q.label}
            variants={staggerItem}
            href={diit(hrefs[q.label] ?? "/")}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center gap-5 bg-card p-6 transition-colors duration-500 hover:bg-primary md:p-8"
          >
            <div className="grid size-14 shrink-0 place-items-center rounded-2xl border border-border text-primary transition-colors duration-500 group-hover:border-primary-foreground/30 group-hover:text-primary-foreground">
              <Icon name={q.icon} className="size-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[17px] font-bold tracking-tight text-ink transition-colors duration-500 group-hover:text-primary-foreground">
                {q.label}
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/75">
                {q.text}
              </p>
            </div>
            <Arrow className="text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground" />
          </motion.a>
        ))}
      </Stagger>
    </section>
  );
}
