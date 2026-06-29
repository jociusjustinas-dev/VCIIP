import ecosystemTechImage from "../assets/images/ecosystem-tech.jpg";

import { HubSplitHero } from "./HubSplitHero";

export function TechHero() {
  return (
    <HubSplitHero
      id="apie"
      eyebrow="VCIIP TECH"
      title={
        <>
          Technologijos
          <span className="block">ir pažangi gamyba</span>
          <span className="block">Liepkalnyje.</span>
        </>
      }
      description="Pirmasis ir vienintelis parkas Vilniuje, skirtas aukštos pridėtinės vertės inovacijoms. Paruošta infrastruktūra, valstybės parama ir operatoriaus pagalba viso proceso metu."
      primaryCta={{ label: "Susisiekti", href: "#investuotojo-uzklausa" }}
      secondaryCta={{ label: "Žiūrėti sklypus", href: "#sklypai" }}
      media={{ type: "image", src: ecosystemTechImage, alt: "" }}
    />
  );
}
