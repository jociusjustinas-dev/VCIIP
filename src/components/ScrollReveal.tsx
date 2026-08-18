import { useEffect } from "react";

const REVEAL_SELECTOR = ".reveal-item";

/** Full-bleed heroes with bottom-aligned CTAs — reveal on load, not via IO. */
const HERO_REVEAL_ROOTS = [
  "#titulinis",
  "#apie-vciip",
  "#apie-vciip-tech",
  ".hub-split-hero",
];

function isHeroItem(item: HTMLElement) {
  return HERO_REVEAL_ROOTS.some((selector) => item.closest(selector));
}

function isInViewport(item: HTMLElement) {
  const rect = item.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return rect.bottom > 0 && rect.top < vh + 80;
}

export function ScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const prepared = new WeakSet<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "80px 0px 80px 0px",
        threshold: 0.01,
      },
    );

    const prepareItem = (item: HTMLElement) => {
      if (item.classList.contains("is-visible")) {
        observer.unobserve(item);
        return;
      }

      if (!prepared.has(item)) {
        prepared.add(item);

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
      }

      if (prefersReducedMotion || isHeroItem(item) || isInViewport(item)) {
        item.classList.add("is-visible");
        observer.unobserve(item);
        return;
      }

      observer.observe(item);
    };

    const scan = () => {
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach(prepareItem);
    };

    scan();

    const mutationObserver = new MutationObserver(scan);
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", scan, { passive: true });
    window.addEventListener("resize", scan);

    const bindLenis = () => {
      window.lenis?.on("scroll", scan);
    };
    bindLenis();
    const lenisWait = window.setInterval(() => {
      if (!window.lenis) return;
      bindLenis();
      window.clearInterval(lenisWait);
    }, 50);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.clearInterval(lenisWait);
      window.removeEventListener("scroll", scan);
      window.removeEventListener("resize", scan);
      window.lenis?.off("scroll", scan);
    };
  }, []);

  return null;
}
