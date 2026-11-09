import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal, WordReveal } from "./motion";

export function SectionHeading({
  title,
  subtitle,
  action,
  center,
  className,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("min-w-0", center ? "max-w-2xl" : "max-w-xl")}>
        <WordReveal text={title} className="text-section text-ink" />
        {subtitle && (
          <Reveal delay={0.15}>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">{subtitle}</p>
          </Reveal>
        )}
      </div>
      {action && (
        <Reveal delay={0.2} className="shrink-0">
          {action}
        </Reveal>
      )}
    </div>
  );
}

export function Divider() {
  return (
    <div className="container-site">
      <div className="h-px w-full bg-border" />
    </div>
  );
}
