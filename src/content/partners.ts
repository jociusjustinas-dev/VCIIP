import goVilniusLogo from "../assets/logos/partners/go-vilnius.png";
import investLithuaniaLogo from "../assets/logos/partners/invest-lithuania.svg";
import lifeSciencesLithuaniaLogo from "../assets/logos/partners/life-sciences-lithuania.png";
import startupLithuaniaLogo from "../assets/logos/partners/startup-lithuania.png";
import vilniausUniversitetasLogo from "../assets/logos/partners/vilniaus-universitetas.png";
import vilniusTechLogo from "../assets/logos/partners/vilnius-tech.png";

export type PartnerLogo = {
  label: string;
  href: string;
  logo: string;
  logoAlt: string;
};

/** Excel Apie VCIIP / titulinio partnerių logotipai */
export const vciipPartners = {
  eyebrow: "Partneriai",
  title: "Kartu kuriame stiprią inovacijų ekosistemą.",
  partners: [
    {
      label: "Investuok Lietuvoje",
      href: "https://investlithuania.com/",
      logo: investLithuaniaLogo,
      logoAlt: "Invest Lithuania",
    },
    {
      label: "Go Vilnius",
      href: "https://www.govilnius.lt/",
      logo: goVilniusLogo,
      logoAlt: "Go Vilnius",
    },
    {
      label: "Vilniaus universitetas",
      href: "https://www.vu.lt/",
      logo: vilniausUniversitetasLogo,
      logoAlt: "Vilniaus universitetas",
    },
    {
      label: "VILNIUS TECH",
      href: "https://vilniustech.lt/",
      logo: vilniusTechLogo,
      logoAlt: "VILNIUS TECH",
    },
    {
      label: "Life Sciences Lithuania",
      href: "https://lithuanianlifesciences.com/",
      logo: lifeSciencesLithuaniaLogo,
      logoAlt: "Life Sciences in Lithuania",
    },
    {
      label: "Startup Lithuania",
      href: "https://www.startuplithuania.com/",
      logo: startupLithuaniaLogo,
      logoAlt: "Startup Lithuania",
    },
  ] satisfies PartnerLogo[],
} as const;
