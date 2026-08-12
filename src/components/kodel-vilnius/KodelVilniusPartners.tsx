import { kodelVilniusPartners } from "../../content/kodelVilnius";
import { PartnersSection } from "../PartnersSection";

export function KodelVilniusPartners() {
  const { eyebrow, title, intro, partners } = kodelVilniusPartners;

  return <PartnersSection eyebrow={eyebrow} title={title} intro={intro} partners={partners} />;
}
