import { vciipPartners } from "../../content/partners";
import { PartnersSection } from "../PartnersSection";

export function ApieVciipPartners() {
  const { eyebrow, title, partners } = vciipPartners;

  return <PartnersSection eyebrow={eyebrow} title={title} partners={partners} />;
}
