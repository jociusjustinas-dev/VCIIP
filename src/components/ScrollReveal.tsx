import { useEffect } from "react";

const REVEAL_SELECTOR = ".reveal-item";

export function ScrollReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));

    if (!items.length) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    items.forEach((item) => {
      const explicitDelay = item.dataset.revealDelay;
      const group = item.closest("[data-reveal-group]");
      const groupItems = group
        ? Array.from(group.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
            (element) => element.closest("[data-reveal-group]") === group,
          )
        : [];
      const index = groupItems.indexOf(item);
      const delay = explicitDelay ?? (index > -1 ? `${index * 110}ms` : "0ms");

      item.style.setProperty("--reveal-delay", delay);
    });

    if (prefersReducedMotion) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    items.forEach((item) => {
      const isHeroItem = item.closest("#investuotojui") || item.closest("#ekosistema-hero");

      if (isHeroItem) {
        item.classList.add("is-visible");
        return;
      }

      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
