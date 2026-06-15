import { useEffect } from "react";

import { scrollToHash } from "../utils/scrollToSection";

export function HashScroll({ pathname }: { pathname: string }) {
  useEffect(() => {
    const run = () => {
      if (!window.location.hash) return;

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          scrollToHash(window.location.hash);
        });
      });
    };

    run();
    window.addEventListener("hashchange", run);

    return () => window.removeEventListener("hashchange", run);
  }, [pathname]);

  return null;
}
