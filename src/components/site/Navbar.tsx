import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/diit-logo.png";
import { programs } from "@/data/programs";
import { diit, site } from "@/data/site";
import { useLang, type DictKey } from "@/data/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Arrow, EASE } from "./motion";

type NavLinkItem = { label: string; href: string; external?: boolean };
type NavGroup = { key: DictKey; href?: string; items?: NavLinkItem[]; programs?: boolean };

const nav: NavGroup[] = [
  { key: "home", href: "/" },
  {
    key: "admissions",
    items: [
      { label: "Admission Overview", href: diit("/admission/online"), external: true },
      { label: "How to Apply", href: diit("/admission/online"), external: true },
      { label: "Tuition Fees", href: diit("/admission/fees"), external: true },
      { label: "Scholarships", href: diit("/admission/scholarships"), external: true },
      { label: "Brochure", href: diit("/brochure"), external: true },
    ],
  },
  {
    key: "academics",
    items: [
      { label: "Faculty Members", href: diit("/faculty"), external: true },
      { label: "Academic Calendar", href: diit("/academics/calendar"), external: true },
      { label: "Campus Facilities", href: diit("/campus/facilities"), external: true },
      { label: "Campus Activities", href: diit("/campus-activities"), external: true },
    ],
  },
  { key: "programs", programs: true },
  {
    key: "media",
    items: [
      { label: "Notice Board", href: "/#notices" },
      { label: "News & Events", href: "/#news" },
      { label: "Video Gallery", href: "/#watch" },
    ],
  },
  {
    key: "about",
    items: [
      { label: "About DIIT", href: "/#about" },
      { label: "MoUs & Partners", href: "/#partnerships" },
      { label: "Alumni", href: diit("/alumni"), external: true },
    ],
  },
];

function Announcement() {
  const { t, lang, setLang } = useLang();
  const text = t("announcement");
  return (
    <div className="relative z-50 bg-ink text-on-image">
      <div className="flex h-10 items-center">
        <div className="relative min-w-0 flex-1 overflow-hidden mask-fade-x">
          <div className="marquee-track" style={{ ["--marquee-duration" as string]: "38s" }}>
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
                {[0, 1, 2].map((i) => (
                  <span key={i} className="flex items-center gap-6 pr-6 text-[13px] font-medium tracking-tight text-on-image-muted">
                    <span className="size-1.5 rounded-full bg-brand-green" />
                    {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1 border-l border-on-image/15 px-3 text-xs font-semibold">
          {(["en", "bn"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={cn(
                "rounded-md px-2 py-1 transition-colors",
                lang === l ? "bg-on-image text-ink" : "text-on-image-muted hover:text-on-image",
              )}
              aria-pressed={lang === l}
            >
              {l === "en" ? "EN" : "বাংলা"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ItemLink({ item, className, onClick }: { item: NavLinkItem; className?: string; onClick?: () => void }) {
  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noreferrer" : undefined}
      className={className}
      onClick={onClick}
    >
      {item.label}
    </a>
  );
}

function Dropdown({ group }: { group: NavGroup }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-[14.5px] font-medium text-ink transition-colors hover:text-primary"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {t(group.key)}
        <ChevronDown strokeWidth={1.75} className={cn("size-4 transition-transform duration-300", open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
          >
            {group.programs ? (
              <div className="grid w-[560px] grid-cols-2 gap-1 rounded-2xl border border-border bg-popover p-2 shadow-lift">
                {programs.map((p) => (
                  <Link
                    key={p.slug}
                    to="/programs/$slug"
                    params={{ slug: p.slug }}
                    className="group rounded-xl px-3 py-2.5 transition-colors hover:bg-surface"
                  >
                    <div className="text-[13.5px] font-semibold text-ink group-hover:text-primary">{p.short}</div>
                    <div className="text-xs text-muted-foreground">{p.level}</div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="w-60 rounded-2xl border border-border bg-popover p-2 shadow-lift">
                {group.items?.map((it) => (
                  <ItemLink
                    key={it.label}
                    item={it}
                    className="block rounded-xl px-3 py-2.5 text-[14px] font-medium text-ink transition-colors hover:bg-surface hover:text-primary"
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const { t } = useLang();
  const [openKey, setOpenKey] = useState<string | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="fixed inset-0 z-[60] overflow-y-auto bg-background lg:hidden"
    >
      <div className="container-site flex h-[72px] items-center justify-between">
        <img src={logo} alt="DIIT" className="h-9 w-auto" />
        <button onClick={onClose} className="grid size-10 place-items-center rounded-full border border-border" aria-label="Close menu">
          <X strokeWidth={1.75} className="size-5" />
        </button>
      </div>
      <div className="container-site pb-10">
        {nav.map((g, i) => (
          <motion.div
            key={g.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.05 + i * 0.04 }}
            className="border-b border-border"
          >
            {g.href ? (
              <Link to="/" onClick={onClose} className="block py-4 text-2xl font-semibold tracking-tight">
                {t(g.key)}
              </Link>
            ) : (
              <>
                <button
                  className="flex w-full items-center justify-between py-4 text-2xl font-semibold tracking-tight"
                  onClick={() => setOpenKey(openKey === g.key ? null : g.key)}
                >
                  {t(g.key)}
                  <Plus strokeWidth={1.5} className={cn("size-5 transition-transform", openKey === g.key && "rotate-45")} />
                </button>
                <AnimatePresence initial={false}>
                  {openKey === g.key && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col pb-4">
                        {g.programs
                          ? programs.map((p) => (
                              <Link
                                key={p.slug}
                                to="/programs/$slug"
                                params={{ slug: p.slug }}
                                onClick={onClose}
                                className="py-2 text-[15px] text-muted-foreground"
                              >
                                {p.short}
                              </Link>
                            ))
                          : g.items?.map((it) => (
                              <ItemLink key={it.label} item={it} onClick={onClose} className="py-2 text-[15px] text-muted-foreground" />
                            ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </motion.div>
        ))}
        <Button asChild variant="brand" size="xl" className="mt-8 w-full">
          <a href={site.applyUrl} target="_blank" rel="noreferrer">
            {t("apply")} <Arrow />
          </a>
        </Button>
      </div>
    </motion.div>
  );
}

export function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  return (
    <>
      <Announcement />
      <header
        className={cn(
          "sticky top-0 z-40 bg-background/95 backdrop-blur-md transition-shadow duration-500",
          scrolled ? "shadow-nav" : "shadow-none",
        )}
      >
        <div className="container-site grid h-[72px] grid-cols-[auto_1fr_auto] items-center gap-4">
          <Link to="/" className="flex shrink-0 items-center" aria-label="DIIT home">
            <img src={logo} alt="Daffodil Institute of IT" className="h-9 w-auto md:h-10" />
          </Link>
          <nav className="hidden items-center justify-center lg:flex" aria-label="Main">
            {nav.map((g) =>
              g.href ? (
                <Link key={g.key} to="/" className="rounded-lg px-3 py-2 text-[14.5px] font-medium text-ink transition-colors hover:text-primary">
                  {t(g.key)}
                </Link>
              ) : (
                <Dropdown key={g.key} group={g} />
              ),
            )}
          </nav>
          <div className="flex items-center justify-end gap-2">
            <a href="/#contact" className="hidden px-3 text-[14.5px] font-medium text-ink transition-colors hover:text-primary md:block">
              {t("contact")}
            </a>
            <Button asChild variant="brand" size="pill" className="hidden sm:inline-flex">
              <a href={site.applyUrl} target="_blank" rel="noreferrer">
                {t("apply")} <Arrow />
              </a>
            </Button>
            <button
              onClick={() => setMobile(true)}
              className="grid size-10 place-items-center rounded-full border border-border lg:hidden"
              aria-label="Open menu"
            >
              <Menu strokeWidth={1.75} className="size-5" />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>{mobile && <MobileMenu onClose={() => setMobile(false)} />}</AnimatePresence>
    </>
  );
}
