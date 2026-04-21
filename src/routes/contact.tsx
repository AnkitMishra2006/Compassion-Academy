import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { useReveal } from "@/hooks/useReveal";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import {
  CONTACT_META,
  CONTACT_HERO,
  CONTACT_FORM,
  CONTACT_INFO,
  CONTACT_BOOK_CARD,
} from "@/constants/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: CONTACT_META.title },
      { name: "description", content: CONTACT_META.description },
      { property: "og:title", content: CONTACT_META.ogTitle },
      { property: "og:description", content: CONTACT_META.ogDescription },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal("contact");
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success(CONTACT_FORM.toastSuccess);
    }, 700);
  };

  return (
    <>
      <PageHero
        eyebrow={CONTACT_HERO.eyebrow}
        title={CONTACT_HERO.title}
        subtitle={CONTACT_HERO.subtitle}
      />

      <Section className="!pt-4">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="reveal md:col-span-7 rounded-[2rem] border border-border bg-surface p-6 md:p-10"
          >
            <h2 className="text-2xl text-ink md:text-3xl">{CONTACT_FORM.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{CONTACT_FORM.subtitle}</p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Field
                label={CONTACT_FORM.fields.name.label}
                name="name"
                placeholder={CONTACT_FORM.fields.name.placeholder}
                required
              />
              <Field
                label={CONTACT_FORM.fields.email.label}
                name="email"
                type="email"
                placeholder={CONTACT_FORM.fields.email.placeholder}
                required
              />
              <Field
                label={CONTACT_FORM.fields.phone.label}
                name="phone"
                type="tel"
                placeholder={CONTACT_FORM.fields.phone.placeholder}
              />
              <Field
                label={CONTACT_FORM.fields.grade.label}
                name="grade"
                placeholder={CONTACT_FORM.fields.grade.placeholder}
              />
            </div>
            <div className="mt-5">
              <label className="text-sm font-medium text-ink">
                {CONTACT_FORM.fields.message.label}
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder={CONTACT_FORM.fields.message.placeholder}
                className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:-translate-y-0.5 disabled:opacity-60"
            >
              {sending ? CONTACT_FORM.submitting : CONTACT_FORM.submit}{" "}
              <Send className="h-4 w-4" />
            </button>
          </form>

          {/* Info */}
          <aside className="md:col-span-5 space-y-4">
            {CONTACT_INFO.map((item) => (
              <div
                key={item.label}
                className="reveal flex items-start gap-4 rounded-3xl border border-border bg-surface p-5"
              >
                <div className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-accent text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </p>
                  {"href" in item && item.href ? (
                    <a href={item.href} className="mt-1 block text-base text-ink hover:text-primary">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base text-ink">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div
              className="reveal overflow-hidden rounded-3xl p-6"
              style={{
                background: "linear-gradient(135deg, oklch(0.95 0.04 220), oklch(0.94 0.06 80))",
              }}
            >
              <p className="text-sm font-medium text-ink">{CONTACT_BOOK_CARD.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{CONTACT_BOOK_CARD.body}</p>
              <a
                href={CONTACT_BOOK_CARD.href}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background"
              >
                {CONTACT_BOOK_CARD.cta}
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
