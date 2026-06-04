import { useEffect, useRef, useState } from "react";

type ParallaxImageProps = {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  loading?: "eager" | "lazy";
  strength?: number;
};

export function ParallaxImage({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  loading = "lazy",
  strength = 56,
}: ParallaxImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let frameId = 0;

    const update = () => {
      const element = wrapperRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const progress = (elementCenter - viewportCenter) / (window.innerHeight + rect.height);

      setOffset(progress * strength * -1);
      frameId = 0;
    };

    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [strength]);

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`absolute inset-0 h-[116%] w-full object-cover will-change-transform ${imgClassName}`}
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.04)` }}
      />
    </div>
  );
}
