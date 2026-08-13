import { useLayoutEffect, useRef, useState } from "react";

type ReservedAccordionHeightOptions = {
  minWidth?: number;
  itemGap?: number;
};

/**
 * Reserves the accordion list height for the tallest open panel on desktop,
 * so toggling items does not resize the adjacent image column.
 */
export function useReservedAccordionHeight(
  itemCount: number,
  { minWidth = 992, itemGap = 0 }: ReservedAccordionHeightOptions = {},
) {
  const headerRefs = useRef<(HTMLElement | null)[]>([]);
  const bodyRefs = useRef<(HTMLElement | null)[]>([]);
  const [minHeight, setMinHeight] = useState<number>();

  useLayoutEffect(() => {
    let frame = 0;
    let cancelled = false;

    const measure = () => {
      if (cancelled) return;

      if (window.innerWidth < minWidth) {
        setMinHeight(undefined);
        return;
      }

      const headersHeight = headerRefs.current
        .slice(0, itemCount)
        .reduce((sum, element) => sum + (element?.offsetHeight ?? 0), 0);
      const maxBodyHeight = Math.max(
        0,
        ...bodyRefs.current.slice(0, itemCount).map((element) => element?.scrollHeight ?? 0),
      );
      const gaps = Math.max(0, itemCount - 1) * itemGap;
      const next = Math.ceil(headersHeight + maxBodyHeight + gaps);

      if (next > 0) {
        setMinHeight((current) => (current === next ? current : next));
      }
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("resize", schedule);
    void document.fonts?.ready.then(schedule);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", schedule);
    };
  }, [itemCount, itemGap, minWidth]);

  return { headerRefs, bodyRefs, minHeight };
}
