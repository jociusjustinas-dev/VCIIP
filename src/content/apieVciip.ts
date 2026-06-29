import bioLogo from "../assets/logos/bio.svg";
import techLogo from "../assets/logos/tech.svg";
import goVilniusLogo from "../assets/logos/partners/go-vilnius.png";
import investLithuaniaLogo from "../assets/logos/partners/invest-lithuania.svg";
import lifeSciencesLithuaniaLogo from "../assets/logos/partners/life-sciences-lithuania.png";
import vilniausUniversitetasLogo from "../assets/logos/partners/vilniaus-universitetas.png";
import vilniusTechLogo from "../assets/logos/partners/vilnius-tech.png";

export const apieVciipHero = {
  eyebrow: "Apie VCIIP",
  title: "Kuriame aplinką pažangioms investicijoms Vilniuje.",
  description:
    "VCIIP – Vilniaus miesto inovacijų ir pramonės parkas, vystantis specializuotas teritorijas gyvybės mokslams, technologijoms ir pažangiai gamybai. Mūsų tikslas – padėti organizacijoms augti suteikiant tinkamą infrastruktūrą, partnerystes ir operatoriaus pagalbą.",
  primaryCta: { label: "Susisiekti", href: "/kontaktai" },
  secondaryCta: { label: "Peržiūrėti VCIIP Tech", href: "/tech" },
};

export const apieVciipTerritories = {
  eyebrow: "Kas yra VCIIP",
  title: "Dvi teritorijos. Viena ekosistema.",
  intro:
    "VCIIP jungia dvi specializuotas teritorijas, kurios papildo viena kitą ir kuria vientisą inovacijų ekosistemą.",
  cards: [
    {
      href: "/ekosistema",
      logo: bioLogo,
      logoAlt: "VCIIP BIO",
      subtitle: "VCIIP BIO",
      text: "Veikianti gyvybės mokslų ir inovacijų ekosistema Vismaliukuose.",
      cta: "Plačiau apie BIO",
    },
    {
      href: "/tech",
      logo: techLogo,
      logoAlt: "VCIIP TECH",
      subtitle: "VCIIP TECH",
      text: "Nauja plėtros teritorija Liepkalnyje pažangiai gamybai ir technologijoms.",
      cta: "Plačiau apie TECH",
    },
  ],
};

export const apieVciipTimeline = {
  eyebrow: "Istorija",
  title: "Svarbiausi VCIIP vystymo etapai.",
  items: [
    {
      year: "2015",
      label: "Valstybei svarbus ekonomikos projektas",
    },
    {
      year: "2018",
      label: "Pradeda veikti VCIIP BIO",
    },
    {
      year: "2024",
      label: "30+ organizacijų ekosistema",
    },
    {
      year: "2027+",
      label: "VCIIP TECH plėtra",
    },
  ],
};

export const apieVciipStats = {
  eyebrow: "VCIIP šiandien",
  title: "Rezultatai, kurie kuria pasitikėjimą.",
  items: [
    { value: "200 mln. €", label: "pritraukta investicijų" },
    { value: "30+", label: "organizacijų ekosistemoje" },
    { value: "2 teritorijos", label: "BIO ir TECH" },
    { value: "Nuo 2018", label: "veikiantis inovacijų parkas" },
  ],
};

export const apieVciipProcess = {
  id: "kaip-dirbame",
  eyebrow: "Kaip dirbame",
  title: "Padedame investuotojams kiekviename žingsnyje.",
  intro:
    "Aiškus kelias nuo pirmo kontakto iki veiklos pradžios. Operatorius lydi kiekviename žingsnyje.",
  steps: [
    {
      number: "01",
      title: "Poreikių įvertinimas",
      body: "Aptariame jūsų veiklos planą, investicijų apimtį ir poreikius infrastruktūrai.",
    },
    {
      number: "02",
      title: "Sprendimo parinkimas",
      body: "Pristatome BIO ir TECH teritorijas, sklypus, patalpas ir galimus sprendimus.",
    },
    {
      number: "03",
      title: "Planavimas",
      body: "Kartu suderiname projekto planą su infrastruktūros, miesto ir valstybės reikalavimais.",
    },
    {
      number: "04",
      title: "Įsikūrimas ir augimas",
      body: "Lydime statybų, įsikūrimo ir plėtros etapus, teikdami nuolatinį operatoriaus palaikymą.",
    },
  ],
  cta: { label: "Susisiekti", href: "/kontaktai" },
};

export const apieVciipPartners = {
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
  ],
};

export const apieVciipOperator = {
  eyebrow: "Operatorius",
  title: "Patikimas partneris viso proceso metu.",
  description:
    "VCIIP operatorius – pirmasis kontaktas investuotojams ir organizacijoms, ieškantiems vietos augimui Vilniuje. Padeda įvertinti poreikius, suderina sprendimus su teritorijų galimybėmis ir lydi visą įsikūrimo kelią.",
  name: "Direktoriaus vardas pavardė",
  role: "Direktorius",
  email: "el.paštas@vciip.lt",
  phone: "+370 XXX XXXXX",
  cta: { label: "Plačiau apie operatorių", href: "/kontaktai" },
};

export const apieVciipCta = {
  eyebrow: "Pradėkime pokalbį",
  title: "Papasakokite apie savo planus.",
  description:
    "Padėsime įvertinti jūsų poreikius ir pasiūlysime tinkamiausią sprendimą VCIIP teritorijoje.",
};
