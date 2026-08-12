import { vciipPartners } from "../../content/partners";
import { apieVciipPartners } from "../../content/apieVciip";
import { PartnersSection } from "../PartnersSection";

export function ApieVciipPartners() {
  return (
    <PartnersSection
      eyebrow={apieVciipPartners.eyebrow}
      title={apieVciipPartners.title}
      partners={vciipPartners.partners}
    />
  );
}
