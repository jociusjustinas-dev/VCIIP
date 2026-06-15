import vciipOverviewImage from "../assets/images/vciip-overview.jpg";
import { FeatureAccordionSection } from "./FeatureAccordionSection";

const investorReasons = [
  {
    title: "Paruošta infrastruktūra",
    body: "Aukšta elektros galia, vandens ir dujų pajėgumai, išvedžiotos gatvės. Specializuota infrastruktūra, kurios dažniausiai trūksta kitur, čia yra arba tikslingai plėtojama.",
  },
  {
    title: "Atrinkta ekosistema",
    body: "Operatorius atrenka aukštos pridėtinės vertės įmones. Įsikuriate tarp savo srities lyderių, kur visi orientuoti į tos pačios industrijos augimą.",
  },
  {
    title: "Operatoriaus pagalba",
    body: "Operatorius lydi nuo paraiškos iki pastato: konsultacijos, mentorystė ir pagalba derinant sprendimus su miestu bei valstybe.",
  },
];

export function WhyInvestors() {
  return (
    <FeatureAccordionSection
      id="apie-vciip"
      eyebrow="Kodėl VCIIP"
      titleHighlight="Kodėl investuotojai"
      titleRest="renkasi VCIIP"
      intro="Inovatyviam verslui dažniausiai trūksta ne idėjų, o tinkamos vietos joms įgyvendinti. VCIIP sprendžia tris pagrindines kliūtis."
      items={investorReasons}
      imageSrc={vciipOverviewImage}
    />
  );
}
