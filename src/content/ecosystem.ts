import ecosystemBioImage from "../assets/images/ecosystem-bio.jpeg";
import modernOfficeImage from "../assets/images/modern-office-work.png";
import vciipOverviewImage from "../assets/images/vciip-overview.jpg";

export const bioTabsContent = {
  id: "bio-aplinka",
  eyebrow: "VCIIP BIO",
  titleHighlight: "Gyvybės mokslams",
  titleRest: "pritaikyta aplinka.",
  intro:
    "VCIIP BIO vystoma organizacijoms, kurioms svarbi infrastruktūra, bendradarbiavimo ekosistema ir ilgalaikės augimo galimybės.",
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
