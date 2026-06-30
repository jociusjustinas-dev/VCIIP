import vciipOverviewImage from "../../assets/images/vciip-overview.jpg";
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
      secondaryCta={apieVciipHero.secondaryCta}
      media={{ type: "image", src: vciipOverviewImage, alt: "VCIIP teritorija" }}
    />
  );
}
