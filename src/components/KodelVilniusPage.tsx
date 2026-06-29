import { FeatureTabsSection } from "./FeatureTabsSection";
import { KodelVilniusAdvantages } from "./kodel-vilnius/KodelVilniusAdvantages";
import { KodelVilniusCityLocation } from "./kodel-vilnius/KodelVilniusCityLocation";
import { KodelVilniusCta } from "./kodel-vilnius/KodelVilniusCta";
import { KodelVilniusHero } from "./kodel-vilnius/KodelVilniusHero";
import { KodelVilniusPartners } from "./kodel-vilnius/KodelVilniusPartners";
import { kodelVilniusTabs } from "../content/kodelVilnius";

export function KodelVilniusPage() {
  return (
    <main className="bg-white">
      <KodelVilniusHero />
      <KodelVilniusAdvantages />
      <FeatureTabsSection {...kodelVilniusTabs} showEyebrowRule={false} />
      <KodelVilniusCityLocation />
      <KodelVilniusPartners />
      <KodelVilniusCta />
    </main>
  );
}
