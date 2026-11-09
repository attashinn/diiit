import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cld, diit, images, stats } from "@/data/site";
import { useLang } from "@/data/i18n";
import { Button } from "@/components/ui/button";
import { Icon } from "./icons";
import { Arrow, Counter, Reveal, WordReveal } from "./motion";

const heights = ["h-[300px]", "h-[380px]", "h-[260px]", "h-[400px]", "h-[320px]", "h-[360px]"];

export function About() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-18%"]);

  return (
    <section id="about" className="scroll-mt-24 overflow-hidden bg-surface py-24 md:py-32">
      <div className="container-site flex flex-col items-center text-center">
        <WordReveal text={t("knowledge")} className="max-w-3xl text-section text-ink" />
        <Reveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">
            Daffodil Institute of IT is affiliated with the National University and teaches technology,
            business and hospitality the practical way — labs, live projects, industry
            visits and global partners from the very first semester.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <Button asChild variant="brand" size="xl" className="mt-8">
            <a href={diit("/about")} target="_blank" rel="noreferrer">
              {t("knowMore")} <Arrow />
            </a>
          </Button>
        </Reveal>
      </div>

      <div ref={ref} className="mt-16 md:mt-20">
        <motion.div style={{ x }} className="flex items-end gap-4 pl-5 md:gap-5">
          {images.strip.map((im, i) => (
            <Reveal
              key={im.src}
              delay={i * 0.08}
              className={`relative w-[260px] shrink-0 overflow-hidden rounded-2xl md:w-[340px] md:rounded-3xl ${heights[i % heights.length]}`}
            >
              <img
                src={cld(im.src, 800)}
                alt={im.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
              />
            </Reveal>
          ))}
        </motion.div>
      </div>

      <div className="container-site mt-24 md:mt-32">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <WordReveal text={t("numbers")} className="text-section text-ink" />
          <Reveal delay={0.1}>
            <p className="max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Our commitment to quality education and student success, measured.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid grid-cols-2 border-t border-border lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`border-b border-border py-8 pr-4 lg:border-b-0 ${i > 0 ? "lg:border-l lg:pl-8" : ""} ${i % 2 === 1 ? "border-l pl-5 lg:pl-8" : ""}`}
            >
              <Icon name={s.icon} className="size-6 text-muted-foreground" />
              <div className="mt-6 text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-none tracking-[-0.04em] text-primary">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-[14.5px] font-medium text-ink">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
