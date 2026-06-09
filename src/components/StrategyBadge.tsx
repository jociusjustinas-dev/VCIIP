import { useEffect, useState } from "react";

export function StrategyBadge({ active = false }: { active?: boolean }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (active) {
      setVisible(true);
      return;
    }

    const updateVisibility = () => {
      const hero = document.getElementById("investuotojui");
      if (!hero) {
        setVisible(window.scrollY < window.innerHeight * 0.75);
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom;
      setVisible(heroBottom > 96);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [active]);

  return (
    <a
      href={active ? "/" : "/strategija"}
      className={`fixed bottom-0 right-8 z-[996] flex items-center gap-2 rounded-t-2xl border border-primary/14 bg-white/88 px-5 py-3 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary shadow-[0_18px_54px_color-mix(in_srgb,var(--color-primary)_14%,transparent)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-accent hover:bg-accent hover:text-white max-[767px]:right-4 max-[767px]:px-4 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-label={active ? "Grįžti į pradžią" : "Atidaryti strategijos puslapį"}
      aria-hidden={!visible}
    >
      <span className="size-2 rounded-full bg-accent" />
      {active ? "Pradžia" : "Strategija"}
    </a>
  );
}
