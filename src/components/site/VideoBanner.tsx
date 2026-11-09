import { motion, useScroll, useTransform } from "motion/react";
import { Play, X } from "lucide-react";
import { useRef, useState } from "react";
import { videos } from "@/data/content";
import { cld, images } from "@/data/site";
import { useLang } from "@/data/i18n";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal, WordReveal } from "./motion";

export function VideoBanner() {
  const { t } = useLang();
  const [active, setActive] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const current = videos.find((v) => v.id === active);

  return (
    <section id="watch" className="container-site scroll-mt-24">
      <Reveal>
        <div ref={ref} className="relative overflow-hidden rounded-3xl bg-ink md:rounded-4xl">
          <motion.img
            style={{ y }}
            src={cld(images.classroom, 2000)}
            alt="Students attending a hospitality seminar at DIIT"
            className="absolute inset-0 h-[120%] w-full -translate-y-[10%] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 overlay-hero" />
          <div className="relative flex min-h-[520px] flex-col justify-end gap-10 p-6 sm:p-10 md:min-h-[600px] md:p-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <WordReveal text={t("watchTitle")} className="max-w-[14ch] text-display text-on-image" />
              <Button variant="brand" size="xl" className="mt-8" onClick={() => setActive(videos[0]?.id ?? null)}>
                <span className="grid size-6 place-items-center rounded-full bg-primary-foreground text-primary">
                  <Play className="size-3 translate-x-[1px] fill-current" />
                </span>
                {t("watchNow")}
              </Button>
            </div>
            <div className="grid w-full max-w-md grid-cols-3 gap-3">
              {videos.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActive(v.id)}
                  className="group text-left"
                  aria-label={`Play: ${v.title}`}
                >
                  <div className="relative aspect-video overflow-hidden rounded-xl ring-1 ring-on-image/20">
                    <img
                      src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="grid size-8 place-items-center rounded-full bg-background/90 text-ink transition-transform duration-500 group-hover:scale-110">
                        <Play className="size-3 translate-x-[1px] fill-current" />
                      </span>
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-1 text-xs font-medium text-on-image-muted">{v.caption}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl gap-0 overflow-hidden border-0 bg-ink p-0 [&>button]:hidden">
          <DialogTitle className="sr-only">{current?.title ?? "DIIT video"}</DialogTitle>
          <div className="aspect-video w-full">
            {active && (
              <iframe
                src={`https://www.youtube.com/embed/${active}?autoplay=1&rel=0`}
                title={current?.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            )}
          </div>
          <div className="flex items-center gap-3 p-3">
            <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto">
              {videos.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActive(v.id)}
                  className={cn(
                    "shrink-0 rounded-lg px-3 py-2 text-left text-xs font-medium transition-colors",
                    v.id === active ? "bg-on-image text-ink" : "text-on-image-muted hover:text-on-image",
                  )}
                >
                  {v.caption}
                </button>
              ))}
            </div>
            <button
              onClick={() => setActive(null)}
              aria-label="Close video"
              className="grid size-9 shrink-0 place-items-center rounded-full text-on-image-muted hover:text-on-image"
            >
              <X strokeWidth={1.75} className="size-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
