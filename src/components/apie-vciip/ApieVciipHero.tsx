import apieHeroImage from "../../assets/images/apie-hero.jpg";
import { apieVciipHero } from "../../content/apieVciip";
import { HubSplitHero } from "../HubSplitHero";

export function ApieVciipHero() {
  return (
    <HubSplitHero
      id="apie-vciip"
      eyebrow={apieVciipHero.eyebrow}
      title={apieVciipHero.title}
      description={apieVciipHero.description}
      primaryCta={apieVciipHero.primaryCta}
      media={{ type: "image", src: apieHeroImage, alt: "VCIIP Bio ir Tech teritorijos miško ir miesto apsuptyje" }}
    />
  );
}
