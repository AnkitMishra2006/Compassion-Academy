import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.85 0.08 220 / 0.7), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="container-x relative pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal pill">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            {eyebrow}
          </span>
          <h1 className="reveal mt-5 text-balance text-4xl text-ink md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="reveal mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="reveal mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
