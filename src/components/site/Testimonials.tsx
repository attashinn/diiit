import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/content";
import { cld } from "@/data/site";
import { useLang } from "@/data/i18n";
import { cn } from "@/lib/utils";
import { EASE, Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

function Card({ item }: { item: (typeof testimonials)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 md:p-8">
      <Quote strokeWidth={1.5} className="size-7 text-primary" />
      <p className={cn("mt-5 text-[16.5px] leading-[1.65] text-ink", !open && "line-clamp-4")}>“{item.quote}”</p>
      <button
        onClick={() => setOpen((o) => !o)}
        className="mt-3 self-start text-sm font-semibold text-primary hover:underline"
      >
        {open ? "Show less" : "Read more"}
      </button>
      <div className="mt-auto flex items-center gap-4 border-t border-border pt-6">
        <img
          src={cld(item.image, 200)}
          alt={item.name}
          loading="lazy"
          className="size-14 shrink-0 rounded-full object-cover object-top"
        />
        <div className="min-w-0">
          <p className="truncate font-bold tracking-tight text-ink">{item.name}</p>
          <p className="truncate text-[13px] text-muted-foreground">{item.program}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { t } = useLang();
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(2);
  const pages = Math.ceil(testimonials.length / perPage);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const set = () => setPerPage(mq.matches ? 2 : 1);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  useEffect(() => {
    if (page >= pages) setPage(0);
  }, [page, pages]);

  const visible = testimonials.slice(page * perPage, page * perPage + perPage);
  const go = (d: number) => setPage((p) => (p + d + pages) % pages);

  return (
    <section className="container-site py-24 md:py-32">
      <SectionHeading
        center
        title={t("studentsSay")}
        subtitle="Graduates now working in AI, finance, digital marketing — and some who came back to teach."
      />
      <Reveal delay={0.1} className="mt-12">
        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${page}-${perPage}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="grid gap-5 md:grid-cols-2"
            >
              {visible.map((it) => (
                <Card key={it.name} item={it} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonials"
            className="grid size-11 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowLeft strokeWidth={1.75} className="size-4" />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === page ? "w-8 bg-primary" : "w-1.5 bg-border-strong",
                )}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonials"
            className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            <ArrowRight strokeWidth={1.75} className="size-4" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
