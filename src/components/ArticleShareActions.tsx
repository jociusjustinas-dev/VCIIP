import { useState } from "react";
import { Link2 } from "lucide-react";

import { NEWS_INNER_PAGE_PATH } from "../lib/wordpress";
import { FacebookIcon, LinkedinIcon } from "./FooterSocialIcons";

function getShareUrl() {
  if (typeof window !== "undefined") {
    return window.location.href;
  }

  return `https://vciip.vercel.app${NEWS_INNER_PAGE_PATH}`;
}

function ShareIconButton({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: typeof FacebookIcon;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group inline-flex size-10 shrink-0 items-center justify-center rounded-none border border-[#c5c5cb] bg-white text-primary transition-colors duration-150 hover:border-accent hover:bg-accent hover:text-white"
    >
      <Icon className="block size-3" />
    </a>
  );
}

export function ArticleShareActions() {
  const [copied, setCopied] = useState(false);
  const shareUrl = getShareUrl();
  const encodedUrl = encodeURIComponent(shareUrl);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
      <span className="font-display text-sm font-bold uppercase leading-tight tracking-wide text-primary/52">
        Dalintis
      </span>

      <div className="flex flex-wrap items-center gap-2">
        <ShareIconButton
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          label="Dalintis Facebook"
          Icon={FacebookIcon}
        />
        <ShareIconButton
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          label="Dalintis LinkedIn"
          Icon={LinkedinIcon}
        />
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex h-10 items-center gap-2 rounded-none border border-[#c5c5cb] bg-white px-4 text-sm font-semibold leading-none text-primary transition-colors duration-150 hover:border-accent hover:bg-accent hover:text-white"
          aria-live="polite"
        >
          <Link2 size={14} aria-hidden="true" />
          {copied ? "Nukopijuota" : "Kopijuoti nuorodą"}
        </button>
      </div>
    </div>
  );
}
