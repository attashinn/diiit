import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Briefcase,
  CalendarDays,
  Download,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { notices } from "@/data/content";
import { cld, diit, images, site } from "@/data/site";
import { useLang } from "@/data/i18n";
import { Button } from "@/components/ui/button";
import { Arrow, EASE } from "./motion";

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

export function Hero() {
  const { t, lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const title = t("heroTitle");
  const words = title.split(" ");

  return (
    <section className="container-site pt-3 md:pt-5">
      <div
        ref={ref}
        className="relative overflow-hidden rounded-3xl bg-slate-950 shadow-lift md:rounded-4xl"
      >
        {/* Parallax background image */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
        >
          <motion.img
            style={{ y }}
            src={cld(images.hero, 2000)}
            alt="DIIT graduates and academic community"
            className="h-[120%] w-full object-cover object-[50%_25%]"
            fetchPriority="high"
          />
        </motion.div>

        {/* Dual contrast overlay for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[580px] flex-col justify-end p-6 pb-28 sm:p-10 sm:pb-32 md:min-h-[660px] md:p-12 md:pb-36 lg:min-h-[700px] lg:p-14 lg:pb-36">
          {/* Live Admissions Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="mb-4 inline-flex flex-wrap items-center gap-2 sm:mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/70 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md shadow-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {t("admissionsOpen")}
            </span>
            <span className="hidden items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md sm:inline-flex">
              <GraduationCap className="size-3.5 text-emerald-400" />
              {t("nuAffiliated")}
            </span>
          </motion.div>

          {/* Heading */}
          <h1
            key={lang}
            aria-label={title}
            className="max-w-4xl text-display text-white tracking-tight"
          >
            {words.map((w, i) => (
              <span key={`${w}-${i}`} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.35 + i * 0.05 }}
                >
                  {w}
                  {i < words.length - 1 ? "\u00A0" : ""}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subtext and CTAs */}
          <div className="mt-5 grid gap-6 sm:mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.75 }}
              className="max-w-2xl"
            >
              <p className="text-base leading-relaxed text-white/85 sm:text-lg md:text-[19px]">
                {t("heroText")}
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                <Button asChild variant="brand" size="xl" className="shadow-lg shadow-primary/30">
                  <a href={site.applyUrl} target="_blank" rel="noreferrer">
                    {t("apply")} <Arrow />
                  </a>
                </Button>
                <Button
                  asChild
                  size="xl"
                  className="border border-white/25 bg-white/10 text-white font-semibold backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/40"
                >
                  <a href="#programs">
                    {t("explorePrograms")}
                  </a>
                </Button>
                <a
                  href={site.prospectusUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
                >
                  <Download className="size-4" /> {t("prospectus")}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Institutional Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.95 }}
            className="mt-8 grid grid-cols-2 gap-3 border-t border-white/15 pt-5 sm:grid-cols-4 sm:gap-4 md:mt-10"
          >
            <div className="flex items-center gap-3">
              <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-emerald-400 backdrop-blur-sm">
                <Award className="size-4.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">27+ Years</p>
                <p className="text-[11px] text-white/70">Academic Excellence</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-emerald-400 backdrop-blur-sm">
                <GraduationCap className="size-4.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">NU Code 6488</p>
                <p className="text-[11px] text-white/70">Top Affiliated College</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-emerald-400 backdrop-blur-sm">
                <Briefcase className="size-4.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">100% Support</p>
                <p className="text-[11px] text-white/70">Career & Placement</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-emerald-400 backdrop-blur-sm">
                <Sparkles className="size-4.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">5,000+ Alumni</p>
                <p className="text-[11px] text-white/70">Global Tech Leaders</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Notice Strip */}
      <NoticeStrip />
    </section>
  );
}

function NoticeStrip() {
  const { t } = useLang();
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const n = notices[i] ?? notices[0]!;

  const go = useCallback(
    (d: number) => {
      setDir(d);
      setI((p) => (p + d + notices.length) % notices.length);
    },
    []
  );

  // Auto-advance notice every 5.5s unless hovered
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      go(1);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused, go]);

  return (
    <motion.div
      id="notices"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: EASE, delay: 1.05 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative z-20 mx-auto -mt-12 grid max-w-[1100px] scroll-mt-28 grid-cols-1 items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-lift sm:mx-6 md:-mt-16 md:grid-cols-[200px_minmax(0,1fr)_auto] md:gap-8 md:p-6 lg:mx-auto transition-shadow hover:shadow-xl"
    >
      <div>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-brand-red animate-pulse" />
          <p className="text-lg font-bold leading-tight tracking-tight text-ink">{t("noticeTitle")}</p>
        </div>
        <a
          href={diit("/news")}
          target="_blank"
          rel="noreferrer"
          className="group mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
        >
          {t("seeNotices")} <Arrow className="size-3.5" />
        </a>
      </div>

      <div className="relative min-w-0 overflow-hidden md:border-l md:border-border md:pl-8">
        <AnimatePresence mode="popLayout" initial={false} custom={dir}>
          <motion.a
            key={i}
            custom={dir}
            href={diit("/news")}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="group flex min-w-0 items-center gap-4 cursor-pointer"
          >
            <img
              src={cld(n.image, 300)}
              alt=""
              className="h-16 w-24 shrink-0 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <CalendarDays strokeWidth={1.5} className="size-3.5" />
                {fmt(n.date)}
              </div>
              <p className="mt-1 line-clamp-2 text-[15px] font-semibold leading-snug text-ink transition-colors group-hover:text-primary">
                {n.title}
              </p>
            </div>
          </motion.a>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between sm:justify-start gap-3">
        <div className="flex items-center gap-1.5">
          {notices.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDir(idx > i ? 1 : -1);
                setI(idx);
              }}
              aria-label={`Go to notice ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => go(-1)}
            aria-label="Previous notice"
            className="grid size-10 place-items-center rounded-full border border-border text-ink transition-colors hover:border-primary hover:text-primary active:scale-95"
          >
            <ArrowLeft strokeWidth={1.75} className="size-4" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next notice"
            className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary-hover active:scale-95"
          >
            <ArrowRight strokeWidth={1.75} className="size-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
