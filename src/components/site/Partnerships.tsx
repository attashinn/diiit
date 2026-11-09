import { motion } from "motion/react";
import { collaborations, partners } from "@/data/content";
import { cld, diit, images } from "@/data/site";
import { useLang } from "@/data/i18n";
import { Button } from "@/components/ui/button";
import { Arrow, Reveal, Stagger, WordReveal, staggerItem } from "./motion";

export function Partnerships() {
  const { t } = useLang();
  return (
    <section id="partnerships" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <WordReveal text={t("partnerships")} className="text-section text-ink" />
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-muted-foreground">
              20+ national and international MoUs — from Türkiye and Hungary to India, China, Korea and the
              Philippines — opening doors to exchange, joint research, scholarships and global internships.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Button asChild variant="brand" size="xl" className="mt-8">
              <a href={diit("/mou")} target="_blank" rel="noreferrer">
                {t("exploreMous")} <Arrow />
              </a>
            </Button>
          </Reveal>
          <Reveal delay={0.25} className="mt-10 overflow-hidden rounded-3xl lg:mt-auto">
            <img
              src={cld(images.partnership, 1200)}
              alt="DIIT IT Club members at the scholarships abroad seminar"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>

        <Stagger className="flex flex-col gap-4">
          {collaborations.map((c) => (
            <motion.a
              key={c.title}
              variants={staggerItem}
              href={diit("/mou")}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-1 flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-lift md:p-8"
            >
              <span className="self-start rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                {c.tag}
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-ink">{c.title}</h3>
              <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-muted-foreground">{c.description}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                {t("readMore")} <Arrow className="size-3.5" />
              </span>
            </motion.a>
          ))}
        </Stagger>
      </div>

      <Reveal className="mt-20">
        <p className="container-site text-center text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Partner universities & institutions
        </p>
        <div className="mt-8 overflow-hidden mask-fade-x">
          <div className="marquee-track" style={{ ["--marquee-duration" as string]: "60s" }}>
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={k === 1}>
                {partners.map((p) => (
                  <div
                    key={p.name}
                    title={p.name}
                    className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl border border-border bg-card px-5"
                  >
                    <img
                      src={cld(p.logo, 300)}
                      alt={k === 0 ? p.name : ""}
                      loading="lazy"
                      className="max-h-12 w-auto max-w-full object-contain grayscale transition duration-500 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
