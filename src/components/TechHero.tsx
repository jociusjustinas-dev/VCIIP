import ecosystemTechImage from "../assets/images/ecosystem-tech.jpg";
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
      media={{ type: "image", src: ecosystemTechImage, alt: "VCIIP Tech teritorija" }}
    />
  );
}
