import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import { AccordionPanel } from "./AccordionPanel";
import { DocumentsDownloadList } from "./DocumentsListSection";

type StepCta = {
  label: string;
  href: string;
};

type AttachmentItem = {
  label: string;
  href: string;
};

type ApplicationStep = {
  number: string;
  title: string;
  body: string;
  cta?: StepCta;
  attachments?: readonly AttachmentItem[];
  submitChannels?: readonly {
    title: string;
    body: string;
    href?: string;
  }[];
};

export function ApplicationGuideSection({
  id,
  eyebrow,
  title,
  description,
  steps,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  steps: readonly ApplicationStep[];
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id={id} className="section-shell bg-primary text-white">
      <div className="site-container">
        <div
          className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16 xl:gap-20"
          data-reveal-group
        >
          <div className="flex flex-col items-start gap-5">
            <p className="eyebrow eyebrow-on-dark reveal-item">{eyebrow}</p>
            <h2 className="section-heading reveal-item max-w-xl text-white">{title}</h2>
            <p className="reveal-item m-0 max-w-md text-base font-normal leading-loose text-white/72">
              {description}
            </p>
          </div>

          <div className="reveal-item min-w-0" data-reveal="fade">
            {steps.map((step, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={step.number}
                className="border-b border-dashed border-white/18 first:border-t"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="group flex w-full items-start gap-5 py-6 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:items-center sm:gap-8"
                >
                  <span className="shrink-0 font-display text-sm font-bold uppercase tracking-wide text-accent">
                    {step.number}
                  </span>
                  <span
                    className={`min-w-0 flex-1 font-display text-xl font-bold leading-tight tracking-tight transition-colors max-[479px]:text-lg ${
                      isOpen ? "text-accent" : "text-white group-hover:text-accent"
                    }`}
                  >
                    {step.title}
                  </span>
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className={`mt-1 shrink-0 text-white/55 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>

                <div className="[overflow-anchor:none]">
                  <AccordionPanel open={isOpen}>
                    <div className="flex flex-col gap-5 pb-8 pl-[calc(0.875rem+1.25rem)] max-[479px]:pl-0 sm:pl-[calc(1.75rem+2rem)]">
                    <p className="m-0 max-w-2xl whitespace-pre-line text-base leading-loose text-white/72">
                      {step.body}
                    </p>

                    {step.attachments ? (
                      <DocumentsDownloadList items={step.attachments} tone="dark" />
                    ) : null}

                    {step.submitChannels ? (
                      <div className="grid gap-4 sm:grid-cols-2">
                        {step.submitChannels.map((channel) => (
                          <div
                            key={channel.title}
                            className="border border-dashed border-white/18 p-5"
                          >
                            <p className="m-0 text-base font-semibold text-white">{channel.title}</p>
                            <p className="m-0 mt-2 text-sm leading-loose text-white/68">{channel.body}</p>
                            {channel.href ? (
                              <a
                                href={channel.href}
                                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-accent"
                              >
                                {channel.href.startsWith("mailto:")
                                  ? channel.href.replace("mailto:", "")
                                  : "Atidaryti"}
                                <ArrowUpRight size={14} aria-hidden="true" />
                              </a>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {step.cta ? (
                      <a
                        href={step.cta.href}
                        className="application-cta__button w-fit"
                        {...(step.cta.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {step.cta.label}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    ) : null}
                    </div>
                  </AccordionPanel>
                </div>
              </article>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
