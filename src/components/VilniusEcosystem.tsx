import modernOfficeImage from "../assets/images/modern-office-work.png";
import vilniusImage from "../assets/images/vilnius.webp";
import vciipOverviewImage from "../assets/images/vciip-overview.jpg";
import { FeatureTabsSection } from "./FeatureTabsSection";

const vilniusTabs = [
  {
    label: "Miestas mieste",
    title: "Miestas mieste",
    intro:
      "VCIIP – ne izoliuota pramoninė zona, o gyva aplinka, kurioje patogu dirbti, mokytis ir ilsėtis.",
    items: [
      "Privati tarptautinė mokykla ir darželis",
      "Restoranai ir maitinimo vietos",
      "Viešosios ir žaliosios erdvės",
      "Technologijų vystymo centras",
      "Konferencijų ir susitikimų erdvės",
      "Tvaraus transporto infrastruktūra",
    ],
    image: modernOfficeImage,
  },
  {
    label: "Kodėl Vilnius",
    title: "Kodėl Vilnius",
    intro:
      "Vilnius – viena patraukliausių vietų Baltijos regione inovatyviam verslui kurtis ir augti.",
    items: [
      "Stiprus talentų rezervas gyvybės mokslų ir technologijų srityse",
      "Patogus susisiekimas ir prieiga prie ES rinkos",
      "Auganti mokslo, verslo ir inovacijų ekosistema",
      "Kompaktiškas, žalias ir tarptautiniam verslui patrauklus miestas",
    ],
    image: vilniusImage,
  },
  {
    label: "Miestas ir valstybė",
    title: "Miestas ir valstybė",
    intro:
      "VCIIP suderintas su miesto ir valstybės plėtros kryptimis, todėl investuotojai čia gauna ne tik infrastruktūrą, bet ir ilgalaikę partnerystę.",
    items: [
      "Valstybei svarbaus ekonomikos projekto statusas",
      "Suderinamumas su Vilniaus miesto ir valstybės plėtros planais",
      "Patikimas operatorius – VšĮ „Northtown Vilnius“",
    ],
    image: vciipOverviewImage,
  },
];

export function VilniusEcosystem() {
  return (
    <FeatureTabsSection
      id="ekosistema-vilniuje"
      eyebrow="VCIIP aplinka"
      titleHighlight="Inovacijų ekosistema,"
      titleRest="integruota į Vilniaus miestą."
      intro="VCIIP vystoma kaip teritorija, kurioje infrastruktūra, paslaugos, miesto ryšiai ir viešojo sektoriaus palaikymas veikia kaip viena sistema."
      tablistLabel="Ekosistema Vilniuje"
      tabs={vilniusTabs}
    />
  );
}
