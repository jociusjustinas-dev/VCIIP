import { ArrowDown, ArrowUpRight } from "lucide-react";

export function isSamePageAnchor(href: string) {
  return href.startsWith("#");
}

export function CtaArrow({
  href,
  size = 16,
  className,
}: {
  href: string;
  size?: number;
  className?: string;
}) {
  const Icon = isSamePageAnchor(href) ? ArrowDown : ArrowUpRight;
  return <Icon size={size} aria-hidden="true" className={className} />;
}
