import bioLogo from "../assets/logos/bio.svg";
import techLogo from "../assets/logos/tech.svg";

export const gatewayDestinations = [
  {
    href: "/ekosistema",
    logo: bioLogo,
    logoAlt: "VCIIP BIO",
    subtitle: "Gyvybės mokslai ir inovacijos",
    text: "Veikianti ekosistema Vismaliukuose, skirta gyvybės mokslų, tyrimų ir inovacijų organizacijoms.",
    cta: "Plačiau apie BIO",
  },
  {
    href: "/tech",
    logo: techLogo,
    logoAlt: "VCIIP TECH",
    subtitle: "Technologijos ir pažangi gamyba",
    text: "Nauja plėtros teritorija Liepkalnyje, skirta pažangiai gamybai, technologijoms ir investicijoms.",
    cta: "Plačiau apie TECH",
  },
] as const;
