import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import {
  ADMISSIONS_META,
  ADMISSIONS_HERO,
  ADMISSIONS_STEPS,
  ADMISSIONS_STEPS_SECTION,
  ADMISSIONS_TUITION,
  ADMISSIONS_SCHOLARSHIPS,
  ADMISSIONS_FAQS,
  ADMISSIONS_FAQ_SECTION,
} from "@/constants/content";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: ADMISSIONS_META.title },
      { name: "description", content: ADMISSIONS_META.description },
      { property: "og:title", content: ADMISSIONS_META.ogTitle },
      { property: "og:description", content: ADMISSIONS_META.ogDescription },
    ],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  useReveal("admissions");

  return (
    <>
      <PageHero
        eyebrow={ADMISSIONS_HERO.eyebrow}
        title={ADMISSIONS_HERO.title}
        subtitle={ADMISSIONS_HERO.subtitle}
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to={ADMISSIONS_HERO.ctaPrimary.to}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            {ADMISSIONS_HERO.ctaPrimary.label} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to={ADMISSIONS_HERO.ctaSecondary.to}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary"
          >
            {ADMISSIONS_HERO.ctaSecondary.label}
          </Link>
        </div>
      </PageHero>

      {/* Steps — cool tinted band */}
      <div className="bg-tint-cool">
        <Section
          eyebrow={ADMISSIONS_STEPS_SECTION.eyebrow}
          title={ADMISSIONS_STEPS_SECTION.title}
          intro={ADMISSIONS_STEPS_SECTION.intro}
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {ADMISSIONS_STEPS.map((s, i) => (
              <div
                key={s.title}
                className="reveal relative rounded-3xl border border-border bg-surface p-6"
              >
                <span className="font-display text-sm text-secondary">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Tuition / Scholarships */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="reveal rounded-3xl border border-border bg-surface p-8 md:p-10">
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              {ADMISSIONS_TUITION.pill}
            </span>
            <h3 className="mt-4 text-2xl text-ink md:text-3xl">{ADMISSIONS_TUITION.title}</h3>
            <p className="mt-3 text-muted-foreground">{ADMISSIONS_TUITION.body}</p>
            <ul className="mt-6 space-y-3 text-sm">
              {ADMISSIONS_TUITION.rows.map((label) => (
                <li
                  key={label}
                  className="flex items-center justify-between border-t border-border pt-3"
                >
                  <span>{label}</span>
                  <span className="text-muted-foreground">{ADMISSIONS_TUITION.rowValue}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal rounded-3xl bg-foreground p-8 text-background md:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-background/20 px-3 py-1 text-xs font-medium">
              {ADMISSIONS_SCHOLARSHIPS.pill}
            </span>
            <h3 className="mt-4 text-2xl md:text-3xl">{ADMISSIONS_SCHOLARSHIPS.title}</h3>
            <p className="mt-3 text-background/80">{ADMISSIONS_SCHOLARSHIPS.body}</p>
            <Link
              to={ADMISSIONS_SCHOLARSHIPS.cta.to}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground"
            >
              {ADMISSIONS_SCHOLARSHIPS.cta.label} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow={ADMISSIONS_FAQ_SECTION.eyebrow} title={ADMISSIONS_FAQ_SECTION.title}>
        <div className="grid gap-4 md:grid-cols-2">
          {ADMISSIONS_FAQS.map((f) => (
            <details
              key={f.q}
              className="reveal group rounded-3xl border border-border bg-surface p-6 open:ring-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-base font-medium text-ink">{f.q}</span>
                <span className="grid h-7 w-7 place-items-center rounded-full border border-border text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
