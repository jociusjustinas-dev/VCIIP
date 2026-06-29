import { HubSplitHero } from "./HubSplitHero";

const ecosystemHeroVideoSrc =
  "https://cdn.prod.website-files.com/671f57636f0070068c1dc89c%2F6721479b87a477f27f4f5107_Tubes-transcode.mp4";

export function EcosystemHero() {
  return (
    <HubSplitHero
      id="apie-vciip-bio"
      eyebrow="VCIIP BIO"
      title="Gyvybės mokslų ekosistema Vilniuje."
      description="VCIIP BIO teritorijoje jau šiandien veikia gyvybės mokslų, tyrimų ir inovacijų organizacijos, formuojančios vieną stipriausių ekosistemų regione."
      primaryCta={{ label: "Tyrinėti ekosistemą", href: "#ekosistema-turinys" }}
      secondaryCta={{ label: "Susisiekti", href: "#kontaktai" }}
      media={{ type: "video", src: ecosystemHeroVideoSrc }}
    />
  );
}
