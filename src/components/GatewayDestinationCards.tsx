import { ArrowUpRight } from "lucide-react";

import { gatewayDestinations } from "../content/gatewayDestinations";

export function GatewayDestinationCards({
  className = "",
  reveal = true,
}: {
  className?: string;
  reveal?: boolean;
}) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${className}`.trim()}>
      {gatewayDestinations.map((destination, index) => (
        <a
          key={destination.href}
          href={destination.href}
          {...(reveal
            ? {
                "data-reveal": "scale" as const,
                "data-reveal-delay": `${index * 110}ms`,
              }
            : {})}
          className="reveal-item group flex min-h-[248px] flex-col justify-between gap-5 overflow-hidden rounded-none border border-primary/12 bg-white p-6 text-primary shadow-[0_18px_48px_color-mix(in_srgb,var(--color-primary)_18%,transparent)] transition duration-300 hover:border-primary/24 hover:shadow-[0_22px_56px_color-mix(in_srgb,var(--color-primary)_22%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white max-[479px]:min-h-[220px] max-[479px]:p-5"
        >
          <div className="flex flex-col gap-3">
            <div className="inline-flex w-fit">
              <img
                src={destination.logo}
                alt={destination.logoAlt}
                className="h-6 w-auto max-w-[10.5rem] object-contain object-left max-[479px]:h-[1.375rem]"
              />
            </div>
            <p className="m-0 font-display text-sm font-bold uppercase leading-tight tracking-wide text-primary/62">
              {destination.subtitle}
            </p>
            <p className="m-0 text-base font-medium leading-[150%] text-muted">{destination.text}</p>
          </div>

          <span className="inline-flex items-center gap-2 text-sm font-semibold leading-none text-primary transition group-hover:text-accent group-focus-visible:text-accent">
            {destination.cta}
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </a>
      ))}
    </div>
  );
}
