import ecosystemBioImage from "../assets/images/ecosystem-bio.jpeg";
import { bioHero } from "../content/bio";
import { HubSplitHero } from "./HubSplitHero";

export function EcosystemHero() {
  return (
    <HubSplitHero
      id="apie"
      eyebrow={bioHero.eyebrow}
      title={bioHero.title}
      description={bioHero.description}
      primaryCta={bioHero.primaryCta}
      secondaryCta={bioHero.secondaryCta}
      media={{ type: "image", src: ecosystemBioImage, alt: "VCIIP Bio teritorija" }}
    />
  );
}
