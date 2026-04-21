import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  intro,
  children,
  id,
  className = "",
  align = "left",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
  id?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || intro) && (
          <div
            className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
          >
            {eyebrow && (
              <span className="reveal pill">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="reveal mt-4 text-balance text-3xl text-ink md:text-5xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="reveal mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                {intro}
              </p>
            )}
          </div>
        )}
        {children && <div className="mt-10 md:mt-14">{children}</div>}
      </div>
    </section>
  );
}
