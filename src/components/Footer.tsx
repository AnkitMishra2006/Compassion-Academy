import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { FOOTER, SITE } from "@/constants/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-surface">
      {/* soft color accents so the footer doesn't read as flat white */}
      <div className="blob blob-blue -left-32 -top-24 h-72 w-72" aria-hidden />
      <div className="blob blob-amber -right-24 bottom-0 h-72 w-72" aria-hidden />

      <div className="container-x relative py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {FOOTER.blurb}
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER.exploreLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href={SITE.phoneHref} className="hover:text-primary">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {FOOTER.legalLinks.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-primary">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
