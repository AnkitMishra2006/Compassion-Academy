import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import {
  ABOUT_META,
  ABOUT_HERO,
  ABOUT_STORY,
  ABOUT_PILLARS,
  ABOUT_PILLARS_SECTION,
  ABOUT_STATS,
  ABOUT_CTA,
} from "@/constants/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: ABOUT_META.title },
      { name: "description", content: ABOUT_META.description },
      { property: "og:title", content: ABOUT_META.ogTitle },
      { property: "og:description", content: ABOUT_META.ogDescription },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal("about");

  return (
    <>
      <PageHero
        eyebrow={ABOUT_HERO.eyebrow}
        title={ABOUT_HERO.title}
        subtitle={ABOUT_HERO.subtitle}
      />

      {/* Story */}
      <Section>
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="reveal md:col-span-5">
            <div className="overflow-hidden rounded-[2rem] ring-soft">
              <img
                src={ABOUT_STORY.image.src}
                alt={ABOUT_STORY.image.alt}
                loading="lazy"
                width={1400}
                height={1000}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <span className="reveal pill">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              {ABOUT_STORY.pill}
            </span>
            <h2 className="reveal mt-4 text-balance text-3xl text-ink md:text-5xl">
              {ABOUT_STORY.title}
            </h2>
            <div className="mt-6 space-y-5 text-pretty text-muted-foreground md:text-lg">
              {ABOUT_STORY.paragraphs.map((p, i) => (
                <p key={i} className="reveal">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Pillars — tinted band */}
      <div className="bg-tint-sky">
        <Section
          eyebrow={ABOUT_PILLARS_SECTION.eyebrow}
          title={ABOUT_PILLARS_SECTION.title}
          intro={ABOUT_PILLARS_SECTION.intro}
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_PILLARS.map((p) => (
              <div
                key={p.title}
                className="reveal rounded-3xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:ring-soft"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Stats banner */}
      <Section>
        <div
          className="reveal relative overflow-hidden rounded-[2rem] p-10 md:p-16"
          style={{
            background: "linear-gradient(135deg, oklch(0.95 0.04 220), oklch(0.92 0.05 80))",
          }}
        >
          <div className="grid gap-8 md:grid-cols-4">
            {ABOUT_STATS.map(([k, v]) => (
              <div key={v}>
                <p className="font-display text-4xl text-ink md:text-5xl">{k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="!pt-0">
        <div className="reveal flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-surface p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-xl">
            <h3 className="text-balance text-2xl text-ink md:text-3xl">{ABOUT_CTA.title}</h3>
            <p className="mt-2 text-muted-foreground">{ABOUT_CTA.body}</p>
          </div>
          <Link
            to={ABOUT_CTA.cta.to}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
          >
            {ABOUT_CTA.cta.label} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
