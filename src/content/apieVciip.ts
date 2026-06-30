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
      year: "2020",
      label: "Pirmosios gyvybės mokslų laboratorijos",
    },
    {
      year: "2022",
      label: "Pradėta TECH teritorijos planavimo programa",
    },
    {
      year: "2024",
      label: "30+ organizacijų ekosistema",
    },
    {
      year: "2027+",
      label: "VCIIP TECH plėtra",
    },
    {
      year: "2030",
      label: "Nauja infrastruktūra Liepkalnyje",
    },
    {
      year: "2032",
      label: "Integruota BIO ir TECH ekosistema",
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
  title: "VCIIP vysto VšĮ „Northtown Vilnius“",
  description:
    "VšĮ „Northtown Vilnius“ yra Vilniaus miesto inovacijų pramonės parko operatorius. Organizacija koordinuoja teritorijos vystymą, bendradarbiauja su miesto ir valstybės institucijomis bei padeda investuotojams planuoti ir įgyvendinti įsikūrimo projektus.",
  highlights: [
    "Investuotojų konsultavimas",
    "Teritorijos vystymo koordinavimas",
    "Partnerystės su viešuoju sektoriumi",
  ],
  cta: { label: "Plačiau apie įsikūrimo procesą", href: "/tech#kaip-isikurti" },
  logoAlt: "VšĮ Northtown Vilnius",
};

export const apieVciipCta = {
  eyebrow: "Pradėkime pokalbį",
  title: "Pasikalbėkime apie jūsų planus Vilniuje.",
  description:
    "Padėsime įvertinti jūsų poreikius ir pasiūlysime tinkamiausią sprendimą VCIIP teritorijoje.",
};
