import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, BookOpen, CalendarRange, Landmark, UserRound } from "lucide-react";
import { getProgram, programs } from "@/data/programs";
import { cld, site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/site/icons";
import { Arrow, EASE, Reveal, Stagger, staggerItem } from "@/components/site/motion";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = getProgram(params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.program;
    if (!p) return { meta: [{ title: "Program not found — DIIT" }, { name: "robots", content: "noindex" }] };
    const img = cld(p.image, 1200);
    return {
      meta: [
        { title: `${p.title} — Daffodil Institute of IT` },
        { name: "description", content: p.description.slice(0, 155) },
        { property: "og:title", content: `${p.title} at DIIT` },
        { property: "og:description", content: p.description.slice(0, 155) },
        { property: "og:type", content: "website" },
        { property: "og:image", content: img },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: img },
      ],
    };
  },
  component: ProgramPage,
});

function ProgramPage() {
  const { program: p } = Route.useLoaderData();
  const others = programs.filter((o) => o.slug !== p.slug && o.level === p.level).slice(0, 3);
  const facts = [
    { label: "Affiliation", value: "National University", Icon: Landmark },
    { label: "Duration", value: p.semesters, Icon: CalendarRange },
    { label: "Credits", value: p.credits, Icon: BookOpen },
    { label: "Program head", value: p.head.name, Icon: UserRound },
  ];

  return (
    <>
      <section className="container-site pt-6">
        <Link to="/" hash="programs" className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary">
          <ArrowLeft strokeWidth={1.75} className="size-4 transition-transform group-hover:-translate-x-1" /> All programs
        </Link>
        <div className="relative mt-5 overflow-hidden rounded-3xl bg-ink md:rounded-4xl">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: EASE }}
            src={cld(p.image, 2000)}
            alt={p.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 overlay-hero" />
          <div className="relative flex min-h-[420px] flex-col justify-end p-6 sm:p-10 md:min-h-[480px] md:p-14">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
              className="inline-flex items-center gap-2 self-start rounded-full border border-on-image/25 px-3 py-1.5 text-xs font-semibold text-on-image"
            >
              <Icon name={p.icon} className="size-3.5" /> {p.level}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.3 }}
              className="mt-5 max-w-3xl text-[clamp(2rem,4.4vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.035em] text-on-image"
            >
              {p.title}
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="container-site grid gap-12 py-20 md:py-24 lg:grid-cols-[minmax(0,1fr)_380px]">
        <Reveal>
          <h2 className="text-section text-ink">About the program.</h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.7] text-muted-foreground">{p.description}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="brand" size="xl">
              <a href={site.applyUrl} target="_blank" rel="noreferrer">
                Apply Now <Arrow />
              </a>
            </Button>
            <Button asChild variant="quiet" size="xl">
              <a href={site.prospectusUrl} target="_blank" rel="noreferrer">
                Download Prospectus
              </a>
            </Button>
          </div>
        </Reveal>
        <Stagger className="divide-y divide-border rounded-2xl border border-border bg-card">
          {facts.map(({ label, value, Icon: I }) => (
            <motion.div key={label} variants={staggerItem} className="flex items-center gap-4 p-5">
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                <I strokeWidth={1.5} className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-muted-foreground">{label}</p>
                <p className="truncate font-semibold text-ink">{value}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </section>

      {others.length > 0 && (
        <section className="container-site pb-24 md:pb-32">
          <div className="h-px bg-border" />
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-ink">More {p.level.toLowerCase()} programs</h2>
          <Stagger className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((o) => (
              <motion.div key={o.slug} variants={staggerItem}>
                <Link
                  to="/programs/$slug"
                  params={{ slug: o.slug }}
                  className="group flex h-full flex-col gap-6 rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-lift"
                >
                  <div className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary">
                    <Icon name={o.icon} className="size-6" />
                  </div>
                  <p className="font-bold leading-snug tracking-tight text-ink">{o.title}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    View program <Arrow className="size-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </Stagger>
        </section>
      )}
    </>
  );
}
