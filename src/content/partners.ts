import goVilniusLogo from "../assets/logos/partners/go-vilnius.png";
import innovationAgencyLogo from "../assets/logos/partners/innovation-agency.svg";
import investLithuaniaLogo from "../assets/logos/partners/invest-lithuania.svg";
import lithuaniaBioLogo from "../assets/logos/partners/lithuaniabio.png";
import vilniausUniversitetasLogo from "../assets/logos/partners/vilniaus-universitetas.png";
import vilniusLogo from "../assets/logos/partners/vilnius.svg";
import vilniusTechLogo from "../assets/logos/partners/vilnius-tech.png";

export type PartnerLogo = {
  label: string;
  href: string;
  logo: string;
  logoAlt: string;
};

/** Excel Apie VCIIP partnerių logotipai */
export const vciipPartners = {
  eyebrow: "Partneriai",
  title: "Partneriai, su kuriais plėtojame inovacijų ekosistemą Vilniuje",
  partners: [
    {
      label: "Vilniaus miesto savivaldybė",
      href: "https://vilnius.lt/",
      logo: vilniusLogo,
      logoAlt: "Vilniaus miesto savivaldybė",
    },
    {
      label: "Invest Lithuania",
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
      label: "Vilnius Tech",
      href: "https://vilniustech.lt/",
      logo: vilniusTechLogo,
      logoAlt: "Vilnius Tech",
    },
    {
      label: "Innovation Agency",
      href: "https://www.inovacijuagentura.lt/",
      logo: innovationAgencyLogo,
      logoAlt: "Innovation Agency Lithuania",
    },
    {
      label: "LithuaniaBio",
      href: "https://lithuaniabio.com/",
      logo: lithuaniaBioLogo,
      logoAlt: "LithuaniaBIO",
    },
  ] satisfies PartnerLogo[],
} as const;
