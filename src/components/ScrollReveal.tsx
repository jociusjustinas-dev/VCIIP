import { useEffect } from "react";

const REVEAL_SELECTOR = ".reveal-item";

function setupRevealItem(
  item: HTMLElement,
  observer: IntersectionObserver,
  prefersReducedMotion: boolean,
) {
  if (item.dataset.revealReady === "true") return;
  item.dataset.revealReady = "true";

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

  if (prefersReducedMotion) {
    item.classList.add("is-visible");
    return;
  }

  const isHeroItem =
    item.closest("#apie") ||
    item.closest("#apie-vciip");

  if (isHeroItem) {
    item.classList.add("is-visible");
    return;
  }

  observer.observe(item);
}

export function ScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

    const scan = () => {
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((item) => {
        setupRevealItem(item, observer, prefersReducedMotion);
      });
    };

    scan();

    const mutationObserver = new MutationObserver(scan);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
