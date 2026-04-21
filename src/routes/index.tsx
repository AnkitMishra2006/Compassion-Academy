import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Star, Quote } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { Section } from "@/components/Section";
import {
  HOME_HERO,
  HERO_STATS,
  HOME_VALUES,
  HOME_VALUES_SECTION,
  HOME_PROGRAMS,
  HOME_PROGRAMS_SECTION,
  HOME_MISSION,
  HOME_TESTIMONIALS,
  HOME_TESTIMONIALS_SECTION,
  HOME_CTA,
} from "@/constants/content";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  useReveal("home");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
        <div className="blob blob-red -top-32 right-[-10%] h-[420px] w-[420px]" aria-hidden />
        <div className="blob blob-blue -bottom-40 left-[-10%] h-[480px] w-[480px]" aria-hidden />

        <div className="container-x relative pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <span className="reveal pill">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                {HOME_HERO.pill}
              </span>
              <h1 className="reveal mt-5 text-balance text-[2.5rem] leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                {HOME_HERO.titleStart}{" "}
                <span className="italic text-primary">{HOME_HERO.titleAccent}</span>{" "}
                {HOME_HERO.titleEnd}
              </h1>
              <p className="reveal mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                {HOME_HERO.subtitle}
              </p>

              <div className="reveal mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to={HOME_HERO.ctaPrimary.to}
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  {HOME_HERO.ctaPrimary.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to={HOME_HERO.ctaSecondary.to}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {HOME_HERO.ctaSecondary.label}
                </Link>
              </div>

              <dl className="reveal mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-6">
                {HERO_STATS.map(([k, v]) => (
                  <div key={v}>
                    <dt className="font-display text-2xl text-ink md:text-3xl">{k}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground md:text-sm">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="reveal lg:col-span-5">
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] ring-soft">
                  <img
                    src={HOME_HERO.image.src}
                    alt={HOME_HERO.image.alt}
                    width={1600}
                    height={1200}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-surface p-4 ring-soft sm:block">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="mt-2 max-w-[180px] text-xs text-muted-foreground">
                    {HOME_HERO.badge}
                  </p>
                </div>
                <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-primary p-4 text-primary-foreground ring-soft md:block">
                  <Sparkles className="h-5 w-5" />
                  <p className="mt-2 max-w-[140px] text-xs leading-snug">
                    {HOME_HERO.floatNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES — tinted sky band */}
      <div className="bg-tint-sky">
        <Section
          eyebrow={HOME_VALUES_SECTION.eyebrow}
          title={HOME_VALUES_SECTION.title}
          intro={HOME_VALUES_SECTION.intro}
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_VALUES.map((v) => (
              <div
                key={v.title}
                className="reveal group rounded-3xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:ring-soft"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* PROGRAMS */}
      <Section
        eyebrow={HOME_PROGRAMS_SECTION.eyebrow}
        title={HOME_PROGRAMS_SECTION.title}
        intro={HOME_PROGRAMS_SECTION.intro}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {HOME_PROGRAMS.map((p) => (
            <article
              key={p.title}
              className="reveal group overflow-hidden rounded-3xl border border-border bg-surface transition-all hover:-translate-y-1 hover:ring-soft"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={1200}
                  className="aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-secondary">
                  {p.age}
                </p>
                <h3 className="mt-2 text-2xl text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <Link
                  to="/academics"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* MISSION SPLIT */}
      <Section className="!py-0">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-surface ring-soft">
          <div className="grid items-stretch md:grid-cols-2">
            <div className="reveal relative min-h-[320px] md:min-h-[480px]">
              <img
                src={HOME_MISSION.image.src}
                alt={HOME_MISSION.image.alt}
                loading="lazy"
                width={1400}
                height={1000}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="reveal flex flex-col justify-center p-8 md:p-14">
              <span className="pill">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                {HOME_MISSION.pill}
              </span>
              <h2 className="mt-4 text-balance text-3xl text-ink md:text-4xl">
                {HOME_MISSION.title}
              </h2>
              <p className="mt-4 text-pretty text-muted-foreground">{HOME_MISSION.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to={HOME_MISSION.ctaPrimary.to}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  {HOME_MISSION.ctaPrimary.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to={HOME_MISSION.ctaSecondary.to}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary"
                >
                  {HOME_MISSION.ctaSecondary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS — warm tinted band */}
      <div className="bg-tint-warm">
        <Section
          eyebrow={HOME_TESTIMONIALS_SECTION.eyebrow}
          title={HOME_TESTIMONIALS_SECTION.title}
          intro={HOME_TESTIMONIALS_SECTION.intro}
        >
          <div className="grid gap-5 md:grid-cols-3">
            {HOME_TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="reveal flex flex-col rounded-3xl border border-border bg-surface p-6"
              >
                <Quote className="h-6 w-6 text-secondary" />
                <blockquote className="mt-4 flex-1 text-pretty text-base leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-medium text-ink">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      </div>

      {/* CTA */}
      <Section className="!pb-24">
        <div
          className="reveal relative overflow-hidden rounded-[2rem] p-8 text-center md:p-16"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.58 0.16 240) 0%, oklch(0.50 0.18 245) 100%)",
          }}
        >
          <div
            className="absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-30 blur-3xl"
            style={{ background: "oklch(0.70 0.22 27 / 0.8)" }}
            aria-hidden
          />
          <h2 className="text-balance text-3xl text-primary-foreground md:text-5xl">
            {HOME_CTA.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/85">
            {HOME_CTA.body}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to={HOME_CTA.primary.to}
              className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
            >
              {HOME_CTA.primary.label} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to={HOME_CTA.secondary.to}
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10"
            >
              {HOME_CTA.secondary.label}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
