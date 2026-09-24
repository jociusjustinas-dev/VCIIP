import { ArrowUpRight } from "lucide-react";

import realFdiLogo from "../assets/logos/partners/real-fdi.png";
import { homeContent } from "../content/home";

export function AnnouncementBar() {
  const { award } = homeContent.hero;

  return (
    <a
      href={award.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-primary text-white"
    >
      <span className="site-container flex min-h-10 items-center justify-center gap-3 py-2 text-sm leading-snug max-[639px]:justify-start max-[639px]:text-xs">
        <span className="inline-flex shrink-0 bg-white px-1.5 py-0.5">
          <img src={realFdiLogo} alt="Real FDI" className="h-5 w-auto max-[639px]:h-4" width="102" height="45" />
        </span>
        <span className="min-w-0 text-white/88">
          <strong className="font-semibold text-white">{award.rank}</strong> {award.shortTitle}
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 font-semibold text-accent transition-colors duration-300 group-hover:text-white max-[479px]:hidden">
          {award.cta}
          <ArrowUpRight size={14} aria-hidden="true" />
        </span>
      </span>
    </a>
  );
}
