import { homeContent } from "../content/home";
import { ParkPairCards } from "./ParkPairCards";

/** Parks split with photos — same layout as Home `#parkai`, Excel copy. */
export function EcosystemSplit() {
  const { parks } = homeContent;

  return (
    <ParkPairCards
      id="lokacija"
      title="Du parkai. Viena ekosistema."
      description="VCIIP jungia dvi specializuotas teritorijas – VCIIP Bio Antakalnyje ir VCIIP Tech Liepkalnyje."
      primaryCta={{ label: "Sužinoti daugiau", href: "/apie-vciip" }}
      bio={parks.bio}
      tech={parks.tech}
    />
  );
}
