import vilniusImage from "../../assets/images/vilnius.webp";
import { kodelVilniusHero } from "../../content/kodelVilnius";
import { HubSplitHero } from "../HubSplitHero";

export function KodelVilniusHero() {
  return (
    <HubSplitHero
      eyebrow={kodelVilniusHero.eyebrow}
      title={kodelVilniusHero.title}
      description={kodelVilniusHero.description}
      primaryCta={kodelVilniusHero.primaryCta}
      secondaryCta={kodelVilniusHero.secondaryCta}
      media={{ type: "image", src: vilniusImage, alt: "Vilniaus miesto panorama" }}
    />
  );
}
