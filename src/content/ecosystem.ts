import ecosystemBioImage from "../assets/images/ecosystem-bio.jpeg";
import ecosystemTechImage from "../assets/images/ecosystem-tech.jpg";
import modernOfficeImage from "../assets/images/modern-office-work.png";
import vciipOverviewImage from "../assets/images/vciip-overview.jpg";

export const bioApieIntro =
  "Nuo 2018 metų Vismaliukuose formuojama gyvybės mokslų ekosistema – čia jau šiandien veikia tyrimų, inovacijų ir verslo organizacijos, kurios kuria aukštos pridėtinės vertės sprendimus Vilniuje.";

export const bioTabsContent = {
  id: "lokacija",
  eyebrow: "VCIIP BIO",
  titleHighlight: "Vismaliukuose",
  titleRest: "susitelkusi ekosistema.",
  intro:
    "VCIIP BIO teritorijoje rodomas Vismaliukų kontekstas, infrastruktūra, partnerystės ir aplinka – vieta, kur gyvybės mokslų organizacijos gali augti ilgalaikėje ekosistemoje.",
  tablistLabel: "VCIIP BIO temos",
  tabs: [
    {
      label: "Infrastruktūra",
      title: "Infrastruktūra gyvybės mokslams",
      intro:
        "VCIIP BIO vystoma organizacijoms, kurioms svarbi inžinerinė infrastruktūra, laboratorijų aplinka ir ilgalaikės plėtros galimybės.",
      items: [
        "Inžinerinė infrastruktūra",
        "Galimybės R&D veikloms",
        "Plėtros potencialas",
        "Integracija į VCIIP ekosistemą",
      ],
      image: ecosystemBioImage,
    },
    {
      label: "Ekosistema",
      title: "Veikianti ekosistema",
      intro:
        "VCIIP BIO teritorijoje jau šiandien veikia gyvybės mokslų, tyrimų ir inovacijų organizacijos.",
      items: [
        "30+ organizacijų",
        "Gyvybės mokslų klasteris",
        "Tyrimų ir inovacijų veiklos",
        "Auganti bendruomenė",
      ],
      image: modernOfficeImage,
    },
    {
      label: "Partnerystės",
      title: "Mokslas ir partnerystės",
      intro:
        "VCIIP BIO vystoma bendradarbiaujant su mokslo, verslo ir viešojo sektoriaus partneriais.",
      items: [
        "Mokslo institucijos",
        "Verslo partnerystės",
        "Tyrimų bendradarbiavimas",
        "Ilgalaikė ekosistemos plėtra",
      ],
      image: vciipOverviewImage,
    },
  ],
};

export const bioGrowthContent = {
  id: "patalpos",
  eyebrow: "Patalpos nuomai",
  titleHighlight: "Galimybės",
  titleRest: "jūsų organizacijai.",
  intro:
    "VCIIP BIO teritorijoje galite rasti patalpas ir plėtros galimybes, pritaikytas gyvybės mokslų, tyrimų ir inovacijų veiklai. Susisiekite – padėsime įvertinti tinkamiausią sprendimą.",
  highlights: [
    "Patalpos ir laboratorijų galimybės",
    "Plėtros potencialas esamoje teritorijoje",
    "Individualus sprendimas pagal veiklos poreikius",
    "Tiesioginis kontaktas su VCIIP operatoriumi",
  ],
  note: "Dalis infrastruktūros ir teritorijos vystoma etapais kartu su VCIIP plėtra.",
  primaryCta: {
    label: "Susisiekti dėl galimybių",
    href: "/kontaktai?interest=bio",
  },
  secondaryCta: {
    label: "Peržiūrėti TECH teritoriją",
    href: "/tech#sklypai",
  },
  imageSrc: ecosystemTechImage,
};
