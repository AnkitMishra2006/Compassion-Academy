import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Animate every `.reveal` element in the page on scroll.
 * Re-runs whenever the dependency key changes (e.g. on route mount).
 */
export function useReveal(key?: unknown) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>(".reveal");
      els.forEach((el) => {
        if (reduce) {
          gsap.set(el, { opacity: 1, y: 0 });
          return;
        }
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      });
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [key]);
}
