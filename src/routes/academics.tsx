import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import {
  ACADEMICS_META,
  ACADEMICS_HERO,
  ACADEMICS_PROGRAMS,
  ACADEMICS_CTA,
} from "@/constants/content";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: ACADEMICS_META.title },
      { name: "description", content: ACADEMICS_META.description },
      { property: "og:title", content: ACADEMICS_META.ogTitle },
      { property: "og:description", content: ACADEMICS_META.ogDescription },
    ],
  }),
  component: AcademicsPage,
});

function AcademicsPage() {
  useReveal("academics");

  return (
    <>
      <PageHero
        eyebrow={ACADEMICS_HERO.eyebrow}
        title={ACADEMICS_HERO.title}
        subtitle={ACADEMICS_HERO.subtitle}
      />

      <Section>
        <div className="space-y-16 md:space-y-24">
          {ACADEMICS_PROGRAMS.map((p, i) => (
            <article
              key={p.title}
              className={`grid items-center gap-10 md:grid-cols-12 md:gap-14 ${
                i % 2 === 1 ? "md:[&>:first-child]:order-2" : ""
              }`}
            >
              <div className="reveal md:col-span-6">
                <div className="overflow-hidden rounded-[2rem] ring-soft">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={1200}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <span className="reveal pill">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  {p.age}
                </span>
                <h2 className="reveal mt-4 text-balance text-3xl text-ink md:text-5xl">
                  {p.title}
                </h2>
                <p className="reveal mt-4 text-pretty text-muted-foreground md:text-lg">
                  {p.desc}
                </p>
                <ul className="reveal mt-6 grid gap-3 sm:grid-cols-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div
          className="reveal flex flex-col items-start justify-between gap-6 rounded-[2rem] p-8 md:flex-row md:items-center md:p-12"
          style={{
            background: "linear-gradient(135deg, oklch(0.95 0.04 220), oklch(0.94 0.06 80))",
          }}
        >
          <div className="max-w-xl">
            <h3 className="text-balance text-2xl text-ink md:text-3xl">
              {ACADEMICS_CTA.title}
            </h3>
            <p className="mt-2 text-muted-foreground">{ACADEMICS_CTA.body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to={ACADEMICS_CTA.primary.to}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
            >
              {ACADEMICS_CTA.primary.label} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to={ACADEMICS_CTA.secondary.to}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary"
            >
              {ACADEMICS_CTA.secondary.label}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
