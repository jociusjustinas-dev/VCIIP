import techHeroImage from "../assets/images/tech-hero.jpg";
import { techHero } from "../content/tech";
import { HubSplitHero } from "./HubSplitHero";

export function TechHero() {
  return (
    <HubSplitHero
      id="apie"
      eyebrow={techHero.eyebrow}
      title={techHero.title}
      description={techHero.description}
      primaryCta={techHero.primaryCta}
      secondaryCta={techHero.secondaryCta}
      media={{ type: "image", src: techHeroImage, alt: "VCIIP Tech teritorija prie oro uosto" }}
    />
  );
}
