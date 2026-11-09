import { motion, useScroll, useTransform } from "motion/react";
import { Download } from "lucide-react";
import { useRef } from "react";
import { cld, images, site } from "@/data/site";
import { useLang } from "@/data/i18n";
import { Button } from "@/components/ui/button";
import { Arrow, Reveal, WordReveal } from "./motion";

export function Cta() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);

  return (
    <section className="container-site pb-24 md:pb-32">
      <div ref={ref} className="relative overflow-hidden rounded-3xl bg-ink md:rounded-4xl">
        <motion.img
          style={{ scale }}
          src={cld(images.capsThrown, 2000)}
          alt="DIIT graduates celebrating on campus"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 overlay-left" />
        <div className="relative flex min-h-[520px] flex-col justify-end p-6 sm:p-10 md:min-h-[560px] md:p-14">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-on-image/25 px-3 py-1.5 text-xs font-semibold text-on-image">
              <span className="size-1.5 rounded-full bg-brand-green" />
              {t("admissionsOpen")}
            </span>
          </Reveal>
          <WordReveal text={t("ctaTitle")} className="mt-6 max-w-[16ch] text-display text-on-image" />
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-on-image-muted">
              Talk to our admission team, visit the Dhanmondi campus, or apply online in minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="xl">
                <a href={site.applyUrl} target="_blank" rel="noreferrer">
                  {t("apply")} <Arrow />
                </a>
              </Button>
              <Button asChild variant="light" size="xl">
                <a href={site.prospectusUrl} target="_blank" rel="noreferrer">
                  <Download strokeWidth={1.75} /> {t("prospectus")}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
