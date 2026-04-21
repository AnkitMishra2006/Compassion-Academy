import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import {
  LIFE_HERO,
  LIFE_FEATURES,
  LIFE_FEATURES_SECTION,
  LIFE_EVENTS,
  LIFE_EVENTS_SECTION,
  LIFE_SUPPORTS,
  LIFE_SUPPORTS_SECTION,
} from "@/constants/content";

export const Route = createFileRoute("/student-life")({
  component: StudentLifePage,
});

function StudentLifePage() {
  useReveal("life");

  return (
    <>
      <PageHero
        eyebrow={LIFE_HERO.eyebrow}
        title={LIFE_HERO.title}
        subtitle={LIFE_HERO.subtitle}
      />

      <Section
        eyebrow={LIFE_FEATURES_SECTION.eyebrow}
        title={LIFE_FEATURES_SECTION.title}
        intro={LIFE_FEATURES_SECTION.intro}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {LIFE_FEATURES.map((f) => (
            <article
              key={f.title}
              className="reveal group overflow-hidden rounded-3xl border border-border bg-surface transition-all hover:-translate-y-1 hover:ring-soft"
            >
              <div className="overflow-hidden">
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                  {f.tag}
                </span>
                <h3 className="mt-2 text-2xl text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Events — warm tinted band */}
      <div className="bg-tint-warm">
        <Section
          eyebrow={LIFE_EVENTS_SECTION.eyebrow}
          title={LIFE_EVENTS_SECTION.title}
          intro={LIFE_EVENTS_SECTION.intro}
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LIFE_EVENTS.map((e, i) => (
              <div
                key={e.title}
                className="reveal rounded-3xl border border-border bg-surface p-6"
              >
                <p className="font-display text-3xl text-primary/80">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg text-ink">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section
        eyebrow={LIFE_SUPPORTS_SECTION.eyebrow}
        title={LIFE_SUPPORTS_SECTION.title}
        intro={LIFE_SUPPORTS_SECTION.intro}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {LIFE_SUPPORTS.map((s) => (
            <div key={s.title} className="reveal rounded-3xl border border-border bg-surface p-6">
              <h3 className="text-lg text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
